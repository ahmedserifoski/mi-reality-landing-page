import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import './Lead.css'

class Lead extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='top-menu-lead'>
                <FontAwesomeIcon icon={faDiceD20} className="icon" /> {this.text}
            </div>
        )
    }
}

export default Lead;