import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";
import  { useState } from 'react';

const Footer = props => {

  const[userEmail, setUserEmail]=useState('')

return(
  <>
  <Row>
    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
      <Row className ='form-line nice-input-wrapper'>
        <Col>
          <Row>
        <input type="text"
               id="userEmail"
               name="userEmail"
               placeholder='userEmail'
               value = {userEmail}
               placeholder ='Your Email:'
               onChange = {setUserEmail}/>
        <label htmlFor="userEmail">
          Your Email:
        </label>
        </Row>
        </Col>
        <Col>
          <Button value ="Subscribe"  variant='custom'>Subscribe</Button>
        </Col>
      </Row>
    </Col>
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
      <Row  style ={{paddingTop:'2em',paddingBottom:'2em'}}>
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
    </Col>
  </Row>
</>)}

export default Footer;
