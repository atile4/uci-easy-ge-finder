import React from 'react';
import './App.css';
import ButtonAppBar from './components/Appbar';
import Home from './pages/Home';
// import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Home />

    </div>
  );
}

export default App;
