import React from 'react';
import SocialLinks from '@snippets/SocialLinks';
import { Row, Col } from 'react-bootstrap';
import styles from './Components.module.css'
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

const ProjectCard = (props) => {
  const backgroundImageUrl = 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg';
  return (
    <Link to="/single-product">
      <div className={styles['project-card']} style={{ backgroundImage: `linear-gradient(8deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)),url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', }}>
        <button className={styles['project-card-button']}> Invest Now<span> <FaChevronRight /> </span> </button>
        {props.pcDetail &&
          <div className={styles['project-card-alert']}>
            <p>successfully completed</p>
            <p>under construction</p>
          </div>}


        <Row>
          <Col lg={7} md={12} className={styles['project-card-description']}>
            <div className={styles['project-card-heading']}> <p>project</p> <strong>property title</strong></div>
            {props.text && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aspernatur minus a consequuntur porro ipsa temporibus, qui saepe maiores reprehenderit earum sequi </p>}
            {props.moreDetail && 
            <div className={styles['project-card-more-detail']} >
              <span> <FaChevronRight /></span>
              <Link to="" target="_blank">More Detail</Link>
            </div>
            }
          </Col>
          <Col lg={5} md={12} className={styles['project-card-links']}>
            <p>Share With Friends</p>
            <SocialLinks facebook twitter instagram />
          </Col>
        </Row>
      </div>
    </Link>
  );
}

export default ProjectCard;
