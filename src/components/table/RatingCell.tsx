import { Rating } from "@mui/material"
import { FunctionComponent } from "react"

interface RatingCellProps {
  ratingOfTen: number
}

const RatingCell: FunctionComponent<RatingCellProps> = ({ ratingOfTen }) => {
  return (
    <Rating
      name="simple-controlled"
      readOnly
      max={10}
      precision={0.5}
      value={ratingOfTen}
    />
  )
}

export default RatingCell
