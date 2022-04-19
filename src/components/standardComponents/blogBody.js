import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import React from 'react';
import  { useState } from 'react';
import {MdHelp } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import {  MdFiberManualRecord } from "react-icons/md";

const BlogSegment = props =>{
  return(
    <>
    {props.content.type ==='paragraph'?<BlogParagraph text ={props.content.text}/>:null}
    {props.content.type ==='header'?<BlogHeader text ={props.content.text}/>:null}
    {props.content.type ==='listItem'?<BlogListItem text ={props.content.text}/>:null}
    {props.content.type ==='diptych'?<DipTych src1 ={props.content.src1} src2 ={props.content.src2}/>:null}
    {props.content.type === 'horizonalImage'? <HorizontalBlogImage src ={props.content.src}/> :null}
    {props.content.type === 'verticalImage'? <VerticalBlogImage src = {props.content.src}/>:null}
    </>
  )
}

const BlogBody = props => {

return(
  <>
    <Container className ='full-width ' style ={{margin:'0vh',padding:'0vh'}}>
      <Row className ='fill-width red blog-header-wrapper'
           style ={{margin:'0vh',padding:'0vh'}}>
        <p className ='blog-label centered-text'>{props.header.label}</p>
        <img src ={props.header.src}
             style ={{margin:'0vh',padding:'0vh',minWidth:'100vw'}}
             className ='img-fluid blog-img'/>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={6} >
          <p className ='blog-body centered-text center-justified-text vertical-padding-sm' align='center'>{props.blurb}</p>
        </Col>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={6}>
          <p className ='blog-body centered-text'>{'Updated '+props.updated}</p>
        </Col>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          &nbsp;
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <Row className = 'vertical-padding-sm'>
            <Col className ='centered-children'>
              <MdFiberManualRecord size ='2em' color ="#E7E2CD"/>
            </Col>
            <Col className ='centered-children'>
              <MdFiberManualRecord size ='2em' color ="#E2B54B"/>
            </Col>
            <Col className ='centered-children'>
              <MdFiberManualRecord size ='2em' color ="#91A98F"/>
            </Col>
            <Col className ='centered-children'>
              <MdFiberManualRecord size ='2em' color ="#BED3C7"/>
            </Col>
            <Col className ='centered-children'>
              <MdFiberManualRecord size ='2em' color ="#B97F51"/>
            </Col>
          </Row>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={6}>
          {props.contentTest.map((content, i)=>{
                        return <BlogSegment content ={content}
                                            key={content.type+i}/>})}
        </Col>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
      </Row>
    </Container>
  </>
)}


const BlogParagraph = props =>{

  return(
    <>
      <Row className ='vertical-margin-md' >
        <p className ='blog-body'>{props.text}</p>
      </Row>
    </>
  )
}

const BlogHeader = props =>{
  return(
    <>
      <Row className ='vertical-margin-sm'>
        <p className ='blog-h1'>{props.text}</p>
      </Row>
    </>
  )
}

const BlogListItem = props =>{
  return(
    <>
      <Row className ='vertical-margin-sm'>
        <p className ='blog-h2'>{props.text}</p>
      </Row>
    </>
  )
}

const HorizontalBlogImage = props =>{
  return(
    <>
    horizonal image
    </>
  )
}

const VerticalBlogImage = props =>{
  return(
    <>
    vertical image
    </>
  )
}

const DipTych = props =>{

  return(

    <Row>
      <Col>
        <img src ={props.src1} style ={{width:'15vw'}}/>
      </Col>
      <Col>
        &nbsp;
      </Col>
      <Col>
        <img src ={props.src2} style ={{width:'15vw'}}/>
      </Col>
    </Row>
  )
}

export default BlogBody;
