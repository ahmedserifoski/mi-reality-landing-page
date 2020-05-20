import React from "react"

import "./Button.css"

class Button extends React.Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <button className="but">{this.text}</button>
        )
    }
}

export default Button