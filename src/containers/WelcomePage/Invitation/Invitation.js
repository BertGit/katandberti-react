import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import WeddingDate from './WeddingDate/WeddingDate'
import Rsvp from './Rsvp/Rsvp'

import './Invitation.css'

import ornament from '../../../assets/images/ornament.png'
import bergeracMap from '../../../assets/images/bergerac-map.png'
import '../../../css/Container.css'
import '../../../css/Spacers.css'

class Invitation extends React.PureComponent {
    render() {
        console.log("Invitation", this.props)
        return (
            <div id='invitation'>
                <div id='ornaments'>
                    <img className='top-right' src={ornament} alt='' />
                    <img className='bottom-left' src={ornament} alt='' />
                </div>
                <div className='container'>
                    <div className='padding-vertical-5' />
                    <p>You're invited to our wedding</p>

                    <WeddingDate />

                    <p>Lalinde, Dordogne-Region, France</p>
                    <div id='bergerac-map' className='padding-vertical-2'>
                        <a href='https://goo.gl/maps/nBwZWof8cdn' target='blank'>
                            <img src={bergeracMap} alt='' />
                        </a>
                    </div>

                    <ScrollableAnchor id={'a-rsvp'}><div /></ScrollableAnchor>
                    <Rsvp userId={this.props.userId} names={this.props.names} rsvp={this.props.rsvp} />

                    <p id='contact'>
                        <a href='mailto:kathryne.leigh@gmail.com,bertram.jeremy.mueller@gmail.com?Subject=Wedding Questions' target='_top'>
                            <i className='fa fa-envelope'></i>
                            <br />Get in touch with us if you have any questions
                        </a>
                    </p>
                    <div className='padding-bottom-5' />
                </div>
            </div>
        )
    }
}

export default Invitation