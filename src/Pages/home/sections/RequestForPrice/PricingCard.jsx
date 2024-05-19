import React from 'react';
import styles from './RequestPrice.module.css';

function PricingCard(props) {
    return (
        <div className={styles.card}> 
            <div className={styles.icon}>{props.icon}</div> 
            <h3 className={styles.cardHeading}>{props.heading}</h3> 
            <p className={styles.cardText}>{props.text}</p> 
        </div>
    );
}

export default PricingCard;
