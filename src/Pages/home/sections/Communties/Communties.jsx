import React from 'react'
import CommuntiesCard from '../../../../Components/snipped/CommuntiesCard'
import Image1 from "../../../../Assests/Images/Screenshot_1.png"
import Image2 from "../../../../Assests/Images/Screenshot_2.png"
import Image3 from "../../../../Assests/Images/Screenshot_3.png"
import {  Row, Col } from 'react-bootstrap';
import SectionHeading from '../../../../Components/snipped/SectionHeading'
function Communties() {
  return (
    <div className="communties">
      <SectionHeading heading="Communties"/>
        <Row className="communties-row">
            <Col  md={4} sm={6} xs={12} className="communties-col"><CommuntiesCard image={Image1} text="More info"/></Col>
            <Col  md={4} sm={6} xs={12} className="communties-col"><CommuntiesCard image={Image2} text="More info"/></Col>
            <Col  md={4} sm={6} xs={12} className="communties-col"><CommuntiesCard image={Image3} text="More info"/></Col>
            <Col  md={4} sm={6} xs={12} className="communties-col"><CommuntiesCard image={Image1} text="More info"/></Col>
            <Col  md={4} sm={6} xs={12} className="communties-col"><CommuntiesCard image={Image2} text="More info"/></Col>
        </Row>
    </div>
  )
}

export default Communties