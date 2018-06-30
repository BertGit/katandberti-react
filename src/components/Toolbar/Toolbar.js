import React from 'react'

import './Toolbar.css'
import '../../css/Buttons.css'
import logo from '../../assets/images/logoKB.png'

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
                    <a href='#rsvp'>
                        <button className='btn btn-dark btn-rsvp'>r.s.v.p</button>
                    </a>
                    : null}
            </nav>
        )
    }
}

export default Toolbar