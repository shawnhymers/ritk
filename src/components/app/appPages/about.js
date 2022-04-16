import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";

const About = props => {


return(
  <>
  <Row className = 'roaming-white vertical-padding-md centered-children' style ={{minHeight:'90vh'}}>
    <Col xs={12} sm={12} md={5} lg={5} xl={5} className ='centered-children'>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <img style ={{width:'90%'}}src ="/coupleIcon.png" alt ='coupleIcon' className = 'couple-icon'/>
          </Col>
        </Row>
        <Row  style ={{marginLeft:'5%',paddingTop:'1em',paddingBottom:'2em'}}>
          <Col style ={{maxWidth:'2.6em'}}>
            <BsInstagram size ='1.5em' style ={{cursor:'pointer'}}/>
          </Col>
          <Col style ={{maxWidth:'2.6em'}}>
            <SiTiktok size ='1.5em' style ={{cursor:'pointer'}}/>
          </Col>
          <Col style ={{maxWidth:'2.6em'}}>
            <BsYoutube size ='1.5em'style ={{cursor:'pointer'}}/>
          </Col>
          <Col style ={{maxWidth:'10em'}}>
             <p className ='centered-text roaming-text-sm'>@roamingintheknow</p>
          </Col>
        </Row>
      </Container>
    </Col>
    <Col xs={12} sm={12} md={7} lg={7} xl={7}>
      <Row style ={{marginLeft:'5vw',marginRight:'5vw'}}  >
        <p className ='roaming-yellow-text roaming-text large-header-text centered-text'>WE ARE ROAMING IN THE KNOW!</p>
      </Row>
      <Row style ={{marginLeft:'5vw',marginRight:'5vw'}}>
        <p className ='roaming-yellow-text roaming-text-sm centered-text'>We’re Shawn and Alia, a married twenty-something couple with a desire to travel full time and live our lives to the fullest, all while being mindful of our footprint. We believe balance is an essential part of life which means we want to see the world, but we also want to see it be habitable for generations to come. </p>
      </Row>
    </Col>
  </Row>



  </>
)}

export default About;
