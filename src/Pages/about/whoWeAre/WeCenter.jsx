import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionHeading from '../../../snippets/SectionHeading'
import styles from './WhoWeAreter.module.css';
import { FcContacts } from 'react-icons/fc';

function WeCenter() {
  return (
    <Container className={styles.weAre}>
      <div className='d-flex flex-column justify-content-center align-items-center'>

        <SectionHeading heading="Who We Are" />
        <p c>All Information abot us</p>
      </div>
      <Row>
        <Col lg={5} md={6}>
          <div>
        
          </div>
        </Col>
        <Col lg={2} md={6}>
          <img src="" alt="" />
        </Col>
        <Col lg={5} md={6}>
        </Col>
      </Row>
    </Container>
  )
}

export default WeCenter