import React from 'react';
import FeaturedListiningsSingleSlider from './FeaturedListiningsSingleSlider';
import { Col, Row } from 'react-bootstrap';
import SectionHeading from '@snippets/SectionHeading';
import MainButton from '@snippets/MainButton';
import styles from './FLSection.module.css';

function FeaturedListiningsSection() {
    return (
        <div className={styles.featuredListining}>
            <SectionHeading heading="Discover our featured listings" />
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <FeaturedListiningsSingleSlider />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FeaturedListiningsSingleSlider />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FeaturedListiningsSingleSlider />
                </Col>
            </Row>
            <center>
                <MainButton button="View More" />
            </center>
        </div>
    );
}

export default FeaturedListiningsSection;
