import React from 'react'
import styles from "@snippets/Snippets.module.css"
function SectionTitle(props) {
  return (
    <div>
      <center>
        <p style={{ textTransform: 'uppercase', color: '#A4A4A4', fontSize:"16px" }}>{props.info}</p>
        <h1 className={styles['section-title']}>{props.title}</h1>
      </center>
    </div>
  )
}

export default SectionTitle