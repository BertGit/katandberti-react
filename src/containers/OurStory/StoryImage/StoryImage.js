import React from 'react'

import './StoryImage.css'

const image = (props) => {
    return (
        <div className='story-image'>
            <div className='img-caption'>
                {props.caption}
            </div>
            <div className='image-plus-overlay' onClick={props.clicked}>
                <div className='story-image-overlay'>
                    <span className='fa fa-search-plus' />
                    <div className='overlay-dark' />
                </div>
                <img src={props.src} />
            </div>
            <div className='img-story'>
                {props.story}
            </div>
        </div >
    )
}

export default image