import React from 'react'

import GoogleMapReact from 'google-map-react';

import './LocationAndTravel.css'
import secrets from '../../../../../assets/secrets.json'

const location = () => {
    return (
        <div>
            <h2>Where is it?</h2>
            <p>
                <em>Dordogne region, South West France</em>
                We have chosen to have our wedding in the beautiful region of the Dordogne river. It is a rural part of France that is popular with holiday makers due to the good food, activities and historic sites.

            </p>
            <p>
                <em>The town of Lalinde</em>
                Our lovely venue is in the town of Lalinde, which is situated east of Bergerac. This is approximately 2 hours east of Bordeaux, the South West coast. The town is a quaint french market town by the river, and conveniently located near the local attractions, as well as Bergerac airport.
            </p>

            <h2>How do I get there?</h2>
            <p>
                <em>By air</em>
                Flights to Bergerac are the most ideal, as this is only a 20 minute drive away. If Bergerac isn’t possible, then Bordeaux is the next closest airport, this is approx 2 hours drive. Book early to avoid higher costs next year!
                We advise to add insurance and/or flexi fare to your flight as there are sometimes strikes at airports this time of year.
            </p>

            <p>
                <em>By car/ferry</em>
                For those travelling from the UK, a good option would be to drive down, using the ferry or Euro tunnel for the channel crossing. Again, consider booking early.
            </p>
            <p>
                <em>By train</em>
                Eurostar is possible, but might involve a few changes.
            </p>

            <h2>Do I need a car?</h2>
            <p>
                If you fly into Bergerac, you can get to the town or accomodation nearby easily by taxi, but having a car will make it easier to do more things in the area during your whole stay. If you fly to Bordeaux then we do recommend hiring a car.
            </p>
            <div id='map-location'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: secrets.mapsApiKey }}
                    defaultCenter={{ lat: 44.8370098, lng: 0.7052953 }}
                    defaultZoom={11}
                    onGoogleApiLoaded={({ map, maps }) => {
                        new maps.Marker({
                            position: { lat: 44.8370098, lng: 0.7452953 },
                            map,
                            title: 'Les Magnolias'
                        })
                    }}
                >
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default location