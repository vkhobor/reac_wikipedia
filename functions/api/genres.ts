import { Env } from "../env"

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${context.env.BEARER_TOKEN}`,
    },
  }

  const res = await fetch(url, options)
  return res
}
