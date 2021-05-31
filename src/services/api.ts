import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://finance-example.vercel.app/api'
})