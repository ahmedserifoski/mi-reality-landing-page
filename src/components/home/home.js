import React from "react"

import "./home.css"
import Button from "../Button"
import product from "./product.png"

import {MDBContainer} from "mdbreact"

class Home extends React.Component {

    

    render() {
        return (
            <MDBContainer className="home w-75 p-3 d-flex flex-column align-items-center flex-md-row my-5">
                <MDBContainer className="home2 d-flex flex-column align-items-start text-left">
                    <p className="h1 mi-reality align-self-start text-left">Mi reality is now going virtual</p>
                    <p className="p-home grey-text align-self-start text-left">Best in class virtual reaity gear to make your everyday experience great. Go check it out!</p>
                    <Button text="Buy Now" className="but-home align-self-start"/>
                </MDBContainer>
                
                <img className="head-set d-flex align-self-center" src={product} alt="Virtual Head Set"/>
            </MDBContainer>
        )
    }
}

export default Home