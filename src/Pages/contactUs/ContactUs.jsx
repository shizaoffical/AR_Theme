import React from 'react';
import { Container } from 'react-bootstrap';
import Communities from '@communities/Communities';
import { motion } from "framer-motion";
import PageDefender from '@snippets/PageDefender';
import Form from './Form';
import Adress from './Adress';
import TextSection from '@textSection/TextSection';

function ContactUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <PageDefender page="Contact Us" />
        <TextSection heading="Contact " request/>
        <Adress />
        <Form />
        <Communities />
      </Container>
    </motion.div>
  )
}

export default ContactUs;
