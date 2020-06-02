import React from "react"

import "./home.css"
import Button from "../Button"
import product from "./product.png"

import {MDBContainer} from "mdbreact"

class Home extends React.Component {

    

    render() {
        return (
            <MDBContainer className="home w-75 d-flex flex-column flex-md-row my-5">
                <MDBContainer className="home2 d-flex flex-column align-items-start">
                    <p className="h1 mi-reality">Mi reality is now going virtual</p>
                    <p className="p-home grey-text">Best in class virtual reaity gear to make your everyday experience great. Go check it out!</p>
                    <Button text="Buy Now" className="but-home"/>
                </MDBContainer>
                
                <img className="head-set d-flex align-self-center" src={product} alt="Virtual Head Set"/>
            </MDBContainer>
        )
    }
}

export default Home