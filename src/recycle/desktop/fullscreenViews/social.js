import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import Header from "../homeSections/header";
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";

const SocialFull = props => {

return(
  <>
    <Header page ='social'
            changeView ={props.changeView}/>


        <Row className ='roaming-white' style = {{height:'10vh'}}>
          &nbsp;
        </Row>

        <Row className ='roaming-white centered-children vertical-padding-lg'>
          <Col>
            &nbsp;
          </Col>
          <Col >
            <Row className ='vertical-margin-sm centered-children'>
              <BsInstagram size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-children'>@roamingintheknow</p>
            </Row>
          </Col>
          <Col>
            <Row className ='vertical-margin-sm centered-children'>
              <SiTiktok size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-children'>@roamingintheknow</p>
            </Row>
          </Col>
          <Col>
            &nbsp;
          </Col>
        </Row>

        <Row className ='roaming-white centered-children vertical-padding-lg'>
          <Col>
            &nbsp;
          </Col>
          <Col >
            <Row className ='vertical-margin-sm centered-children'>
              <BsYoutube size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-children'>@roamingintheknow</p>
            </Row>
          </Col>
          <Col >
            <Row className ='vertical-margin-sm centered-children'>
              <BsTwitter size ='4em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-children'>@roamingintheknow</p>
            </Row>
          </Col>
          <Col>
            &nbsp;
          </Col>
        </Row>
        <Row className ='roaming-white' style = {{height:'15vh'}}>
          &nbsp;
        </Row>
  </>
)}

export default SocialFull;
