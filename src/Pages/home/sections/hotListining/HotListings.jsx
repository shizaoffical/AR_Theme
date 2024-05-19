import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import HotListingSlider from './HotListiningSlider';
import SectionHeading from '@snippets/SectionHeading';
import styles from './HotListings.module.css';

function HotListings() {
    return (
        <div>
            <Container className={styles.hotListining}>
                <SectionHeading heading="Hot LISTINgs" />
                <Row className={styles.hotListiningRow}>
                    <Col lg={5} sm={12}>
                        <div className={styles.hotListiningCol1}>
                            <p>Listed Date : 05 / May /2023</p>
                            <h1>Welcome to our listining</h1>
                            <dt>Lorem ipsum dolor sit amet consectetur adipisicing</dt>
                            <p>elit. Porro eos vero excepturi quae nostrum culpa? Iste quod, sit dolorem unde tempore rerum id. Rerum id cumque expedita. Culpa, perspiciatis amet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dolore dolores sunt iste voluptas eaque, voluptatibus aspernatur quo praesentium ducimus id ratione modi.</p>
                        </div>
                    </Col>
                    <Col lg={7} sm={12}>
                        <HotListingSlider />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HotListings;
