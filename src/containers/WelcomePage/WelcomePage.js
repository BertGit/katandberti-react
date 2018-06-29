import React from 'react'
import Aux from './../../hoc/Aux/Aux'
import Welcome from './Welcome/Welcome'
import SaveTheDate from './SaveTheDate/SaveTheDate'
import Invitation from './Invitation/Invitation'

class WelcomePage extends React.Component {
    state = {
        userId: null,
        userNames: null
    }

    render() {
        return (
            <Aux>
                <Welcome toolbarHeight={this.props.toolbarHeight} />
                <SaveTheDate toolbarHeight={this.props.toolbarHeight} />
                <Invitation />
            </Aux>
        )
    }
}

export default WelcomePage