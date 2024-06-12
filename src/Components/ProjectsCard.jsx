import React from 'react';
import CardHeading from "@snippets/CardHeading";
import SocialLinks from '@snippets/SocialLinks';
import { Row, Col } from 'react-bootstrap';
import styles from './Components.module.css'; 

function ProjectsCard() {
  const backgroundImageUrl = 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg';
  return (
    <div
      className={styles.projectsCard}
      style={{
        backgroundImage: `linear-gradient(to bottom, #0583F2, rgba(0, 0, 0, 0.58), #000000),url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      <div className={styles.pcContent}>
        <div className={styles.pcTopLeft}>
          <button className={styles.pcInvestButton}>
            Invest Now <span>&rarr;</span>
          </button>
        </div>
        <Row>
          <Col lg={7} md={12} className={styles.pcBottomLeft}>
          <div className={styles.pcPrice}>
              <p>project</p>
              <strong>property title</strong>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aspernatur minus a consequuntur porro ipsa temporibus, qui saepe maiores reprehenderit earum sequi voluptatibus pariatur officiis</p>
          </Col>
          <Col lg={5} md={12} className={styles.pcBottomRight}>
            <p>Share With Friends</p>
            <SocialLinks facebook twitter instagram />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProjectsCard;
