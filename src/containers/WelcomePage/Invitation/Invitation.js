import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import LocalizedStrings from 'react-localization'

import WeddingDate from './WeddingDate/WeddingDate'
import Rsvp from './Rsvp/Rsvp'

import './Invitation.css'

import ornament from '../../../assets/images/ornament.png'
import bergeracMap from '../../../assets/images/bergerac-map.png'
import '../../../css/Container.css'
import '../../../css/Spacers.css'

let strings = new LocalizedStrings({
    en: {
        invited: "You're invited to our wedding",
        invitedPlural: "You're invited to our wedding",
        location: "Lalinde, Dordogne-Region, France",
        getInTouch: "Get in touch with us if you have any questions"
    }, de: {
        invited: "Du bist herzlich zu unserer Hochzeit eingeladen",
        invitedPlural: "Ihr seid herzlich zu unserer Hochzeit eingeladen",
        location: "Lalinde, Dordogne-Region, Frankreich",
        getInTouch: "Wir beantworten gerne alle Fragen :)"
    }
})

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
                    <p>{this.props.plural ? strings.invitedPlural : strings.invited}</p>

                    <WeddingDate />

                    <p>{strings.location}</p>
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
                            <br />{strings.getInTouch}
                        </a>
                    </p>
                    <div className='padding-bottom-5' />
                    <div className='padding-bottom-5' />
                </div>
            </div>
        )
    }
}

export default Invitation