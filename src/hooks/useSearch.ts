import { useState } from "react";

export default function useSearch<T>(defaultSearchFilter: T) {
  const [searchFilter, setSearchFilter] = useState<T>(defaultSearchFilter);
  const [searchInput, setSearchInput] = useState<T>(defaultSearchFilter);
  const [refetch, setRefech] = useState<number>(0);

  function search() {
    setSearchFilter((filter) => {
      if (filter === searchInput) {
        setRefech((refetch) => ++refetch);
        return filter;
      }
      return searchInput;
    });
  }

  return { searchInput, setSearchInput, searchFilter, search, refetch };
}
