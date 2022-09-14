import { FunctionComponent, useEffect, useState } from "react"
import SearchForm from "../components/SearchForm"
import TableWithData from "../components/table/TableWithData"
import useSearch from "../hooks/useSearch"

const TableSearchPage: FunctionComponent<EmptyInterface> = () => {
  const { search, searchFilter, setSearchInput, searchInput } =
    useSearch<string>("")

  const [relatedSearchId, setRelatedSearchId] = useState("")

  useEffect(() => {
    setRelatedSearchId("")
  }, [searchFilter])

  function loadRelated(id: string) {
    setRelatedSearchId(id)
    setSearchInput("")
  }

  return (
    <div className="content">
      <div className="flex justify-start gap-3 pb-2 pt-4 items-start">
        <SearchForm
          onInputChange={setSearchInput}
          input={searchInput}
          onSubmit={search}
        />
      </div>
      <div className="rounded-md overflow-hidden shadow-material mb-3">
        <TableWithData
          loadRelated={loadRelated}
          relatedSearchId={relatedSearchId}
          searchFilter={searchFilter}
        />
      </div>
    </div>
  )
}

export default TableSearchPage
