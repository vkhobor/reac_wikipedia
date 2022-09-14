import { wikiAxios } from "./config"
import {
  crossOriginRequest as crossOrigin,
  formatJSONParam as formatJSON,
  queryParam as query,
} from "./utils"

export interface Continue {
  sroffset: number
  continue: string
}

export interface Searchinfo {
  totalhits: number
  suggestion: string
  suggestionsnippet: string
}

export interface Search {
  ns: number
  title: string
  pageid: number
  size: number
  wordcount: number
  snippet: string
  timestamp: Date
}

export interface Query {
  searchinfo: Searchinfo
  search: Search[]
}

export interface Response {
  batchcomplete: string
  continue: Continue
  query: Query
}

// Example query: api.php?action=query&format=json&prop=&list=search&srsearch=Batman%20Begins

export async function wikiSearch(...keywords: string[]) {
  return (
    await wikiAxios.get<Response>("", {
      params: {
        ...query,
        ...formatJSON,
        ...crossOrigin,
        list: "search",
        srsearch: keywords.join(" "),
        srlimit: 10,
      },
    })
  ).data.query.search
}
