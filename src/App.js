import React from 'react';
import {MDBContainer} from "mdbreact"
import './App.css';

import MenuPage from "./components/menuPage/menuPage"
import Home from './components/home/home'
import Features from "./components/features/features"
import Specs from "./components/specs/specs"
import Subscribe from './components/subscribe/subscribe'
import Footer from "./components/footer/footer"

function App() {
  return (
    <MDBContainer className="big-container d-flex flex-column align-items-center w-100">
      <MenuPage />
      <Home />
      <Features />
      <Specs />
      <Subscribe />
      <Footer />
    </MDBContainer>
  );
}

export default App;
