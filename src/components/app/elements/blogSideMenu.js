import React from 'react';
import { Row} from 'react-bootstrap';
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogSideMenu = props => {


return(
  <>
    <div className ='white vertical-padding-sm 'style ={{height:'100vh',width:'30vw', position:'fixed',zIndex:20}}>
      <Row>
        <MdMenu size ={'2em'}onClick={props.toggleSideMenu}/>
      </Row>
      <Row className ='vertical-padding-sm '>
        <Link to='home/home'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='main'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')} onClick ={()=>props.changeView('main')}>Home</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm '>
        <Link to='home/about'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='about'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')} onClick ={()=>props.changeView('about')}>About</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm'>
        <Link to='home/blog'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='blog'? 'balloon-text  medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('blog')}>Blog</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm'>
        <Link to='home/calculator'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='calculator'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('calculator')}>Calculator</p>
        </Link>
      </Row>
      <Row className ='vertical-padding-sm'>
        <Link to='home/gallery'  className = 'centered-children'style = {{textDecoration:'none'}} >
          <p className = {'centered-text '+(props.view==='gallery'? 'balloon-text  medium-link-text':'balloon-text  roaming-yellow-text medium-link-text')}  onClick ={()=>props.changeView('gallery')}>Galleries</p>
        </Link>
      </Row>

    </div>
  </>
)}

export default BlogSideMenu;
