
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Communities from '@communities/Communities';
import { motion } from "framer-motion";
import PageDefender from '@snippets/PageDefender';
import Form from '../contactUs/Form';
import TextSection from '@textSection/TextSection';
import ProjectCarsouel from '@components/carousel/ProjectCarsouel';
import ProjectCard from '@components/ProjectCard';
import OthersListing from '@snippets/OthersListing';
import CheckList from './CheckList';

function SingleProject() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <PageDefender page="Project" subPage="Single Product" path="/project" />
        <Row><Col lg={12} ><ProjectCard moreDetail pcDetail /></Col></Row>
        <TextSection date=" 05 / May / 2023" contact request title text />
        <ProjectCarsouel />
        <OthersListing />
        <CheckList />
        <Form />
        <Communities />
      </Container>
    </motion.div>
  )
}

export default SingleProject