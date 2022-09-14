import { useState } from "react"

export default function useSearch<T>(defaultSearchFilter: T) {
  const [searchFilter, setSearchFilter] = useState<T>(defaultSearchFilter)
  const [searchInput, setSearchInput] = useState<T>(defaultSearchFilter)

  function search(): void {
    setSearchFilter(searchInput)
  }

  return { searchInput, setSearchInput, searchFilter, search }
}
