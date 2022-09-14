import { useQuery } from "@tanstack/react-query"
import { FunctionComponent } from "react"
import { createUrlFromTMDBId } from "../../../api/TMDB/createUrlFromTMDBId"
import { wikiFindFilm } from "../../../api/wikipedia/wikiFindFilm"
import Details from "./Details"

interface DetailsWithDataProps {
  movieTitle: string
  movieYear: number
  visible: boolean
  id: string
  loadRelated: (id: string) => void
}

const DetailsWithData: FunctionComponent<DetailsWithDataProps> = ({
  movieTitle,
  movieYear,
  visible,
  id,
  loadRelated,
}) => {
  const { isError, isLoading, data } = useQuery(
    ["movie-details", visible, movieTitle, movieYear],
    async () => await wikiFindFilm(movieTitle, String(movieYear)),
    { enabled: visible, retry: 1 }
  )

  const tmdb = {
    url: createUrlFromTMDBId(id),
    id,
  }

  const wiki = {
    isError,
    isLoading,
    summaryHtml: data?.descriptionHtml,
    title: data?.title,
    url: data?.url,
  }

  return <Details tmdb={tmdb} wiki={wiki} loadRelated={loadRelated} />
}

export default DetailsWithData
