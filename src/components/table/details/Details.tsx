import { Alert, Button, CircularProgress } from "@mui/material";
import { FunctionComponent } from "react";
interface DetailsProps {
  wiki: {
    summary?: string;
    title?: string;
    url?: string;
    isLoading: boolean;
    isError: boolean;
  };
  tmdb: {
    url: string;
    id: string;
  };

  loadRelated: (id: string) => void;
}

const Details: FunctionComponent<DetailsProps> = (props) => {
  return (
    <>
      {props.wiki.isLoading ? (
        <div className=" h-36 flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : props.wiki.isError ? (
        <Alert severity="error">Could not find movie on wikipedia.org</Alert>
      ) : (
        <>
          <div className="h-36 overflow-hidden">
            <h5 className="text-xl mb-2">{props.wiki.title}</h5>
            <p className="overflow-hidden text-ellipsis">
              {props.wiki.summary}
            </p>
          </div>
        </>
      )}

      <div className="flex justify-end gap-2 pt-3">
        <Button
          target="_blank"
          disabled={props.wiki.isLoading || props.wiki.isError}
          variant="outlined"
          href={props.wiki.url || ""}
        >
          Wikipedia
        </Button>
        <Button variant="outlined" target="_blank" href={props.tmdb.url}>
          TMDB
        </Button>
        <Button
          variant="contained"
          onClick={() => props.loadRelated(props.tmdb.id)}
        >
          Related
        </Button>
      </div>
    </>
  );
};

export default Details;
