import React from 'react';
import {Row} from 'react-bootstrap';
import { MdMenu } from "react-icons/md";

const SideMenu = props => {

return(
  <>
    <div className ='white vertical-padding-sm 'style ={{height:'100vh',width:'30vw', position:'fixed',zIndex:20}}>
      <Row>
        <MdMenu size ={'2em'}onClick={props.toggleSideMenu}/>
      </Row>
      <Row className ='vertical-padding-sm '>
        <p className = {'centered-text '+(props.view==='main'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')} onClick ={()=>props.changeView('main')}>Home</p>
      </Row>
      <Row className ='vertical-padding-sm '>
        <p className = {'centered-text '+(props.view==='about'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')} onClick ={()=>props.changeView('about')}>About</p>
      </Row>
      <Row className ='vertical-padding-sm'>
        <p className = {'centered-text '+(props.view==='blog'? 'balloon-text  medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('blog')}>Blog</p>
      </Row>
      <Row className ='vertical-padding-sm'>
        <p className = {'centered-text '+(props.view==='calculator'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('calculator')}>Calculator</p>
      </Row>
      <Row className ='vertical-padding-sm'>
        <p className = {'centered-text '+(props.view==='gallery'? 'balloon-text  medium-link-text':'balloon-text  roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('gallery')}>Galleries</p>
      </Row>

    </div>
  </>
)}

export default SideMenu;