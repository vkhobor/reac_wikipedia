import { Alert, Button, CircularProgress } from "@mui/material";
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
        <div className=" h-36 flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : props.isWikiError ? (
        <Alert severity="error">Could not find movie on wikipedia.org</Alert>
      ) : (
        <>
          <div className="h-36 overflow-hidden">
            <h5 className="text-xl mb-2">{props.title}</h5>
            <p className="overflow-hidden text-ellipsis">{props.summary}</p>
          </div>
        </>
      )}

      <div className="flex justify-end gap-2 pt-3">
        <Button
          target="_blank"
          disabled={props.isWikiLoading || props.isWikiError}
          variant="outlined"
          href={props.wikiUrl || ""}
        >
          Wikipedia
        </Button>
        <Button variant="outlined" target="_blank" href={imdbUrl}>
          IMDB
        </Button>
        <Button
          variant="contained"
          onClick={() => props.loadRelated(props.IMDBId)}
        >
          Related
        </Button>
      </div>
    </>
  );
};

export default Details;
