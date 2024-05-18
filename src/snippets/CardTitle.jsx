import React from 'react';
import styles from './snippets.module.css';

const CardTitle = (props) => {
    return (
        <div>
            <p className={`${styles.cardTitle} ${props.anotherclass}`}>{props.title}</p>
        </div>
    );
};

export default CardTitle;