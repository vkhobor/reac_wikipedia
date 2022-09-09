import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { wikiFindFilm } from "../../../api/wikipedia/wikiFindFilm";
import Details from "./Details";

interface DetailsWithDataProps {
  movieTitle: string;
  visible: boolean;
  IMDBUrl: string;
  IMDBid: string;
  loadRelated: (id: string) => void;
}

const DetailsWithData: FunctionComponent<DetailsWithDataProps> = (props) => {
  const { data, isError, isLoading } = useQuery(
    ["movie-details", props.visible, props.movieTitle],
    () => wikiFindFilm(props.movieTitle),
    { enabled: props.visible }
  );

  const { description, title, url } = data || {};

  return (
    <Details
      summary={description}
      title={title}
      isWikiLoading={isLoading}
      isWikiError={isError}
      wikiUrl={url}
      IMDBId={props.IMDBid}
      IMDBUrl={props.IMDBUrl}
      loadRelated={props.loadRelated}
    />
  );
};

export default DetailsWithData;
