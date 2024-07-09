import React, { useState } from 'react';
import Carousel from '@components/carousel/Carousel';
import ThumbnailCarousel from '@components/carousel/ThumbnailCarousel';
import styles from "./Carousel.module.css"
import { Container, Row, Col } from 'react-bootstrap';
const images = [
  "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRnCvt5saTdPByizA8m_BLk3CdRwI9p2EZ3TGtN2qfXu70v1bnoBD_9P8OC0LXSq-yg4&usqp=CAU",
  'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg',
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
  'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-02.jpg',
  'https://t4.ftcdn.net/jpg/06/81/36/09/240_F_681360903_Glij2V8mY3wY7L3PJZ3eUtFIRM3xVGLf.jpg',
  'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600',
  "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const ProjectCarsouel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container >
      <Row>
        <Col lg={8} md={12}>
          <Carousel images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}  />
        </Col >
        <Col lg={4} md={12}>
          <div className={styles['project-information']}>
            <div className={styles['project-information-heading']}>
              Project Information
            </div>
            <div className={styles['project-information-heading-2']}>
              <div>
                <dt>Owner name:</dt>
                <p>josefin h. smith</p>
              </div>
              <div>
                <dt>category</dt>
                <p>building construction</p>
              </div>
              <div>
                <dt>complete date</dt>
                <p>25 january, 2023</p>
              </div>
              <div>
                <dt>project location</dt>
                <p>lahore - pakistan</p>
              </div>

            </div>
          </div>
        </Col>
      </Row>

      <ThumbnailCarousel images={images} setCurrentIndex={setCurrentIndex} />
    </Container>
  );
};

export default ProjectCarsouel;
