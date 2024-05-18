import React from 'react';
import styles from './snippets.module.css';

const MainButton = (props) => {
    return (
        <div>
            <button className={`${styles.mainBtn} ${props.anotherclass}`}>{props.button}</button>
        </div>
    );
};

export default MainButton;