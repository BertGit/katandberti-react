import React from 'react'

import lesmagnolias from '../../../../../assets/images/les-magnolias.jpg'
import './VenueAndAccommodation.css'

const venue = () => {
    return (
        <div>
            <h2>The venue</h2>
            <p>
                <em>Les Magnolias</em>
                The setting for our wedding will be at this venue, which is based right next to the town of Lalinde, the heart of town only 10 minute walk away.
                Though we’d love to have you all here, there is only accomodation on site for the wedding party, and if we haven’t already, we will get in touch with you to offer you accomodation here first.
            </p>
            <div id='magnolias'>
                <img src={lesmagnolias} />
                <p>
                    Les Magnolias<br />
                    Le Port de Lalinde<br />
                    24150 Lalinde<br />
                    France<br />
                </p>
            </div>
            <h2>Accommodation</h2>
            <p>
                This is a very popular destination for tourists so there are plenty of places to stay, but they are booking up fast due to the half-term week so we suggest reserving somewhere as soon as possible.
            </p>

            <h2>Ideas for areas to stay</h2>
            <p>
                <strong>Lalinde</strong> - the location town of our venue, and where many of the wedding party will be staying.
            </p>
            <p>
                <strong>Bergerac</strong> - the largest town nearby with lots of accommodation choices and only a 30 minute drive away.
            </p>
            <p>
                <strong>Le Bugue</strong> - a small attractive market town on the Vezere River, new Limeuil, which is near our church. 30 mins drive away.
            </p>
            <p>
                <strong>Limueil</strong> - once classified as "One of the Most Beautiful Villages of France", this is the town where we'll get married. 20 mins drive away.
            </p>
            <h2>Some hotels within a 30 minute drive</h2>
            <p>
                Hôtel-Restaurant Côté Rivage - 3*Hotel<br />
                Hotel Château les Merles - 4*Hotel<br />
                Le Forêt - 3*Hotel<br />
                Le Coteau de Belpech - 4*Hotel<br />
                Les Songes de l'Abbaye<br />
                Le Créol'ya<br />
                La Métairie - 4*Hotel<br />
            </p>
            <h2>Airbnb</h2>
            <p>
                There are some lovely rooms, or whole Gites to rent in the surrounding areas, please book these up early so you don’t miss out!
            </p>
        </div>
    )
}

export default venue