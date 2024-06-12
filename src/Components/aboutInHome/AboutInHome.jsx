import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionHeading from '@snippets/SectionHeading';
import SymbolShelf from '@snippets/SymbolShelf';
import { FaArrowRight } from 'react-icons/fa';
import styles from './AboutInHome.module.css';

function AboutInHome(props) {
  return (
    <div className={styles.aboutInHome}>
      <Row>
        <Col lg={6} sm={12}>
          <SectionHeading heading1={props.heading} />
        </Col>
        <Col className={styles.aboutInHomeR1C2} lg={6} sm={12}>
          <SymbolShelf anotherclass={styles.aboutInHomeIText} icon={<FaArrowRight />} text="Contact Me" />
          <SymbolShelf anotherclass={styles.aboutInHomeIText} icon={<FaArrowRight />} text="Request Property" />
        </Col>
      </Row>
      
      <Row className={styles.aboutInHomeR2}>
        <Col lg={12}>
          <dt className='mb-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis. Accusamus ea voluptatibus sit corrupti delectus, exercitationem, eveniet dolorum sint officia veritatis harum quidem adipisci repellat natus esse necessitatibus ipsa!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis. Accusamus ea voluptatibus sit corrupti delectus, exercitationem, eveniet dolorum sint officia veritatis harum quidem adipisci repellat natus esse necessitatibus ipsa!
          </dt>
        </Col>
        <Col lg={12}>
          <p className={styles.aboutInHomeR2C2P}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutInHome;
