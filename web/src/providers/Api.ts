import axios from 'axios';

const billsBaseURL = 'http://localhost:3333/contas'
const billsToPayaBaseURL = 'http://localhost:3333/contas_a_pagar'

export const Api = axios.get(billsBaseURL);
