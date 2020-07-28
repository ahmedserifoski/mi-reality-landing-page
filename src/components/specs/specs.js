import React from "react"
import { MDBBox, MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Button from "../Button"
import Oculus from "./oculus.png"

import "./specs.css"

const Specs = () => {
    return(
        <MDBContainer >
            <MDBContainer >
                <h2 className="text-center mx-3 my-3">Real time traffic and activity demographics</h2>
                <MDBBox className="align-self-start grey-text mt-3 mb-5 mx-3 text-center" tag="p">I don't know what to type here so let me fill in some random text. Lorem ipsum is hard to consume text and I use it as a last resort. So, I'll fill random texr please and you don't even have to read it.</MDBBox>
                <Button text="Buy Now" className="align-self-start"/>
            </MDBContainer>
            <MDBRow>
                <MDBCol className="text-center">
                    <img src={Oculus} className="goggles w-responsive text-center mx-auto p-3 mt-2" alt="Oculus" />
                </MDBCol>
            </MDBRow>
            
            
        </MDBContainer>
    )
}

export default Specs