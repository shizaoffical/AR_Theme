import React from 'react';
import styles from './snippets.module.css';

const CardHeading = (props) => {
    return (
        <div>
            <h3 className={`${styles.cardHeading} ${props.anotherclass}`}>{props.heading}</h3>
        </div>
    );
};

export default CardHeading;