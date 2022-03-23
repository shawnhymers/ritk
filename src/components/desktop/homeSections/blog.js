import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';


const Blog = props => {


return(
  <>
    <Row className = 'roaming-green centered-children vertical-padding-sm' >
      <Col  xs={1} sm={1} md={1} lg={1} xl={1} >
        &nbsp;
      </Col>
      <Col  xs={2} sm={2} md={2} lg={2} xl={2}>
        <p className =' roaming-text large-header-text'>Blog</p>
      </Col>
      <Col  xs={9} sm={9} md={9} lg={9} xl={9}>
        &nbsp;
      </Col>
    </Row>
    <Row className = 'roaming-green' style ={{height:'100vh'}}>
      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <img src = '/nyc.jpg' alt ='nyc' className = 'zoom round-borders blog-tease vertical-margin-sm'/>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Caption</p>
        </Row>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <img src = '/boat.jpg' alt ='boat' className = 'zoom round-borders blog-tease vertical-margin-sm'/>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Caption</p>
        </Row>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
          <img src = '/planeWing.jpg' alt ='planeWing' className = 'zoom round-borders blog-tease vertical-margin-sm'/>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Caption</p>
        </Row>
      </Col>
    </Row>

  </>
)}

export default Blog;
