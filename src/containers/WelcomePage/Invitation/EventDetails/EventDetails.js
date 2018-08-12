import React from 'react'
import TabLink from './TabLink/TabLink'
import LocationAndTravel from './LocationAndTravel/LocationAndTravel'
import VenueAndAccommodation from './VenueAndAccommodation/VenueAndAccommodation'
import TheDay from './TheDay/TheDay'
import LocalizedStrings from 'react-localization'

import './EventDetails.css'
import '../../../../css/animate.css'
import '../../../../css/Buttons.css'
import '../../../../css/Container.css'

import ornament from '../../../../assets/images/ornament.png'

class EventDetails extends React.Component {
    state = {
        selectedLink: 2
    }

    switchContent(link) {
        this.setState({
            selectedLink: link
        })
    }

    render() {
        const selectedComponent = (() => {
            switch (this.state.selectedLink) {
                case 0: return <LocationAndTravel />
                case 1: return <VenueAndAccommodation />
                case 2: return <TheDay />
            }
        })()
        return (
            <div id='the-details' className='container'>
                <h1><img src={ornament} /><span>The Details</span><img src={ornament} /></h1>
                <div id='tabs-bar'>
                    <TabLink title='Location & Travel' isActive={this.state.selectedLink === 0} clicked={() => this.switchContent(0)} />
                    <TabLink title='The Venue & Accommodation' isActive={this.state.selectedLink === 1} clicked={() => this.switchContent(1)} />
                    <TabLink title='The Day' isActive={this.state.selectedLink === 2} clicked={() => this.switchContent(2)} />
                </div>
                {selectedComponent}
            </div>
        )
    }
}

export default EventDetails