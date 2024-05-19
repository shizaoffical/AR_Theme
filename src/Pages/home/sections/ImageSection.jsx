// ImageSection.jsx
import React from 'react';
import styles from '../Home.module.css';

function ImageSection() {
    const backgroundImageStyle = {
        backgroundImage: `url('https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg')`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        height: '80vh',
        width: '90%'
    };

    return (
        <center className={styles.imageSection}>
            <div className='' style={backgroundImageStyle}>
                <h3 className={styles.imageSectionHeading}>Advertisement your property here</h3>
            </div>
        </center>
    );
}

export default ImageSection;
