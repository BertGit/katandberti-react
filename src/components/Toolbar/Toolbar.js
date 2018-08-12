import React from 'react'

import LocalizedStrings from 'react-localization'

import './Toolbar.css'
import '../../css/Buttons.css'
import logo from '../../assets/images/logoKB.png'

let strings = new LocalizedStrings({
    en: {
        rsvp: "Event Details"
    }, de: {
        rsvp: "Event Details"
    }
})

class Toolbar extends React.PureComponent {

    toolbarRef = React.createRef();

    componentDidMount = () => {
        this.props.toolbarRendered(this.toolbarRef.current.clientHeight)
    }

    render() {
        return (
            <nav ref={this.toolbarRef} id='toolbar' >
                <img src={logo} className='logo' alt='' />
                <a href='#a-event-details'>
                    <button className='btn btn-dark btn-rsvp'>{strings.rsvp}</button>
                </a>
            </nav>
        )
    }
}

export default Toolbar