import React from 'react';

import NavBar from "./navBar/NavBar"

import './App.css';
import Home from './components/home/home';

function App() {
  return (
    <div className="big-container">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
