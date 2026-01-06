import './App.css';
import ButtonAppBar from './components/Appbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    
    <div className="App">
      {authIsReady && <BrowserRouter>
          <ButtonAppBar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="login" element={user ? <Navigate to="/"/>: <Login />}/>
          </Routes>
      </BrowserRouter>}
      

    </div>
  );
}

export default App;
