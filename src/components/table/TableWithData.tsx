import { useQuery } from "@tanstack/react-query"
import { FunctionComponent } from "react"
import { tmdbFilmSearch } from "../../api/TMDB/TMDBFilmSearch"
import { tmdbRelated } from "../../api/TMDB/TMDBRelated"
import DetailsWithData from "./details/DetailsWithData"
import Table from "./Table"

interface TableWithDataProps {
  searchFilter: string
  relatedSearchId: string
  loadRelated: (id: string) => void
}

const TableWithData: FunctionComponent<TableWithDataProps> = ({
  searchFilter,
  relatedSearchId,
  loadRelated,
}) => {
  const searchQuery = useQuery(
    ["table-data-search", searchFilter],
    async () => await tmdbFilmSearch(searchFilter, 1),
    { initialData: [] }
  )

  const relatedQuery = useQuery(
    ["table-data-related", relatedSearchId],
    async () => await tmdbRelated(relatedSearchId),
    {
      initialData: [],
    }
  )

  const { data, isError, isFetching, isLoading } =
    relatedSearchId === "" ? searchQuery : relatedQuery

  return (
    <Table
      data={data}
      isError={isError}
      isFetching={isFetching}
      isLoading={isLoading}
      renderDetailPanel={(row, isExpanded) => (
        <DetailsWithData
          movieTitle={row.name}
          visible={isExpanded}
          id={row.id}
          loadRelated={loadRelated}
        />
      )}
    />
  )
}

export default TableWithData
