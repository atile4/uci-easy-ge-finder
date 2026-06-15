import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
      light: "#7dd3fc",
      dark: "#1d4ed8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0f172a",
      light: "#e2e8f0",
      dark: "#020617",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#475569",
    },
    success: {
      main: "#22c55e",
    },
    info: {
      main: "#38bdf8",
    },
    warning: {
      main: "#f97316",
    },
    error: {
      main: "#ef4444",
    },
  },
  shape: {
    borderRadius: 16,
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
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#0f172a",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          border: "1px solid rgba(15, 23, 42, 0.06)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.05)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
          fontWeight: 600,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
          border: "1px solid rgba(15, 23, 42, 0.06)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 16,
            backgroundColor: "#f8fafc",
            borderColor: "rgba(15, 23, 42, 0.08)",
            "& fieldset": {
              borderColor: "rgba(15, 23, 42, 0.12)",
            },
            "&:hover fieldset": {
              borderColor: "#2563eb",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563eb",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
  },
});
