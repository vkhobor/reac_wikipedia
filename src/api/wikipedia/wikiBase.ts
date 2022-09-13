import axios, { AxiosRequestConfig } from "axios"

const baseWikiUrl = "https://en.wikipedia.org/w/api.php"

const axiosConfig: AxiosRequestConfig = {
  baseURL: baseWikiUrl,
}
export const wikiAxios = axios.create(axiosConfig)

/**
 * Converts an array to the wiki usage in params with `|` separator
 * @param  {T[]} array is an array used in params with axios
 */
export function arrayFormat<T>(array: T[]) {
  return array.join("|")
}

// Common parameters used for wiki api
export const queryParam = { action: "query" }
export const formatJSONParam = { format: "json" }
export const crossOriginRequest = { origin: "*" }
