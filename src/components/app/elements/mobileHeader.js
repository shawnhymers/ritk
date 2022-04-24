import React from 'react';
import {Row,Col} from 'react-bootstrap';
import SideMenu from "./sideMenu"
import { MdMenu } from "react-icons/md";
import  { useState } from 'react';

const MobileHeader = props => {

  const [showSideMenu,setSideMenu] =useState(false)

  function toggleSideMenu(){
    setSideMenu(!showSideMenu)
  }
return(
  <>
    {showSideMenu?
    <>
      <SideMenu toggleSideMenu={toggleSideMenu}
                changeView ={props.changeView}
                view={props.view}/>
    </>:null}
    <Row>
    <Col className ='centered-children'>
      <MdMenu size ={'2em'} onClick={toggleSideMenu}/>
    </Col>

    <Col xs={4} sm={4} md={4} lg={4} xl={4} className ='centered-children' style = {{maxHeight:'4em'}}>
      <img onClick ={()=>props.changeView('main')} src = "/logo1.png" alt = 'logo 2' className = 'home-logo'/>
    </Col>
      <Col>
        &nbsp;
      </Col>
    </Row>


  </>
)}

export default MobileHeader;
