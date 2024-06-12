import React from 'react'
import styles from './snippets.module.css';
function PageDefender(props) {
  return (
    <div>
        <p className={styles.PageDefender}>Home / {props.page}</p>
    </div>
  )
}

export default PageDefender