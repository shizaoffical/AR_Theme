import React from 'react';
import CardHeading from "../snippets/CardHeading";
import CardTitle from "../snippets/CardTitle";
import SocialLinks from '../snippets/SocialLinks';
import { Row, Col } from 'react-bootstrap';
function ProjectsCard() {
  const backgroundImageUrl = 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg';
  return (
    <div className="projects-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.58), #000000),url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
      <div className="project-card-content">
        <div className="project-card-top-left">
          <button className="project-card-invest-button">Invest Now <span >&rarr;</span></button>
        </div>
        <Row>
          <Col lg={7}  md={12} className="project-card-bottom-left">

            <CardTitle title="ExPlore Now" anotherclass="project-title-change-color" />
            <CardHeading heading="property title" anotherclass="project-heading-change-color" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aspernatur minus a consequuntur porro ipsa temporibus, qui saepe maiores reprehenderit earum sequi voluptatibus pariatur officiis deserunt rem voluptates impedit autem!</p>

          </Col>
          <Col lg={5} md={12} className="project-card-bottom-right">
          <p>Share With Friends</p>
            <SocialLinks facebook twitter instagram />

          </Col>

        </Row>


      </div>
    </div>
  );
}

export default ProjectsCard;
