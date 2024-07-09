import React, { useState } from 'react';
import styles from './ThumbnailCarousel.module.css';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const ThumbnailCarousel = ({ images, setCurrentIndex }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const thumbnailsToShow = 5;
  const totalThumbnails = images.length;

  const updateThumbnailPosition = (index) => {
    setThumbnailIndex((index + totalThumbnails) % totalThumbnails);
  };

  return (
    <div className={styles['thumbnail-carousel']}>
      <div className={styles['thumbnail-carousel']}
        style={{ transform: `translateX(-${thumbnailIndex * (100 / thumbnailsToShow)}%)` }} >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="thumbnail"
            onClick={() => setCurrentIndex(index)}
            className={styles.thumbnail}
          />
        ))}
      </div>
      <div className={styles['thumbnail-button']}>
        <button onClick={() => updateThumbnailPosition(thumbnailIndex - 1)}> <FaChevronLeft /></button>
        <button onClick={() => updateThumbnailPosition(thumbnailIndex + 1)}> <FaChevronRight /></button>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
