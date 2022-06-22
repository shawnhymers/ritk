import React from "react";
import {  Row} from 'react-bootstrap';
import { Link } from "react-router-dom";

const BlogRow = props =>{

    return(
      <>
        <Row className ='centered-children'>
          <Link to={props.blog.link} className = 'centered-children' >
            <img src={props.blog.pic} alt="Nita lake" style = {{width:'80%'}} className = 'blog-zoom  vertical-margin-sm'/>
          </Link>
        </Row>
        <Row className = 'centered-children'>
          <p className = ' centered-children roaming-text large-caption-text' style = {{fontSize:'2em'}}>{props.blog.name}</p>
        </Row>
      </>
    )}
export default BlogRow;
