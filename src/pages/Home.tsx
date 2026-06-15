import { useQuery } from "@tanstack/react-query";
import { useFetch as fetchData } from "../hooks/useFetch";

// React
import { useCallback, useState } from "react";

// Components
import TopBar from "../components/TopBar/TopBar";
import SearchParam from "../components/SearchParam";

// Hooks
import { useTransition } from "react";

// Misc
import { initialFilter } from "../helpers/searchParamHelpers";
import type { FilterParams } from "../types";

import { Box, useTheme, Typography } from "@mui/material";
import type { Response } from "../types";
import ResultsList from "../components/ResultsList";

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
    <>
      <TopBar />
      <Box
        sx={{
          minHeight: "100vh",
          // display: "flex",
          // justifyContent: "flex-start",
          // flexDirection: "column",
          p: { xs: 2, sm: 3 },
          background: theme.palette.background.default,
        }}
      >
        <Box
          component="main"
          sx={{
            width: "100%",
            maxWidth: 960,
            mx: "auto",
          }}
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
          {isLoading && (
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              Loading data...
            </Typography>
          )}
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error.message}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
