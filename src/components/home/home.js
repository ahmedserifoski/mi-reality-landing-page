import React from "react"

import "./home.css"
import Button from "../Button"
import product from "./product.png"

import {MDBContainer, MDBRow} from "mdbreact"
import { BrowserRouter as Router } from 'react-router-dom';

class Home extends React.Component {

    

    render() {
        return (
            <MDBContainer id="home"  className="px-3" >
                <Router>
                <MDBContainer className="my-5 pt-5">
                    <p >Mi reality is now going virtual</p>
                    <p >Best in class virtual reaity gear to make your everyday experience great. Go check it out!</p>
                    <Button text="Buy Now" />
                </MDBContainer>
                
                <MDBRow>
                    
                    
                        <img  className="w-responsive text-center mx-auto p-3 mt-2" xs="4" src={product} alt="Virtual Head Set"/>
                    
                </MDBRow>
                
                </Router>
            </MDBContainer>
        )
    }
}

export default Home