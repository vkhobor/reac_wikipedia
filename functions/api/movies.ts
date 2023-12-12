import { Env } from "../env"

export const onRequest: PagesFunction<Env> = async (context) => {
  const { searchParams } = new URL(context.request.url)
  let search = searchParams.get("search")
  const page = searchParams.get("page")

  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`

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
