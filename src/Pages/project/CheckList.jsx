import React from 'react'

import styles from "./Project.module.css"
import { Row, Col } from 'react-bootstrap'
import IconCheck from '@snippets/IconCheck'
function CheckList() {
    return (
        <div className={styles['check-list']}>
            <h2 className={styles['check-list-title']}>project important checklist</h2>
            <Row>
                <Col lg={6} md={12}>
                
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
                </Col>
                <Col lg={6} md={12}>
                
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
                <IconCheck text="The housekeepers we hired are professionals who take pride in doing excellence work and in exceed"/>
      
                </Col>
            </Row>
        </div>
    )
}

export default CheckList