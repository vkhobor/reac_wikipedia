import { wikiGetPageDetailsByIds } from "./wikiGetPageDetailsByIds"
import { wikiSearch } from "./wikiSearch"
import { templateInfoBoxFilm, WikipediaError } from "./utils"

interface Film {
  url: string
  descriptionHtml: string
  title: string
}
/**
 * wikiFindFilm tries to find movie wikipedia page
 * by movie title and optional extraKeywords
 * @param  {string} title title of the movie
 * @param  {string[]} ...extraKeywords keywords like year to specify more
 * @returns Promise<Film>
 */
export async function wikiFindFilm(
  title: string,
  ...extraKeywords: string[]
): Promise<Film> {
  let pages = await wikiFindPagesWithSearch(title, ...extraKeywords)

  pages = filterPages(pages, title)

  if (pages.length === 0) {
    throw new WikipediaError("Not found")
  }

  const firstPage = pages[0]

  return {
    description: firstPage.extract,
    url: firstPage.fullurl,
    title: firstPage.title,
  }
}

/**
 * wikiFindPagesWithSearch searches on wikipedia, and expands
 * result set with details query
 * @param  {string[]} ...keywords
 */
async function wikiFindPagesWithSearch(...keywords: string[]) {
  let pages = await wikiSearch(...keywords)
  const pageIds = pages.map((page) => page.pageid)

  const pagesWithDetailsMap = await wikiGetPageDetailsByIds(pageIds)

  pages = pages.filter((page) => page.pageid in pagesWithDetailsMap)

  return pages.map((page) => {
    const details = pagesWithDetailsMap[page.pageid]
    return {
      ...details,
      // if extract is omitted(sometimes) in response use search query snippet as fallback
      extract: details.extract ?? `${page.snippet}...`,
    }
  })
}

interface Page {
  missing?: string
  pageid: number
  title: string
  templates?: Array<{ ns: number; title: string }>
  extract: string
  fullurl: string
}

function filterPages<P extends Page>(pages: P[], title: string) {
  // Exclude missing
  let pagesResult = pages.filter((page) => page.missing === undefined)

  // Filter by infobox Film
  pagesResult = pagesResult.filter((page) => {
    const { templates } = page
    const templatesOrDefault = templates ?? []
    return templatesOrDefault.some(
      (template) => template.title === templateInfoBoxFilm
    )
  })

  // Filter by title
  pagesResult = pagesResult.filter((page) =>
    page.title.toLowerCase().includes(title.toLowerCase())
  )

  return pagesResult
}
