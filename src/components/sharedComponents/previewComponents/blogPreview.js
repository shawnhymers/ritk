import React from 'react';
import { Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
// import  { useEffect } from 'react';
import blog1 from "../../../assets/blogPreview/blog1.jpg"
import blog2 from "../../../assets/blogPreview/blog2.jpg"
import blog3 from "../../../assets/blogPreview/blog3.jpg"

const BlogPreview = props => {

return(
  <>

    <Row className = 'roaming-white centered-children vertical-padding-lg ' style={{marginBottom:'0vh'}} >
        <p className =' roaming-text large-header-text centered-text' style={{marginBottom:'0vh'}}>Latest From The Blog</p>
    </Row>
    <Row className = 'roaming-white red' style ={{minHeight:'80vh',paddingBottom:'5em',marginTop:'0vh'}}>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row style={{marginTop:'0vh',paddingTop:'0vh'}}>
          <Col className ='centered-children' style={{marginTop:'0vh',paddingTop:'0vh'}}>
          <Link to='/PeruVeganGuide'
                className ='centered-children'>
              <img src = {blog1}
                   alt ='Peru Vegan Food Guide'
                   loading="lazy"
                   style={{marginTop:'0vh',paddingTop:'0vh'}}
                   className = ' blog-tease vertical-margin-sm'/>
            </Link>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text-sm'>Peru Vegan Food Guide</p>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <Link to='/PeruItinerary' className ='centered-children'>
              <img src = {blog2}
                   alt ='Peru Itinerary'
                   loading="lazy"
                   style={{marginTop:'0vh',paddingTop:'0vh'}}
                   className = ' blog-tease vertical-margin-sm'/>
            </Link>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text-sm'>Peru Itinerary</p>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row >
          <Col className ='centered-children'>
            <Link to='/CarbonCostOfFLying' className ='centered-children'>
              <img src ={blog3}
                   alt ='planeWing'
                   loading="lazy"
                   style={{marginTop:'0vh',paddingTop:'0vh'}}
                   className = ' blog-tease vertical-margin-sm'/>
            </Link>
          </Col>
        </Row>
        <Row className ='centered-children'>
          <p className ='centered-text roaming-text-sm'>Carbon Cost of Flying</p>
        </Row>
      </Col>
    </Row>
  </>
)}

export default BlogPreview;
