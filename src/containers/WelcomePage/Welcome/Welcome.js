import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Butterfly from './Butterfly/Butterfly'
import '../../../css/Container.css'
import '../../../css/Spacers.css'
import './Welcome.css'

import rings from '../../../assets/images/rings.png'

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
        return (
            <Aux>
                <div id='personalised' className='container' style={{ minHeight: `calc(100vh - 2*${this.props.toolbarHeight}px` }}>
                    <img id='rings' src={rings} alt='' />
                    <div className='padding-vertical-2' />
                    <h1 id='guest-name' className={!!this.props.names ? 'animated fadeIn' : 'hidden-load'}>
                        {!!this.props.names ? this.props.names.join(' & ') : '...'}
                    </h1>
                    <h2 id='guest-intro'>
                        We'd love for you to celebrate with us on our special day
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