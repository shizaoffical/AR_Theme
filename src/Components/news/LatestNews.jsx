import React from 'react';
import NewsCard from '@components/news/NewsCard';
import { Row, Col } from 'react-bootstrap';
import SectionTitle from '@snippets/SectionTitle';

function LatestNews() {
  return (
    <div>
      <SectionTitle title="News" info="Latest"/>
      <Row className='mt-5'>
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
