import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "./Contact.module.css";
import SendMessageBtn from '../../snippets/SendMessageBtn';

function Form() {
    return (
        <div>
            <Row className={styles['contact-form']}>
                <Col lg={4}>
                    <div className={styles['contact-left']}>
                        <p>Looking for the new home?</p>
                        <h1>Get in touch with us today</h1>
                        <div className='d-flex gap-2'>
                            <span> <input type="checkbox" name="" id="" /></span>
                            <label htmlFor="">I understand and agree to the Privacy Policy, Service Agreement, and Acceptable Use Policy.</label>
                        </div>
                        <SendMessageBtn />
                    </div>
                </Col>
                <Col lg={8}>
                    <Row className={styles['form-row']} style={{ gap: "1rem" }}>
                        <Col className={styles['form-input']} >
                            <input type="text" name="fname" id="" placeholder='First Name*' required />
                        </Col>
                        <Col className={styles['form-input']} md={12}>
                            <input type="text" name="" id="" placeholder='Last Name*' required />
                        </Col>
                    </Row>
                    <Row className={styles['form-row']} style={{ gap: "1rem" }}>
                        <Col className={styles['form-input']}>
                            <input type="email" name="" id="" placeholder='Email' />
                        </Col>
                        <Col className={styles['form-input']}>
                            <input type="number" name="" id="" placeholder='Phone Number' />
                        </Col>
                    </Row>
                    <Row className={styles['form-row']}>
                        <Col className={styles['form-input']}>
                            <textarea name="" id="" cols="30" rows="9" placeholder='Message'></textarea>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Form;
