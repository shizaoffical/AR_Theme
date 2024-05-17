import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SocialLinks from '../SocialLinks';
import { FaBars , FaTimes ,FaEnvelope, FaPhone} from 'react-icons/fa';
function HeaderPremium() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>

            {/* Header Default Top Header */}
            <header className="header-premium">
                <Container>
                    <div className="header-premium-top-header">

                        <div><h3> LOGO </h3></div>
                        <div className="header-default-left">
                            <Link to="" target="_blank"><FaEnvelope /><span className='ms-1'>Email@example.com</span></Link>
                            <Link to="" target="_blank"><FaPhone /><span className='ms-1'>123456789</span></Link>
                        </div>
                    </div>
                </Container>
            </header>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg nav-center">
                <div className="container">
                <Link className="nav-link nav-premium-link" to="#">Home</Link>
                 
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        {isNavOpen  ?  <FaTimes className='mobile-icon'/> : <FaBars className='mobile-icon'/>}
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         
                            <li className="nav-item nav-premium-link">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item nav-premium-link">
                                <Link className="nav-link" to="#">Project</Link>
                            </li>
                            <li className="nav-item nav-premium-link">
                                <Link className="nav-link" to="#">Listing</Link>
                            </li>
                            <li className="nav-item nav-premium-link dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Pages
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>      <Link className="dropdown-item" to="#">Home</Link></li>
                                    <li>      <Link className="dropdown-item" to="#">Home</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-premium-link">
                                <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li className="nav-item nav-premium-link">
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <SocialLinks twitter linkdin whatsapp instagram facebook/>
                </div>
            </nav>
        </div>
    )
}

export default HeaderPremium;
