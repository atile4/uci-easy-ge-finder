import type { CourseData } from "../types";
// import { Bookmark, BookmarkCheck, ExternalLink } from "lucide-react";
// import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  // IconButton,
  Chip,
  Paper,
} from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { geCategories } from "../helpers/searchParamHelpers";

interface CourseCardProps {
  course: CourseData;
  //   isSaved: boolean;
  //   onToggleSave: (courseId: string) => void;
}

const gradeColors = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#dc2626"];

// , isSaved, onToggleSave
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
      elevation={2}
      sx={{
        "&:hover": {
          boxShadow: 6,
        },
        transition: "box-shadow 0.3s",
        borderColor: "primary.light",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" color="secondary.main" gutterBottom>
              {course.department + " " + course.courseNumber}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {course.geCategories.map((category) => (
                <Chip
                  key={category}
                  label={geCategories[category] || category}
                  size="small"
                  sx={{
                    bgcolor: "primary.light",
                    color: "primary.dark",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* <IconButton
            onClick={() => onToggleSave(course.id)}
            color="primary"
            sx={{ ml: 1 }}
          >
            {isSaved ? (
              <BookmarkCheck size={24} fill="currentColor" />
            ) : (
              <Bookmark size={24} />
            )}
          </IconButton> */}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ minHeight: 120 }}>
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
              height={250}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "background.default",
                p: 1.5,
                borderRadius: 2,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Average GPA
              </Typography>
              <Typography variant="h5" color="secondary.main">
                {course.averageGPA.toFixed(2)}
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "background.default",
                p: 1.5,
                borderRadius: 2,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                A:B Ratio
              </Typography>
              <Typography variant="h5" color="secondary.main">
                {abRatio}
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* <Box
          component={Link}
          to={`/course/${course.id}`}
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              color: "primary.dark",
            },
            transition: "color 0.3s",
          }}
        >
          <Typography variant="body2">View Details</Typography>
          <ExternalLink size={16} />
        </Box> */}
      </CardContent>
    </Card>
  );
}
