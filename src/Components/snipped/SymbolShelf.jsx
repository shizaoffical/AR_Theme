import React from 'react'
import { Link } from 'react-router-dom'
function SymbolShelf(props) {
  return (
    <div className= {` symbolshelf ${props.anotherclass}`}> 
        <i>{props.icon}</i>
          <Link  to=""  target="_blank"><p>{props.text}</p></Link>
    </div>
  )
}

export default SymbolShelf