import { Request, Response, Router } from "express";
import { Readable } from "stream";
import readLine from "readline";

import { Bills, PayableBills, ReceivableBills } from "./model";

import multer from "multer";
import { recreateDate } from "./server";
import { client } from "./database/client";

const multerConfig = multer();

const router = Router();

router.post(
  "/bill",
  multerConfig.single("file"),
  async (request: Request, response: Response) => {
    const { file } = request;
    const { buffer } = file;

    const ReadableFile = new Readable();
    ReadableFile.push(buffer);
    ReadableFile.push(null);

    const billsLine = readLine.createInterface({
      input: ReadableFile,
    });

    let bills: Bills = null;

    for await (let line of billsLine) {
      const billsSplit = line.split(",");

      // bills.push({
      //   Referencia: Number(billsSplit[0]),
      //   Data: billsSplit[1],
      //   Data_de_check_in: billsSplit[2],
      //   Data_de_check_out: billsSplit[3],
      //   Aluguel_com_imposto: Number(billsSplit[4]),
      //   Aluguel_sem_imposto: Number(billsSplit[5]),
      //   Imposto_do_aluguel: Number(billsSplit[6]),
      //   Extras_com_imposto: Number(billsSplit[7]),
      //   Extras_sem_imposto: Number(billsSplit[8]),
      //   Imposto_dos_extras: Number(billsSplit[9]),
      //   Total_da_reserva_com_imposto: Number(billsSplit[10]),
      //   Total_da_reserva_sem_imposto: Number(billsSplit[11]),
      //   Total_imposto: Number(billsSplit[12]),
      //   Pagamento: Number(billsSplit[13]),
      //   Pendente: Number(billsSplit[14]),
      //   Nome_alojamento: Number(billsSplit[15]),
      //   Localidade: billsSplit[16],
      //   Portal: billsSplit[17],
      //   Comissao_portal_intermediario_comissao_calculada: Number(
      //     billsSplit[18]
      //   ),
      //   Comissao_portal_intermediario_comissao_personalizada: Number(
      //     billsSplit[19]
      //   ),
      // });
      const billl = new Bills();

        (billl.Data = billsSplit[1]),
        (billl.Data_de_check_in = billsSplit[2]),
        (billl.Data_de_check_out = billsSplit[3]),
        (billl.Aluguel_com_imposto = Number(billsSplit[4])),
        (billl.Aluguel_sem_imposto = Number(billsSplit[5])),
        (billl.Imposto_do_aluguel = Number(billsSplit[6])),
        (billl.Extras_com_imposto = Number(billsSplit[7])),
        (billl.Extras_sem_imposto = Number(billsSplit[8])),
        (billl.Imposto_dos_extras = Number(billsSplit[9])),
        (billl.Total_da_reserva_com_imposto = Number(billsSplit[10])),
        (billl.Total_da_reserva_sem_imposto = Number(billsSplit[11])),
        (billl.Total_imposto = Number(billsSplit[12])),
        (billl.Pagamento = Number(billsSplit[13])),
        (billl.Pendente = Number(billsSplit[14])),
        (billl.Nome_alojamento = Number(billsSplit[15])),
        (billl.Localidade = billsSplit[16]),
        (billl.Portal = billsSplit[17]),
        (billl.Comissao_portal_intermediario_comissao_calculada = Number(
          billsSplit[18]
        )),
        (billl.Comissao_portal_intermediario_comissao_personalizada = Number(
          billsSplit[19]
        ));

      // bills.push(billl);

      bills = await client.bills.create({
        data: {
          Data: billl.Data,
          Data_de_check_in: billsSplit[2],
          Data_de_check_out: billsSplit[3],
          Aluguel_com_imposto: Number(billsSplit[4]),
          Aluguel_sem_imposto: Number(billsSplit[5]),
          Imposto_do_aluguel: Number(billsSplit[6]),
          Extras_com_imposto: Number(billsSplit[7]),
          Extras_sem_imposto: Number(billsSplit[8]),
          Imposto_dos_extras: Number(billsSplit[9]),
          Total_da_reserva_com_imposto: Number(billsSplit[10]),
          Total_da_reserva_sem_imposto: Number(billsSplit[11]),
          Total_imposto: Number(billsSplit[12]),
          Pagamento: Number(billsSplit[13]),
          Pendente: Number(billsSplit[14]),
          Nome_alojamento: Number(billsSplit[15]),
          Localidade: billsSplit[16],
          Portal: billsSplit[17],
          Comissao_portal_intermediario_comissao_calculada: Number(
            billsSplit[18]
          ),
          Comissao_portal_intermediario_comissao_personalizada: Number(
            billsSplit[19]
          ),
        },
      });
      console.log(bills);
    }

    console.log(bills);
    return response.json(bills);
  }
);

export { router };
