import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect, useState } from "react";
import { tmdbFilmSearch } from "../../api/TMDB/TMDBFilmSearch";
import { tmdbRelated } from "../../api/TMDB/TMDBRelated";
import SearchForm from "../SearchForm";
import useSearch from "../../hooks/useSearch";
import DetailsWithData from "./details/DetailsWithData";
import Table from "./Table";

interface TableWithDataProps {
  searchFilter: string;
  refetchSearch: number;
}

const TableWithData: FunctionComponent<TableWithDataProps> = ({
  searchFilter,
  refetchSearch,
}) => {
  const [relatedSearchId, setRelatedSearchId] = useState("");

  useEffect(() => {
    setRelatedSearchId("");
  }, [searchFilter, refetchSearch]);

  useEffect(() => {
    searchQuery.refetch();
  }, [refetchSearch]);

  function loadRelated(id: string) {
    setRelatedSearchId(id);
  }

  const searchQuery = useQuery(
    ["table-data-search", searchFilter],
    () => tmdbFilmSearch(searchFilter, 1),
    { initialData: [] }
  );

  const relatedQuery = useQuery(
    ["table-data-related", relatedSearchId],
    () => tmdbRelated(relatedSearchId),
    {
      initialData: [],
    }
  );

  const { data, isError, isFetching, isLoading } =
    relatedSearchId === "" ? searchQuery : relatedQuery;

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
  );
};

export default TableWithData;
