import React from 'react';
import styles from "@snippets/Snippets.module.css"

const Heading = (props) => {
    return (
        <>
            <h1 className={`${styles.heading} ${props.anotherClass}`}>{props.heading}</h1>
            {props.heading1 && <h1 className={`${styles.heading1} ${props.anotherClass1}`}>{props.heading1}</h1>}

        </>
    );
};

export default Heading;