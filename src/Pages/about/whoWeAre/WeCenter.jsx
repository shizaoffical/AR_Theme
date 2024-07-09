import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './WhoWeAre.module.css';
import IconText from './IconText';
import { BiBuilding } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { BsHouseFill } from 'react-icons/bs';
import { HiLockClosed, HiOfficeBuilding } from 'react-icons/hi';

function WeCenter() {
  return (
    <Container className={styles['who-we-are']}>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <h3 className={styles['main-heading']}>Who We Are </h3>
      <p className={styles['main-title']}>All Information about us</p>
      </div>
      <Row className={styles['who-we-are-inner']}>
        <Col lg={6} md={6} className={styles['who-we-are-center-column']}>
          <IconText icon={<FaUser />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, sit amet consectetur" heading="Agent for your Services" />
          <IconText icon={<BiBuilding />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, sit amet consectetur" heading="Building for Rent & Sell" />
          <IconText icon={<BiBuilding />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, sit amet consectetur" heading="Find Newest Building" />
        </Col>
        <Col lg={6} md={6} className={styles['who-we-are-center-column']}>
          <IconText icon={<BsHouseFill />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, sit amet consectetur" heading="Wing Range properties" />
          <IconText icon={<HiOfficeBuilding />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, sit amet consectetur" heading="Offices for your Work" />
          <IconText icon={<HiLockClosed />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, sit amet consectetur" heading="Deliverable with security" />
        </Col>
      </Row>
    </Container>
  )
}

export default WeCenter