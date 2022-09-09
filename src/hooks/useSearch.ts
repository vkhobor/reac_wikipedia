import { useEffect, useState } from "react";

export default function useSearch<T>(
  defaultSearchFilter: T,
  triggerOnInput: boolean
) {
  const [searchFilter, setSearchFilter] = useState<T>(defaultSearchFilter);
  const [searchInput, setSearchInput] = useState<T>(defaultSearchFilter);

  useEffect(() => {
    if (triggerOnInput) {
      search();
    }
  }, [searchInput]);

  function search() {
    setSearchFilter(searchInput);
  }

  return { searchInput, setSearchInput, searchFilter, search };
}
