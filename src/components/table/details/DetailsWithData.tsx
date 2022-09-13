import { useQuery } from "@tanstack/react-query"
import { FunctionComponent } from "react"
import { createUrlFromTMDBId } from "../../../api/TMDB/createUrlFromTMDBId"
import { wikiFindFilm } from "../../../api/wikipedia/wikiFindFilm"
import Details from "./Details"

interface DetailsWithDataProps {
  movieTitle: string
  visible: boolean
  id: string
  loadRelated: (id: string) => void
}

const DetailsWithData: FunctionComponent<DetailsWithDataProps> = (props) => {
  const { isError, isLoading, data } = useQuery(
    ["movie-details", props.visible, props.movieTitle],
    async () => await wikiFindFilm(props.movieTitle),
    { enabled: props.visible }
  )

  const tmdb = {
    url: createUrlFromTMDBId(props.id),
    id: props.id,
  }

  const wiki = {
    isError,
    isLoading,
    summary: data?.description,
    title: data?.title,
    url: data?.url,
  }

  return <Details tmdb={tmdb} wiki={wiki} loadRelated={props.loadRelated} />
}

export default DetailsWithData
