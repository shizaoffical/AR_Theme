import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SocialLinks from '@snippets/SocialLinks';
import styles from './FLSection.module.css';

const FeaturedListiningsSingleSlider = () => {
  const [slides] = useState([
    { id: 1, imageUrl: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg' },
    { id: 2, imageUrl: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg' },
    { id: 3, imageUrl: 'https://t4.ftcdn.net/jpg/06/81/36/09/240_F_681360903_Glij2V8mY3wY7L3PJZ3eUtFIRM3xVGLf.jpg' }
    // Add more slides as needed
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.featuredListiningContainer}>

      {slides.map((slide, index) => (
        <div key={slide.id}>

          <div
            className={`${styles.featuredListiningSlide} ${index === currentSlideIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}>
            <div className={styles.featuresListiningSocialLinks}>
              <SocialLinks facebook twitter instagram />
            </div>
            <div className={styles.featuredButtonContainer}>
            <button className={`${styles.slideButton} ${styles.sale}`}>For Sale</button>
                        {/* <button className={`${styles.slideButton} ${styles.rent}`}>For Rent</button> */}
              {/* <button className="slide-button rate">For rate</button> */}

            </div>
            <p className={styles.featuredListiningPrice}>Rs.<br /> <strong>25,550,000</strong></p>

          </div>
        
        </div>
      ))}
      <div className={styles.featuredBtn}>
        <button className={styles.featuredPrevious} onClick={prevSlide}>  <FaArrowLeft /></button>
        <button className={styles.featuredNext} onClick={nextSlide}>  <FaArrowRight /></button>
      </div>
      {/*    Deail of slider */}
    </div>
  );
};

export default FeaturedListiningsSingleSlider;
