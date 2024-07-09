import React from 'react';
import Card from '@communities/Card';
import Image1 from '@assests/images/Screenshot_1.png';
import Image2 from '@assests/images/Screenshot_2.png';
import Image3 from '@assests/images/Screenshot_3.png';
import { Row, Col } from 'react-bootstrap';
import SectionHeading from '@snippets/Heading';
import styles from './Communities.module.css';

function Communties(props) {
  return (
    <div className={`${styles['communties']} ${props.anotherClass}`}>
      <SectionHeading heading1="Communties" />
      <Row className={styles['communties-body']}>
        <Col md={4} sm={6} xs={12} className={styles['communties-body-inner']}>
          <Card image={Image1} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles['communties-body-inner']}>
          <Card image={Image2} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles['communties-body-inner']}>
          <Card image={Image3} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles['communties-body-inner']}>
          <Card image={Image1} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles['communties-body-inner']}>
          <Card image={Image2} text="More info" />
        </Col>
      </Row>
    </div>
  );
}

export default Communties;
