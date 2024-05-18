import React from 'react'
import { motion } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from './sections/heroSection/HeroSection';
import HotListings from './sections/hotListining/HotListings';
import RequestPrice from './sections/requestForPrice/RequestPrice';
import FeaturedListiningsSection from './sections/featuredListining/FeaturedListiningsSection';
import ProjectCard from './sections/ProjectCard';
import BestPlaces from './sections/BestPlaces';
import SymbolShelf from 'snippets/SymbolShelf';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from 'snippets/SectionHeading';
import Communties from './sections/Communties';
import ImageSection from './sections/ImageSection';
import LatestNews from './sections/LatestNews';

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
                {/* About Sectinon Start */}
                <div className='about-in-home'>
                    <Row>
                        <Col lg={6} sm={12}>
                            <SectionHeading heading="About" />
                        </Col>
                        <Col className='about-in-home-r-1-c-2' lg={6} sm={12}>
                            <SymbolShelf anotherclass="about-in-home-i-text" icon={<FaArrowRight />} text="Contact Me" />
                            <SymbolShelf anotherclass="about-in-home-i-text" icon={<FaArrowRight />} text="Request Property" />
                        </Col>
                    </Row >
                    
                    <Row className='about-in-home-r-2'>
                    <Col lg={12} >
                        <dt className='mb-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis. Accusamus ea voluptatibus sit corrupti delectus, exercitationem, eveniet dolorum sint officia veritatis harum quidem adipisci repellat natus esse necessitatibus ipsa!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis. Accusamus ea voluptatibus sit corrupti delectus, exercitationem, eveniet dolorum sint officia veritatis harum quidem adipisci repellat natus esse necessitatibus ipsa!

                        </dt>
                    </Col>
                    <Col lg={12} >
                    <p className='about-in-home-r-2-c-2-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
                    </p>
                    </Col>
                    </Row>
                </div>
                <Communties/>
                <ImageSection />
                <LatestNews/>
            </Container>
        </motion.div>
    )
}

export default Home