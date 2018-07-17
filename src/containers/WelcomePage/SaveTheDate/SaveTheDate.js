import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import LocalizedStrings from 'react-localization'

import Aux from '../../../hoc/Aux/Aux'

import Waypoint from 'react-waypoint'
import '../../../css/Container.css'
import '../../../css/Spacers.css'
import './SaveTheDate.css'

let strings = new LocalizedStrings({
    en: {
        saveTheDate: "Save the Date",
        gettingMarried: "We're getting married!",
        date: "1 June 2019"
    }, de: {
        saveTheDate: "Save the Date",
        gettingMarried: "Wir heiraten!",
        date: "1 Juni 2019"
    }
})

class SaveTheDate extends React.PureComponent {
    kbcircle = React.createRef()

    render() {
        return (
            <Aux>
                <ScrollableAnchor id={'a-save-the-date'}><div /></ScrollableAnchor>
                <div id='save-the-date' style={{ minHeight: `calc(100vh - ${this.props.toolbarHeight}px` }} >
                    <div className='container'>
                        <div className='padding-vertical-5' />
                        <h1 className='white-text-with-shadow'>{strings.saveTheDate}</h1>
                        <h2 className='white-text-with-shadow'>{strings.gettingMarried}</h2>
                        <div className='padding-vertical-5' />
                        <div id='kb-circle-row'>
                            <div ref={this.kbcircle} id='kb-circle'>
                                <span> Kat<br />&<br />Berti </span>
                                <div className='padding-vertical-2' />
                                <span> {strings.date} </span>
                            </div>
                        </div>
                        <Waypoint onEnter={() => {
                            this.kbcircle.current.style.boxShadow = '0 0 0 15px rgba(255,200,73,0.5)'
                        }} />
                        <div className='padding-vertical-5' />
                    </div>
                </div >
            </Aux>
        )
    }
}

export default SaveTheDate