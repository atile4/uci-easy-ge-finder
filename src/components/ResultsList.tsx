import CourseCard from "./CourseCard";
import { Typography, Paper, Grid } from "@mui/material";

import type { CourseData, FilterParams, Response } from "../types";

import { fullFilter } from "../scripts/script";

type ResultListType = {
  data: Response | undefined;
  filters: FilterParams;
};

export default function ResultsList({
  data: response,
  filters,
}: ResultListType) {
  if (!response?.ok) {
    return;
  }

  const data = response.data;
  const geCategory = filters.geCategory;
  const ABRatio = filters.ABRatio;
  const timeFrame = filters.timeFrame;
  const department = filters.department;
  const multipleGE = filters.multipleGE;

  const filteredData: (CourseData | null)[] = fullFilter(
    data,
    geCategory,
    department,
    timeFrame,
    multipleGE,
    ABRatio
  );

  if (!filteredData) return;
  // console.log(filteredData);
  return (
    <>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {filteredData.length} course{filteredData.length !== 1 ? "s" : ""} found
      </Typography>

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
          {filteredData.map((course) => (
            <Grid
              sx={{ xs: 12, lg: 6 }}
              key={course.courseNumber + course.department}
            >
              <CourseCard
                course={course}
                // isSaved={savedCourseIds.includes(course.id)}
                // onToggleSave={toggleSaveCourse}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
