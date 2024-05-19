

// export default HotListingSlider;






import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './HotListings.module.css';

const HotListingSlider = () => {
    const [slides] = useState([
        { id: 1, imageUrl: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.' },
        { id: 2, imageUrl: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.' },
        { id: 3, imageUrl: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.' },
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
            <button className={styles.previous} onClick={prevSlide}> <span> <FaArrowLeft className={styles.me1} /></span>Previous</button>
            <button className={styles.next} onClick={nextSlide}>Next Listing <span><FaArrowRight className={styles.ms1} /></span></button>
        </div>
    );
};

export default HotListingSlider;
