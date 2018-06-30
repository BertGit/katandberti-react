import React from 'react'

import './Rsvp.css'

class Rsvp extends React.Component {
    render() {
        if (this.props.rsvp === 'ACCEPTED') {
            return (<p> Great that you think you can make it. More details to come soon. </p>)
        } else if (this.props.rsvp === 'DECLINED') {
            return (<p>Sorry you can't make it to the event. Thanks for letting us know.</p>)
        } else {
            return null
        }
    }
}

export default Rsvp