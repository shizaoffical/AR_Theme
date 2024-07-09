// src/TestimonialSlider.js
import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { FaQuoteLeft } from 'react-icons/fa6';
import { Container } from 'react-bootstrap';
import image from "@assests/images/Client-Image.webp"
const testimonials = [
    { CustomerName: "Customer Name", image: { image } },
    { CustomerName: "Customer Name", image: { image } },
    { CustomerName: "Customer Name", image: { image } },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles['slider-container']}>
            <div className={styles['slide']} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial, index) => (

                    <div className={styles['slide-body']} key={index}>
                        <Container className={styles['slide-body-content']}>
                            <small>Experience With me</small>
                            <h1>Testmonios <br/> <FaQuoteLeft /></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum, odio assumenda eum consequuntur aliquid ipsa, molestias placeat architecto officia delectus eius officiis commodi cum minus nisi magnam saepe repellendus.
                                Doloremque, consequatur quam quas reiciendis voluptates officiis.</p>
                            <img src={image} alt="" className={styles['slide-user-image']} />
                            <dt>{testimonial['slide-user-name']}</dt>
                        </Container>

                    </div>

                ))}
            </div>
            <div className={styles.dots}>
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
