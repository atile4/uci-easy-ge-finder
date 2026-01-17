import CourseCard from "./CourseCard";
import { Typography, Paper, Grid, Box } from "@mui/material";

import type { CourseData, FilterParams, Response } from "../types";

import { fullFilter } from "../scripts/script";
import { useMemo } from "react";

import { CircularProgress } from "@mui/material";

type ResultListType = {
  data: Response | undefined;
  filters: FilterParams;
  searchQuery: string;
  isPending: boolean;
};

export default function ResultsList({
  data: response,
  filters,
  searchQuery,
  isPending,
}: ResultListType) {
  const filteredData: (CourseData | null)[] = useMemo(() => {
    return fullFilter(
      response?.data,
      filters.geCategory,
      filters.department,
      filters.timeFrame,
      filters.multipleGE,
      filters.ABRatio,
      searchQuery
    );
  }, [
    response?.data,
    filters.geCategory,
    filters.department,
    filters.timeFrame,
    filters.multipleGE,
    filters.ABRatio,
    searchQuery,
  ]);

  // const isLoading = response?.ok;

  if (!filteredData) return;
  // TODO: implement loading while loading course data
  return (
    <>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {filteredData.length} course{filteredData.length !== 1 ? "s" : ""} found
      </Typography>
      {isPending && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "30px", // adjust to match your results container
            mb: 4,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {filteredData.length === 0 ? (
        <Paper
          elevation={2}
          sx={{ p: 6, textAlign: "center", borderRadius: 2 }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No courses found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your filters or search query
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {filteredData.map((course) => {
            if (course) {
              return (
                <Grid
                  sx={{ xs: 12, lg: 6 }}
                  key={course.courseNumber + course.department}
                >
                  <CourseCard course={course} />
                </Grid>
              );
            }
          })}
        </Grid>
      )}
    </>
  );
}
