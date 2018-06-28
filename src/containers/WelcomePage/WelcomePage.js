import React from 'react'
import Welcome from './Welcome/Welcome'

class WelcomePage extends React.Component {
    state = {
        userId: null,
        userNames: null
    }

    render() {
        return (
            <Welcome toolbarHeight={this.props.toolbarHeight} />
        )
    }
}

export default WelcomePage