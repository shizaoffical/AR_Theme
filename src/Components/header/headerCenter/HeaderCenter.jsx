import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks';
import { FaBars , FaTimes ,FaEnvelope, FaPhone} from 'react-icons/fa';
function HeaderCenter() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            {/* Header Center Top Header */}
            <header className="header-center">
                <Container>
                    <div className="header-center-top-header">
                        <div className="header-center-left">
                            <Link to="" target="_blank">
                            <FaEnvelope />
                                <div className='header-center-detail'>
                                    <p >Need Live Support?</p>
                                    <span>Email@example.com</span>
                                </div>
                            </Link>
                            <Link to="" target="_blank">
                            <FaPhone />
                                <div className='header-center-detail'>
                                    <p >Call Us Now</p>
                                    <span>123456789</span>
                                </div>
                            </Link>
                        </div>
                        <div className='header-center-logo'><h3> LOGO </h3></div>
                        <div className="header-center-right">
                        <SocialLinks twitter linkdin whatsapp instagram facebook/>
                        </div>
                    </div>
                </Container>
            </header>
            {/* Navbar Center */}
            <nav className="navbar navbar-expand-lg nav-center" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Container>
                    <Link className="navbar-brand d-lg-none" to="#">Home</Link>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        {isNavOpen  ?  <FaTimes className='mobile-icon'/> : <FaBars className='mobile-icon'/>}
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item nav-center-link">
                                <Link className="nav-link" to="#">Home</Link>
                            </li>
                            <li className="nav-item nav-center-link">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item nav-center-link">
                                <Link className="nav-link" to="#">Project</Link>
                            </li>
                            <li className="nav-item nav-center-link">
                                <Link className="nav-link" to="#">Listing</Link>
                            </li>
                            <li className="nav-item nav-center-link dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Pages
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>      <Link className="dropdown-item" to="#">Home</Link></li>
                                    <li>      <Link className="dropdown-item" to="#">Home</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-center-link">
                                <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li className="nav-item nav-center-link">
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </div>
    )
}

export default HeaderCenter;
