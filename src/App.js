import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact"
import './App.css';

import MenuPage from "./components/menuPage/menuPage"
import Home from './components/home/home'
import Features from "./components/features/features"
import Specs from "./components/specs/specs"
import Subscribe from './components/subscribe/subscribe'
import Footer from "./components/footer/footer"

function App() {
  return (
    <MDBContainer >
      <MDBRow><MDBCol md="2"></MDBCol>  <MDBCol xs="10" md="8"><MenuPage/></MDBCol></MDBRow>
      <MDBRow><MDBCol md="2"></MDBCol>  <MDBCol xs="10" md="8"><Home/></MDBCol></MDBRow>
      <MDBRow><MDBCol md="2"></MDBCol>  <MDBCol xs="10" md="8"><Features /></MDBCol></MDBRow>
      <MDBRow><MDBCol md="2"></MDBCol>  <MDBCol xs="10" md="8"><Specs /></MDBCol></MDBRow>
      <MDBRow><MDBCol md="2"></MDBCol>  <MDBCol xs="10" md="8" id={"subscribe"}><Subscribe /></MDBCol></MDBRow>
      <MDBRow><MDBCol md="2"></MDBCol>  <MDBCol xs="10" md="8"><Footer /></MDBCol></MDBRow>
    </MDBContainer>
  );
}

export default App;
