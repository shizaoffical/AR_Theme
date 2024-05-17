import React from 'react'

function PricingCard(props) {
  return (

       <div className="card">
        <div className="icon">{props.icon}</div>
        <h3 className="card-heading">{props.heading}</h3>
        <p className="card-text">{props.text}</p>
    </div>
  )
}

export default PricingCard