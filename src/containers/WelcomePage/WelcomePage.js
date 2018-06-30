import React from 'react'
import { Redirect } from 'react-router-dom'
import { configureAnchors } from 'react-scrollable-anchor'

import Aux from './../../hoc/Aux/Aux'
import Welcome from './Welcome/Welcome'
import SaveTheDate from './SaveTheDate/SaveTheDate'
import Invitation from './Invitation/Invitation'
import firebase from '../../firebase'

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
                    this.setState({
                        userNames: data.val().names,
                        rsvp: data.val().rsvp
                    })
                } else {
                    this.setState({
                        validUser: false
                    })
                }
            })
        }
    }

    componentWillReceiveProps = (nextProps) => {
        configureAnchors({ offset: -nextProps.toolbarHeight })
    }

    render() {
        if (this.state.validUser) {
            return (
                < Aux >
                    <Welcome toolbarHeight={this.props.toolbarHeight} names={!!this.props.userId ? this.state.userNames : ['Dear Guest']} rsvp={this.state.rsvp} />
                    <SaveTheDate toolbarHeight={this.props.toolbarHeight} />
                    <Invitation userId={this.props.userId} rsvp={this.state.rsvp} />
                </Aux >
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

export default WelcomePage