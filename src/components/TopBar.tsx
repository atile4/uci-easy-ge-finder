import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// import { useLogin } from "../hooks/useLogin";

export default function TopBar() {
  const { logout } = useLogout(); // , error, isPending
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const { user } = useAuthContext();

  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar>
        <Typography variant="h6" color="secondary.main" sx={{ flexGrow: 1 }}>
          Easy GE Finder
        </Typography>
        <IconButton
          // onClick={() => setIsSidebarOpen(true)}
          color="primary"
          sx={{ display: { md: "none" }, mr: 1 }}
        >
          {/* <Menu /> */}
        </IconButton>
        <Button
          // startIcon={<LogOut size={20} />}
          // onClick={handleLogout}
          color="primary"
        >
          {user && (
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}
              onClick={handleClick}
            >
              Logout
            </Box>
          )}
          {!user && (
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}
              onClick={handleClick}
            >
              Login
            </Box>
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
