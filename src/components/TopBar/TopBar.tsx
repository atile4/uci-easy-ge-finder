import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

export default function TopBar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 3 }, py: { xs: 1, sm: 1.25 } }}>
        <Typography
          variant="h6"
          color="secondary.main"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          Easy GE Finder
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClick}
          sx={{ borderRadius: 2, px: 3, textTransform: "none" }}
        >
          {user ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
