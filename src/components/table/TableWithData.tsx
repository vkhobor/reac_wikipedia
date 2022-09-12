import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect, useState } from "react";
import { imdbFilmSearch } from "../../api/IMDB/IMBDFilmSearch";
import { imdbRelated } from "../../api/IMDB/IMBDRelated";
import SearchForm from "../SearchForm";
import useSearch from "../../hooks/useSearch";
import DetailsWithData from "./details/DetailsWithData";
import Table from "./Table";

interface TableWithDataProps {
  searchFilter: string;
}

const TableWithData: FunctionComponent<TableWithDataProps> = ({
  searchFilter,
}) => {
  const [relatedSearchId, setRelatedSearchId] = useState("");

  useEffect(() => {
    setRelatedSearchId("");
  }, [searchFilter]);

  function loadRelated(id: string) {
    setRelatedSearchId(id);
  }

  const searchQuery = useQuery(
    ["table-data-search", searchFilter],
    () => imdbFilmSearch(searchFilter, 1),
    { initialData: [] }
  );

  const relatedQuery = useQuery(
    ["table-data-related", relatedSearchId],
    () => imdbRelated(relatedSearchId),
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
          IMDBid={row.id}
          loadRelated={loadRelated}
          IMDBUrl={row.homepage}
        />
      )}
    />
  );
};

export default TableWithData;
