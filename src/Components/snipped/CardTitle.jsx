import React from 'react'

function CardTitle(props) {
  return (
    <div>
        <p className={ `card-title ${props.anotherclass}`}>{props.title}</p>
    </div>
  )
}

export default CardTitle