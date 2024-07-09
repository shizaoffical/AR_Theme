import React from 'react'
import styles from "@snippets/Snippets.module.css"
import { Link } from 'react-router-dom';
function PageDefender(props) {
  return (
    <div>
        <p className={styles['pade-defender']}>
          <Link to="/">Home</Link>  /  <Link to={props.path}>{props.page}</Link>
          {props.subPage &&  <Link to={props.subPagePath}>  / {props.subPage}</Link>}
         
        </p>
    </div>
  )
}

export default PageDefender