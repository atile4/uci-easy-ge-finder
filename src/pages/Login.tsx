import "../styles/Login.css";
import GoogleSigninButton from "../components/GoogleSigninButton";
import GithubLoginButton from "../components/GithubSigninButton";
import { useLogin } from "../hooks/useLogin";
import { googleProvider, githubProvider } from "../firebase/config";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useLogin(); // error, isPending
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGoogleClick = () => {
    login(googleProvider);
  };
  const handleGithubClick = () => {
    login(githubProvider);
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
          {" "}
          <Typography
            variant="h4"
            align="center"
            color="primary.dark"
            gutterBottom
            sx={{ color: "#0c4a6e", mb: 2 }}
          >
            Choose a Login Method:
          </Typography>
          <hr></hr>
          <Box display="flex" justifyContent="center" mb={3}></Box>
          <Stack spacing={2}>
            <GoogleSigninButton onClick={handleGoogleClick} />
            <GithubLoginButton onClick={handleGithubClick} />
            <Button
              size="large"
              onClick={() => navigate("/")}
              sx={{
                backgroundColor: "#e0f2fe",
                "&:hover": {
                  backgroundColor: "#bae6fd", // hover color, slightly darker
                },
              }}
            >
              Back
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
