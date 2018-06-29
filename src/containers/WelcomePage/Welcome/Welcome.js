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

    componentDidMount = () => {
        this.updateButterflyTarget()
        window.addEventListener("resize", this.updateButterflyTarget)
    }

    updateButterflyTarget = () => {
        this.setState({
            butterflyTarget: {
                x: this.angleDown.current.offsetLeft,
                y: this.angleDown.current.offsetTop
            }
        })
    }

    render() {
        return (
            <Aux>
                <div id='personalised' className='container' style={{ minHeight: `calc(100vh - 2*${this.props.toolbarHeight}px` }}>
                    <img id='rings' src={rings} />
                    <div className='padding-vertical-2' />
                    <h1 id='guest-name'>
                        {this.props.names ? this.props.names : 'Dear Guest'}
                    </h1>
                    <h2 id='guest-intro'>
                        We'd love for you to celebrate with us on our special day
                    </h2>
                    <a href='#marriage'>
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