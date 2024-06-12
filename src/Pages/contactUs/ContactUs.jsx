import React from 'react'
import { Container } from 'react-bootstrap';
import Communities from '@communities/Communities';
import LatestNews from '@newsCard/LatestNews';
import { motion } from "framer-motion";
import PageDefender from '../../snippets/PageDefender';
import Form from './Form';

function ContactUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>


      <Container>

        <PageDefender page="Contact Us" />
        <Form />
        <Communities />
        <LatestNews />
      </Container>
    </motion.div>
  )
}

export default ContactUs