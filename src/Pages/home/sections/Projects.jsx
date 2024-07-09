import React from 'react';
import SectionHeading from '@snippets/Heading';
import MainButton from '@snippets/MainButton';
import styles from '../Index.module.css';
import ProjectCard from '@components/ProjectCard';
function Project() {
    return (
        < >
            <SectionHeading heading="PROJECTS" />
            <div className={styles['project']}>
                <ProjectCard text />
                <ProjectCard text />
                <ProjectCard text />
                <ProjectCard text />
                <ProjectCard text />
                <ProjectCard text />
            </div>

            <center><MainButton button="View More" /> </center>
        </>
    )
}

export default Project