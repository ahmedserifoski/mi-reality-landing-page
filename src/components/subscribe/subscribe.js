import React from "react"
import { MDBBox , MDBContainer} from 'mdbreact'
import "./subscribe.css"
import Button from "../Button"

const Subscribe = () => {
    return (
        <div className="con w-100 p-3 d-flex flex-column align-items-center grey lighten-3">
            <form className="py-4 d-flex flex-column align-items-center">
                <h3>Subscribe now and get lifetime premium access</h3>
                <MDBBox className="grey-text w-75 text-center">Just kidding you have to pay every month or every year to get all the benefits we mentioned everywhere. Everything comes ar a cost.</MDBBox>
                <MDBContainer>
                    <input className="my-3 mx-3" type="email" placeholder="E-Mail"/>
                    <Button text="Subscribe"/>
                </MDBContainer>
                
            </form>
        </div>
        
    )
}

export default Subscribe