import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";

const SocialFull = props => {

return(
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
  </>
)}

export default SocialFull;
