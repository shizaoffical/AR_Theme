import React from 'react';
import styles from './snippets.module.css';

const CommunitiesCard = (props) => {
    return (
        <div className={styles.coummunicateCard}>
            <img src={props.image} alt="" />
            <p className={styles.coummunicateCardText}>{props.text}</p>
        </div>
    );
};

export default CommunitiesCard;