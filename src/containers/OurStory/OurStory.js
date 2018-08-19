import React from 'react'

import Media from 'react-media'

import TabLink from '../../components/TabLink/TabLink'
import StoryImage from './StoryImage/StoryImage'
import Aux from '../../hoc/Aux/Aux'
import './OurStory.css'
import '../../css/Container.css'

import oz1 from '../../assets/images/our-story/oz1.jpg'
import oz2 from '../../assets/images/our-story/oz2.jpg'
import oz3 from '../../assets/images/our-story/oz3.jpg'

import de1 from '../../assets/images/our-story/de1.jpg'
import de2 from '../../assets/images/our-story/de2.jpg'
import de3 from '../../assets/images/our-story/de3.jpg'

import ldn1 from '../../assets/images/our-story/ldn1.jpg'
import ldn2 from '../../assets/images/our-story/ldn2.jpg'
import ldn3 from '../../assets/images/our-story/ldn3.jpg'

import eng1 from '../../assets/images/our-story/eng1.jpg'
import eng2 from '../../assets/images/our-story/eng2.jpg'
import eng3 from '../../assets/images/our-story/eng3.jpg'

class OurStory extends React.Component {
    state = {
        selectedLink: 0
    }

    switchContent(idx) {
        this.setState({
            selectedLink: idx,
            imageEnlarged: false,
            enlargedImgIndex: 0
        })
    }

    imgList = [
        { src: oz1, caption: "The first day we met in Australia", story: "This is our story" },
        { src: oz2, caption: "Trying to crack a coconut", story: "This is our story" },
        { src: oz3, caption: "Foo", story: "This is our story" },
        { src: de1, caption: "Exploring Esslingen", story: "This is our story" },
        { src: de2, caption: "Dinner in Bali", story: "This is our story" },
        { src: de3, caption: "Rocking the piste in Donstetten", story: "This is our story" },
        { src: ldn1, caption: "Arriving in the big city", story: "This is our story" },
        { src: ldn2, caption: "Trips to the seaside", story: "This is our story" },
        { src: ldn3, caption: "Enjoying time with friends", story: "This is our story" },
        { src: eng1, caption: "At the Stuttgart TV Tower", story: "This is our story" },
        { src: eng2, caption: "She said yes!", story: "This is our story" },
        { src: eng3, caption: "So we can finally enjoy the view :)", story: "This is our story" },
    ]
    sections = [
        'Australia - 2012',
        'Germany to Singapore - 2013',
        'London - 2014',
        'Engagement - 2017',
    ]

    imageClicked(idx) {
        this.setState({
            imageEnlarged: true,
            enlargedImgIndex: idx
        })
    }

    render() {
        return (
            <Aux>
                {/* {this.state.imageEnlarged ? <ImageViewer selectedImgIdx={this.state.enlargedImgIndex} imgSrc={this.imgList} /> : null} */}
                < div id='our-story' className='container-wide' >
                    <h1>Our Story</h1>
                    <p>
                        From a chance encounter on a remote beach in Australia, to our life together in the Big Smoke. We met briefly in 2012 and knew each other for less than 24 hours, but had a feeling it was something special! After almost 6 years together, we have decided to make it official and tie the knot.
                </p>
                    <Media query="(max-width: 768px)">
                        {matches =>
                            matches ? (
                                <Aux>
                                    {this.sections.map((s, i) =>
                                        <Aux>
                                            <h2 className='img-header'>{s}</h2>
                                            <div id='story-photos'>
                                                {this.imgList.slice(i * 3, i * 3 + 3).map(i => <StoryImage src={i.src} caption={i.caption} story={i.story} clicked={() => this.imageClicked(i)} />)}
                                            </div>
                                        </Aux>
                                    )}
                                    <div className='padding-vertical-5' />
                                </Aux>
                            ) : (
                                    <Aux>
                                        <div id='our-story-tabs-bar'>
                                            {this.sections.map((s, i) =>
                                                <TabLink title={s} isActive={this.state.selectedLink === i} clicked={() => this.switchContent(i)} />
                                            )}
                                        </div>

                                        <div id='story-photos'>
                                            {this.imgList.slice(this.state.selectedLink * 3, this.state.selectedLink * 3 + 3).map(i => <StoryImage src={i.src} caption={i.caption} story={i.story} />)}
                                        </div>
                                    </Aux>
                                )
                        }
                    </Media>
                </div >
            </Aux>
        )
    }
}

export default OurStory