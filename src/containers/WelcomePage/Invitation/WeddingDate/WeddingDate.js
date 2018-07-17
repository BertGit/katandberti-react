import React from 'react'

import LocalizedStrings from 'react-localization'

import Waypoint from 'react-waypoint'

import './WeddingDate.css'
import '../../../../css/AnimationHelpers.css'
import '../../../../css/animate.css'

let strings = new LocalizedStrings({
    en: {
        june: "JUNI",
        sat: "SAT"
    }, de: {
        june: "JUNI",
        sat: "SA"
    }
})

class WeddingDate extends React.PureComponent {
    state = {
        animated: false
    }
    render() {
        return (
            <div id='wedding-date' className={this.state.animated ? 'animated flipInX' : 'hidden-load'}>
                <div id='wedding-date-desktop' className='wedding-date-specific'>
                    <div className='padding-horizontal-4 date-large'>
                        <span>{strings.june}</span>
                    </div>
                    <div id='date-stacked' className='padding-horizontal-4'>
                        <span>{strings.sat}<br />1</span>
                    </div>
                    <div className='padding-horizontal-4 date-large'>
                        <span>2019</span>
                    </div>
                </div>
                <div id='wedding-date-mobile' className='wedding-date-specific'>
                    <div id='date-stacked'>
                        <span>SAT<br />1</span>
                    </div>
                    <div id='stacked-mobile'>
                        <div className='date-large'>
                            <span>JUNE</span>
                        </div>
                        <div className='date-large'>
                            <span>2019</span>
                        </div>
                    </div>
                </div>
                <Waypoint onEnter={() => { this.setState({ animated: true }) }} />
            </div>
        )
    }
}

export default WeddingDate