import React from 'react'
import { Redirect } from 'react-router-dom'
import RadioButton from './RadioButton/RadioButton'

import firebase from '../../firebase'

import "./Rsvp.css"
import '../../css/Spacers.css'
import rings from '../../assets/images/rings.png'
import disco from '../../assets/images/disco.png'
import logo from '../../assets/images/logoKB.png'
import NumberSelector from './NumberSelector/NumberSelector';
import Aux from '../../hoc/Aux/Aux'

let defaultRsvp = {
    selection: "accepted",
    names: "",
    numAttending: 0,
    numVegetarians: 0,
    otherInfo: ""
}

class Rsvp extends React.Component {
    state = {
        validUser: true,
        userNames: null,
        flipState: true,
        rsvp: defaultRsvp
    }

    componentDidMount = () => {
        if (!!this.props.userId) {
            const guestsRef = firebase.database().ref('guests/' + this.props.userId)
            guestsRef.once('value', (data) => {
                if (data.val()) {
                    console.log('Received data from server', data.val())
                    firebase.database().ref('guests/' + this.props.userId + '/finalRsvp/visited').set("TRUE")
                    this.setState({
                        userNames: data.val().names,
                        rsvp: { ...data.val().finalRsvp, ...defaultRsvp }
                    })
                } else {
                    this.setState({
                        validUser: false
                    })
                }
            })
        }
        // setInterval(() => {
        //     this.setState({ flipState: !this.state.flipState })
        // }, 5000)
    }

    render() {
        if (this.state.validUser) {
            return (
                <Aux>
                    <div id='final-rsvp'>
                        <div className={"card " + (this.state.flipState ? "flipped" : "")} >
                            <div className={"page-wrapper " + (this.state.flipState ? "flipped" : "")} >
                                <div className="page page1">
                                    <div className="page1-front">
                                        <div className="page1-frame">
                                            <div className="invited">
                                                You are invited to the wedding of
                                            </div>
                                            <div className="katandberti">
                                                <span>KATHRYNE HARRIS</span>
                                                <span className="ampersand">&</span>
                                                <span>BERTI MÜLLER</span>
                                            </div>
                                            <div className="timeandplace">SATURDAY THE FIRST OF JUNE 2019<br />DORDOGNE VALLEY, FRANCE</div>
                                            <div className="rings">
                                                <img src={rings} alt='' />
                                            </div>
                                            <div className="agenda">
                                                <span>13.30 Ceremony - St Catherine’s Church, Limueil</span>
                                                <span>15.00 Wedding Reception - Les Magnolias, Lalinde</span>
                                            </div>
                                            <div className="footer">
                                                <a href='/#a-event-details'>More details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="page1-back">
                                        <div>
                                            <h1>Thanks!</h1>
                                            We have received your response
                                            <img src={logo} />
                                        </div>
                                        <div className="eventInfo">
                                            Find all the information you'll need for the event here
                                            <a href='/#a-event-details'>
                                                <button className="btn btn-outline">EVENT DETAILS</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-wrapper">
                                <div className="page page2" >
                                    <h1>RSVP</h1>
                                    <h2>PLEASE REPLY BY 1ST MARCH 2019</h2>
                                    <div className="disco">
                                        <img src={disco} alt='' />
                                    </div>
                                    <div className="joinus">
                                        Join us for our ceremony, dinner, drinks and dance
                                    </div>
                                    <input placeholder="Enter name/s here" value={this.state.rsvp.names} onChange={this.changeNames} />
                                    <div className="attendance">
                                        <RadioButton selected={this.state.rsvp.selection === "accepted"} label="Will attend with pleasure" clicked={() => this.willAttend(true)} />
                                        <RadioButton selected={this.state.rsvp.selection === "declined"} label="Must decline with regret" clicked={() => this.willAttend(false)} />
                                        <NumberSelector label="Total number attending" value={this.state.rsvp.numAttending} numberChanged={this.numAttendingChanged} />
                                    </div>
                                    <div className="diet">
                                        <h2>DIETARY REQUIREMENTS</h2>
                                        <NumberSelector label="How many vegetarians are in your party?" value={this.state.rsvp.numVegetarians} numberChanged={this.numVegetariansChanged} />
                                        <label>Anything else we need to know about?</label>
                                        <input placeholder="Allergies, etc." value={this.state.rsvp.otherInfo} onChange={this.changeOtherInfo} />
                                    </div>
                                    <button className="btn btn-dark">Send my RSVP</button>
                                </div>
                            </div>
                        </div>
                    </div >
                </Aux >
            )
        } else {
            return <Redirect to='/' />
        }
    }

    willAttend = (yesno) => {
        this.setState({
            rsvp: {
                ...this.state.rsvp,
                selection: yesno ? "accepted" : "declined"
            }
        })
    }

    changeNames = (inputElement) => {
        this.setState({
            rsvp: {
                ...this.state.rsvp,
                names: inputElement.target.value
            }
        })
    }

    numAttendingChanged = (numAttending) => {
        this.setState({
            rsvp: {
                ...this.state.rsvp,
                numAttending
            }
        })
    }

    numVegetariansChanged = (numVegetarians) => {
        this.setState({
            rsvp: {
                ...this.state.rsvp,
                numVegetarians
            }
        })
    }

    changeOtherInfo = (inputElement) => {
        this.setState({
            rsvp: {
                ...this.state.rsvp,
                otherInfo: inputElement.target.value
            }
        })
    }
}

export default Rsvp

