import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionHeading from '@snippets/SectionHeading';
import SymbolShelf from '@snippets/SymbolShelf';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Contact.module.css';
function Adress() {
    return (
        <>
            <Row className={styles.addresstop}>
                <Col>   <SectionHeading heading1="Contact" anotherclass1={styles.addresstitle}/></Col>
                <Col className=''>
                <SymbolShelf anotherclass={styles.addressSnip} icon={<FaArrowRight />} text="Request Property" />

                </Col>
                 
                    
            </Row>
            <Row>
                <Col>
                </Col>
                <Col >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19820.064675700185!2d73.0287206!3d31.4470736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e1!3m2!1sen!2s!4v1718133708858!5m2!1sen!2s" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>

            </Row>
        </>

    )
}

export default Adress