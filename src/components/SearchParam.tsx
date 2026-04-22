import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Collapse,
  Grid,
} from "@mui/material";
import { Filter, Search } from "lucide-react";

import type { SearchParamType } from "../types";

import {
  geCategories,
  departments,
  initialFilter,
} from "../helpers/searchParamHelpers";

export default function SearchParam({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  filters,
  setFilters,
}: SearchParamType) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search by course code or title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} color="#2563eb" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Filter size={20} />}
          onClick={() => setShowFilters(!showFilters)}
          sx={{ minWidth: { xs: "100%", sm: 140 }, px: 3 }}
        >
          Filters
        </Button>
      </Box>

      <Collapse in={showFilters}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "rgba(255,255,255,0.92)",
          }}
        >
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FormControl fullWidth>
                <InputLabel>GE Category</InputLabel>
                <Select
                  value={filters.geCategory}
                  label="GE Category"
                  onChange={(e) =>
                    setFilters({ ...filters, geCategory: e.target.value })
                  }
                >
                  <MenuItem value="All">All Categories</MenuItem>
                  {Object.entries(geCategories).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Department</InputLabel>
                <Select
                  value={filters.department}
                  label="Department"
                  onChange={(e) =>
                    setFilters({ ...filters, department: e.target.value })
                  }
                >
                  <MenuItem value="All Departments">All Departments</MenuItem>
                  {Object.entries(departments).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Year</InputLabel>
                <Select
                  value={filters.timeFrame}
                  label="Select a Year"
                  onChange={(e) =>
                    setFilters({ ...filters, timeFrame: e.target.value })
                  }
                >
                  <MenuItem value="all">All Years</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography gutterBottom color="text.secondary" variant="body2">
                Min A:B Ratio: {filters.ABRatio}%
              </Typography>
              <Slider
                value={filters.ABRatio}
                onChange={(_, value) =>
                  setFilters({ ...filters, ABRatio: value as number })
                }
                min={0}
                max={100}
                valueLabelDisplay="auto"
                color="primary"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.multipleGE}
                    onChange={(e) =>
                      setFilters({ ...filters, multipleGE: e.target.checked })
                    }
                    color="primary"
                  />
                }
                label="Multiple GE Categories"
              />
            </Grid>
          </Grid>

          <Button
            onClick={() => setFilters(initialFilter)}
            color="primary"
            sx={{ mt: 3 }}
          >
            Clear All Filters
          </Button>
        </Paper>
      </Collapse>
    </Box>
  );
}
