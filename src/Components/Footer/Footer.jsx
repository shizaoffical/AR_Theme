import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLinks from '@snippets/SocialLinks';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <Container>
                    <Row className={styles.subscribeSection}>
                        <Col lg={6} md={12} sm={12} className={styles.subscribeCol1}>
                            <h2>Don't Miss Our Updates Subscribe Now</h2>
                        </Col>
                        <Col lg={6} md={12} sm={12} className={styles.subscribeCol2}>
                            <input type="email" name="" id="" className={styles.subscribeEmail} placeholder='Your Valid Email Here' />
                            <button className={styles.subscribeBtn}>Subscribe</button>
                        </Col>
                    </Row>
                    <Row className={styles.footerRow}>
                        <Col lg={4} md={2} sm={12} className={styles.footerCol}>
                            <h4 className={styles.footerHeading}>Agent Logo</h4>
                            <p className={styles.footerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere, repellat natus et dolore quaerat iusto, libero dolorem consequatur ipsam sint non, tenetur rerum. Aliquam impedit repellendus excepturi expedita voluptatibus.</p>
                        </Col>
                        <Col lg={4} md={2} sm={12} className={styles.footerCol}>
                            <h4 className={styles.footerHeading}>Navigation</h4>
                            <ul>
                                <li className={styles.footerText}><Link to="">About</Link></li>
                                <li className={styles.footerText}><Link to="">Listing</Link></li>
                                <li className={styles.footerText}><Link to="">FutureListing</Link></li>
                                <li className={styles.footerText}><Link to="">Communities</Link></li>
                                <li className={styles.footerText}><Link to="">Projects</Link></li>
                                <li className={styles.footerText}><Link to="">Location Maps</Link></li>
                                <li className={styles.footerText}><Link to="">Blog</Link></li>
                                <li className={styles.footerText}><Link to="">Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col lg={4} md={2} sm={12} className={styles.footerCol}>
                            <div className={styles.footerCol3Flex}>
                                <FaMapMarkerAlt className={styles.footerCol3Icon} />
                                <p className={styles.footerText}>52 Serina Avenue , Highlight Mills New York 10930 - USA</p>
                            </div>
                            <div className={styles.footerCol3Flex}>
                                <FaPhone className={styles.footerCol3Icon} />
                                <p className={styles.footerText}><Link to=""><dt>Talk to us</dt>+92 300 123 4567</Link></p>
                            </div>
                            <p className={styles.footerText}><FaEnvelope className='ms-2' /> youremailaddress@gmail.com</p>
                            <SocialLinks instagram twitter whatsapp facebook linkdin />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.footerEnd}>
                <p>Copyright ©2024 All Rights Reserved. I Powered by AgentRem</p>
            </div>
        </>
    );
}

export default Footer;
