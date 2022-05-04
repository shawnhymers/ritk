import React from 'react';
import {Row,Col} from 'react-bootstrap';

const Links = props => {

return(
  <>
    <Row className ='nice-white vertical-padding-md centered-children' style ={{minHeight:'80vh'}}>
      <Col xs={6} sm={6} md={3} lg={3} xl={3} onClick ={()=>props.useLink('food')}>
        <Row className = 'centered-children'>
          <img  className ='image-highlight round-borders blog-tease vertical-margin-sm' src ='/avacado.png' alt ='avacado'/>
        </Row>
        <Row className = 'centered-children'>
          <p className ='centered-text roaming-text-sm center-justified-text'>Vegan Food Guides</p>
        </Row>
      </Col>

      <Col xs={6} sm={6} md={3} lg={3} xl={3} onClick ={()=>props.useLink('accomodation')}>
        <Row className = 'centered-children'>
          <img className ='image-highlight round-borders blog-tease vertical-margin-sm'src ='/tent.png' alt ='tent'/>
        </Row>
        <Row className = 'centered-children center-justified-text'>
          <p className =' roaming-text-sm center-justified-text centered-text'>Accommodation Reccomendations</p>
        </Row>
      </Col>
      <Col xs={6} sm={6} md={3} lg={3} xl={3} onClick ={()=>props.useLink('activities')}>
        <Row className = 'centered-children'>
          <img className ='image-highlight round-borders blog-tease vertical-margin-sm'src ='/boots.png' alt ='boots'/>
        </Row>
        <Row className = 'centered-children center-justified-text'>
          <p className ='centered-text roaming-text-sm center-justified-text'>Unique Activities</p>
        </Row>
      </Col>
      <Col xs={6} sm={6} md={3} lg={3} xl={3} onClick ={()=>props.useLink('transportation')}>
        <Row className = 'centered-children'>
          <img className ='image-highlight round-borders blog-tease vertical-margin-sm'src ='/train.png' alt ='train'/>
        </Row>
        <Row className = 'centered-children'>
          <p className ='centered-text roaming-text-sm center-justified-text'>Routes and Transport Advice</p>
        </Row>
      </Col>
    </Row>

  </>
)}

export default Links;
