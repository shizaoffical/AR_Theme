import React from 'react'

function CommuntiesCard(props) {
  return (
    <div className='coummunicate-card'>
        <img src={props.image} alt="" />
        <p className='coummunicate-card-text'>{props.text}</p>
    </div>
  )
}

export default CommuntiesCard