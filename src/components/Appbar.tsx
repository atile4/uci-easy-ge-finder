import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useAuthContext } from '../hooks/useAuthContext';

import { useLogout } from '../hooks/useLogout';

export default function ButtonAppBar() {
  const { logout, error, isPending } = useLogout()

  const handleClick = () => {
    logout()
  }

  const { user } = useAuthContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UCI Easy GE Finder
          </Typography>
          {user && <Button color="inherit" onClick={handleClick}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
