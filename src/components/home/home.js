import React from "react"

import "./home.css"
import Button from "../Button"

class Home extends React.Component {

    

    render() {
        return (
            <div className="home">
                <h1 className="mi-reality">Mi reality is now going virtual</h1>
                <p className="p-home">Best in class virtual reaity gear to make your everyday experience great. Go check it out!</p>
                <Button text="Buy Now" className="but-home"/>
                <img src="product.png" alt="Virtual Head Set"/>
            </div>
        )
    }
}

export default Home