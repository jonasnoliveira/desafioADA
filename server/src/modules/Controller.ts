import { Request, Response } from "express";
import Service from "./Service";

class Controller {
  async findBill(req: Request, res: Response): Promise<Response> {
    try {
    const { limit, offset } = req.query;
    const findBills = await Service.findBill(limit, offset);
    return res.status(200).send(findBills);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async findBillToPay(req: Request, res: Response): Promise<Response> {
    try {
    const { limit, offset } = req.query;
    const findBillsToPay = await Service.findBill(limit, offset);
    return res.status(200).send(findBillsToPay);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async findBillToReceive(req: Request, res: Response): Promise<Response> {
    try {
    const { limit, offset } = req.query;
    const findBillToReceive = await Service.findBill(limit, offset);
    return res.status(200).send(findBillToReceive);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}

export default new Controller();