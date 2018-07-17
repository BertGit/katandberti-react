import React from 'react'
import { Redirect } from 'react-router-dom'
import LocalizedStrings from 'react-localization'

import Aux from './../../hoc/Aux/Aux'
import Welcome from './Welcome/Welcome'
import SaveTheDate from './SaveTheDate/SaveTheDate'
import Invitation from './Invitation/Invitation'
import firebase from '../../firebase'

let strings = new LocalizedStrings({
    en: {
        defaultGuest: "Dear Guest"
    }, de: {
        defaultGuest: "Lieber Gast"
    }
})

class WelcomePage extends React.Component {
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
            let plural = !!this.state.userNames && (this.state.userNames.length > 1 || this.state.userNames[0].toLowerCase().includes("family"))
            return (
                < Aux >
                    <Welcome
                        toolbarHeight={this.props.toolbarHeight}
                        names={!!this.props.userId ? this.state.userNames : [strings.defaultGuest]}
                        plural={plural}
                        rsvp={this.state.rsvp} />
                    <SaveTheDate
                        toolbarHeight={this.props.toolbarHeight} />
                    <Invitation
                        userId={this.props.userId}
                        names={this.props.names}
                        plural={plural}
                        rsvp={this.state.rsvp} />
                </Aux >
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

export default WelcomePage