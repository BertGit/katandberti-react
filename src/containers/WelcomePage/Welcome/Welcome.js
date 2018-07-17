import React from 'react'
import LocalizedStrings from 'react-localization'

import Aux from '../../../hoc/Aux/Aux'
import Butterfly from './Butterfly/Butterfly'
import '../../../css/Container.css'
import '../../../css/Spacers.css'
import './Welcome.css'

import rings from '../../../assets/images/rings.png'

let strings = new LocalizedStrings({
    en: {
        intro: "We'd love for you to celebrate with us on our special day",
        introPlural: "We'd love for you to celebrate with us on our special day"
    }, de: {
        intro: "Wir würden uns sehr freuen, mit Dir unseren besonderen Tag zu feiern",
        introPlural: "Wir würden uns sehr freuen, mit Euch unseren besonderen Tag zu feiern"
    }
})

class Welcome extends React.Component {
    state = {
        butterflyTarget: {
            x: 0, y: 0
        }
    }
    angleDown = React.createRef()
    butterflyOffset = 30

    componentDidMount = () => {
        this.updateButterflyTarget()
        window.addEventListener("resize", this.updateButterflyTarget)
    }

    componentDidUpdate() {
        if (this.state.butterflyTarget.y !== this.angleDown.current.offsetTop + this.butterflyOffset) {
            setTimeout(this.updateButterflyTarget, 100)
        }
    }

    updateButterflyTarget = () => {
        console.log('Butterfly top offset', this.angleDown.current.offsetTop)
        this.setState({
            butterflyTarget: {
                x: this.angleDown.current.offsetLeft,
                y: this.angleDown.current.offsetTop + this.butterflyOffset
            }
        })
    }

    render() {
        let title = '...'
        if (!!this.props.names) {
            if (this.props.names.length >= 2) {
                title = [this.props.names.slice(0, -1).join(', '), this.props.names.slice(-1)].join(' & ')
            } else {
                title = this.props.names.join(' & ')
            }
        }
        return (
            <Aux>
                <div id='personalised' className='container' style={{ minHeight: `calc(100vh - 2*${this.props.toolbarHeight}px` }}>
                    <img id='rings' src={rings} alt='' />
                    <div className='padding-vertical-2' />
                    <h1 id='guest-name' className={!!this.props.names ? 'animated fadeIn' : 'hidden-load'}>
                        {title}
                    </h1>
                    <div className='padding-vertical-2' />
                    <h2 id='guest-intro'>
                        {this.props.plural ? strings.introPlural : strings.intro}
                    </h2>
                    <a href='#a-save-the-date'>
                        <i ref={this.angleDown} id='angle-down' className='fa fa-chevron-down' />
                    </a>
                </div>
                <div style={{ height: `${this.props.toolbarHeight}px` }}></div>
                <Butterfly target={this.state.butterflyTarget} />
            </Aux>
        )
    }
}

export default Welcome