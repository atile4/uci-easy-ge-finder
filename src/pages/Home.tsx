// import { useFetch } from "../hooks/useFetch";
// import { filterByGE } from "../scripts/script";
// import type { Response, CourseData } from "../types";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { Search, Filter, Menu, LogOut } from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { fetchJson } from "../hooks/useFetch";

// React
import { useState } from "react";

// Components
import TopBar from "../components/TopBar";
import SearchParam from "../components/SearchParam";

import { initialFilter } from "../helpers/searchParamHelpers";

import {
  // AppBar,
  // Toolbar,
  // Typography,
  // IconButton,
  // Avatar,
  Box,
  // Button,
  // TextField,
  useTheme,
} from "@mui/material";
import type { Response } from "../types";
import ResultsList from "../components/ResultsList";
// import MenuIcon from "@mui/icons-material/Menu";

const url = "https://anteaterapi.com/v2/rest/grades/raw";

export default function Home() {
  // const [selectedGE, setSelectedGE] = useState<string | null>(null);
  // const { data, isPending, error } = useFetch<response | null>(
  //   selectedGE ? url + selectedGE : null
  // );
  // const { data, isPending } = useFetch<Response | null>( // , isPending, error
  //   "https://anteaterapi.com/v2/rest/grades/raw"
  // );
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["apiData", url],
    queryFn: () => fetchJson<Response>(url),
    enabled: !!url,
  });

  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(initialFilter);

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
          setSearchQuery={setSearchQuery}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={setFilters}
        />
        {response && <ResultsList data={response} filters={filters} />}
        {isLoading && <p>Loading data...</p>}
        {error && <p>{error.message}</p>}
      </Box>
    </Box>
  );
}
