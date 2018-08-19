import React from 'react'

import './TabLink.css'

const tabLink = (props) => {
    let classes = ['tab-button']
    if (props.isActive) {
        classes.push('active')
    }
    return (
        <button className={classes.join(' ')} onClick={props.clicked}>{props.title}</button>
    )
}

export default tabLink