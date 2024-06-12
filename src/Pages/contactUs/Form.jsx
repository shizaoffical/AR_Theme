import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "./Contact.module.css"
function Form() {
    return (
        <div>
            <Row className={styles.contactForm}>
                <Col lg={4} >
                    <div className={styles.contactLeft}>
                        <p>Looking for thr new home?</p>
                        <h1>Get in touch with us today</h1>
                        <div className='d-flex gap-2'>
                            <span> 
                                <input type="checkbox" name="" id="" />
                                </span>

                            <label htmlFor="" >I understand and agree to the Privacy Policy, Service Agreement, and Acceptable Use Policy. </label>
                        </div>

                        <button type='submit' className={styles.sendMessage}>Send Message</button>
                    </div>

                </Col>


                <Col lg={8} >
                    <Row className={styles.formRow} style={{ gap: "1rem" }}>
                        <Col  className={styles.formInput}>
                            <input type="text" name="fname" id="" placeholder='First Name*' required />
                        </Col>
                        <Col  className={styles.formInput}>
                            <input type="text" name="" id="" placeholder='Last Name*' required />
                        </Col>
                    </Row>

                    <Row className={styles.formRow} style={{ gap: "1rem" }} >
                        <Col className={styles.formInput}>
                            <input type="email" name="" id="" placeholder='Email' />
                        </Col>
                        <Col className={styles.formInput}>
                            <input type="number" name="" id="" placeholder='Phone Number' />
                        </Col>
                    </Row>

                    <Row className={styles.formRow}>
                        <Col className={styles.formInput}>
                            <textarea name="" id="" cols="30" rows="9" placeholder='Message'></textarea>
                        </Col>
                    </Row>
                </Col>


            </Row>
        </div>
    )
}

export default Form