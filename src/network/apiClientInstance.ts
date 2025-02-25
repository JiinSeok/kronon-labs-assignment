import axios, { AxiosInstance } from 'axios'





const apiAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiAxios
