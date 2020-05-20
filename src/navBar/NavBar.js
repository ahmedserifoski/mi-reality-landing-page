import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import Item from './item/Item'
import Lead from './lead/Lead'

import './NavBar.css'

class TopMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu_class: '',
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class: 'toggled',
      })
    } else {
      this.setState({
        menu_class: '',
      })
    }
  }


  render = () => {
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
        <div>
          
            <div className={top_menu_class} >
              <Lead text="mi reality" />
              <div className='right'>
                <Item text='Home' />
                <Item text='Specs' />
                <Item text='Features' />
                <Item text='Reviews' />
                <Item text='Pricing' />
                <Item text='Buy Now' style={{color: '#00ff00'}} />
              </div>
              <FontAwesomeIcon icon={faBars} size="4x" style={{color: '#00ff00'}} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
              <div className='clear-fix' />
            </div>
          
          
        </div>
    )
  }
}

export default TopMenu;