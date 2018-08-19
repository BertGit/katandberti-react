import React from 'react'
import { configureAnchors } from 'react-scrollable-anchor'

import Aux from '../Aux/Aux'
import Toolbar from '../../components/Toolbar/Toolbar'
import WelcomePage from '../../containers/WelcomePage/WelcomePage'
import OurStory from '../../containers/OurStory/OurStory'
import { Route, Switch } from 'react-router-dom'

class Layout extends React.Component {
    state = {
        toolbarHeight: 0
    }

    toolbarSizeChange = (newHeight) => {
        configureAnchors({ offset: -newHeight, scrollDuration: 1000 })
        this.setState({ toolbarHeight: newHeight })
    }

    render() {
        return (
            <Aux>
                <Switch>
                    <Route path='/' exact render={() => this.renderLayout(null)} />
                    <Route path='/our-story' render={() => this.renderOurStory()} />
                    <Route path='/:userId' render={(props) => this.renderLayout(props.match.params.userId)} />
                </Switch>
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

    renderOurStory = () => {
        return (
            <main>
                <OurStory />
            </main>
        )
    }
}

export default Layout