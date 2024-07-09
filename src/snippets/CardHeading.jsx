import React from 'react';
import styles from "@snippets/Snippets.module.css"

const CardHeading = (props) => {
    return (
        <div>
            <h3 className={`${styles['card-heading']} ${props.anotherClass}`}>{props.heading}</h3>
        </div>
    );
};

export default CardHeading;