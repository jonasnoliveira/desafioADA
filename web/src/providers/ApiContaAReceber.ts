import axios from 'axios';

const billsBaseURL = 'http://localhost:3333/contas_a_receber'

export const ApiContaAReceber = axios.get(billsBaseURL);
