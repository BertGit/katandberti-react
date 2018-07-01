import React from 'react'

import Aux from '../../../../hoc/Aux/Aux'

import './Rsvp.css'
import '../../../../css/Buttons.css'

class Rsvp extends React.Component {
    state = {
        rsvpState: 'CHOOSE'
    }
    render() {
        console.log(this.props.rsvp)
        if (this.props.rsvp === 'ACCEPTED') {
            return (<p> Great that you think you can make it. More details to come soon. </p>)
        } else if (this.props.rsvp === 'DECLINED') {
            return (<p>Sorry you can't make it to the event. Thanks for letting us know.</p>)
        } else if (this.props.rsvp === 'NA') {
            let content = null
            if (this.state.rsvpState === 'CHOOSE') {
                content = (
                    <Aux>
                        <p> We know it's early days, but by choosing one of the following options you can help us with our plans</p>
                        <div className='button-group'>
                            <div className='button-col'>
                                {<button className='btn btn-light btn-block'>Great! Looking forward to it</button>}
                            </div>
                            <div className='button-col'>
                                <button className='btn btn-light btn-block'>Sorry, {this.props.names && this.props.names.length === 1 ? 'I' : 'we'} can't make it</button>
                            </div>
                        </div>
                    </Aux>
                )
            } else if (this.state.rsvpState === 'COMMENT') {
                content = (
                    <Aux>
                        <p>Thanks for letting us know. We'll be in touch soon with more info.</p>
                        <p>Feel free to leave us a comment:</p>
                        <div id='comment-box'>
                            <textarea />
                            <div className='comment-btn'>
                                <button className='btn btn-light'>Send Comment</button>
                            </div>
                        </div>
                    </Aux>
                )
            } else if (this.state.rsvpState === 'COMMENTED') {
                content = (
                    <div id='comment-received' className='alert alert-success'>
                        <strong>Sweet!</strong> We've received your comment
                    </div>
                )
            }
            return (
                <div id='rsvp'>
                    {content}
                </div>
            )
        } else {
            return null
        }
    }
}

export default Rsvp