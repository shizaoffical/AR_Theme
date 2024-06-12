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
                            <p> elit. Asperiores ratione vitae quasi molestias corporis aspernatur quaerat modi totam alias ipsam, nulla corrupti soluta impedit non delectus, perferendis eveniet nihil officiis.
                            Dolorum vitae incidunt modi aperiam voluptas veniam, molestiae, mollitia laudantium ipsa ut, consequuntur aut. Tempore incidunt autem dicta.</p>
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
