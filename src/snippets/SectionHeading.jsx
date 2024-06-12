import React from 'react';
import styles from './snippets.module.css';

const SectionHeading = (props) => {
    return (
        <div>
            <h2 className={`${styles.sectionTitle} ${props.anotherclass}`}>{props.heading}</h2>
            {props.heading1 &&       <h2 className={`${styles.sectionTitle1} ${props.anotherclass1}`}>{props.heading1}</h2>}
      
        </div>
    );
};

export default SectionHeading;