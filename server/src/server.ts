import express from 'express';
import { config } from 'dotenv';
import Controller from './modules/Controller';

config();
const port = process.env.PORT || 3333

const app = express();
app.use(express.json());
app.post('/contas', Controller.findBill);

app.listen(port, () => console.log(`Server is running in port: ${port}`));