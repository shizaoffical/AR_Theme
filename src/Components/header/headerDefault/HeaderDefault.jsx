import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks';
import { FaBars , FaTimes ,FaEnvelope, FaPhone} from 'react-icons/fa';
const HeaderDefault = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            {/* Header Default Top Header */}
            <header className="header-default">
                <Container>
                    <div className="header-default-top-header">
                        <div className="header-default-left">
                            <Link to="" target="_blank"><FaEnvelope /><span className='ms-1'>Email@example.com</span></Link>
                            <Link to="" target="_blank"> <FaPhone /><span className='ms-1'>123456789</span></Link>
                        </div>
                       
                            <SocialLinks twitter linkdin whatsapp instagram facebook/>
                      
                    </div>
                </Container>
            </header>

            {/* Navbar Default */}
            <nav className="navbar navbar-expand-lg " style={{ height: isNavOpen ? 'auto' : '80px' }}>
                <Container>
                    <Link className="navbar-brand" to="#"><h3> LOGO </h3></Link>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        {isNavOpen ?  <FaTimes className='mobile-icon'/> : <FaBars className='mobile-icon'/>}
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#">Project</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#">Listing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Pages
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>      <Link className="dropdown-item" to="#">Home</Link></li>
                                    <li>      <Link className="dropdown-item" to="#">Home</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default HeaderDefault;
