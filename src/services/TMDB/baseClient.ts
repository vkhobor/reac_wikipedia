import axios, { AxiosRequestConfig } from "axios"

export const tmdbAxios = axios.create({ baseURL: "/api" })
