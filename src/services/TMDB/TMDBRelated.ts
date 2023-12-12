import { tmdbAxios } from "./baseClient"
import Resp from "./models/RelatedResponse"
import GenresResp from "./models/GenresResponse"
import { TMDBGetGenresCached } from "./TMDBGenres"

export interface Genre {
  name: string
}

export interface Recommended {
  id: string
  name: string
  releaseDate: Date
  score: number
  genres: Genre[]
}

export interface Movie {
  id: string
  recommended: Recommended[]
}

export interface Data {
  movie: Movie
}

export async function tmdbRelated(
  id: string,
  page: number
): Promise<Recommended[]> {
  if (id === "") return []

  const params = {
    id,
    page,
  }

  const response = await tmdbAxios.get<Resp>("/related", {
    params,
  })

  const genres = await TMDBGetGenresCached()

  const recommended: Recommended[] = response.data.results.map((movie) => ({
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

  return recommended
}
