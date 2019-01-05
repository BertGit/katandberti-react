import React from 'react'
import { Redirect } from 'react-router-dom'

import firebase from '../../firebase'

import "./Rsvp.css"
import '../../css/Spacers.css'

class Rsvp extends React.Component {
    state = {
        validUser: true,
        userNames: null,
        rsvp: null
    }

    componentDidMount = () => {
        if (!!this.props.userId) {
            const guestsRef = firebase.database().ref('guests/' + this.props.userId)
            guestsRef.once('value', (data) => {
                if (data.val()) {
                    console.log('Received data from server', data.val())
                    firebase.database().ref('guests/' + this.props.userId + '/final-rsvp/visited').set("TRUE")
                    this.setState({
                        userNames: data.val().names,
                        rsvp: data.val().rsvp || "NA"
                    })
                } else {
                    this.setState({
                        validUser: false
                    })
                }
            })
        }
    }

    render() {
        if (this.state.validUser) {
            console.log(this.props.toolbarHeight)
            return (
                <div id='final-rsvp'>
                    HELLO
                </div >
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

export default Rsvp

