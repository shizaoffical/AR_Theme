import React from 'react';
import HeroSlider from './HeroSlider';


function HeroSection() {
  const carouselData = [
    { image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { image: 'https://t4.ftcdn.net/jpg/06/81/36/09/240_F_681360903_Glij2V8mY3wY7L3PJZ3eUtFIRM3xVGLf.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-02.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { image: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" }

  ];

  return (
    <div >
      <HeroSlider carouselData={carouselData} />
    </div>
  );
}

export default HeroSection;
