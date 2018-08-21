import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import LocalizedStrings from 'react-localization'

import Aux from '../../../hoc/Aux/Aux'

import Waypoint from 'react-waypoint'
import { Link } from 'react-router-dom'
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
    photocircleLeft = React.createRef()
    photocircleRight = React.createRef()

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
                            {/* <a href='#'> */}
                            <Link to='/our-story'>
                                <div ref={this.photocircleLeft} id='about-us-circle' className='kb-circle photo-circle'>
                                    <div className='circle-overlay'>
                                        <span className='circle-content'>MORE ABOUT US</span>
                                    </div>
                                </div>
                            </Link>
                            {/* </a> */}
                            <div ref={this.kbcircle} id='date-circle' className='kb-circle'>
                                <span className='circle-content'> Kat<br />&<br />Berti </span>
                                <div className='padding-vertical-2' />
                                <span> {strings.date} </span>
                            </div>
                            <div ref={this.photocircleRight} id='champagne-circle' className='kb-circle photo-circle' />
                        </div>
                        <Waypoint onEnter={() => {
                            this.kbcircle.current.style.boxShadow = '0 0 0 15px rgba(255,200,73,0.5)'
                            this.photocircleLeft.current.style.transform = 'translateX(0)'
                            window.setTimeout(() => this.photocircleRight.current.style.transform = 'translateX(0)', 500)
                        }} />
                        <div className='padding-vertical-5' />
                    </div>
                </div >
            </Aux>
        )
    }
}

export default SaveTheDate