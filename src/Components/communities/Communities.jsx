import React from 'react';
import CommunitiesCard from '@communities/CommunitiesCard';
import Image1 from '@assests/images/Screenshot_1.png';
import Image2 from '@assests/images/Screenshot_2.png';
import Image3 from '@assests/images/Screenshot_3.png';
import { Row, Col } from 'react-bootstrap';
import SectionHeading from '@snippets/SectionHeading';
import styles from './Communities.module.css';

function Communties() {
  return (
    <div className={styles.communties}>
      <SectionHeading heading="Communties" />
      <Row className={styles.communtiesRow}>
        <Col md={4} sm={6} xs={12} className={styles.communtiesCol}>
          <CommunitiesCard image={Image1} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles.communtiesCol}>
          <CommunitiesCard image={Image2} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles.communtiesCol}>
          <CommunitiesCard image={Image3} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles.communtiesCol}>
          <CommunitiesCard image={Image1} text="More info" />
        </Col>
        <Col md={4} sm={6} xs={12} className={styles.communtiesCol}>
          <CommunitiesCard image={Image2} text="More info" />
        </Col>
      </Row>
    </div>
  );
}

export default Communties;
