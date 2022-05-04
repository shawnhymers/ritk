import React from 'react';
import {Row,Col} from 'react-bootstrap';

const DesktopHeader = props => {

return(
  <>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <p className = {'centered-text auto-margins '+((props.page==='about' ||(props.urlView==='about'&&props.urlOverride===false)) ? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}
           onClick ={()=>props.changeView('about')}>About</p>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2 } className ='centered-children'>
        <p className = {'centered-text auto-margins '+((props.page==='blog' || (props.urlView ==='blog'&&props.urlOverride===false)) ? 'balloon-text  medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}
           onClick ={()=>props.changeView('blog')}>Blog</p>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={4} className ='centered-children' style = {{maxHeight:'4em'}}>
        <img onClick ={()=>props.changeView('main')} src = "/logo1.png" alt = 'logo 2' className = 'home-logo'/>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <p className = {'centered-text auto-margins '+((props.page==='calculator' || (props.urlView==='calculator'&&props.urlOverride===false))? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}
           onClick ={()=>props.changeView('calculator')}>Calculator</p>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className ='centered-children'>
        <p className = {'centered-text auto-margins '+((props.page==='gallery'|| (props.urlView==='gallery'&&props.urlOverride===false))? 'balloon-text  medium-link-text':'balloon-text  roaming-yellow-text medium-link-text')}
           onClick ={()=>props.changeView('gallery')}>Galleries</p>
      </Col>
    </Row>

  </>
)}

export default DesktopHeader;
