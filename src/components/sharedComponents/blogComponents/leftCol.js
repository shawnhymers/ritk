import React from "react";
import {  Row} from 'react-bootstrap';
import { Link } from "react-router-dom";
import  { useState } from 'react';

const LeftCol = props =>{
  const [imageLoaded,setImageLoaded] =useState(false)

  function onImageLoad(){
    console.log('right col image laoded')
    setImageLoaded(true)
  }
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
                    onLoad={onImageLoad}
                   className = 'blog-zoom  vertical-margin-sm'/>
            </Link>

        </Row>

        {imageLoaded?
          null
        :
        <>
          {props.blog.isVertical?

            <Row style={{height:'58.5vw'}}className='centered-children vertical-margin-sm' >
              <div className ='roaming-green 'style = {{width:'80%',height:'100%'}} >
                &nbsp;
              </div>
            </Row>
          :
          <Row style={{height:'26.5vw'}}className='centered-children vertical-margin-sm' >
            <div className ='roaming-green 'style = {{width:'80%',height:'100%'}} >
              &nbsp;
            </div>
          </Row>
          }
        </>
        }
        <Row className = 'centered-children bottom-padding-md'>
          <p className = ' centered-children roaming-text large-caption-text'
             style = {{fontSize:'2em'}}>{props.blog.name}</p>
        </Row>

      </>
    :null}


    </>
  )}

export default LeftCol;
