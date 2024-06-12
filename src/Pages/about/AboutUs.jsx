import React from 'react'
import { Container } from 'react-bootstrap';
import Communities from '@communities/Communities';
import LatestNews from '@newsCard/LatestNews';
import AboutInHome from '@components/aboutInHome/AboutInHome';
import { motion } from "framer-motion";
import PageDefender from '../../snippets/PageDefender';
import WeCenter from './whoWeAre/WeCenter';
import WeDefault from './whoWeAre/WeDefault';
import WeRight from './whoWeAre/WeRight';

function AboutUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>


      <Container>
        <PageDefender page="About " />
        <AboutInHome heading="About Me" />
        <WeCenter/>
        <WeDefault/>
        <WeRight/>
        <Communities />
        <LatestNews />
      </Container>
    </motion.div>
  )
}

export default AboutUs