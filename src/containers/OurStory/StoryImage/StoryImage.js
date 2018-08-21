import React from 'react'

import './StoryImage.css'

const image = (props) => {
    return (
        <div className='story-image' style={{ backgroundImage: `url(/img/our-story/${props.src}.jpg` }}>
            <div className='story-image-overlay'>
                <span className='fa fa-search-plus' />
                <div className='overlay-dark' />
            </div>
        </div >
    )
}

export default image