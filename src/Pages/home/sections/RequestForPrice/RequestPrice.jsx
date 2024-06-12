import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PricingCard from './PricingCard';
import { FaShower, FaCar, FaRulerCombined, FaBed, FaShare, FaMapMarkerAlt, FaVideo,  FaPrint, FaInstagram, FaFacebook, FaTwitter, FaArrowCircleRight } from 'react-icons/fa';
import SymbolShelf from '@snippets/SymbolShelf';
import { Link } from 'react-router-dom';
import styles from './RequestPrice.module.css';

function RequestPrice() {
    return (
        <div className={styles.requestPrice}>
            <Container>
                <h1 className={styles.requestPriceTitle}>Request For Price</h1>
                <Row className={styles.requestPriceRow1}>
                    <Col lg={3} sm={6} xs={12}>
                        <PricingCard icon={<FaBed />} text="bedrooms" heading="21" />
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <PricingCard icon={<FaShower />} text="bathrooms" heading="11" />
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <PricingCard icon={<FaCar />} text="car parking" heading="55" />
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <PricingCard icon={<FaRulerCombined />} text="square feet" heading="4564" />
                    </Col>
                </Row>
                <Row className={styles.requestPriceRow2}>
                    <Col lg={8} sm={12} className={styles.requestPriceRow2Col1}>
                        <SymbolShelf icon={<FaMapMarkerAlt />} text="location" />
                        <SymbolShelf icon={<FaVideo />} text="video" />
                        <SymbolShelf icon={<FaArrowCircleRight />} text="brochure" />
                        <SymbolShelf icon={<FaArrowCircleRight />} text="payment plan" />
                        <SymbolShelf icon={<FaPrint />} text="print" />
                    </Col>
                    <Col lg={4} sm={12} className={styles.requestPriceRow2Col2}>
                        <SymbolShelf icon={<FaShare />} text="share" />
                        <Link to="" target="_blank"><FaFacebook /></Link>
                        <Link to="" target="_blank"> <FaInstagram /></Link>
                        <Link to="" target="_blank"><FaTwitter /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RequestPrice;
