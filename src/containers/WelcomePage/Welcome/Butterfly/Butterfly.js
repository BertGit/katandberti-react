import React from 'react'
import { Motion, spring } from 'react-motion';

import './Butterfly.css'
import butterflygif from '../../../../assets/images/butterfly.gif'

class Butterfly extends React.Component {
    butterfly = React.createRef()
    start = null
    prevProgress = 0.0
    duration = 2000
    waitTime = 1000

    componentDidMount() {
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
        setTimeout(() => {
            console.log("Starting the butterfly")
            requestAnimationFrame(this.step)
        }, this.waitTime)
    }

    step = (timestamp) => {
        // Refresh values every time in case user resizes browser window
        var xTarget = this.props.target.x - this.butterfly.current.clientWidth * 1.5
        var yTarget = this.props.target.y
        var verticalDist = (window.innerHeight - yTarget - this.butterfly.current.clientHeight) / 2
        var xStart = this.butterfly.current.offsetLeft
        var yStart = yTarget - Math.cos(Math.PI) * verticalDist
        if (this.start === null) this.start = timestamp
        var progress = Math.min((timestamp - this.start) / this.duration, 1.0)
        if (progress === 1.0) {
            this.butterfly.current.style.left = xTarget
            this.butterfly.current.style.top = yTarget
        }
        if (progress >= this.prevProgress + 0.04) {
            this.prevProgress = progress
            this.butterfly.current.style.left = (xStart + progress * (xTarget - xStart)).toString() + 'px'
            this.butterfly.current.style.top = (yStart + Math.cos(progress * Math.PI) * verticalDist).toString() + 'px'
            this.butterfly.current.style.transform = 'rotate(' + (Math.random() * 30 - 20 + 50 * (1 - progress)) + 'deg)'
        }
        requestAnimationFrame(this.step)
    }

    render() {
        return (
            <div ref={this.butterfly} id='butterfly' >
                <img src={butterflygif} />
            </div >
        )
    }
}

export default Butterfly