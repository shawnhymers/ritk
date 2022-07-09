import React from "react";
import {  Row} from 'react-bootstrap';
import { Link } from "react-router-dom";

const LeftCol = props =>{

  return(
    <>
    {props.index% 2 === 0?
      <>
        <Row >

          <Link to={props.blog.link}
                className = 'centered-children' >
            <img src={props.blog.pic}
                 alt="Nita lake"
                 loading="lazy"
                 style = {{width:'80%'}}
                 className = 'blog-zoom  vertical-margin-sm'/>
          </Link>
        </Row>
        <Row className = 'centered-children bottom-padding-md'>
          <p className = ' centered-children roaming-text large-caption-text'
             style = {{fontSize:'2em'}}>{props.blog.name}</p>
        </Row>
      </>
    :null}


    </>
  )}

export default LeftCol;
