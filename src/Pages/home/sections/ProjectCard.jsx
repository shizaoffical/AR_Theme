import React from 'react'
import { Col, Row } from 'react-bootstrap';
import SectionHeading from 'snippets/SectionHeading';
import MainButton from 'snippets/MainButton';
import ProjectsCard from '@components/ProjectsCard';
function ProjectCard() {
    return (
        <div className='project-card'>
            <SectionHeading heading="PROJECTS" />
            <Row>

                <Col lg={4} md={6} sm={12}>
                    <ProjectsCard />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <ProjectsCard />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <ProjectsCard />
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <ProjectsCard />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <ProjectsCard />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <ProjectsCard />
                </Col>
            </Row>
            <center>
                <MainButton button="View More" />
            </center>


        </div>
    )
}

export default ProjectCard