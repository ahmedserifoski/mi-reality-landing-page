import React from "react"

import "./home.css"
import Button from "../Button"
import product from "./product.png"

import {MDBContainer} from "mdbreact"

class Home extends React.Component {

    

    render() {
        return (
            <MDBContainer className="home d-flex w-75 justify-content-center">
                <MDBContainer className="home2 w-75">
                    <h1 className="mi-reality">Mi reality is now going virtual</h1>
                    <p className="p-home grey-text">Best in class virtual reaity gear to make your everyday experience great. Go check it out!</p>
                    <Button text="Buy Now" className="but-home"/>
                </MDBContainer>
                
                <img className="head-set" src={product} alt="Virtual Head Set"/>
            </MDBContainer>
        )
    }
}

export default Home