import axios, { AxiosRequestConfig } from "axios"

const baseWikiUrl = "https://en.wikipedia.org/w/api.php"

const axiosConfig: AxiosRequestConfig = {
  baseURL: baseWikiUrl,
}
export const wikiAxios = axios.create(axiosConfig)
