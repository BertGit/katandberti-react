import React from 'react'

import './TabLink.css'

class TabLink extends React.Component {
    render() {
        let classes = ['tab-button']
        if (this.props.isActive) {
            classes.push('active')
        }
        return (
            <button className={classes.join(' ')} onClick={this.props.clicked}>{this.props.title}</button>
        )
    }
}

export default TabLink