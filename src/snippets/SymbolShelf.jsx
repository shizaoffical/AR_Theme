import React from 'react';
import { Link } from 'react-router-dom';
import styles from './snippets.module.css';

const SymbolShelf = (props) => {
    return (
        <div className={`${styles.symbolshelf} ${props.anotherclass}`}>
            <i>{props.icon}</i>
            <Link to="" target="_blank"><p>{props.text}</p></Link>
        </div>
    );
};

export default SymbolShelf;