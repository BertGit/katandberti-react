import React from 'react'
import LocalizedStrings from 'react-localization'

import Aux from '../../../../hoc/Aux/Aux'
import Spinner from '../../../../components/Spinner/Spinner'

import firebase from '../../../../firebase'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import './Rsvp.css'
import '../../../../css/animate.css'
import '../../../../css/Buttons.css'

let strings = new LocalizedStrings({
    en: {
        accepted: "Great you think you can make it. More details to come soon.",
        acceptedPlural: "Great you think you can make it. More details to come soon.",
        declined: "Sorry you can't make it to the event. Thanks for letting us know.",
        declinedPlural: "Sorry you can't make it to the event. Thanks for letting us know.",
        helpus: "We know it's early days, but by choosing one of the following options you can help us with our plans",
        helpusPlural: "We know it's early days, but by choosing one of the following options you can help us with our plans",
        btnAccept: "Great! Looking forward to it",
        btnAcceptPlural: "Great! Looking forward to it",
        btnDecline: "Sorry I can't make it",
        btnDeclinePlural: "Sorry we can't make it",
        comment: "Thanks for letting us know. Feel free to leave us a comment:",
        sendComment: "Send Comment",
        sweet: "Sweet!",
        commentReceived: "We've received your comment"
    }, de: {
        accepted: "Es freut uns, dass Du kommen kannst. Weitere Informationen folgen bald.",
        acceptedPlural: "Es freut uns, dass Ihr kommen könnt. Weitere Informationen folgen bald.",
        declined: "Schade, dass Du nicht kommen kannst. Vielen Dank fürs Bescheid geben.",
        declinedPlural: "Schade, dass Ihr nicht kommen könnt. Vielen Dank fürs Bescheid geben.",
        helpus: "Es ist noch etwas Zeit bis zum Hochzeitstermin, aber Du könntest uns mit unserer Planung helfen, indem Du eine der Optionen wählst",
        helpusPlural: "Es ist noch etwas Zeit bis zum Hochzeitstermin, aber Ihr könntet uns mit unserer Planung helfen, indem Ihr eine der Optionen wählt",
        btnAccept: "Prima, ich bin dabei",
        btnAcceptPlural: "Prima, wir sind dabei",
        btnDecline: "Ich schaffe es leider nicht",
        btnDeclinePlural: "Wir schaffen es leider nicht",
        comment: "Danke fürs Bescheid geben. Hinterlasse uns gerne eine Nachricht:",
        sendComment: "Senden",
        sweet: "Prima!",
        commentReceived: "Wir haben Deine Nachricht erhalten"
    }
})

class Rsvp extends React.Component {
    textarea = React.createRef()

    state = {
        rsvpState: 'VOTE',
        loading: false
    }

    vote = (accepted) => {
        this.setState({ loading: true })
        firebase.database().ref('guests/' + this.props.userId + '/rsvp').set(
            accepted ? 'ACCEPTED' : 'DECLINED'
        ).then(this.setState({ rsvpState: 'COMMENT', loading: false }))
    }

    componentDidUpdate() {
        if (this.state.rsvpState === 'COMMENT') {
            setTimeout(() => goToAnchor('a-comment'), 100)
        }
    }

    comment = () => {
        if (this.textarea.current.value !== "") {
            this.setState({ loading: true })
            firebase.database().ref('guests/' + this.props.userId + '/comment').set(
                this.textarea.current.value
            ).then(this.setState({ rsvpState: 'COMMENTED', loading: false }))
        }
    }

    render() {
        console.log("Rendering RSVP")
        if (this.state.loading) {
            return <Spinner />
        }
        if (this.props.rsvp === 'ACCEPTED') {
            return (<p>{this.props.plural ? strings.acceptedPlural : strings.accepted}</p>)
        } else if (this.props.rsvp === 'DECLINED') {
            return (<p>{this.props.plural ? strings.declinedPlural : strings.declined}</p>)
        } else if (this.props.rsvp === 'NA') {
            let content = null
            if (this.state.rsvpState === 'VOTE') {
                content = (
                    <Aux>
                        <p>{this.props.plural ? strings.helpusPlural : strings.helpus}</p>
                        <div className='button-group'>
                            <div className='button-col'>
                                {<button onClick={() => this.vote(true)} className='btn btn-light btn-block'>{this.props.plural ? strings.btnAcceptPlural : strings.btnAccept}</button>}
                            </div>
                            <div className='button-col'>
                                <button onClick={() => this.vote(false)} className='btn btn-light btn-block'>{this.props.plural ? strings.btnDeclinePlural : strings.btnDecline}</button>
                            </div>
                        </div>
                    </Aux>
                )
            } else if (this.state.rsvpState === 'COMMENT') {
                content = (
                    <Aux>
                        <ScrollableAnchor id={'a-comment'}><div /></ScrollableAnchor>
                        <div className='row animated fadeIn'>
                            <p>{strings.comment}</p>
                            <div id='comment-box'>
                                <textarea ref={this.textarea} />
                                <div className='comment-btn'>
                                    <button onClick={this.comment} className='btn btn-light'>{strings.sendComment}</button>
                                </div>
                            </div>
                        </div>
                    </Aux>
                )
            } else if (this.state.rsvpState === 'COMMENTED') {
                content = (
                    <div id='comment-received' className='alert alert-success animated fadeIn'>
                        <strong>{strings.sweet}</strong> {strings.commentReceived}
                    </div>
                )
            }
            return (
                <div className='row animated fadeIn'>
                    {content}
                </div>
            )
        } else {
            return null
        }
    }
}

export default Rsvp