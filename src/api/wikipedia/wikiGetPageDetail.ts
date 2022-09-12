import {
  arrayFormat,
  crossOriginRequest,
  formatJSONParam,
  queryParam,
  wikiAxios,
} from "./wikiBase";

export interface Template {
  ns: number;
  title: string;
}

export interface Page {
  pageid: number;
  ns: number;
  title: string;
  templates?: Template[];
  contentmodel: string;
  pagelanguage: string;
  pagelanguagehtmlcode: string;
  pagelanguagedir: string;
  touched: Date;
  lastrevid: number;
  length: number;
  fullurl: string;
  editurl: string;
  canonicalurl: string;
  extract: string;
}

export interface Pages {
  [key: number]: Page;
}

export interface Query {
  pages: Pages;
}

export interface Response {
  batchcomplete: string;
  query: Query;
}

//Example query: api.php?action=query&format=json&prop=templates%7Cinfo%7Cextracts&pageids=5%7C4335%7C47200019&tltemplates=Template%3AInfobox%20film&inprop=url&exintro=1&explaintext=1&exsectionformat=plain

/**
 * wikiGetPageDetail gets detail data for pageIds
 * @param  {number[]} pageIds
 */
export async function wikiGetPageDetail(pageIds: number[]) {
  const { data } = await wikiAxios.get<Response>("", {
    params: {
      ...queryParam,
      ...formatJSONParam,
      ...crossOriginRequest,
      prop: "templates|info|extracts",
      pageids: arrayFormat(pageIds),
      tltemplates: "Template:Infobox film",
      inprop: "url",
      exintro: 1,
      explaintext: 1,
    },
  });
  return data.query.pages;
}
