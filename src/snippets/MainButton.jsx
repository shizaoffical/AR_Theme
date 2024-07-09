import React from 'react';
import styles from "@snippets/Snippets.module.css"

const MainButton = (props) => {
    return (
        <div>
            <button className={`${styles['main-button']} ${props.anotherClass}`}>{props.button}</button>
        </div>
    );
};

export default MainButton;