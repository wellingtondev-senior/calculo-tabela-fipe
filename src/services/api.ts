import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import  { CONFIG } from '../config'

const api: AxiosInstance = axios.create({
    baseURL: CONFIG.apiURL,
    timeout: 18000,
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
           
    return config
}, (error: AxiosError) => {
    return Promise.reject(error);
  })

export default api;



