import type { CourseData } from "../types";
import { Box, Card, CardContent, Typography, Chip, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { geCategories } from "../helpers/searchParamHelpers";

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
    <Card
      sx={{
        overflow: "hidden",
        transition: "transform 0.25s, box-shadow 0.25s",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            mb: 2,
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              color="secondary.main"
              fontWeight={700}
              gutterBottom
            >
              {course.department} {course.courseNumber}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {course.geCategories.map((category) => (
                <Chip
                  key={category}
                  label={geCategories[category] || category}
                  size="small"
                  sx={{
                    bgcolor: "primary.light",
                    color: "primary.dark",
                    fontWeight: 700,
                  }}
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
          <Box sx={{ minHeight: 220 }}>
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
            <Paper
              elevation={0}
              sx={{
                p: 1.5,
                borderRadius: 1,
                backgroundColor: "rgba(37, 99, 235, 0.06)",
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}
              >
                Average GPA
              </Typography>
              <Typography variant="h4" color="secondary.main" fontWeight={500}>
                {course.averageGPA.toFixed(2)}
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 1.5,
                borderRadius: 1,
                backgroundColor: "rgba(15, 23, 42, 0.04)",
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}
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
