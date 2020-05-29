import React from "react"
import { MDBTypography, MDBBox, MDBTypo } from "mdbreact"
import Button from "../Button"
import Oculus from "./oculus.png"

import "./specs.css"

const Specs = () => {
    return(
        <div className="specs d-flex flex-column py-5">
            <MDBTypography className="text-center" tag="h3">Real time traffic and activity demographics</MDBTypography>
            <MDBBox className="grey-text mt-3 mb-5" tag="p">I don't know what to type here so let me fill in some random text. Lorem ipsum is hard to consume text and I use it as a last resort. So, I'll fill random texr please and you don't even have to read it.</MDBBox>
            <Button text="Buy Now"/>
            <img src={Oculus} className="w-100" alt="Oculus" />
            <MDBTypography tag="h2">Virtual Reality taken to the next level</MDBTypography>
            <MDBBox className="grey-text my-4">Just get the code  and sit tight, you'll witness its power and performance in lead conversion. Powerful and productive technology. Experience, then believe.</MDBBox>
            <Button className="" text="Know More"/>
        </div>
    )
}

export default Specs