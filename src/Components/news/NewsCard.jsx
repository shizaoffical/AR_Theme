import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css'; 

function NewsCard(props) {
    return (
        <div className={styles['news-card']}> 
            <img src={props.newsimage} alt="use another link" />
            <div className={styles['news-card-body']}> 
                <div>
                    <h1 className={styles['news-card-heading']}>Blog Title Here</h1> 
                    <p className={styles['news-card-text']}> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum hic animi, quidem asperiores non adipisci odit quis consectetur 
                    </p>
                </div>
                <Link to="#" className={styles['news-card-link']}>Read More</Link> 
            </div>
        </div>
    );
}

export default NewsCard;