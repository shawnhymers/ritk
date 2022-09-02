import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const NextNav = props => {
console.log(props)
return(
  <>

    <Row className='roaming-white'>
      <p className='centered-children blog-h1'>Next Up:</p>
    </Row>
    <Row className='roaming-white' style={{paddingLeft:'15vw',paddingRight:'15vw'}}>

        <Col  xs={12} sm={12} md={4} lg={4} xl={4}>
          <Row className='centered-children'>
            <Link className='centered-children'style ={{textDecoration:'none'}} to ={props.nextLink1}>
              <img loading="lazy"style ={{width:'90%'}}src ={props.nextPic1} alt ='nextOption1' />
            </Link>
          </Row>
          <Row className='centered-children vertical-padding-sm'>
            <Link style ={{textDecoration:'none'}} to ={props.nextLink1}>
              <p className='centered-text center-justified-text roaming-text-md roaming-black-text'>{props.nextTitle1}</p>
            </Link>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Row className='centered-children'>
            <Link className='centered-children'style ={{textDecoration:'none'}} to ={props.nextLink2}>
              <img loading="lazy"style ={{width:'90%'}}src ={props.nextPic2} alt ='nextOption1' />
            </Link>
          </Row>
          <Row className='centered-children vertical-padding-sm'>
            <Link style ={{textDecoration:'none'}} to ={props.nextLink2}>
              <p className='centered-text roaming-text-md center-justified-text roaming-black-text'>{props.nextTitle2}</p>
            </Link>
          </Row>
        </Col>
      <Col  xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row className='centered-children'>
          <Link className='centered-children'style ={{textDecoration:'none'}} to ={props.nextLink3}>
            <img loading="lazy"style ={{width:'90%'}}src ={props.nextPic3} alt ='nextOption1' />
          </Link>
        </Row>
        <Row className='centered-children vertical-padding-sm'>
          <Link style ={{textDecoration:'none'}} to ={props.nextLink3}>
            <p className='centered-text roaming-text-md center-justified-text roaming-black-text'>{props.nextTitle3}</p>
          </Link>
        </Row>
      </Col>
    </Row>
  </>
)}

export default NextNav;
