export function arrayFormat<T>(array: T[]) {
  return array.join("|")
}

// Common parameters & values used for wiki api
export const queryParam = { action: "query" }
export const formatJSONParam = { format: "json" }
export const crossOriginRequest = { origin: "*" }
export const templateInfoBoxFilm = "Template:Infobox film"

export class WikipediaError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "WikipediaError"
  }
}
