import { Alert, Button, CircularProgress } from "@mui/material"
import { FunctionComponent } from "react"
import { getFirstParagraph } from "./getFirstParagraph"

interface DetailsProps {
  wiki: {
    summaryHtml?: string
    title?: string
    url?: string
    isLoading: boolean
    isError: boolean
  }
  tmdb: {
    url: string
    id: string
  }
  loadRelated: (id: string) => void
}

const Details: FunctionComponent<DetailsProps> = ({
  wiki,
  tmdb,
  loadRelated,
}) => {
  const summaryFirstParagraph = getFirstParagraph(wiki.summaryHtml ?? "")
  return (
    <>
      {wiki.isLoading ? (
        <div className=" h-36 flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : wiki.isError ? (
        <Alert severity="error">Could not find movie on wikipedia.org</Alert>
      ) : (
        <>
          <h5 className="text-xl mb-2">{wiki.title}</h5>
          <p>{summaryFirstParagraph}</p>
        </>
      )}

      <div className="flex justify-end gap-2 pt-3">
        <Button
          target="_blank"
          disabled={wiki.isLoading || wiki.isError}
          variant="outlined"
          href={wiki.url ?? ""}
        >
          Wikipedia
        </Button>
        <Button variant="outlined" target="_blank" href={tmdb.url}>
          TMDB
        </Button>
        <Button variant="contained" onClick={() => loadRelated(tmdb.id)}>
          Related
        </Button>
      </div>
    </>
  )
}

export default Details
