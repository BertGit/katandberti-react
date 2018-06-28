import React from 'react'

import './Toolbar.css'
import '../../css/Buttons.css'
import logo from '../../assets/images/logoKB.png'

const toolbar = (props) => {
    return (
        <nav id='toolbar'>
            <img src={logo} className='logo' />
            <a href='#rsvp'>
                <button className='btn btn-dark btn-rsvp'>r.s.v.p</button>
            </a>
        </nav>
    )
}

export default toolbar