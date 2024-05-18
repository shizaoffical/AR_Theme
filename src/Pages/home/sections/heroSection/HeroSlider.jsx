import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import MainButton from '@snippets/MainButton';
function HeroSlider({ carouselData }) {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    return (
        <div className='mb-3'>
            <div className=' hero-section' style={{ position: 'relative', width: '100%' }}>
                {carouselData.map((item, i) => (
                    <div key={i} style={{ display: i === index ? 'block' : 'none' }}>
                        <img className='hero-slider-bg-image' src={item.image} alt={item.text} />
                        <div className=" carousel-caption " >
                            <h3  className='hero-slider-heading'>{item.text}</h3>
                            <p  className='hero-slider-text'>{item.caption}</p>
                            <MainButton button={item.button}/>
                        </div>
                    </div>
                ))}
                <div className='hero-slider-arrow'  style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <button onClick={handlePrev} className='hero-slider-icon me-2'> <FaArrowLeft /></button>
                    <button onClick={handleNext} className='hero-slider-icon'> <FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;
