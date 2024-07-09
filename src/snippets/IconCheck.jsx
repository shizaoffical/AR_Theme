import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import styles from "./Snippets.module.css"
import { Link } from 'react-router-dom'
function IconCheck(props) {
    return (
        <div className={styles['icon-check']}>
            <span><FaArrowCircleRight /></span>
            <Link to="/">{props.text}</Link>
        </div>
    )
}

export default IconCheck