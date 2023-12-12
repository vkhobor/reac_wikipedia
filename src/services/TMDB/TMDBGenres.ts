import { tmdbAxios } from "./baseClient"
import GenresResp from "./models/GenresResponse"

const genresCache: { genres?: GenresResp; exp?: Date } = {}

export async function TMDBGetGenresCached(): Promise<GenresResp> {
  if (
    !genresCache.genres ||
    (genresCache.genres && genresCache.exp && genresCache.exp < new Date())
  ) {
    const genres = await tmdbAxios.get<GenresResp>("/genres")
    genresCache.genres = genres.data
    const today = new Date()
    today.setHours(today.getHours() + 2)
    genresCache.exp = today
  }

  return genresCache.genres
}
