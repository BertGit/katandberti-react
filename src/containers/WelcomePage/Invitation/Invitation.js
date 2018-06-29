import React from 'react'

import WeddingDate from './WeddingDate/WeddingDate'
import Rsvp from './Rsvp/Rsvp'

import './Invitation.css'

import ornament from '../../../assets/images/ornament.png'
import bergeracMap from '../../../assets/images/bergerac-map.png'
import '../../../css/Container.css'
import '../../../css/Spacers.css'

class Invitation extends React.PureComponent {
    render() {
        return (
            <div id='invitation'>
                <div id='ornaments'>
                    <img className='top-right' src={ornament} />
                    <img className='bottom-left' src={ornament} />
                </div>
                <div className='container'>
                    <div className='padding-vertical-5' />
                    <p>You're invited to our wedding</p>

                    <WeddingDate />

                    <div>
                        <p>Lalinde, Dordogne-Region, France</p>
                    </div>
                    <div id='bergerac-map' className='padding-vertical-2'>
                        <a href='https://goo.gl/maps/nBwZWof8cdn' target='blank'>
                            <img src={bergeracMap} />
                        </a>
                    </div>

                    <Rsvp />

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