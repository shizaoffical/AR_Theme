import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./About.module.css"
import Card from '@components/Card';
import SectionTitle from '@snippets/SectionTitle';
function Agents() {
    return (
        <div className={styles.agent}>
            <Container className={styles['agent-inner']}>
            <SectionTitle title="My Agent" info="Team"/>
                <Row  className={styles['agent-inner-body']}>
                    <Col lg={4} md={6} sm={12}><Card title="Agent Name 01" value="Dasignation" /> </Col>
                    <Col lg={4} md={6} sm={12}>    <Card title="Agent Name 02" value="Dasignation" /></Col>
                    <Col lg={4} md={6} sm={12}>    <Card title="Agent Name 03" value="Dasignation" /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Agents