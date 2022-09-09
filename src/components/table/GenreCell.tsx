import { Chip } from "@mui/material";
import { FunctionComponent } from "react";

interface GenreCellProps {
  genres: string[];
}

const GenreCell: FunctionComponent<GenreCellProps> = ({ genres }) => {
  return (
    <>
      {genres.map((genre) => (
        <Chip key={genre} label={genre} variant="filled" />
      ))}
    </>
  );
};

export default GenreCell;
