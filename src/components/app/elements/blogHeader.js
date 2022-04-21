import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const BlogHeader = props => {


return(
  <>
    <Row style ={{paddingTop:'0vh'}}>

      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <Link to='home/about'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = 'balloon-text  roaming-yellow-text medium-link-text'  >About</p>
        </Link>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2 } className ='centered-children'>
          <p className = 'balloon-text  medium-link-text'  >Blog</p>

      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={4} className ='centered-children' style = {{maxHeight:'4em'}}>
        <Link to='home/home'  className = 'home-logo'style = {{textDecoration:'none'}} >
          <img  src = "/logo1.png" alt = 'logo 2' className = 'home-logo'/>
        </Link>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <Link to='home/calculator' className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = 'balloon-text  roaming-yellow-text medium-link-text'>Calculator</p>
        </Link>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <Link to='home/gallery' className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = 'balloon-text  roaming-yellow-text medium-link-text'>Galleries</p>
        </Link>
      </Col>
    </Row>

  </>
)}

export default BlogHeader;
