import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";

const About = props => {


return(
  <>
  <Row className = 'roaming-white vertical-padding-md centered-children' style ={{height:'100vh'}}>
    <Col xs={5} sm={5} md={5} lg={5} xl={5} className ='centered-children'>
      <img style ={{width:'90%'}}src ="/coupleIcon.png" alt ='coupleIcon' className = 'couple-icon'/>
    </Col>
    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
      <Row>
        <p className ='roaming-yellow-text roaming-text large-header-text centered-text'>WE ARE ROAMING IN THE KNOW!</p>
      </Row>
      <Row style ={{marginLeft:'10vw',marginRight:'10vw'}} className ='centered-children'>
        <p className ='roaming-yellow-text centered-text'>We’re Shawn and Alia, a married twenty-something couple with a desire to travel full time and live our lives to the fullest, all while being mindful of our footprint. We believe balance is an essential part of life which means we want to see the world, but we also want to see it be habitable for generations to come. </p>
      </Row>
    </Col>
  </Row>

    {props.view ==='about'? 
      <>
        <Row className ='roaming-white vertical-padding-sm'>
          <Col>
            <Row className ='vertical-margin-sm centered-children'>
              <BsInstagram size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-text'>@roamingintheknow</p>
            </Row>
          </Col>
          <Col>
            <Row className ='vertical-margin-sm centered-children'>
              <SiTiktok size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-text'>@roamingintheknow</p>
            </Row>
          </Col>
          <Col>
            <Row className ='vertical-margin-sm centered-children'>
              <BsYoutube size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-text'>@roamingintheknow</p>
            </Row>
          </Col>
          <Col>
            <Row className ='vertical-margin-sm centered-children'>
              <BsTwitter size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-text'>@roamingintheknow</p>
            </Row>
          </Col>
        </Row>
      </>
    :null}


  </>
)}

export default About;
