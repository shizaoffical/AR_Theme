import React from 'react'
import CardTitle from '../../../Components/snipped/CardTitle'
import CardHeading from '../../../Components/snipped/CardHeading'
import MainButton from '../../../Components/snipped/MainButton'

function BestPlaces() {
    return (
        <div>

            <div class="best-place">
                <div class="container best-place-inner">
                   <CardTitle title="Best places"/>
                   <CardHeading heading="Luxury homes for rent" anotherclass="best-places-heading"/>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta consectetur ipsa. At cum repellendus earum aut, similique ratione corrupti aliquam quasi, doloribus optio nobis dolorum nisi ab ipsa obcaecati.</p>
                   <MainButton anotherclass="best-places-btn" button="Get Started"/>
                </div>
            </div>
        </div>
    )
}

export default BestPlaces