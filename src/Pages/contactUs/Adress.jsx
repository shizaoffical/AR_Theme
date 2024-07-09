import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
function Adress() {
    return (
        <>
           
            <Row className={styles['adress-info']}>
                <Col lg={6} md={12}>
                    <p className={styles['address-description']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias nihil porro culpa laborum soluta, nostrum dolor nulla dignissimos totam voluptate. Culpa, voluptates. Debitis repellat laborum veritatis ab quas dolorem!
                    Id dolores nemo dolorem a fugiat, reiciendis necessitatibus sed animi commodi inventore quis asperiores vel molestias nulla atque vitae pariatur accusantium deserunt odit optio tenetur facere quae. Nulla, aperiam optio!
                    </p>
                    <Row >
                        <Col className={styles['address-detail-inner']} lg={6} md={6} sm={6} xs={12}>
                            <span><FaPhoneAlt /></span>
                            <div>
                                <dt><small>Call us:</small></dt>
                                <p><b>+92 300 123 4567</b></p>
                            </div>
                        </Col>
                        <Col className={styles['address-detail-inner']} lg={6} md={6} sm={6} xs={12}>
                           <span> <MdLocationOn /></span>
                            <div>
                                <p>216-Block E, Town,<br />Lahore - Pakistan</p>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col className={styles['address-detail-inner']} lg={6} md={6} sm={6} xs={12}>
                        <span> <MdOutlineEmail /></span>   
                            <div>
                                <dt><small>Have any Question?</small></dt>
                                <p><b>info@yourdomain.com</b></p>
                            </div>
                        </Col>
                        <Col className={styles['address-detail-inner']} lg={6} md={6} sm={6} xs={12}>
                        <span><BsClock /></span>   
                            <div> <p>Monday - Friday<br />9:00 AM - 6:00 PM</p> </div>
                        </Col>
                    </Row>
                </Col>
                <Col  lg={6} md={12}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19820.064675700185!2d73.0287206!3d31.4470736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e1!3m2!1sen!2s!4v1718133708858!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps - Location Address"
                    />

                </Col>

            </Row>
        </>

    )
}

export default Adress