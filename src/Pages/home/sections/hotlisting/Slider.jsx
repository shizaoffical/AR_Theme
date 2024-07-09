import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import styles from './Index.module.css';
import { nextSlide, prevSlide } from '@store/slidesSlice';

const HotListingSlider = () => {
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.slides.slides);
  const currentSlideIndex = useSelector((state) => state.slides.currentSlideIndex);

  const handleNext = () => {
    dispatch(nextSlide());
  };

  const handlePrev = () => {
    dispatch(prevSlide());
  };

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div key={slide.id} className={`${styles.slide} ${index === currentSlideIndex ? styles.active : ''}`} style={{ backgroundImage: `url(${slide.image})` }}>
          <div className={styles['btn-handler']}>
            <button className={`${styles['slide-btn']} ${styles.sale}`}>For Sale</button>
            <button className={`${styles['slide-btn']} ${styles.rent}`}>For Rent</button>
          </div>
          <button className={styles['slide-btn'] + ' ' + styles.details}>More Details</button>
        </div>
      ))}
      <button className={styles.previous} onClick={handlePrev}> <span><FaArrowLeft className="me-2" /></span>previous</button>
      <button className={styles.next} onClick={handleNext}>Next Listing <span><FaArrowRight className="ms-2" /></span> </button>
    </div>
  );
};

export default HotListingSlider;
