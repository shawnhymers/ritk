import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';


const BlogPreview = props => {


return(
  <>

    <Row className = 'roaming-white centered-children vertical-padding-sm'  >
        <p className =' roaming-text large-header-text centered-text'>Latest From The Blog</p>
    </Row>
    <Row className = 'roaming-white ' style ={{minHeight:'80vh',paddingBottom:'5em'}}>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <img src = '/nyc.jpg' alt ='nyc' className = ' blog-tease vertical-margin-sm'/>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Caption</p>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <img src = '/boat.jpg' alt ='boat' className = ' blog-tease vertical-margin-sm'/>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Caption</p>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
          <img src = '/planeWing.jpg' alt ='planeWing' className = ' blog-tease vertical-margin-sm'/>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Caption</p>
        </Row>
      </Col>
    </Row>
  </>
)}

export default BlogPreview;
