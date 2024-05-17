import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
    <div className="slider-container">
      
      {slides.map((slide, index) => (
        
        <div
          key={slide.id}
          className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="button-container">
            <button className="slide-button sale">For Sale</button>
            <button className="slide-button rent">For Rent</button>
           
          </div>
          <button className="slide-button details">More Details</button>
        </div>
      ))}
         <button className=" previous" onClick={prevSlide}> <span> <FaArrowLeft className='me-1'/></span>Previous</button>
      <button className=" next" onClick={nextSlide}>Next Listing <span><FaArrowRight className='ms-1' /></span></button>
   
    </div>
  );
};

export default HotListingSlider;
