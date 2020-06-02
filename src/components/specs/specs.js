import React from "react"
import { MDBBox, MDBContainer } from "mdbreact"
import Button from "../Button"
import Oculus from "./oculus.png"

import "./specs.css"

const Specs = () => {
    return(
        <MDBContainer className="specs w-75 d-flex flex-column align-items-center flex-md-row py-5">
            <MDBContainer className="d-flex flex-column align-items-start text-left">
                <h2 className="align-self-start text-left">Real time traffic and activity demographics</h2>
                <MDBBox className="align-self-start grey-text mt-3 mb-5 text-left" tag="p">I don't know what to type here so let me fill in some random text. Lorem ipsum is hard to consume text and I use it as a last resort. So, I'll fill random texr please and you don't even have to read it.</MDBBox>
                <Button text="Buy Now" className="align-self-start"/>
            </MDBContainer>
            <img src={Oculus} className="goggles d-flex align-self-center" alt="Oculus" />
            {/* <h2>Virtual Reality taken to the next level</h2>
            <MDBBox className="grey-text my-4">Just get the code  and sit tight, you'll witness its power and performance in lead conversion. Powerful and productive technology. Experience, then believe.</MDBBox>
            <Button className="" text="Know More"/> */}
        </MDBContainer>
    )
}

export default Specs