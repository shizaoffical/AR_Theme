
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import MainButton from '@snippets/MainButton';
import styles from './HeroSection.module.css';

function HeroSection() {
  const carouselData = [
    { image: 'https://t4.ftcdn.net/jpg/06/81/36/09/240_F_681360903_Glij2V8mY3wY7L3PJZ3eUtFIRM3xVGLf.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },

    { image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-02.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { image: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" }
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  return (
    <div className='mb-3'>
      <div className={styles.heroSection} style={{ position: 'relative', width: '100%' }}>
        {carouselData.map((item, i) => (
          <div key={i} style={{ display: i === index ? 'block' : 'none' }}>
            <img className={styles.heroSliderBgImage} src={item.image} alt={item.text} />
            <div className={styles.carouselCaption}>
              <h3 className={styles.heroSliderHeading}>{item.text}</h3>
              <p className={styles.heroSliderText}>{item.caption}</p>
              <MainButton button={item.button} />
            </div>
          </div>
        ))}
        <div className={styles.heroSliderArrow}>
          <button onClick={handlePrev} className={styles.heroSliderIcon + ' me-2'}>    <FaArrowLeft /></button>
          <button onClick={handleNext} className={styles.heroSliderIcon}> <FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

