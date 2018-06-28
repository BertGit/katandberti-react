import React from 'react'

import Aux from '../Aux/Aux'
import Toolbar from '../../components/Toolbar/Toolbar'
import WelcomePage from '../../containers/WelcomePage/WelcomePage'

class Layout extends React.PureComponent {
    state = {
        toolbarHeight: 0
    }

    toolbarSizeChange = (newHeight) => {
        console.log('Toolbar height', newHeight)
        this.setState({ toolbarHeight: newHeight })
    }

    render() {
        return (
            <Aux>
                <Toolbar toolbarRendered={this.toolbarSizeChange} />
                <main>
                    <WelcomePage toolbarHeight={this.state.toolbarHeight} />
                </main>
            </Aux>
        )
    }
}

export default Layout