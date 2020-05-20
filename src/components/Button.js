import React from "react"

class Button extends React.Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <button>{this.text}</button>
        )
    }
}

export default Button