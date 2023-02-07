import axios from 'axios';

const billsBaseURL = 'http://localhost:3333/contas'
const billsToPayBaseURL = 'http://localhost:3333/contas_a_pagar'

export const Api = axios.get(billsBaseURL);
