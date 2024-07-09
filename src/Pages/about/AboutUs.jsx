import React from 'react'
import { Container } from 'react-bootstrap';
import Communities from '@communities/Communities';
import TextSection from '@textSection/TextSection';
import { motion } from "framer-motion";
import PageDefender from '@snippets/PageDefender';
import WeDefault from './whoWeAre/WeDefault';
import TestimonialSlider from './Testmonials';
import Agents from './Agents'
import styles from "./About.module.css"

function AboutUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <PageDefender page="About " />
        <TextSection heading="About Me" title text contact request/>
        <WeDefault />
      </Container>
      <Agents />
      <TestimonialSlider />
      <Container>
        <Communities anotherClass={styles['remove-top-border']} />
      </Container>
    </motion.div>
  )
}

export default AboutUs