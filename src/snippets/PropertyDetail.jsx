import React from 'react'

import { Row, Col } from 'react-bootstrap';
import styles from "./Snippets.module.css"
function PropertyDetail(props) {
    return (
        <div>
            <Row className={` ${props.anotherClass}`} >
                <Col className={styles['property-detail']} lg={3} md={3} sm={3} xs={3}>
                    <p><small>BED</small></p>
                    <h5>3</h5>
                </Col>
                <Col className={styles['property-detail']} lg={3} md={3} sm={3} xs={3}>
                    <p><small>bath</small></p>
                    <h5>4</h5>
                </Col>
                <Col className={styles['property-detail']} lg={3} md={3} sm={3} xs={3}>
                    <p><small>parking</small></p>
                    <h5>1</h5>
                </Col>
                <Col className={styles['property-detail']} lg={3} md={3} sm={3} xs={3}>
                    <p><small>sqft</small></p>
                    <h5>2555</h5>
                </Col>
            </Row>
        </div>
    )
}

export default PropertyDetail