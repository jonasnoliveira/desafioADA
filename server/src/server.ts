import express from "express";
import cors from "cors";
import { config } from "dotenv";
import Controller from "./modules/Controller";

config();

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(cors());
app.get("/contas", Controller.findBill);
app.get("/contas_a_pagar", Controller.findBillToPay);
app.get("/contas_a_receber", Controller.findBillToReceive);

app.listen(port, () => console.log(`Server is running in port: ${port}`));
