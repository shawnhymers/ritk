import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import  { useEffect } from 'react';
import activityIcon from "../../../assets/icons/activityIcon.png"
import avacado from "../../../assets/icons/avacado.png"
import footprintIcon from "../../../assets/icons/footprintIcon.png"
import locationIcon from "../../../assets/icons/locationIcon.png"

const Links = props => {

return(
  <>
    <Row className ='nice-white vertical-padding-md centered-children' style ={{minHeight:'80vh'}}>
    <Col xs={6} sm={6} md={3} lg={3} xl={3} >
      <Link to='blog/food guide'  className = 'centered-children'style = {{textDecoration:'none'}} >
        <Row className = 'centered-children'>
          <img  loading="lazy"
                className ='image-highlight round-borders blog-tease vertical-margin-sm'
                src ={avacado}
                alt ='avacado'/>
        </Row>
      </Link>
      <Row className = 'centered-children'>
        <p className ='centered-text roaming-text-sm center-justified-text'>Vegan Food Guides</p>
      </Row>
    </Col>
    <Col xs={6} sm={6} md={3} lg={3} xl={3} >
      <Link to='blog/carbon footprint'  className = 'centered-children'style = {{textDecoration:'none'}} >
        <Row className = 'centered-children'>
          <img loading="lazy"
               className ='image-highlight round-borders blog-tease vertical-margin-sm'
               src ={footprintIcon}
               alt ='boots'/>
        </Row>
      </Link>
      <Row className = 'centered-children center-justified-text'>
        <p className ='centered-text roaming-text-sm center-justified-text'>Carbon Footprint</p>
      </Row>
    </Col>
      <Col xs={6} sm={6} md={3} lg={3} xl={3} >
        <Link to='blog/location guide'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <Row className = 'centered-children'>
            <img loading="lazy"
                 className ='image-highlight round-borders blog-tease vertical-margin-sm'
                 src ={locationIcon}
                 alt ='tent'/>
          </Row>
        </Link>
        <Row className = 'centered-children center-justified-text'>
          <p className =' roaming-text-sm center-justified-text centered-text'>Location Guides</p>
        </Row>
      </Col>
      <Col xs={6} sm={6} md={3} lg={3} xl={3} >
        <Link to='blog/activity guide'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <Row className = 'centered-children'>
            <img loading="lazy"
                 className ='image-highlight round-borders blog-tease vertical-margin-sm'
                 src ={activityIcon}
                 alt ='train'/>
          </Row>
        </Link>
        <Row className = 'centered-children'>
          <p className ='centered-text roaming-text-sm center-justified-text'>Unique Activities</p>
        </Row>
      </Col>
    </Row>

  </>
)}

export default Links;
