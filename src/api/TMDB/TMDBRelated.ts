import { gql } from "graphql-request";
import { client } from "./TMBDBase";

const query = gql`
  query getSimilarMovies($id: ID!) {
    movie(id: $id) {
      id
      recommended {
        id
        name
        score
        genres {
          name
        }
      }
    }
  }
`;

export interface Genre {
  name: string;
}

export interface Similar {
  id: string;
  name: string;
  homepage: string;
  score: number;
  genres: Genre[];
}

export interface Movie {
  id: string;
  recommended: Similar[];
}

export interface Data {
  movie: Movie;
}

export async function tmdbRelated(id: string): Promise<Similar[]> {
  if (id === "") return [];

  const variables = {
    id,
  };

  const response = await client.request<Data>(query, variables);

  return response.movie.recommended;
}
