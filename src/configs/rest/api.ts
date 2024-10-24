import axios, { AxiosRequestConfig } from 'axios';
import { CONSTANT_TAKE_A_GUIDE_API_URL } from '@/core/utils/constants';

export const api = axios.create({
  baseURL: CONSTANT_TAKE_A_GUIDE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
