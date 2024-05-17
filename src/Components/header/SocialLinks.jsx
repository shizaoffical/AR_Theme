import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaTwitter  } from 'react-icons/fa';
function SocialLinks(props) {
    return (
        <div className='header-social-links'>
          {props.facebook && <Link to="" target="_blank"><FaFacebook /></Link>}  
            {props.instagram &&  <Link to="" target="_blank">  <FaInstagram /></Link>}
             {props.whatsapp && <Link to="" target="_blank"> <FaWhatsapp /></Link>}
             {props.linkdin && <Link to="" target="_blank">  <FaLinkedin /></Link>}
             {props.twitter && <Link to="" target="_blank"> <FaTwitter /></Link>}
        </div>
    )
}

export default SocialLinks