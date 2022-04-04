import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';


const Header = props => {


return(
  <>
    <Row>

      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <p className = {'centered-text '+(props.page==='about'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')} onClick ={()=>props.changeView('about')}>About</p>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2 } className ='centered-children'>
        <p className = {'centered-text '+(props.page==='blog'? 'balloon-text  medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('blog')}>Blog</p>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={4} className ='centered-children' style = {{maxHeight:'4em'}}>
        <img onClick ={()=>props.changeView('main')} src = "/logo1.png" alt = 'logo 2' className = 'home-logo'/>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <p className = {'centered-text '+(props.page==='calculator'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('calculator')}>Calculator</p>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <p className = {'centered-text '+(props.page==='social'? 'balloon-text  medium-link-text':'balloon-text  roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('social')}>Socials</p>
      </Col>
    </Row>

  </>
)}

export default Header;
