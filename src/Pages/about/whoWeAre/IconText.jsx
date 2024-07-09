import React from 'react'
import styles from "./WhoWeAre.module.css"
function IconText(props) {
  return (
    <div className={`${styles['icon-text-main']} ${props.anotherClass}`}>
      <div className={styles['icon-text-icon']}> <span>{props.icon}</span> </div>
      <div className={styles['icon-text-body']}>
        <dt>{props.heading}</dt>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default IconText