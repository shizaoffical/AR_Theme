import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLinks from '@snippets/SocialLinks';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';
import LatestNews from '@components/news/LatestNews';

function Footer() {
    return (
        <>
            <Container> <LatestNews /></Container>

            <div className={styles['footer']}>

                <Container>
                    <div className={styles['footer-subscription-section']}>
                        <h2 className={styles['footer-subscription-title']}>Don't Miss Our Updates Subscribe Now</h2 >
                        <div className={styles['footer-subscription-email-section']}>
                            <input type="email" name="" id=""
                                className={styles['footer-subscription-input-email']} placeholder='Your Valid Email Here' />
                            <button type='button' className={styles['footer-subscription-button']}>Subscribe</button>
                        </div>
                    </div>
                    <Row className={styles['footer-content']}>
                        <Col xl={5} lg={4} md={4} sm={12} className={styles['footer-column']}>
                            <h4 className={styles['footer-title']}>Agent Logo</h4>
                            <p className={styles['footer-link']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere, repellat natus et dolore quaerat iusto, libero dolorem consequatur ipsam sint non, tenetur rerum. Aliquam impedit repellendus excepturi expedita voluptatibus.</p>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} className={styles['footer-column']}>
                            <h4 className={styles['footer-title']}>Navigation</h4>
                            <ul>
                                <li className={styles['footer-link']}><Link to="">About</Link></li>
                                <li className={styles['footer-link']}><Link to="">Listing</Link></li>
                                <li className={styles['footer-link']}><Link to="">FutureListing</Link></li>
                                <li className={styles['footer-link']}><Link to="">Communities</Link></li>
                                <li className={styles['footer-link']}><Link to="">Projects</Link></li>
                                <li className={styles['footer-link']}><Link to="">Location Maps</Link></li>
                                <li className={styles['footer-link']}><Link to="">Blog</Link></li>
                                <li className={styles['footer-link']}><Link to="">Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={12} className={styles['footer-column']}>
                            <div className={styles['footer-column-item']}>
                                <div>
                                    <FaMapMarkerAlt className={styles['footer-column-icon']} />
                                </div>
                                <p className={styles['footer-link']}>52 Serina Avenue , Highlight Mills New York 10930 - USA</p>
                            </div>
                            <div className={styles['footer-column-item']}>
                                <div>
                                    <FaPhoneAlt className={styles['footer-column-icon']} />
                                </div>
                                <p className={styles['footer-link']}><Link to=""><dt>Talk to us</dt>+92 300 123 4567</Link></p>
                            </div>
                            <p className={styles['footer-link']}><FaRegEnvelope className='ms-2' /> youremailaddress@gmail.com</p>
                            <SocialLinks instagram twitter whatsapp facebook linkdin />
                        </Col>
                    </Row>
                </Container>
            </div >
            <div className={styles['footer__copyright']}>
                <p>Copyright ©2024 All Rights Reserved. I Powered by AgentRem</p>
            </div>
        </>
    );
}

export default Footer;
