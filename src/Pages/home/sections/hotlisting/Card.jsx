import React from 'react';
import styles from './Index.module.css';
function Card(props) {
    return (
        <div className={styles.card}> 
            <div className={styles.icon}>{props.icon}</div> 
            <h3 className={styles.cardHeading}>{props.heading}</h3> 
            <p className={styles.cardText}>{props.text}</p> 
        </div>
    );
}

export default Card;
