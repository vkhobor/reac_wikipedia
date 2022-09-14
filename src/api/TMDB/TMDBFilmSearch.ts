import { gql } from "graphql-request"
import { client } from "./config"

const query = gql`
  query SearchMovies($search: String!, $page: PageRange!) {
    searchMovies(query: $search, page: $page) {
      id
      name
      score
      releaseDate
      genres {
        name
      }
    }
  }
`

export interface Genre {
  name: string
}

export interface SearchMovie {
  id: string
  homepage: string
  name: string
  releaseDate: Date
  score: number
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

  const variables = {
    search,
    page,
  }

  const response = await client.request<Data>(query, variables)

  return response.searchMovies.map((movie) => ({
    ...movie,
    releaseDate: new Date(movie.releaseDate),
  }))
}
