import React, { useEffect, useState } from 'react';
import styles from '../Index.module.css';

function ImageSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url('https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg')`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    height: isLargeScreen ? '550px' : '300px',
    width: isLargeScreen ? '80%' : '90%',
  };

  return (
    <center className={styles['image-section']}>
      <div style={backgroundImageStyle}>
      <h3 className={styles['image-section-heading']}>
                    Advertise your property here
                </h3>
      </div>
    </center>
  );
}

export default ImageSection;
