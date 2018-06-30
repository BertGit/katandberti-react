import React from 'react'
import Aux from './../../hoc/Aux/Aux'
import Welcome from './Welcome/Welcome'
import SaveTheDate from './SaveTheDate/SaveTheDate'
import Invitation from './Invitation/Invitation'
import firebase from '../../firebase'

class WelcomePage extends React.Component {
    state = {
        userNames: null,
        rsvp: null
    }

    componentDidMount = () => {
        if (!!this.props.userId) {
            const guestsRef = firebase.database().ref('guests/' + this.props.userId)
            guestsRef.once('value', (data) => {
                this.setState({
                    userNames: data.val().names,
                    rsvp: data.val().rsvp || null
                })
            })
        }
    }

    render() {
        return (
            <Aux>
                <Welcome toolbarHeight={this.props.toolbarHeight} names={!!this.props.userId ? this.state.userNames : ['Dear Guest']} rsvp={this.state.rsvp} />
                <SaveTheDate toolbarHeight={this.props.toolbarHeight} />
                <Invitation userId={this.props.userId} rsvp={this.state.rsvp} />
            </Aux>
        )
    }
}

export default WelcomePage