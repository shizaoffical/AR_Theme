
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import SocialLinks from '@snippets/SocialLinks';
import styles from './Index.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import PropertyDetail from '@snippets/PropertyDetail';
import { nextSlide, prevSlide } from '@store/slidesSlice';

const SingleCard = (props) => {
  const slides = useSelector((state) => state.slides.slides);
  const currentSlideIndex = useSelector((state) => state.slides.currentSlideIndex);
  const dispatch = useDispatch();

  const handleNextSlide = () => {
    dispatch(nextSlide());
  };

  const handlePrevSlide = () => {
    dispatch(prevSlide());
  };

  return (
    <div className={styles['featured-listing-card']}>
      {slides.map((slide, index) => (
        <div key={slide.id} className={`${styles['featured-listing-card__slide']} ${index === currentSlideIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}>
          <div className={styles['featured-listing-card__social-links']}>
            <SocialLinks facebook twitter instagram />
          </div>
          <div className={styles['featured-listing-card__button']}>
            {props.sale && <button className={`${styles['ribbon']} ${styles['sale']}`}>For Sale</button>}
            {props.rent && <button className={`${styles['ribbon']} ${styles['rent']}`}>For Rent</button>}
          </div>
          <div className={styles['featured-listing-card__amount']}>
            <p>{props.title}</p>
            <strong>{props.value}</strong>
          </div>
        </div>
      ))}
      <div className={styles['featured-listing-card__arrows']}>
        {props.arrowLeft && <button className={styles['previous']} onClick={handlePrevSlide}><FaChevronLeft /></button>}
        {props.video && <button className={styles['video']} onClick={handlePrevSlide}>Video</button>}
        {props.viewMore && <button className={styles['view-more']} onClick={handlePrevSlide}>View More</button>}
        <button className={styles['next']} onClick={handleNextSlide}>
          <FaChevronRight />
        </button>
      </div>


      <div className={styles['featured-listing-card__description']}>
        <center>
          <p>Explore now</p>
          <h4>Property title</h4>
        </center>
        <div>
          <PropertyDetail />
          <div className={styles['featured-listing-card__details']}>
              <strong className='d-flex align-items-center gap-1'><FaArrowRightLong /> Location</strong>
              <strong className='d-flex align-items-center gap-1'><FaArrowRightLong /> Brochure</strong>
              <strong className='d-flex align-items-center gap-1 text-right'><FaArrowRightLong /> Print</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
