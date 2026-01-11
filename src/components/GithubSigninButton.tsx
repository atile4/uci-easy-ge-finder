import { Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub"; // MUI GitHub icon

interface GithubLoginButtonProps {
  onClick: () => void;
}

export default function GithubLoginButton({ onClick }: GithubLoginButtonProps) {
  return (
    <Stack>
      <Button
        variant="contained"
        startIcon={<GitHubIcon />}
        onClick={onClick}
        sx={{
          backgroundColor: "#f5f5f5", // light gray / near-white
          color: "#24292f", // dark text/icon like GitHub
          textTransform: "none", // remove uppercase
          fontWeight: 500,
          fontSize: 16,
          borderRadius: 2,
          py: 1.5,
          "&:hover": {
            backgroundColor: "#e1e4e8", // slightly darker on hover
          },
        }}
      >
        Log In with GitHub
      </Button>
    </Stack>
  );
}
