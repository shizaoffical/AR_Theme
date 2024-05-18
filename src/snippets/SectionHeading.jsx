import React from 'react';
import styles from './snippets.module.css';

const SectionHeading = (props) => {
    return (
        <div>
            <h2 className={styles.sectionTitle}>{props.heading}</h2>
        </div>
    );
};

export default SectionHeading;