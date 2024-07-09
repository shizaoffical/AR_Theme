import React from 'react';
import { Link } from 'react-router-dom';
import styles from "@snippets/Snippets.module.css"

const SymbolShelf = (props) => {
    return (
        <div className={`${styles['symbol-shelf']} ${props.anotherClass}`}>
            <i>{props.icon}</i>
            <Link to="" target="_blank"><p>{props.text}</p></Link>
        </div>
    );
};

export default SymbolShelf;