import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SocialLinks from '../header/SocialLinks'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
function Footer() {
    return (
        <>
    
        <div className='footer'>
            <Container>
                <Row className='subscribe-section'>
                    <Col lg={6} md={12} sm={12} className='subscribe-col-1'>
                        <h2>Don't Miss Our Updates Subscribe Now</h2>
                    </Col>

                    <Col lg={6} md={12} sm={12} className='subscribe-col-2'>

                        <input type="email" name="" id="" className='subscribe-email' placeholder='Your Valid Email Here' />
                        <button className='subscribe-btn'>Subscribe</button>
                    </Col>
                </Row>
                {/* Footer */}
                <Row className='footer-row'>
                    <Col lg={4} md={2} sm={12} className='footer-col'>
                        <h4 className='footer-heading'>Agent Logo</h4>
                        <p className='footer-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere, repellat natus et dolore quaerat iusto, libero dolorem consequatur ipsam sint non, tenetur rerum. Aliquam impedit repellendus excepturi expedita voluptatibus.</p>
                    </Col>
                    <Col lg={4} md={2} sm={12} className='footer-col'>
                        <h4 className='footer-heading'>Navigation</h4>
                        <ul>
                            <li className='footer-text'><Link to="">About</Link></li>
                            <li className='footer-text'><Link to="">Listing</Link></li>
                            <li className='footer-text'><Link to="">FutureListing</Link></li>
                            <li className='footer-text'><Link to="">Communities</Link></li>
                            <li className='footer-text'><Link to="">Projects</Link></li>
                            <li className='footer-text'><Link to="">Location Maps</Link></li>
                            <li className='footer-text'><Link to="">Blog</Link></li>
                            <li className='footer-text'><Link to="">Contact Us</Link></li>
                        </ul>
                    </Col>
                    <Col lg={4} md={2} sm={12} className='footer-col'>
                        <div className='footer-col3-flex'>
                            <FaMapMarkerAlt className='footer-col3-icon' />
                            <p className='footer-text'>52 Serina Avenue , Highlight Mills New York 10930 - USA</p>
                        </div>
                        <div className='footer-col3-flex'>
                            <FaPhone className='footer-col3-icon' />
                            <p className='footer-text'><Link to=""><dt>Talk to us</dt>+92 300 123 4567</Link></p>
                        </div>
                        <p className='footer-text'> <FaEnvelope className='ms-2' /> youremailaddress@gmail.com</p>
                        <SocialLinks instagram twitter whatsapp facebook linkdin />
                    </Col>
                </Row>
                {/* Last  */}

            </Container>
            

        </div>
        <div className='footer-end'>
        <p>Copyright ©2024 All Rights Reserved. I Powered by AgentRem </p>
    </div>
    </>
    )
}

export default Footer