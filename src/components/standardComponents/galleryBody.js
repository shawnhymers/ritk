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
    {props.content.type === 'horizontalImage'? <HorizontalBlogImage src ={props.content.src}/> :null}
    {props.content.type === 'verticalImage'? <VerticalBlogImage src = {props.content.src}/>:null}
    </>
  )
}

const GalleryBody = props => {

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
        <Col xs={3} sm={3} md={3} lg={2} xl={2}>
          &nbsp;
        </Col>
        <Col xs={6} sm={6} md={6} lg={8} xl={8}>
          {props.contentTest.map((content, i)=>{
                        return <BlogSegment content ={content}
                                            key={content.type+i}/>})}
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} xl={2}>
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
      <Row className ='vertical-padding-sm '>
        <Col className ='centered-children '>
          <img src ={props.src} style ={{width:'100%'}} onContextMenu={false}/>
        </Col>
      </Row>
    </>
  )
}

const VerticalBlogImage = props =>{
  function dummy(){
    return(false)
  }
  return(
    <>
      <Row className ='vertical-padding-sm'>
        <Col className ='centered-children'>
          <img src ={props.src} style ={{width:'100%'}} onContextMenu={dummy} />
        </Col>
      </Row>
    </>
  )
}

const DipTych = props =>{
  function dummy(){
    return(false)
  }
  return(

    <Row className ='vertical-padding-sm'>
      <Col className ='centered-children'>
        <img src ={props.src1} style ={{width:'95%'}} onContextMenu={dummy} />
      </Col>

      <Col className ='centered-children'>
        <img src ={props.src2} style ={{width:'95%'}} onContextMenu={dummy} />
      </Col>
    </Row>
  )
}

export default GalleryBody;
