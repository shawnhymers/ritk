import React from 'react';
import {Row} from 'react-bootstrap';
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const SideMenu = props => {

return(
  <>
    <div className ='white vertical-padding-sm 'style ={{height:'100vh',width:'30vw', position:'fixed',zIndex:20}}>
      <Row>
        <MdMenu size ={'2em'}onClick={props.toggleSideMenu}/>
      </Row>
      <Row className ='vertical-padding-sm '>
        <Link to='/home'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='main'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Home</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm '>
        <Link to='/about'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='about'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>About</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm'>
        <Link to='/blog'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='blog'? 'balloon-text  medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Blog</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm'>
        <Link to='/calculator'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='calculator'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Calculator</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm'>
        <Link to='/gallery'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='gallery'? 'balloon-text  medium-link-text':'balloon-text  roaming-yellow-text medium-link-text')}>Galleries</p>
        </Link>
      </Row>

    </div>
  </>
)}

export default SideMenu;
