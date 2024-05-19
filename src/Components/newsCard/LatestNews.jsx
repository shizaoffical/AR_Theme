import React from 'react';
import NewsCard from '@components/newsCard/NewsCard';
import { Row, Col } from 'react-bootstrap';
import styles from './NewsCard.module.css';

function LatestNews() {
  return (
    <div>
      <center>
        <small style={{ textTransform: 'uppercase', color: '#A4A4A4' }}>Latest</small>
        <h1 className={styles.latestNewsTitle}>News</h1>
      </center>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <NewsCard newsimage="https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg" />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <NewsCard newsimage="https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg" />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <NewsCard newsimage="https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg" />
        </Col>
      </Row>
    </div>
  );
}

export default LatestNews;
