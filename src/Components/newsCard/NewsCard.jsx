import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css'; 

function NewsCard(props) {
    return (
        <div className={styles.newsCard}> 
            <img src={props.newsimage} alt="No image" />
            <div className={styles.newsCardInner}> 
                <div>
                    <h4 className={styles.newsCardInnerH}>Blog Title Here</h4> 
                    <p className={styles.newsCardInnerP}> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum hic animi, quidem asperiores non adipisci odit quis consectetur blanditiis praesentium, obcaecati, ut expedita earum culpa in sed iure eos repellendus!
                    </p>
                </div>
                <Link to="#" className={styles.newsCardInnerA}>Read More</Link> 
            </div>
        </div>
    );
}

export default NewsCard;