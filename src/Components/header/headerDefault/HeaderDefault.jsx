import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLinks from '@snippets/SocialLinks';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './HeaderDefault.module.css';


const HeaderDefault = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            {/* Header Default Top Header */}
            <header className={styles.headerDefault}>
                <Container>
                    <div className={styles.headerDefaultTopHeader}>
                        <div className={styles.headerDefaultLeft}>
                            <Link to="" target="_blank"><FaEnvelope /><span className='ms-1'>Email@example.com</span></Link>
                            <Link to="" target="_blank"> <FaPhone /><span className='ms-1'>123456789</span></Link>
                        </div>
                        <SocialLinks twitter linkdin whatsapp instagram facebook />
                    </div>
                </Container>
            </header>

            {/* Navbar Default */}
            <nav className={`navbar navbar-expand-lg ${styles.navbar}`} style={{ height: isNavOpen ? 'auto' : '80px' }}>
                <Container>
                    <Link className="navbar-brand" to="#"><h3> LOGO </h3></Link>
                    <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" onClick={toggleNav}>
                        {isNavOpen ? <FaTimes className={styles.mobileIcon} /> : <FaBars className={styles.mobileIcon} />}
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item ${styles.navItem}`}>
                                <Link className={`nav-link ${styles.navLink}`} to="#">Home</Link>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <Link className={`nav-link ${styles.navLink}`} to="#">About</Link>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <Link className={`nav-link ${styles.navLink}`} to="#">Project</Link>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <Link className={`nav-link ${styles.navLink}`} to="#">Listing</Link>
                            </li>
                            <li className={`nav-item dropdown ${styles.navItem}`}>
                                <Link className={`nav-link dropdown-toggle ${styles.navLink}`} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Pages
                                </Link>
                                <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item ${styles.dropdownItem}`} to="#">Home</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdownItem}`} to="#">Home</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <Link className={`nav-link ${styles.navLink}`} to="#">Blog</Link>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <Link className={`nav-link ${styles.navLink}`} to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default HeaderDefault;
