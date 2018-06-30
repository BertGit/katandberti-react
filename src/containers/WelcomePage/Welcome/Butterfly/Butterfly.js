import React from 'react'

import './Butterfly.css'
import butterflygif from '../../../../assets/images/butterfly.gif'

class Butterfly extends React.Component {
    butterfly = React.createRef()
    start = null
    interrupt = false
    prevProgress = 0.0
    duration = 2000
    waitTime = 1000
    butterflyStarted = false

    componentDidMount() {
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
        setTimeout(() => {
            console.log("Starting the butterfly")
            this.butterflyStarted = true
            requestAnimationFrame(this.step)
        }, this.waitTime)
    }

    componentWillUnmount() {
        this.interrupt = true
    }

    step = (timestamp) => {
        if (this.interrupt) return
        // Refresh values every time in case user resizes browser window
        var xTarget = this.props.target.x - this.butterfly.current.clientWidth * 1.5
        var yTarget = this.props.target.y
        var verticalDist = (window.innerHeight - yTarget - this.butterfly.current.clientHeight) / 2
        var xStart = this.butterfly.current.offsetLeft
        var yStart = yTarget - Math.cos(Math.PI) * verticalDist
        if (this.start === null) this.start = timestamp
        var progress = Math.min((timestamp - this.start) / this.duration, 1.0)
        if (progress === 1.0 || progress >= this.prevProgress + 0.04) {
            this.prevProgress = progress
            this.butterfly.current.style.left = (xStart + progress * (xTarget - xStart)).toString() + 'px'
            this.butterfly.current.style.top = (yStart + Math.cos(progress * Math.PI) * verticalDist).toString() + 'px'
            if (progress < 1.0) {
                this.butterfly.current.style.transform = 'rotate(' + (Math.random() * 30 - 20 + 50 * (1 - progress)) + 'deg)'
            }
        }
        if (progress < 1.0) {
            requestAnimationFrame(this.step)
        }
    }

    render() {
        console.log("Rendering")
        if (this.butterflyStarted) requestAnimationFrame(this.step)
        return (
            <div ref={this.butterfly} id='butterfly' >
                <img src={butterflygif} alt='' />
            </div >
        )
    }
}

export default Butterfly