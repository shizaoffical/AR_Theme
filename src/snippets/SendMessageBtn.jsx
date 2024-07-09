import React from 'react'
import styles from "@snippets/Snippets.module.css"
function SendMessageBtn() {
  return (
    <div>
             <button type='submit' className={styles['send-message']}>Send Message</button>
    </div>
  )
}

export default SendMessageBtn