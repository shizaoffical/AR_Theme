import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLinks from '@snippets/SocialLinks';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './HeaderCenter.module.css';

function HeaderCenter() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            {/* Header Center Top Header */}
            <header className={styles.headerCenter}>
                <Container>
                    <div className={styles.headerCenterTopHeader}>
                        <div className={styles.headerCenterLeft}>
                            <Link to="" target="_blank">
                                <FaEnvelope />
                                <div className={styles.headerCenterDetail}>
                                    <p>Need Live Support?</p>
                                    <span>Email@example.com</span>
                                </div>
                            </Link>
                            <Link to="" target="_blank">
                                <FaPhone />
                                <div className={styles.headerCenterDetail}>
                                    <p>Call Us Now</p>
                                    <span>123456789</span>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.headerCenterLogo}><h3>LOGO</h3></div>
                        <div className={styles.headerCenterRight}>
                            <SocialLinks twitter linkdin whatsapp instagram facebook />
                        </div>
                    </div>
                </Container>
            </header>
            {/* Navbar Center */}
            <nav className={`navbar navbar-expand-lg ${styles.navCenter}`} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Container>
                    <Link className="navbar-brand d-lg-none" to="#">Home</Link>
                    <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" onClick={toggleNav}>
                        {isNavOpen ? <FaTimes className={styles.mobileIcon} /> : <FaBars className={styles.mobileIcon} />}
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav mx-auto">
                            <li className={`nav-item ${styles.navCenterLink}`}>
                                <Link className="nav-link" to="#">Home</Link>
                            </li>
                            <li className={`nav-item ${styles.navCenterLink}`}>
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className={`nav-item ${styles.navCenterLink}`}>
                                <Link className="nav-link" to="#">Project</Link>
                            </li>
                            <li className={`nav-item ${styles.navCenterLink}`}>
                                <Link className="nav-link" to="#">Listing</Link>
                            </li>
                            <li className={`nav-item ${styles.navCenterLink} dropdown`}>
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Pages
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Home</Link></li>
                                    <li><Link className="dropdown-item" to="#">Home</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item ${styles.navCenterLink}`}>
                                <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li className={`nav-item ${styles.navCenterLink}`}>
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </div>
    );
}

export default HeaderCenter;
