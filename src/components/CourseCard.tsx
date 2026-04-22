import type { CourseData } from "../types";
import { Box, Card, CardContent, Typography, Chip, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { geCategories } from "../helpers/searchParamHelpers";

// styles
import { styles } from "./CourseCard.styles";

interface CourseCardProps {
  course: CourseData;
}

const gradeColors = ["#22c55e", "#38bdf8", "#f97316", "#ef4444", "#dc2626"];

export default function CourseCard({ course }: CourseCardProps) {
  const grades: number[] = [
    course.gradeACount,
    course.gradeBCount,
    course.gradeCCount,
    course.gradeDCount,
    course.gradeFCount,
  ];

  const abRatio = (
    (course.gradeACount / (course.gradeACount + course.gradeBCount)) *
    100
  ).toFixed(0);

  return (
    <Card sx={styles.wrapper}>
      <CardContent sx={styles.content}>
        <Box sx={styles.statsWrapper}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              color="secondary.main"
              fontWeight={700}
              gutterBottom
            >
              {course.department} {course.courseNumber}
            </Typography>
            <Box sx={styles.geCategoriesWrapper}>
              {course.geCategories.map((category) => (
                <Chip
                  key={category}
                  label={geCategories[category] || category}
                  size="small"
                  sx={styles.categoryTag}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2.5fr 1fr" },
            gap: 2,
            alignItems: "stretch",
          }}
        >
          <Box sx={styles.graphWrapper}>
            <BarChart
              xAxis={[
                {
                  data: ["A", "B", "C", "D", "F"],
                  colorMap: {
                    type: "ordinal",
                    values: ["A", "B", "C", "D", "F"],
                    colors: gradeColors,
                  },
                },
              ]}
              series={[{ data: grades }]}
              height={260}
            />
          </Box>

          {/* Stat Boxes */}
          <Box sx={{ display: "grid", gap: 2 }}>
            <Paper elevation={0} sx={styles.statPaper}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={styles.statText}
              >
                Average GPA
              </Typography>
              <Typography variant="h4" color="secondary.main" fontWeight={500}>
                {course.averageGPA.toFixed(2)}
              </Typography>
            </Paper>
            <Paper elevation={0} sx={styles.statPaper}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={styles.statText}
              >
                A:B Ratio
              </Typography>
              <Typography variant="h4" color="secondary.main" fontWeight={500}>
                {abRatio}%
              </Typography>
            </Paper>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
