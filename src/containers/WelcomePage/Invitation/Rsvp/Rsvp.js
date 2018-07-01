import React from 'react'

import Aux from '../../../../hoc/Aux/Aux'
import Spinner from '../../../../components/Spinner/Spinner'

import firebase from '../../../../firebase'
import ScrollableAnchor, { goToAnchor, goToTop } from 'react-scrollable-anchor'

import './Rsvp.css'
import '../../../../css/animate.css'
import '../../../../css/Buttons.css'

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

    comment = (event, val) => {
        this.setState({ loading: true })
        firebase.database().ref('guests/' + this.props.userId + '/comment').set(
            this.textarea.current.value
        ).then(this.setState({ rsvpState: 'COMMENTED', loading: false }))
    }

    render() {
        console.log("Rendering RSVP")
        if (this.state.loading) {
            return <Spinner />
        }
        if (this.props.rsvp === 'ACCEPTED') {
            return (<p> Great that you think you can make it. More details to come soon. </p>)
        } else if (this.props.rsvp === 'DECLINED') {
            return (<p>Sorry you can't make it to the event. Thanks for letting us know.</p>)
        } else if (this.props.rsvp === 'NA') {
            let content = null
            if (this.state.rsvpState === 'VOTE') {
                content = (
                    <Aux>
                        <p> We know it's early days, but by choosing one of the following options you can help us with our plans</p>
                        <div className='button-group'>
                            <div className='button-col'>
                                {<button onClick={() => this.vote(true)} className='btn btn-light btn-block'>Great! Looking forward to it</button>}
                            </div>
                            <div className='button-col'>
                                <button onClick={() => this.vote(false)} className='btn btn-light btn-block'>Sorry, {this.props.names && this.props.names.length === 1 ? 'I' : 'we'} can't make it</button>
                            </div>
                        </div>
                    </Aux>
                )
            } else if (this.state.rsvpState === 'COMMENT') {
                content = (
                    <Aux>
                        <ScrollableAnchor id={'a-comment'}><div /></ScrollableAnchor>
                        <div className='row animated fadeIn'>
                            <p>Thanks for letting us know. Feel free to leave us a comment:</p>
                            <div id='comment-box'>
                                <textarea ref={this.textarea} />
                                <div className='comment-btn'>
                                    <button onClick={this.comment} className='btn btn-light'>Send Comment</button>
                                </div>
                            </div>
                        </div>
                    </Aux>
                )
            } else if (this.state.rsvpState === 'COMMENTED') {
                content = (
                    <div id='comment-received' className='alert alert-success animated fadeIn'>
                        <strong>Sweet!</strong> We've received your comment
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