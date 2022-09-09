import { Button } from "@mui/material";
import { FunctionComponent } from "react";
import { createUrlFromIMDBId } from "../../../api/IMDB/createUrlFromIMDBId";

interface DetailsProps {
  summary?: string;
  title?: string;
  wikiUrl?: string;
  isWikiLoading: boolean;
  isWikiError: boolean;
  IMDBUrl?: string;
  IMDBId: string;
  loadRelated: (id: string) => void;
}

const Details: FunctionComponent<DetailsProps> = (props) => {
  const imdbUrl = createUrlFromIMDBId(props.IMDBId);
  return (
    <>
      {props.isWikiLoading ? (
        "Loading..."
      ) : props.isWikiError ? (
        "Could not find Wikipedia page for movie"
      ) : (
        <>
          {props.title}
          {props.summary}
        </>
      )}

      <Button
        disabled={props.isWikiLoading || props.isWikiError}
        variant="outlined"
        href={props.wikiUrl}
        target="_blank"
      >
        Wikipedia
      </Button>
      <Button variant="outlined" target="_blank" href={imdbUrl}>
        IMDB
      </Button>
      <Button
        variant="outlined"
        onClick={() => props.loadRelated(props.IMDBId)}
      >
        Related
      </Button>
    </>
  );
};

export default Details;
