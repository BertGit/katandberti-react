import React from 'react'

import './TheDay.css'

import '../../../../../css/Spacers.css'

import macarons from '../../../../../assets/images/macarons.png'
import croissant from '../../../../../assets/images/croissant.png'
import flutes from '../../../../../assets/images/flutes.png'
import baguette from '../../../../../assets/images/baguette.png'

const theday = () => {
    return (
        <div id='the-day'>
            <div id='food-pics'>
                <img src={macarons} className='macarons' />
                <img src={croissant} className='croissant' />
                <img src={flutes} className='flutes' />
                <img src={baguette} className='baguette' />
            </div>
            <div className='content'>
                <h2>The day before</h2>
                <p>
                    We hope that all our guests can be checked in and settled by Friday.
                    Then relax and enjoy your evening!
            </p>

                <h2>The Wedding Day</h2>
                <p>
                    <em>Morning</em>
                    Relax in the morning and get some breakfast at your hotel.
                    Everything kicks off in the afternoon!
            </p>
                <p>
                    <em>Afternoon</em>
                    Arrive at 1.30 pm for the ceremony.
                    After the ceremony we’ll go to the venue for dinner
            </p>
                <p>
                    <em>Evening</em>
                    Time to let your hair down and party!
            </p>

                <div className='padding-vertical-2' />
                <p><strong>Transport details for the day to follow</strong></p>

                <h2>The next day</h2>
                <p>
                    If you are staying nearby, you are welcome to come back to the
                    venue and we’ll have breakfast together. More details to follow soon.
            </p>

                <h2>What to wear?</h2>
                <p>
                    The weather in France can usually be more reliable than the UK (we really hope), but you can never be sure! Bring an umbrella just in case. Can be pleasantly warm in the day and cooler at night.
            </p>
                <p>Dress - Summery smart/casual</p>
                <h1>à bientôt !</h1>
            </div>
        </div>
    )
}

export default theday