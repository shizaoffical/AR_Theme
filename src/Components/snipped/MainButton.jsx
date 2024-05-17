import React from 'react'

function MainButton(props) {
  return (
    <div>
       <button  className={ `hero-slider-button ${props.anotherclass}`}>{props.button}</button>
    </div>
  )
}

export default MainButton