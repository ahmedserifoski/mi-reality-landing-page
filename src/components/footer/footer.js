import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBFooter  } from 'mdbreact'
import "./footer.css"
const Footer = () => {
    return(
        <MDBFooter className="footer my-5 grey-text">
        
            <div>
                <MDBBox>Cu qui probo malorum saperet. Ne admodum apeirian iracundia usu, eam cu agam ludus, eum munere accusam molestie ut. Alienum percipitur ne est, pri quando iriure ad.</MDBBox>
                <br/>
                <MDBBox>© 2017 YDirection Themes by IOThemes</MDBBox>
            </div>
           
                <MDBContainer className="mt-5 font-weight-bold">
                    <MDBRow>
                        <MDBCol>
                            <ul>
                                <li className="list-unstyled my-3">
                                    <a className="grey-text" href="#!">About Us</a>
                                </li>
                                <li className="list-unstyled my-3">
                                    <a className="grey-text" href="#!">Product Details</a>
                                </li>
                                <li className="list-unstyled my-3">
                                    <a className="grey-text" href="#!">Pricing</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol>
                            <ul>
                                <li className="list-unstyled my-3">
                                    <a className="grey-text" href="#!">Privacy Policy</a>
                                </li>
                                <li className="list-unstyled my-3">
                                    <a className="grey-text" href="#!">User Agreement</a>
                                </li>
                                <li className="list-unstyled my-3">
                                    <a className="grey-text" href="#!">Contact</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
            
            
        
    )
}

export default Footer