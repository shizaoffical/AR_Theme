import React from 'react'
import { motion } from "framer-motion";
import { Container } from 'react-bootstrap';
import Hero from './sections/hero/Hero';
import HotListings from './sections/hotlisting/Index';
import FeaturedListing from './sections/featuredListing/Index';
import Project from './sections/Projects';
import BestPlaces from './sections/BestPlaces';
import Communities from '@communities/Communities';
import ImageSection from './sections/ImageSection';
import TextSection from '@textSection/TextSection';

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
                <HotListings />
            <Container>
                <FeaturedListing />
                <Project />
            </Container>
            <BestPlaces />
            <Container>
                <TextSection  heading="About"  title text contact request/>
                <Communities />
                <ImageSection />
            </Container>
        </motion.div>
    );
}

export default Home;
