import React from 'react';
import { Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

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
          <Link to='/WhistlerActivityGuide'
                className ='centered-children'>
              <img src = '/whistlerActivity.jpg'
                   alt ='whisterlActivity'
                   className = ' blog-tease vertical-margin-sm'/>
            </Link>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Whistler Activity Guide</p>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <Link to='/WhistlerFoodGuide' className ='centered-children'>
              <img src = '/whistlerFood.jpg'
                   alt ='whistlerFood'
                   className = ' blog-tease vertical-margin-sm'/>
            </Link>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Whistler Food Guide</p>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <Link to='/WhistlerFoodGuide' className ='centered-children'>
              <img src = '/planeWing.jpg'
                   alt ='planeWing'
                   className = ' blog-tease vertical-margin-sm'/>
            </Link>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text'>Medellin Food Guide</p>
        </Row>
      </Col>
    </Row>
  </>
)}

export default BlogPreview;
