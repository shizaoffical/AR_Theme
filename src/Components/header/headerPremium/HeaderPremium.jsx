import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SocialLinks from '@snippets/SocialLinks';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './HeaderPremium.module.css';

function HeaderPremium() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            {/* Header Default Top Header */}
            <header className={styles.headerPremium}>
                <Container>
                    <div className={styles.headerPremiumTopHeader}>
                        <div><h3> LOGO </h3></div>
                        <div className={styles.headerDefaultLeft}>
                            <Link to="" target="_blank"><FaEnvelope /><span className='ms-1'>Email@example.com</span></Link>
                            <Link to="" target="_blank"><FaPhone /><span className='ms-1'>123456789</span></Link>
                        </div>
                    </div>
                </Container>
            </header>
            {/* Navbar */}
            <nav className={`navbar navbar-expand-lg ${styles.navCenter}`}>
                <div className="container">
                    <Link className={`nav-link ${styles.navPremiumLink}`} to="#">Home</Link>
                    <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" onClick={toggleNav}>
                        {isNavOpen ? <FaTimes className={styles.mobileIcon} /> : <FaBars className={styles.mobileIcon} />}
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${styles.navPremiumLink}`}>
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className={`nav-item ${styles.navPremiumLink}`}>
                                <Link className="nav-link" to="#">Project</Link>
                            </li>
                            <li className={`nav-item ${styles.navPremiumLink}`}>
                                <Link className="nav-link" to="#">Listing</Link>
                            </li>
                            <li className={`nav-item dropdown ${styles.navPremiumLink}`}>
                                <Link className={`nav-link dropdown-toggle`} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Pages
                                </Link>
                                <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item ${styles.dropdownItem}`} to="#">Home</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdownItem}`} to="#">Home</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item ${styles.navPremiumLink}`}>
                                <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li className={`nav-item ${styles.navPremiumLink}`}>
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <SocialLinks twitter linkdin whatsapp instagram facebook />
                </div>
            </nav>
        </div>
    )
}

export default HeaderPremium;
