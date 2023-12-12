import { tmdbAxios } from "./baseClient"
import Resp from "./models/SearchResponse"
import GenresResp from "./models/GenresResponse"
import { TMDBGetGenresCached } from "./TMDBGenres"

export interface Genre {
  name: string
}

export interface SearchMovie {
  id: string
  name: string
  score: number
  releaseDate: Date
  genres: Genre[]
}

interface Data {
  searchMovies: SearchMovie[]
}

export async function tmdbFilmSearch(
  search: string,
  page: number
): Promise<SearchMovie[]> {
  if (search === "") return []

  const params = {
    search,
    page,
  }

  const response = await tmdbAxios.get<Resp>("/movies", {
    params,
  })
  const genres = await TMDBGetGenresCached()

  return response.data.results.map((movie) => ({
    score: movie.vote_average,
    id: movie.id.toString(),
    name: movie.title,
    genres: movie.genre_ids
      .map((x) => ({
        name: genres.genres.find((g) => g.id === x)?.name,
      }))
      .filter((x) => x.name !== undefined) as Genre[],
    releaseDate: new Date(movie.release_date),
  }))
}
