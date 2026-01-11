import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0ea5e9", // sky-500
      light: "#7dd3fc", // sky-300
      dark: "#0284c7", // sky-600
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0c4a6e", // sky-900
      light: "#075985", // sky-800
      dark: "#082f49", // sky-950
      contrastText: "#ffffff",
    },
    background: {
      default: "#f0f9ff", // sky-50
      paper: "#ffffff",
    },
    text: {
      primary: "#0c4a6e", // sky-900
      secondary: "#075985", // sky-800
    },
    success: {
      main: "#10b981", // green for A grades
    },
    info: {
      main: "#3b82f6", // blue for B grades
    },
    warning: {
      main: "#f59e0b", // orange for C grades
    },
    error: {
      main: "#ef4444", // red for D/F grades
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
});
