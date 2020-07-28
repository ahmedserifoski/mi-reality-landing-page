import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBListGroup, MDBListGroupItem  } from 'mdbreact'
import "./footer.css"
const Footer = () => {
    return(
        <MDBFooter style={{color: "black"}} className="text-center p-3 grey lighten-4" >
        
            <div>
                <MDBBox>Cu qui probo malorum saperet. Ne admodum apeirian iracundia usu, eam cu agam ludus, eum munere accusam molestie ut. Alienum percipitur ne est, pri quando iriure ad.</MDBBox>
                <br/>
                <MDBBox>© 2017 YDirection Themes by IOThemes</MDBBox>
            </div>
           
                <MDBContainer >
                    {/* <MDBRow className="text-center">
                        <MDBCol xs="12" style={{backgroundColor: "yellow"}}>
                            <ul >
                                <li className="list-unstyled my-3" >
                                    <a className="grey-text"  href="#!">About Us</a>
                                </li >
                                <li className="list-unstyled my-3" >
                                    <a className="grey-text" href="#!">Product Details</a>
                                </li >
                                <li className="list-unstyled my-3" >
                                    <a className="grey-text"  href="#!">Pricing</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol xs="12" style={{backgroundColor: "yellow"}}>
                            <ul >
                                <li className="list-unstyled my-3" >
                                    <a className="grey-text" href="#!">Privacy Policy</a>
                                </li >
                                <li className="list-unstyled my-3" >
                                    <a className="grey-text" href="#!">User Agreement</a>
                                </li >
                                <li className="list-unstyled my-3" >
                                    <a className="grey-text"  href="#!">Contact</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow> */}
                    <MDBListGroup style={{color: "black"}}>
                        <MDBListGroupItem >Home</MDBListGroupItem>
                        <MDBListGroupItem >Features</MDBListGroupItem>
                        <MDBListGroupItem >Specs</MDBListGroupItem>
                        <MDBListGroupItem >Subscribe</MDBListGroupItem>
                        <MDBListGroupItem >About us</MDBListGroupItem>
                    </MDBListGroup>
                </MDBContainer>
            </MDBFooter>
            
            
        
    )
}

export default Footer