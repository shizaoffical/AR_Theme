import React from 'react'
import FeaturedListiningsSingleSlider from './FeaturedListiningsSingleSlider';
import { Col, Row } from 'react-bootstrap';
import SectionHeading from 'snippets/SectionHeading';
import MainButton from 'snippets/MainButton';
function FeaturedListiningsSection() {
    return (
        <div className='featured-listining'> 
                    <SectionHeading heading="Discover our featured listings"/>
            <Row>

                <Col lg={4} md ={6}sm={12}>
                    <FeaturedListiningsSingleSlider />
                </Col>
                <Col lg={4}md ={6} sm={12}>
                    <FeaturedListiningsSingleSlider />
                </Col>
                <Col lg={4} md ={6}sm={12}>
                    <FeaturedListiningsSingleSlider />
                </Col>
            </Row>
            <center>
            <MainButton button="View More"/>
            </center>
   

        </div>
    )
}

export default FeaturedListiningsSection