// LatestNewsCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css'; 

function NewsCard(props) {
    return (
        <div className={styles['news-card']}> 
            <img src={props.image} alt="No image" />
            <div className={styles['news-card-inner']}> 
                <div>
                    <h4 className={styles['news-card-inner-h']}>Blog Title Here</h4> 
                    <p className={styles['news-card-inner-p']}> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum hic animi, quidem asperiores non adipisci odit quis consectetur blanditiis praesentium, obcaecati, ut expedita earum culpa in sed iure eos repellendus!
                    </p>
                </div>
                <Link to="#" className={styles['news-card-inner-a']}>Read More</Link> 
            </div>
        </div>
    );
}

export default NewsCard;
