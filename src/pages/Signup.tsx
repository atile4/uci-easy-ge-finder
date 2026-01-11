import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  useTheme,
} from "@mui/material";
import { GraduationCap } from "lucide-react";

export default function SignIn() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleAnonymous = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        background: theme.palette.background.default,
      }}
    >
      <Card
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 4,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 64,
                height: 64,
              }}
            >
              <GraduationCap size={32} color="white" />
            </Avatar>
          </Box>

          <Typography
            variant="h5"
            align="center"
            color="primary.dark"
            gutterBottom
            sx={{ color: "#0c4a6e", mb: 2 }}
          >
            Easy GE Finder
          </Typography>

          <Typography
            variant="body2"
            align="center"
            color="primary.main"
            sx={{
              color: "#0369a1",
              mb: "2rem",
            }}
          >
            Find the best General Education courses for you
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSignIn}
              sx={{ color: theme.palette.common.white }}
            >
              Sign In
            </Button>

            <Button
              size="large"
              onClick={handleAnonymous}
              sx={{
                backgroundColor: "#e0f2fe",
                "&:hover": {
                  backgroundColor: "#bae6fd", // hover color, slightly darker
                },
              }}
            >
              Continue as Guest
            </Button>
          </Stack>

          <Typography
            variant="caption"
            align="center"
            color="text.secondary"
            mt={3}
            display="block"
          >
            Browse anonymously or sign in to save your favorite courses
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
