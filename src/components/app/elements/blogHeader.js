import React from 'react';
import { Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import BlogSideMenu from "./blogSideMenu"
import { MdMenu } from "react-icons/md";
import  { useState } from 'react';

const BlogHeader = props => {

  const [showSideMenu,setSideMenu] =useState(false)

  function toggleSideMenu(){
    setSideMenu(!showSideMenu)
  }

return(
  <>

  {props.isMobile?
    <>
    {showSideMenu?
    <>
      <BlogSideMenu toggleSideMenu={toggleSideMenu}
                changeView ={props.changeView}
                view={props.view}/>
    </>:null}

    <Row>
    <Col className ='centered-children'>
      <MdMenu size ={'2em'} onClick={toggleSideMenu}/>
    </Col>

    <Col xs={4} sm={4} md={4} lg={4} xl={4} className ='centered-children' style = {{maxHeight:'4em'}}>
      <img src = "/logo1.png" alt = 'logo 2' className = 'home-logo'/>
    </Col>
      <Col>
        &nbsp;
      </Col>
    </Row>
    </>:

<>

<Row style ={{paddingTop:'0vh'}}>

  <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
    <Link to='home/about'  className = 'centered-children'style = {{textDecoration:'none'}} >
      <p className = 'balloon-text  roaming-yellow-text medium-link-text auto-margins'  >About</p>
    </Link>
  </Col>
  <Col xs={2} sm={2} md={2} lg={2} xl={2 } className ='centered-children'>
    <Link to='home/blog'  className = 'centered-children'style = {{textDecoration:'none'}} >
      <p className = 'balloon-text  medium-link-text auto-margins roaming-black-text'  >Blog</p>
    </Link>
  </Col>
  <Col xs={4} sm={4} md={4} lg={4} xl={4} className ='centered-children' style = {{maxHeight:'4em'}}>
    <Link to='home/home'  className = 'home-logo'style = {{textDecoration:'none'}} >
      <img  src = "/logo1.png" alt = 'logo 2' className = 'home-logo'/>
    </Link>
  </Col>
  <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
    <Link to='home/calculator' className = 'centered-children'style = {{textDecoration:'none'}} >
      <p className = 'balloon-text  roaming-yellow-text medium-link-text auto-margins'>Calculator</p>
    </Link>
  </Col>
  <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
    <Link to='home/gallery' className = 'centered-children'style = {{textDecoration:'none'}} >
      <p className = 'balloon-text  roaming-yellow-text medium-link-text auto-margins'>Galleries</p>
    </Link>
  </Col>
</Row>
</>}


  </>
)}

export default BlogHeader;
