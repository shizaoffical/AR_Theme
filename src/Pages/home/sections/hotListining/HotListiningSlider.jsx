import React, { useState } from 'react';
import styles from './HotListings.module.css';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const HotListingSlider = () => {
    const [slides] = useState([
        { id: 1, imageUrl: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.' },
        { id: 2, imageUrl: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-02.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.' },

        { id: 3, imageUrl: 'https://t4.ftcdn.net/jpg/06/81/36/09/240_F_681360903_Glij2V8mY3wY7L3PJZ3eUtFIRM3xVGLf.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.' },
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
        <div className={styles.sliderContainer}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === currentSlideIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.slideButton} ${styles.sale}`}>For Sale</button>
                        <button className={`${styles.slideButton} ${styles.rent}`}>For Rent</button>
                    </div>
                    <button className={styles.slideButton + ' ' + styles.details}>More Details</button>
                </div>
            ))}
            <button className={styles.previous} onClick={prevSlide}> <span> <FaArrowLeftLong   className="me-2" /></span>Previous</button>
            <button className={styles.next} onClick={nextSlide}>Next Listing <span><FaArrowRightLong className="ms-2" /></span></button>
        </div>
    );
};

export default HotListingSlider;
