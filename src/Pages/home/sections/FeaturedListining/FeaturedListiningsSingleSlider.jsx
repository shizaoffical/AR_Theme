
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SocialLinks from '@snippets/SocialLinks';
import styles from './FLSection.module.css';
import { Row, Col } from 'react-bootstrap';
import { FaArrowRightLong } from 'react-icons/fa6';


const FeaturedListiningsSingleSlider = (props) => {
  const [slides] = useState([

    { id: 1, imageUrl: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg' },
    { id: 2, imageUrl: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg' },
    { id: 3, imageUrl: 'https://t4.ftcdn.net/jpg/06/81/36/09/240_F_681360903_Glij2V8mY3wY7L3PJZ3eUtFIRM3xVGLf.jpg' }
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => { setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)); };

  const prevSlide = () => { setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1)); };

  return (
    <div className={styles.flContainer}>
      {slides.map((slide, index) => (
        <div key={slide.id}>
          <div
            className={`${styles.flSlide} ${index === currentSlideIndex ? styles.active : ''}`} style={{ backgroundImage: `url(${slide.imageUrl})` }}>
            <div className={styles.flSocialLinks}> <SocialLinks facebook twitter instagram /></div>
            <div className={styles.flBbtnContainer}>
              {props.sale && <button className={`${styles.ribbon} ${styles.sale}`}>For Sale</button>}
              {props.rent && <button className={`${styles.ribbon} ${styles.rent}`}>For Rent</button>}
            </div>
            <div className={styles.flPrice}>
              <p>{props.title}</p>
              <strong>{props.value}</strong>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.flBtn}>
        <button className={styles.flPrevious} onClick={prevSlide}><FaArrowLeft /></button>
        <button className={styles.flNext} onClick={nextSlide}><FaArrowRight /></button>
      </div>


      <div className={styles.textSection}>
        <center>
          <p> Explore now</p>
          <h4> PRoperty title</h4>
        </center>
        <div>
          <Row >
            <Col className={styles.flProduct} lg={3} md={3} sm={3} xs={3}>
              <p><small>BED</small></p>
              <h5>3</h5>
            </Col>
            <Col className={styles.flProduct} lg={3} md={3}  sm={3} xs={3}>
              <p><small>bath</small></p>
              <h5>4</h5>
            </Col>
            <Col className={styles.flProduct} lg={3} md={3}  sm={3} xs={3}>
              <p><small>parking</small></p>
              <h5>1</h5>
            </Col>
            <Col className={styles.flProduct} lg={3} md={3}  sm={3} xs={3}>
              <p><small>sqft</small></p>
              <h5>2555</h5>  
            </Col>
          </Row>
          <Row>
            <Col className={styles.flsubProduct} lg={4} md={4} sm={4} xs={4}>
             <strong className='d-flex align-items-center gap-1'> <FaArrowRightLong/> Location </strong>
              </Col>
            <Col  className={styles.flsubProduct} lg={4} md={4} sm={4} xs={4}>
            <strong className='d-flex align-items-center gap-1'> <FaArrowRightLong/> brochure </strong>
              </Col>
            <Col  className={styles.flsubProduct} lg={4} md={4} sm={4} xs={4}>
            <strong className='d-flex align-items-center gap-1 text-right'> <FaArrowRightLong/> Print </strong>
              </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListiningsSingleSlider;
