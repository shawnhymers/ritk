import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

const DesktopHeader = props => {

return(
  <>

    <Row>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <Link to='/about'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p style ={{zIndex:30}}className = {'centered-text auto-margins '+((props.page==='about' ) ? 'balloon-text medium-link-text roaming-black-text':'balloon-text roaming-yellow-text medium-link-text')}>
             About</p>
        </Link>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2 } className ='centered-children'>
        <Link to='/blog'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text auto-margins '+((props.page==='blog' ) ? 'balloon-text  medium-link-text roaming-black-text':'balloon-text roaming-yellow-text medium-link-text')}>
              Blog</p>
        </Link>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={4} className ='centered-children' style = {{maxHeight:'4em'}}>
        <Link to='/home'  className = 'centered-children 'style = {{textDecoration:'none',marginTop:'4em',paddingTop:'0vh'}} >
          <img src = "/logo1.png" alt = 'logo 2' className = 'home-logo'/>
        </Link>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <Link to='/calculator'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text auto-margins '+((props.page==='calculator' )? 'balloon-text medium-link-text roaming-black-text':'balloon-text roaming-yellow-text medium-link-text')}>
             Calculator</p>
        </Link>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <Link to='/gallery'  className = 'centered-children 'style = {{textDecoration:'none'}} >
          <p className = {'centered-text auto-margins '+((props.page==='gallery')? 'balloon-text  medium-link-text roaming-black-text':'balloon-text  roaming-yellow-text medium-link-text')}>
                Galleries</p>
        </Link>
      </Col>
    </Row>

  </>
)}

export default DesktopHeader;
