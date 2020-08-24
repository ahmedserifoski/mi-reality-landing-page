import React from "react"
import { MDBBox, MDBContainer, MDBFooter, MDBListGroup, MDBListGroupItem  } from 'mdbreact'
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