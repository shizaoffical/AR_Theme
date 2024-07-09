import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import HotListingSlider from './Slider';
import SectionHeading from '@snippets/Heading';
import styles from './Index.module.css';
import Card from './Card';
import { FaShower, FaCar, FaRulerCombined, FaBed} from 'react-icons/fa';
import OthersListing from '@snippets/OthersListing';

const Index = () => {
    return (
        <div>
            <Container className={styles.hotlisting}>
                <SectionHeading heading1="Hot listings" />
                <Row className={styles['hotlisting-item']}>
                    <Col lg={5} sm={12}>
                    <div className={styles['hotlisting-item-description']}>
                            <p>Listed Date: 05 / May / 2023</p>
                            <h1>Wellcome to our listing</h1>
                            <dt>Lorem ipsum dolor sit amet consectetur adipisicing</dt>
                            <p> elit. Asperiores ratione vitae quasi molestias corporis aspernatur quaerat modi totam alias ipsam, nulla corrupti soluta impedit non delectus, perferendis eveniet nihil officiis.
                            Dolorum vitae incidunt modi aperiam voluptas veniam, molestiae, mollitia laudantium ipsa ut, consequuntur aut. Tempore incidunt autem dicta.</p>
                        </div>
                    </Col>
                    <Col lg={7} sm={12}>
                        <HotListingSlider />
                    </Col>
                </Row>
            </Container>
            <div className={styles['price-section']}>
            <Container>
                <h1 className={styles['price-title']}>Request For Price</h1>
                <Row className={styles['price-section-inner']}>
                    <Col lg={3} sm={6} xs={12}>
                        <Card icon={<FaBed />} text="bedrooms" heading="3" />
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <Card icon={<FaShower />} text="bathrooms" heading="4" />
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <Card icon={<FaCar />} text="car parking" heading="1" />
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <Card icon={<FaRulerCombined />} text="square feet" heading="2340" />
                    </Col>
                </Row>
                <OthersListing />
            </Container>
        </div>
        </div>
    );
}

export default Index;
