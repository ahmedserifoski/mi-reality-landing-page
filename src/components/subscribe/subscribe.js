import React from "react"
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import "./subscribe.css"
import Button from "../Button"

const Subscribe = () => {
    return (
        <div id="subscribe" className="grey lighten-4" >
            <form >
                <MDBRow>
                    <MDBCol className="text-center mx-3">
                        <h3>Subscribe now and get lifetime premium access</h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="text-center mx-3">
                        <p >Just kidding you have to pay every month or every year to get all the benefits we mentioned everywhere. Everything comes ar a cost.</p>
                    </MDBCol>
                </MDBRow>
                <MDBContainer className="text-center" >
                    <input className="my-3 mx-3" type="email" placeholder="E-Mail"/>
                    <Button text="Subscribe"/>
                </MDBContainer>
                
            </form>
        </div>
        
    )
}

export default Subscribe