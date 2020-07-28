import React from "react"

import "./home.css"
import Button from "../Button"
import product from "./product.png"

import {MDBContainer} from "mdbreact"

class Home extends React.Component {

    

    render() {
        return (
            <MDBContainer className="d-flex flex-column align-items-center">
                <MDBContainer className="">
                    <p >Mi reality is now going virtual</p>
                    <p >Best in class virtual reaity gear to make your everyday experience great. Go check it out!</p>
                    <Button text="Buy Now" />
                </MDBContainer>
                
                <img className="w-50" src={product} alt="Virtual Head Set"/>
            </MDBContainer>
        )
    }
}

export default Home