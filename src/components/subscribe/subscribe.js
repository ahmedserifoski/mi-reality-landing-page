import React from "react"
import { MDBTypography, MDBBox } from 'mdbreact'
import "./subscribe.css"

const Subscribe = () => {
    return (
        <div className="con d-flex flex-column align-items-center grey lighten-3">
            <form className="py-4">
                <MDBTypography tag="h3">Subscribe now and get lifetime premium access</MDBTypography>
                <MDBBox className="grey-text">Just kidding you have to pay every month or every year to get all the benefits we mentioned everywhere. Everything comes ar a cost.</MDBBox>
            </form>
        </div>
        
    )
}

export default Subscribe