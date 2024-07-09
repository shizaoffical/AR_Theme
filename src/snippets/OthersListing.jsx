import React from 'react'
import styles from "@snippets/Snippets.module.css"
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import {FaMapMarkerAlt, FaVideo,  FaPrint, FaInstagram, FaFacebook, FaTwitter, FaArrowCircleRight, FaShareSquare } from 'react-icons/fa';
import SymbolShelf from '@snippets/SymbolShelf';
function OthersListing() {
    return (
        <Container>

            <Row className={styles['other-listing']}>
                <Col lg={8} sm={12} className={styles['other-listing-right-item']}>
                    <SymbolShelf icon={<FaMapMarkerAlt />} text="location" />
                    <SymbolShelf icon={<FaVideo />} text="video" />
                    <SymbolShelf icon={<FaArrowCircleRight />} text="brochure" />
                    <SymbolShelf icon={<FaArrowCircleRight />} text="payment plan" />
                    <SymbolShelf icon={<FaPrint />} text="print" />
                </Col>
                <Col lg={4} sm={12} className={styles['other-listing-left-item']}>
                    <SymbolShelf icon={<FaShareSquare />} text="share" />
                    <Link to="" target="_blank"><FaFacebook /></Link>
                    <Link to="" target="_blank"><FaTwitter /></Link>
                    <Link to="" target="_blank"> <FaInstagram /></Link>
                   
                </Col>
            </Row>
        </Container>
    )
}

export default OthersListing