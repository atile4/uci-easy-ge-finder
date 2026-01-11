// import "./styles/App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/Signup";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/dashboard" />}
              />
              <Route path="/dashboard" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
