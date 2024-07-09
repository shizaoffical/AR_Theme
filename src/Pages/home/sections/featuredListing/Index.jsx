import React from 'react';
import Card from './Card';
// import { Col, Row } from 'react-bootstrap';
import SectionHeading from '@snippets/Heading';
import MainButton from '@snippets/MainButton';
import styles from './Index.module.css';

const Index = () => {
    return (
        <div className={styles['feature-listing']}>
            <SectionHeading heading="Discover our featured listings" />
            <div className={styles['feature-listing-grid']}>
                <Card video  sale title="Rs." value="25,550,000" />
                <Card arrowLeft rent title="Request." value="For Price" />
                <Card viewMore title="Rs." value="25,550,000" />
            </div>

            <center>
                <MainButton button="View More" />
            </center>
        </div>
    );
}

export default Index;
