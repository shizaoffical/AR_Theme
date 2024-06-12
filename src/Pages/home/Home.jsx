import React from 'react'
import { motion } from "framer-motion";
import { Container } from 'react-bootstrap';
import HeroSection from './sections/heroSection/HeroSection';
import HotListings from './sections/hotListining/HotListings';
import RequestPrice from './sections/requestForPrice/RequestPrice';
import FeaturedListiningsSection from './sections/featuredListining/FeaturedListiningsSection';
import ProjectCard from './sections/ProjectCard';
import BestPlaces from './sections/BestPlaces';
import Communities from '@communities/Communities';
import ImageSection from './sections/ImageSection';
import LatestNews from '@newsCard/LatestNews';
import AboutInHome from '@components/aboutInHome/AboutInHome';

function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <HeroSection />
            <Container>
                <HotListings />
            </Container>
            <RequestPrice />
            <Container>
                <FeaturedListiningsSection />
                <ProjectCard />
            </Container>
            <BestPlaces />
            <Container>
            <AboutInHome heading="About"/>
                <Communities/>
                <ImageSection />
              <LatestNews/>
            </Container>
        </motion.div>
    )
}

export default Home