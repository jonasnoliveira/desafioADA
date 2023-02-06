import { Bills, PayableBills, ReceivableBills } from "./model";
import { Readable } from "stream";
import { addDays } from "date-fns";
import Repository from "./Repository";
import readLine from "readline";
import fs from "fs";

class Service {
  private readonly repository: Repository;

  constructor() {
    this.repository = new Repository();
  }

  public async findBill(limit: any, offset: any): Promise<Bills[]> {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;

      const validate = await this.repository.validate();

      if (validate < 1) {
        await this.createBill();
      }
      return this.repository.findBill(limit, offset);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findBillToPay(limit: any, offset: any): Promise<PayableBills[]> {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;

      const validate = await this.repository.validate();

      if (validate < 1) {
        await this.createBill();
      }
      return this.repository.findBillToPay(limit, offset);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findBillToReceive(limit: any, offset: any): Promise<ReceivableBills[]> {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;

      const validate = await this.repository.validate();

      if (validate < 1) {
        await this.createBill();
      }
      return this.repository.findBillToReceive(limit, offset);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async createBill(): Promise<string> {
    try {
      const importCSV = fs.readFileSync("./desafio.csv");
      const readableFile = new Readable();

      readableFile.push(importCSV);
      readableFile.push(null);

      const createBill = readLine.createInterface({
        input: readableFile,
      });

      for await (const line of createBill) {
        let billsSplit = line.split(",");

        const bill = this.createBills(billsSplit);

        if (line.indexOf("Referência")) {
          await this.repository.createBill(bill);

          if (bill.Portal.toLowerCase() === "booking.com") {
            const value =
              bill.Total_da_reserva_sem_imposto -
              bill.Comissao_portal_intermediario_comissao_personalizada;
            const dateToReceive = bill.Data_de_check_out;

            this.createBillToReceive(bill, value, dateToReceive);
            this.createBillToPay(bill);
          }

          if (bill.Portal.toLowerCase() === "airbnb.com") {
            const value =
              bill.Total_da_reserva_sem_imposto -
              bill.Comissao_portal_intermediario_comissao_personalizada;
            const dateToReceive = addDays(bill.Data_de_check_in, 5);

            this.createBillToReceive(bill, value, dateToReceive);
            this.createBillToPay(bill);
          }
        }
        continue;
      }
      return "Constas criadas com sucesso";
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private recreateDate(date: string) {
    date = date.indexOf("/") !== -1 ? date.replaceAll("/", "-") : date;
    const splitDate = date.split("-");
    const formatDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;

    return new Date(formatDate);
  }

  private createBills(parms: string[]) {
    const bill = new Bills();
    bill.Referencia = Number(parms[0]);
    bill.Data = this.recreateDate(parms[1]);
    bill.Data_de_check_in = this.recreateDate(parms[2]);
    bill.Data_de_check_out = this.recreateDate(parms[3]);
    bill.Aluguel_com_imposto = Number(parms[4]);
    bill.Aluguel_sem_imposto = Number(parms[5]);
    bill.Imposto_do_aluguel = Number(parms[6]);
    bill.Extras_com_imposto = Number(parms[7]);
    bill.Extras_sem_imposto = Number(parms[8]);
    bill.Imposto_dos_extras = Number(parms[9]);
    bill.Total_da_reserva_com_imposto = Number(parms[10]);
    bill.Total_da_reserva_sem_imposto = Number(parms[11]);
    bill.Total_imposto = Number(parms[12]);
    bill.Pagamento = Number(parms[13]);
    bill.Pendente = Number(parms[14]);
    bill.Nome_alojamento = Number(parms[15]);
    bill.Localidade = parms[16];
    bill.Portal = parms[17];
    bill.Comissao_portal_intermediario_comissao_calculada = Number(parms[18]);
    bill.Comissao_portal_intermediario_comissao_personalizada = Number(
      parms[19]
    );

    return bill;
  }

  private async createBillToPay(bill: Bills) {
    const value = bill.Extras_sem_imposto;
    const dueDate = this.laterTuesday(bill.Data_de_check_out);

    const payableBills = new PayableBills();
    payableBills.Id_referencia = bill.Referencia;
    payableBills.Valor = value;
    payableBills.Data_vencimento = dueDate;

    return this.repository.createBillToPay(payableBills);
  }

  private async createBillToReceive(
    bill: Bills,
    value: number,
    dateToReceive: Date
  ) {
    const receivableBills = new ReceivableBills();
    receivableBills.Id_referencia = bill.Referencia;
    receivableBills.Valor = value;
    receivableBills.Data_vencimento = dateToReceive;

    return this.repository.createBillToReceive(receivableBills);
  }

  private laterTuesday(date: Date) {
    switch (date.getUTCDay()) {
      case 0:
        return addDays(date, 2);
      case 1:
        return addDays(date, 1);
      case 3:
        return addDays(date, 6);
      case 4:
        return addDays(date, 5);
      case 5:
        return addDays(date, 4);
      case 6:
        return addDays(date, 3);
      default:
        return addDays(date, 7);
    }
  }
}
export default new Service();
