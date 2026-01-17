import { useQuery } from "@tanstack/react-query";
import { useFetch as fetchData } from "../hooks/useFetch";

// React
import { useCallback, useState } from "react";

// Components
import TopBar from "../components/TopBar";
import SearchParam from "../components/SearchParam";

// Hooks
import { useTransition } from "react";

// Misc
import { initialFilter } from "../helpers/searchParamHelpers";
import type { FilterParams } from "../types";

import { Box, useTheme } from "@mui/material";
import type { Response } from "../types";
import ResultsList from "../components/ResultsList";
// import MenuIcon from "@mui/icons-material/Menu";

const url = "https://anteaterapi.com/v2/rest/grades/raw";

export default function Home() {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["apiData", url],
    queryFn: () => fetchData<Response>(url),
    enabled: !!url,
  });

  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(initialFilter);

  const [isPending, startTransition] = useTransition();

  const updateSearchQuery = useCallback((value: string) => {
    startTransition(() => {
      setSearchQuery(value);
    });
  }, []);

  const updateFilters = useCallback((value: FilterParams) => {
    startTransition(() => {
      setFilters(value);
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // p: 2,
        background: theme.palette.background.default,
      }}
    >
      <TopBar />
      <Box
        component="main"
        sx={{ flex: 1, p: 3, width: "100%", maxWidth: 800 }}
      >
        <SearchParam
          searchQuery={searchQuery}
          setSearchQuery={updateSearchQuery}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={updateFilters}
        />
        {response && (
          <ResultsList
            data={response}
            filters={filters}
            searchQuery={searchQuery}
            isPending={isPending}
          />
        )}
        {isLoading && <p>Loading data...</p>}
        {error && <p>{error.message}</p>}
      </Box>
    </Box>
  );
}
