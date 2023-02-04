import axios from 'axios';

const baseURL = 'http://localhost:3333/contas'

export const Api = axios.get(baseURL)