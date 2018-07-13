import React from 'react'

import LocalizedStrings from 'react-localization'

import './Toolbar.css'
import '../../css/Buttons.css'
import logo from '../../assets/images/logoKB.png'

let strings = new LocalizedStrings({
    en: {
        rsvp: "r.s.v.p"
    }, de: {
        rsvp: "Rückmeldung"
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
                {this.props.showRsvp ?
                    <a href='#a-rsvp'>
                        <button className='btn btn-dark btn-rsvp'>{strings.rsvp}</button>
                    </a>
                    : null}
            </nav>
        )
    }
}

export default Toolbar