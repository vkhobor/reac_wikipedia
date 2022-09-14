import { gql } from "graphql-request"
import { client } from "./config"

const query = gql`
  query getSimilarMovies($id: ID!) {
    movie(id: $id) {
      id
      recommended {
        id
        name
        releaseDate
        score
        genres {
          name
        }
      }
    }
  }
`

export interface Genre {
  name: string
}

export interface Recommended {
  id: string
  name: string
  homepage: string
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

export async function tmdbRelated(id: string): Promise<Recommended[]> {
  if (id === "") return []

  const variables = {
    id,
  }

  const response = await client.request<Data>(query, variables)

  return response.movie.recommended.map((movie) => ({
    ...movie,
    releaseDate: new Date(movie.releaseDate),
  }))
}
