import {
  crossOriginRequest,
  formatJSONParam,
  queryParam,
  wikiAxios,
} from "./wikiBase";

export interface Continue {
  sroffset: number;
  continue: string;
}

export interface Searchinfo {
  totalhits: number;
  suggestion: string;
  suggestionsnippet: string;
}

export interface Search {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: Date;
}

export interface Query {
  searchinfo: Searchinfo;
  search: Search[];
}

export interface Response {
  batchcomplete: string;
  continue: Continue;
  query: Query;
}

// Example query: api.php?action=query&format=json&prop=&list=search&srsearch=Batman%20Begins

/**
 * wikiPageSearch uses search api to find pages
 * related to search parameter
 * @param  {string} search
 */
export async function wikiPageSearch(search: string) {
  return (
    await wikiAxios.get<Response>("", {
      params: {
        ...queryParam,
        ...formatJSONParam,
        ...crossOriginRequest,
        list: "search",
        srsearch: search,
      },
    })
  ).data.query.search;
}
