import React from "react"
import { MDBTypography, MDBCardImage, MDBBox, MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact"

import png1 from "./Images/1.png"
import png2 from "./Images/2.png"
import png3 from "./Images/3.png"
import png4 from "./Images/4.png"


import "./features.css"

class Features extends React.Component {
    render() {
        return (
            <div className="features grey lighten-3 d-flex flex-column align-items-center py-5"> 
                <MDBTypography className="features-p grey-text" tag="h6">Mi Features</MDBTypography>
                <MDBTypography tag="h2">We deliever Exellent Features</MDBTypography>
                <MDBBox className="grey-text" tag="p">From development to the delievery of performance we don't compromise at any level to make your products the best!</MDBBox>
                <MDBCard className="mt-4">
                    <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png1}/>
                    <MDBCardBody className="d-flex flex-column">
                        <MDBCardTitle>Some Heading Here</MDBCardTitle>
                        <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                        <MDBIcon  icon="arrow-right" className="align-self-end" />
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="mt-4">
                    <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png2}/>
                    <MDBCardBody className="d-flex flex-column">
                        <MDBCardTitle>Some Heading Here</MDBCardTitle>
                        <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                        <MDBIcon  icon="arrow-right" className="align-self-end" />
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="mt-4">
                    <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png3}/>
                    <MDBCardBody className="d-flex flex-column">
                        <MDBCardTitle>Some Heading Here</MDBCardTitle>
                        <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                        <MDBIcon  icon="arrow-right" className="align-self-end" />
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="mt-4">
                    <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png4}/>
                    <MDBCardBody className="d-flex flex-column">
                        <MDBCardTitle>Some Heading Here</MDBCardTitle>
                        <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                        <MDBIcon  icon="arrow-right" className="align-self-end" />
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}


export default Features