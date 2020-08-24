import React from "react"
import { MDBCardImage, MDBBox, MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from "mdbreact"

import png1 from "./Images/1.png"
import png2 from "./Images/2.png"
import png3 from "./Images/3.png"
import png4 from "./Images/4.png"


import "./features.css"

class Features extends React.Component {
    render() {
        return (
            <div id="features" className="px-3 grey lighten-4 py-3" > 
            
                
                <h5  className="text-center grey-text">Mi Features</h5>
            
                
                <h2 className="text-center">We deliever Exellent Features</h2>
                <MDBBox className="grey-text text-center " tag="p">From development to the delievery of performance we don't compromise at any level to make your products the best!</MDBBox>
                <MDBContainer className="d-flex flex-column align-items-center flex-md-row justify-content-center flex-wrap">
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol xs="10" sm="8" > 
                            <MDBCard className="mt-4 mx-2" >
                                <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png1}/>
                                <MDBCardBody className="d-flex flex-column">
                                    <MDBCardTitle>Some Heading Here</MDBCardTitle>
                                    <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                                    <MDBIcon  icon="arrow-right" className="align-self-end" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol xs="10" sm="8" > 
                            <MDBCard className="mt-4 mx-2" >
                                <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png2}/>
                                <MDBCardBody className="d-flex flex-column">
                                    <MDBCardTitle>Some Heading Here</MDBCardTitle>
                                    <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                                    <MDBIcon  icon="arrow-right" className="align-self-end" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol xs="10" sm="8" > 
                            <MDBCard className="mt-4 mx-2" >
                                <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png3}/>
                                <MDBCardBody className="d-flex flex-column">
                                    <MDBCardTitle>Some Heading Here</MDBCardTitle>
                                    <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                                    <MDBIcon  icon="arrow-right" className="align-self-end" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol xs="10" sm="8" > 
                            <MDBCard className="mt-4 mx-2" >
                                <MDBCardImage className="card card1 w-25 mt-3 mx-3 z-depth-0" src={png4}/>
                                <MDBCardBody className="d-flex flex-column">
                                    <MDBCardTitle>Some Heading Here</MDBCardTitle>
                                    <MDBCardText>Type some text that relates to the above unrelated heading you jusst typed now to make it look good</MDBCardText>
                                    <MDBIcon  icon="arrow-right" className="align-self-end" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </div>
        )
    }
}


export default Features