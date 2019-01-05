import React from 'react'

import LocalizedStrings from 'react-localization'
import ReactResizeDetector from 'react-resize-detector';
import Aux from '../../hoc/Aux/Aux'

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
    render() {
        return (
            <Aux>
                <nav id='toolbar' >
                    <div id='toolbar-inner'>
                        <img src={logo} className='logo' alt='' />
                        <a href='/#a-event-details'>
                            <button className='btn btn-dark btn-rsvp'>{strings.rsvp}</button>
                        </a>
                    </div>
                </nav>
                <ReactResizeDetector resizableElementId="toolbar" handleWidht handleHeight onResize={(_, height) => this.props.toolbarRendered(height)} />
            </Aux>
        )
    }
}

export default Toolbar