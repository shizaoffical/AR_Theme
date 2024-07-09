import React from 'react';
import styles from './Carousel.module.css';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropertyDetail from '@snippets/PropertyDetail';

const Carousel = ({ images, currentIndex, setCurrentIndex ,Detail }) => {
  const totalImages = images.length;

  const showImage = (index) => {
    setCurrentIndex((index + totalImages) % totalImages);
  };

  return (
    <div className={styles['carousel']}>
      <img src={images[currentIndex]} className={styles.active} alt="carousel" />
      <div className={styles['carasoul-button']}>
        <button onClick={() => showImage(currentIndex - 1)}> <FaChevronLeft /></button>
        <button onClick={() => showImage(currentIndex + 1)}> <FaChevronRight /> </button>
      </div>
     {Detail && <PropertyDetail anotherClass={styles['carasoul-description']}  />}
    </div>
  );
};

export default Carousel;
