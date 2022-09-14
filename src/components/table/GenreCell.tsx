import { Chip } from "@mui/material"
import { FunctionComponent } from "react"

interface GenreCellProps {
  genres: string[]
}

const GenreCell: FunctionComponent<GenreCellProps> = ({ genres }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Chip key={genre} label={genre} variant="filled" />
      ))}
    </div>
  )
}

export default GenreCell
