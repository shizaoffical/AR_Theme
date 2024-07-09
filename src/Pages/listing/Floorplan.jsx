import React, { useState } from 'react';
import styles from './Listing.module.css';
import { Row, Col } from 'react-bootstrap';
import Image from "@assests/images/4.png"
const Floorplan = (props) => {
    const [isOpen, setIsOpen] = useState(props.state);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles['floor-plan']}>
            <Row className={styles.header} onClick={toggleDropdown}>
                <Col lg={7} md={6} sm={4} xs={4} > <p>{props.floor}</p></Col>
                <Col  lg={4} md={5} sm={7} xs={7}>
                    <div className={styles.info}>   
                        <p>2 Beds </p>
                        <p> 2 Baths</p>
                        <p>1.820 sqft</p>
                    </div></Col>
                <Col  lg={1} md={1} sm={1} xs={1}> <div className={styles.arrow}>{isOpen ? '▲' : '▼'} </div></Col>


            </Row>
            <Row className={`${styles['dropdown']} ${isOpen ? styles.show : ''}`}>
                <Col lg={9} md={12}>
                    <img src={Image} alt="First Floor" className={styles['floor-image']}
                    />
                </Col>
                <Col lg={3} md={12}>
                    <p className={styles['floor-description']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos maiores neque quam, perspiciatis soluta temporibus perferendis cumque adipisci asperiores sunt,
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos maiores neque quam, perspiciatis soluta temporibus perferendis cumque adipisci asperiores sunt, explicabo repudiandae eos iusto laudantium veniam assumenda? Cupiditate, mollitia sit.</p></Col>
            </Row>
        </div>
    );
};

export default Floorplan;
