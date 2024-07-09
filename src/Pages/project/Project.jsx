
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Communities from '@communities/Communities';
import { motion } from "framer-motion";
import PageDefender from '@snippets/PageDefender';
import TextSection from '@textSection/TextSection';
import ProjectCard from '@components/ProjectCard';
import styles from "./Project.module.css"
function Project() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      <Container>

        <PageDefender page="Project" />
        <TextSection heading="Projects" contact request/>
        <Row className={styles['project-body']}>
          <Col lg={4} md={6} sm={12}> <ProjectCard moreDetail /></Col>
          <Col lg={4} md={6} sm={12}><ProjectCard moreDetail /></Col>
          <Col lg={4} md={6} sm={12}> <ProjectCard moreDetail /></Col>
        </Row>
        <Row className={styles['project-body']}>
          <Col lg={12} ><ProjectCard moreDetail pcDetail /> </Col>
        </Row>
        <Row className={styles['project-body']} >
          <Col lg={6} ><ProjectCard moreDetail text /></Col>
          <Col lg={6} ><ProjectCard moreDetail text /></Col>
        </Row>
        <Communities />
      </Container>
    </motion.div>
  )
}

export default Project