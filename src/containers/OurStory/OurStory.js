import React from 'react'

import Media from 'react-media'
import Slider from "react-slick"

import TabLink from '../../components/TabLink/TabLink'
import StoryImage from './StoryImage/StoryImage'
import Aux from '../../hoc/Aux/Aux'
import './OurStory.css'
import '../../css/Container.css'

class OurStory extends React.Component {
    state = {
        selectedLink: 0
    }

    switchContent(idx) {
        this.slider.slickGoTo(idx * 3)
        this.setState({
            selectedLink: idx,
            imageEnlarged: false,
            enlargedImgIndex: 0
        })
    }

    imgList = [
        { src: "oz1", caption: "The first day we met in Australia", story: "This is our story" },
        { src: "oz2", caption: "Trying to crack a coconut", story: "This is our story" },
        { src: "oz3", caption: "Foo", story: "This is our story" },
        { src: "de1", caption: "Exploring Esslingen", story: "This is our story" },
        { src: "de2", caption: "Dinner in Bali", story: "This is our story" },
        { src: "de3", caption: "Rocking the piste in Donstetten", story: "This is our story" },
        { src: "ldn1", caption: "Arriving in the big city", story: "This is our story" },
        { src: "ldn2", caption: "Trips to the seaside", story: "This is our story" },
        { src: "ldn3", caption: "Enjoying time with friends", story: "This is our story" },
        { src: "eng1", caption: "At the Stuttgart TV Tower", story: "This is our story" },
        { src: "eng2", caption: "She said yes!", story: "This is our story" },
        { src: "eng3", caption: "So we can finally enjoy the view :)", story: "This is our story" },
    ]
    sections = [
        'Australia - 2012',
        'Germany to Singapore - 2013',
        'London - 2014',
        'Engagement - 2017',
    ]

    stories = [
        'Two campervans, a bbq and an endless beach - could have been worse! We met on Mission Beach whilst travelling with friends on the East Coast. We had only one day together, but when we left all we exchanged were Facebook names! Little did we know it was just the beginning…',
        'Berti came to London on a chance visit. It all started there! We spent 6 months travelling between Germany and London, meeting each others families and friends and exploring Munich and Nurnberg.  Berti then moved to Singapore for half a year, so Kat went out to visit and we enjoyed a luxury holiday in Bali!',
        'Berti made the big move to London in January 2014. We moved in together in busy Clapham Junction and made the most of living in the capital, with so much to see and do, and having friends and family to visit over the years. Now we live in Wimbledon, and have become superstar Tennis Pros….',
        'In 2017, two days before Christmas Eve, Berti popped the question whilst we were enjoying the winter views in the Fernseher (TV) tower in Stuttgart. Kat of course had to think about it for a while, before saying yes! (of course that’s not true). We shared the news and had an amazing Christmas in Stuttgart, and New Year in Coventry. Now we can’t wait to share our big day with YOU!'
    ]

    sliderSettings = {
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        afterChange: (idx) => this.setState({ selectedLink: Math.floor(idx / 3) }),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

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
                    <p className='intro'>
                        From a chance encounter on a remote beach in Australia, to our life together in the Big Smoke. We met briefly in 2012 and knew each other for less than 24 hours, but had a feeling it was something special! After almost 6 years together, we have decided to make it official and tie the knot.
                    </p>
                    <Media query="(max-width: 768px)">
                        {matches =>
                            matches ? (
                                <h2 className='img-header'>{this.sections[this.state.selectedLink]}</h2>
                            ) : (
                                    <div id='our-story-tabs-bar'>
                                        {this.sections.map((s, i) =>
                                            <TabLink title={s} isActive={this.state.selectedLink === i} clicked={() => this.switchContent(i)} />
                                        )}
                                    </div>

                                )
                        }
                    </Media>
                    < Slider ref={slider => (this.slider = slider)} {...this.sliderSettings}>
                        {this.imgList.map(i => <StoryImage src={i.src} caption={i.caption} story={i.story} clicked={() => this.imageClicked(i)} />)}
                    </Slider>
                    <div className='story-text'>
                        <p>
                            {this.stories[this.state.selectedLink]}
                        </p>
                    </div>
                    <div className='padding-vertical-5' />
                </div >
            </Aux>
        )
    }
}

export default OurStory