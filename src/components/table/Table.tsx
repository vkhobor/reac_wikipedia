import { FunctionComponent, useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { SearchMovie, Genre } from "../../api/IMDB/IMBDFilmSearch";
import RatingCell from "./RatingCell";
import GenreCell from "./GenreCell";

interface Movie {
  id: string;
  name: string;
  score: number;
  homepage: string;
  genres: { name: string }[];
}

interface TableProps {
  data: Movie[];
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
  renderDetailPanel: (row: SearchMovie, isExpanded: boolean) => React.ReactNode;
}

const Table: FunctionComponent<TableProps> = ({
  data,
  isError,
  isLoading,
  isFetching,
  renderDetailPanel,
}) => {
  const columns = useMemo<MRT_ColumnDef<SearchMovie>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "score",
        header: "Score",
        Cell: ({ cell }) => (
          <RatingCell ratingOfTen={cell.getValue<number>()} />
        ),
      },
      {
        accessorKey: "genres",
        header: "Genres",
        Cell: ({ cell }) => (
          <GenreCell
            genres={cell.getValue<Genre[]>().map((genre) => genre.name)}
          />
        ),
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        getRowId={(row) => row.id}
        enableBottomToolbar={false}
        enableRowActions={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableHiding={false}
        enableGlobalFilter={false}
        renderDetailPanel={({ row }) =>
          renderDetailPanel(row.original, row.getIsExpanded())
        }
        muiToolbarAlertBannerProps={
          isError
            ? {
                color: "error",
                children: "Error loading data",
              }
            : undefined
        }
        state={{
          isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching,
        }}
      />
    </>
  );
};

export default Table;
