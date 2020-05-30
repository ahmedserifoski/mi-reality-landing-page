import React from 'react';

import './App.css';

import NavBar from "./navBar/NavBar"
import Home from './components/home/home'
import Features from "./components/features/features"
import Specs from "./components/specs/specs"
import Subscribe from './components/subscribe/subscribe'
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="big-container">
      <NavBar />
      <Home />
      <Features />
      <Specs />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
