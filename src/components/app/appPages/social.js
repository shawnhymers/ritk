import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";

const SocialFull = props => {

return(
  <>

  {props.isMobile?

  <>
  <div className ='roaming-white'>
        <Row className ='roaming-white ' style = {{height:'10vh'}}>
          &nbsp;
        </Row>
            <Row className ='roaming-white  centered-children top-padding-md image-highlight'>
              <BsInstagram size ='8em'/>
            </Row>
            <Row className ='roaming-white  centered-children'>
              <p className ='centered-children bottom-padding-sm'>@roamingintheknow</p>
            </Row>

            <Row className ='roaming-white  vertical-margin-sm centered-children image-highlight'>
              <SiTiktok size ='8em'/>
            </Row>
            <Row className ='roaming-white  centered-children'>
              <p className ='centered-children bottom-padding-sm'>@roamingintheknow</p>
            </Row>


            <Row className ='vertical-margin-sm centered-children image-highlight'>
              <BsYoutube size ='8em'/>
            </Row>
            <Row className ='centered-children'>
              <p className ='centered-children bottom-padding-sm'>@roamingintheknow</p>
            </Row>

            <Row className ='vertical-margin-sm  centered-children image-highlight'>
              <BsTwitter size ='8em'/>
            </Row>
            <Row className ='centered-children bottom-padding-sm'>
              <p className ='centered-children'>@roamingintheknow</p>
            </Row>

        <Row className ='roaming-white' style = {{height:'15vh'}}>
          &nbsp;
        </Row>
      </div>
  </>:

  <>
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

  </>}

  </>
)}

export default SocialFull;
