import { wikiGetPageDetail } from "./wikiGetPageDetail";
import { wikiPageSearch } from "./wikiPageSearch";

interface Film {
  url: string;
  description: string;
  title: string;
}
/**
 * wikiFindFilm attempts to get wikipedia page for film by title
 * internally it checks if page inlcudes the common infobox template
 * @param  {string} title - title of the film
 * @returns Film details
 */
export async function wikiFindFilm(title: string): Promise<Film> {
  const pages = await wikiPageSearch(title);
  const pageIds = pages.map((page) => page.pageid);

  const pagesWithDetails = await wikiGetPageDetail(pageIds);

  const filteredPagesByInfoBox = pages.filter((page) => {
    var { templates } = pagesWithDetails[page.pageid];
    templates = templates || [];
    return templates.some(
      (template) => template.title === "Template:Infobox film"
    );
  });

  if (filteredPagesByInfoBox.length === 0) {
    throw Error("Could not find film on wikipedia.");
  }

  const {
    fullurl,
    extract,
    title: foundTitle,
  } = pagesWithDetails[filteredPagesByInfoBox[0].pageid];

  return {
    description: extract,
    url: fullurl,
    title: foundTitle,
  };
}
