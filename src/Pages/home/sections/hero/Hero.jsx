import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css'; 
import { useSelector, useDispatch } from 'react-redux';
import MainButton from '@snippets/MainButton';
import { nextSlide, prevSlide } from '@store/slidesSlice';
import { Container } from 'react-bootstrap';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'; 

const Hero = () => {
    const dispatch = useDispatch();
    const slides = useSelector((state) => state.slides.slides); 
    const currentSlideIndex = useSelector((state) => state.slides.currentSlideIndex); 

    const [activeButton, setActiveButton] = useState('left');

    const handleNext = () => {
        dispatch(nextSlide()); 
        setActiveButton('right');
    };

    const handlePrev = () => {
        dispatch(prevSlide()); 
        setActiveButton('left');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentSlideIndex]); 

    return (
        <div className="mb-3">
            <div className={styles['hero-section']} style={{ position: 'relative', width: '100%' }}>
                {slides.map((item, i) => (
                    <div key={i} style={{ display: i === currentSlideIndex ? 'block' : 'none' }}>
                        <img className={styles['hero-slider-bg-image']} src={item.image} alt={item.text} />
                        <Container>
                            <div className={styles['carousel-caption']}>
                                <h3 className={styles['hero-slider-heading']}>{item.text}</h3>
                                <p className={styles['hero-slider-text']}>{item.caption}</p>
                                <MainButton button={item.button} /> 
                            </div>
                        </Container>
                    </div>
                ))}
                <Container className={styles['hero-slider-arrow']}>
                    <div>
                        <button
                            onClick={handlePrev}
                            className={`${styles['hero-slider-icon']} ${activeButton === 'left' ? '' : styles['default-black']} me-2`}
                        >
                            <FiChevronLeft style={{ verticalAlign: 'middle', strokeWidth: '1', width: '34px', height: '34px', margin: '0', padding: '0' }} />
                        </button>
                        <button
                            onClick={handleNext}
                            className={`${styles['hero-slider-icon']} ${activeButton === 'right' ? '' : styles['default-black']}`}
                        >
                            <FiChevronRight style={{ verticalAlign: 'middle', strokeWidth: '1', width: '34px', height: '34px', margin: '0', padding: '0' }} />
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
