import React from 'react'

import Aux from '../Aux/Aux'
import Toolbar from '../../components/Toolbar/Toolbar'
import WelcomePage from '../../containers/WelcomePage/WelcomePage'
import { Route } from 'react-router-dom'

class Layout extends React.Component {
    state = {
        toolbarHeight: 0
    }

    toolbarSizeChange = (newHeight) => {
        this.setState({ toolbarHeight: newHeight })
    }

    render() {
        return (
            <Aux>
                <Route path='/' exact render={() => this.renderLayout(null)} />
                <Route path='/:userId' render={(props) => this.renderLayout(props.match.params.userId)} />
            </Aux>
        )
    }

    renderLayout = (userId) => {
        return (
            <Aux>
                <Toolbar toolbarRendered={this.toolbarSizeChange} showRsvp={!!userId} />
                <main>
                    <WelcomePage toolbarHeight={this.state.toolbarHeight} userId={userId} />
                </main>
            </Aux>
        )
    }
}

export default Layout