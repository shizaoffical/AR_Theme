import React from 'react'

function CardHeading(props) {
  return (
    <div>
        <h3 className={`card-heading ${props.anotherclass}`}>{props.heading}</h3>
    </div>
  )
}

export default CardHeading