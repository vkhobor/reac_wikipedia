import { FunctionComponent } from "react"
import SearchForm from "../components/SearchForm"
import TableWithData from "../components/table/TableWithData"
import useSearch from "../hooks/useSearch"

const TableSearchPage: FunctionComponent<EmptyInterface> = () => {
  const { search, searchFilter, setSearchInput, refetch } =
    useSearch<string>("")

  return (
    <div className="content">
      <div className="flex justify-start gap-3 pb-2 pt-4 items-start">
        <SearchForm onInputChange={setSearchInput} onSubmit={search} />
      </div>
      <div className="rounded-md overflow-hidden shadow-material mb-3">
        <TableWithData refetchSearch={refetch} searchFilter={searchFilter} />
      </div>
    </div>
  )
}

export default TableSearchPage
