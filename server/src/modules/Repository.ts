import { Bills, PayableBills, ReceivableBills } from './model';
import { PrismaClient } from "@prisma/client";

class Repository {
  private repository = new PrismaClient();

  public async validate(): Promise<number> {
    return this.repository.bills.count();
  }

  public async createBill(data: Bills): Promise<Bills> {
    return this.repository.bills.create({
      data: data
    });
  }

  public async createBillToPay(data: PayableBills): Promise<PayableBills> {
    return this.repository.payableBills.create({
      data: data
    });
  }

  public async createBillToReceive(data: ReceivableBills): Promise<ReceivableBills> {
    return this.repository.receivableBills.create({
      data: data
    });
  }

  public async findBill(limit: number, offset: number): Promise<any> {
    return this.repository.bills.findMany({
      take: limit,
      skip: offset,
      orderBy: {  Referencia: 'asc' }
    })
  }
  public async findBillToPay(limit: number, offset: number): Promise<any> {
    return this.repository.payableBills.findMany({
      take: limit,
      skip: offset,
      orderBy: {  Id_referencia: 'asc' }
    })
  }
}

export default Repository;