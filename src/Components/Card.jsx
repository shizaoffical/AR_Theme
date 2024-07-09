import React from 'react'
import styles from "./Components.module.css"

function Card(props) {
    return (
        <div className={styles.card}>
            <div>
                <img src="https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg" alt="" className={styles['card-image']}/>
            </div>
            <div className={styles['card-inner']}>
                <h2>{props.title}</h2>
                <p>{props.value}</p>
            </div>
        </div>
    )
}

export default Card