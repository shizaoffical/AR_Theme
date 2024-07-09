
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Communities from '@communities/Communities';
import { motion } from "framer-motion";
import PageDefender from '@snippets/PageDefender';
import TextSection from '@textSection/TextSection';
import IconCheck from '@snippets/IconCheck'
import styles from "./Listing.module.css"
import OthersListing from "@snippets/OthersListing"
import Floorplan from './Floorplan'
import ListingCarasoul from '../../components/carousel/ListingCarasoul';
function Listing() {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

        <Container>

          <PageDefender page="Project" />
          <TextSection heading1="single listing title" button="for sate" date="05 / May / 2023" amount="1,000,000"/>
          <ListingCarasoul/>
          <OthersListing/>
          <TextSection description="description" title text contact request />
          <div className={styles['feature']}>
            <h2 className={styles['check-list-title']}>Features & Animation</h2>
            <Row>
              <Col lg={4} md={6} sm={6} xs={12}>
                <IconCheck text="TV Cable" />
                <IconCheck text="Gym" />
                <IconCheck text="Lawn" />
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <IconCheck text="Air Conditioning" />
                <IconCheck text="Swimming Pool" />
                <IconCheck text="Washer" />
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <IconCheck text="Barbeque" />
                <IconCheck text="Microwave" />
              </Col>
            </Row>
          </div>
          <div className={styles['near-by-places']}>
            <h2 className={styles['check-list-title']}>Nearby Places</h2>
            <Row>
              <Col lg={4} md={6} sm={6} xs={12}>
                <IconCheck text="Health & Medical" />
                <IconCheck text="Education" />
                <IconCheck text="Ring Road" />
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <IconCheck text="Home service" />
                <IconCheck text="Shoping malls" />
                <IconCheck text="Bus Terminal" />
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <IconCheck text="Restaurant" />
                <IconCheck text="Parks" />
              </Col>
            </Row>
          </div>
          <div className={styles['floor-plans']}>
            <h2 className={styles['check-list-title']}>Floor Plans</h2>
            <Floorplan state={true} floor="First Floor"/>
            <Floorplan state={false} floor="Second Floor"/>
        </div>
          <Communities />
        </Container>
      </motion.div>
    </div>
  )
}

export default Listing