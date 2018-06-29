import React from 'react'

import WeddingDate from './WeddingDate/WeddingDate'

import './Invitation.css'

import ornament from '../../../assets/images/ornament.png'
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
                </div>
                <WeddingDate />
            </div>
        )
    }
}

export default Invitation