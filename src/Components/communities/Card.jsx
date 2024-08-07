import React from 'react';
import styles from './Communities.module.css';

const CommunitiesCard = (props) => {
    return (
        <div className={styles['card']}>
            <img src={props.image} alt="" />
            <p className={styles['card-text']}>{props.text}</p>
        </div>
    );
};

export default CommunitiesCard;