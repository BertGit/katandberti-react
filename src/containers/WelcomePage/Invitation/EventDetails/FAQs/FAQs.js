import React from 'react'

import Aux from "../../../../../hoc/Aux/Aux"

import './FAQs.css'

export default class Accordion extends React.PureComponent {
    state = {
        opened: {}
    }

    render() {
        return (
            <div className="faqs">
                {this.accordion("When should I arrive?", <Aux><p>As many of you are using this as an excuse for a short break, we can recommend staying in the area a few days before the wedding, there is a lot to do!</p>
                    <p>However, we would recommend strongly that you have arrived and settled into your accommodation by Friday 31st May to make sure you have a relaxing Saturday with us. </p></Aux>)}
                {this.accordion("What should I wear?", <Aux><p>
                    We are going for a relaxed summer dress code/ smart casual:<br />
                    Men – summer suits, ties optional<br />
                    Women – Hats/Fascinators always welcome<br />
                    We kindly ask please no jeans<br />
                </p></Aux>)}
                {this.accordion("What will the weather be like?", <Aux><p>
                    It can be hit and miss this time of year. However, it is the south of France so generally a bit warmer climate than what we are used to in June!
                    Remember to bring your umbrella and also some warmer clothes for later in the evenings. </p></Aux>)}
                {this.accordion("Can I bring plus ones?", <Aux><p>We unfortunately cannot accommodate more people other than those we have personally invited, so we kindly ask that guests do not bring a plus one. </p></Aux>)}
                {this.accordion("Will Brexit affect my travel plans?", <Aux><p>As the laws of travel to EU may change after 29 March in the event of no–deal, please check <b>your passports have more than 15 months validity left</b> on them before you travel.
</p><p>
                        You can check the validity of your passport here <a href="https://www.passport.service.gov.uk/check-a-passport" target="blank">www.passport.service.gov.uk/check-a-passport</a>
                    </p><p>
                        There are no changes to the law regarding visas until 2020, so only the validity of your passport is important to check.
</p></Aux>)}
                {this.accordion("I'm planning to travel by car, anything I should know?", <Aux><p>France has some stricter driving laws than the UK, so if you are driving your own car over to France we advise you to look at the checklist to make sure you have the things in your car required by French law.
</p><p>
                        Find out more in the link below <br /><a href="https://www.rac.co.uk/drive/travel/country/france/" target="blank">www.rac.co.uk/drive/travel/country/france/</a>
                    </p><p>
                        For those who are renting a car, most of the above will already be covered by the rental agency.
</p></Aux>)}
                {this.accordion("How do I get to the church?", <Aux><p>We have organised transport to take our guests to and from the Church. Please be at the Intermarche Lalinde from 12.30pm on Saturday, for a prompt departure of 12.45 hours towards the Church. Parking is available and free of charge here.
</p><p>
                        For those wishing to drive straight to the Church, please note that there is very little parking available in the tiny village of Limueil. To avoid complications with parking we recommend you take our coach – but you are welcome to make your own way there if you prefer.
</p></Aux>)}
                {this.accordion("How will I get back to my accommodation after the party has finished?", <Aux><p>We will be organising a shuttle service to take guests within a maximum of a 30-minute drive back to their accommodations after the party has finished. If you would like to use this service, we kindly ask that guests contribute and bring euros to help towards the cost of this.
</p><p>All guests with cars can drive to our venue Les Magnolias and park outside the Intermarche which is opposite the venue and has a big car park - this is free parking. If you plan to drive to our venue in the morning and prefer to take a taxi back in the evening after the party, you can leave your car at the Intermarche overnight.
</p></Aux>)}
                {this.accordion("What about a wedding gift?", <Aux><p>We are so honoured you will be with us on our wedding day in France. Your efforts to travel and be with us on our special day is our gift, we do not expect more!</p><p>However, we have had some friends and family ask after a wish list, so if you would still like to give us a little something, please enjoy browsing this wish list, where you can contribute to our dream honeymoon! We're lucky to already have a home full of everything we need, so any contributions towards a relaxing holiday will be much appreciated and wisely spent!</p><p><a href="https://www.honeyfund.co.uk/wedding/KatandBertiGetHitched" target="_blank">https://www.honeyfund.co.uk/wedding/KatandBertiGetHitched</a></p></Aux>)}
            </div>
        )
    }

    accordion = (question, answer) => {
        const isOpen = this.state.opened[question]
        return (
            <div className={"accordion " + (isOpen ? "opened" : "closed")}>
                <div className="accHeader" onClick={() => {
                    const opened = { ...this.state.opened }
                    if (isOpen) {
                        delete opened[question]
                    } else {
                        opened[question] = true
                    }
                    this.setState({ opened })
                }}>
                    <div className="plusminus">{isOpen ? "-" : "+"}</div>
                    <h3>{question}</h3>
                </div>
                {isOpen ? answer : null}
            </div>
        )
    }
}
