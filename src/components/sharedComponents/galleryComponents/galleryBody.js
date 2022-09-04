import { Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../footer"
import {  MdFiberManualRecord } from "react-icons/md";
import  { useState } from 'react';
import NextNav from "../navComponents/nextNav"
const BlogSegment = props =>{
  return(
    <>
    {props.content.type ==='paragraph'?<BlogParagraph text ={props.content.text}/>:null}
    {props.content.type ==='header'?<BlogHeader text ={props.content.text}/>:null}
    {props.content.type ==='listItem'?<BlogListItem text ={props.content.text}/>:null}
    {props.content.type ==='diptych'?<DipTych src1 ={props.content.src1} src2 ={props.content.src2} isMobile={props.isMobile}/>:null}
    {props.content.type === 'horizontalImage'? <HorizontalBlogImage src ={props.content.src}/> :null}
    {props.content.type === 'verticalImage'? <VerticalBlogImage src = {props.content.src}/>:null}
    </>
  )
}

const GalleryBody = props => {
  const [imageLoaded,setImageLoaded] =useState(false)

  function onImageLoad(){
    setImageLoaded(true)
  }
return(
  <>
    <Container className ='full-width roaming-white' style ={{margin:'0vh',padding:'0vh'}}>
      <Row className ='fill-width  blog-header-wrapper'
           style ={{margin:'0vh',padding:'0vh'}}>
           {imageLoaded?
             <>
             <p className ='blog-label centered-text'>{props.header.label}</p>
             <p className ='centered-text blog-sub-label'>{props.header.subLabel} </p>
             </>
             :
             null}
        <img src ={props.header.src}
             alt ={props.header.label}
             loading="lazy"
             style ={{margin:'0vh',padding:'0vh',minWidth:'100vw'}}
             onLoad={onImageLoad}
             className ='img-fluid blog-img'/>

      </Row>
      {imageLoaded?
        null
        :
        <>
        <Row className ='fill-width  blog-header-wrapper roaming-green'
             style ={{margin:'0vh',padding:'0vh',height:'75vw'}}>
        <p className ='blog-label centered-text'>{props.header.label}</p>
        <p className ='centered-text blog-sub-label'>{props.header.subLabel} </p>
        &nbsp;
        </Row>
        </>
      }
      <Row>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={6} >
          <Row>
            <p className ='blog-body centered-text center-justified-text vertical-padding-md'
               align='center'
               style={{display:'inline'}}>
                {props.blurb.map((blurb, i)=>{
                  return <LinkBlurbSegment blurb={blurb}
                                           isMobile={props.isMobile}
                                           key={blurb.type+i}/>})}
            </p>
          </Row>
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
      {props.isMobile?
        <>
          <Row className = 'vertical-padding-sm '>
            <Col>
              &nbsp;
            </Col>

            <Col className ='centered-children'
                 xs={2} sm={2} md={2} lg={2} xl={2}>
              <MdFiberManualRecord size ='2em' color ="#E2B54B"/>
            </Col>
            <Col className ='centered-children'
                 xs={2} sm={2} md={2} lg={2} xl={2}>
              <MdFiberManualRecord size ='2em' color ="#91A98F"/>
            </Col>
            <Col className ='centered-children'
                 xs={2} sm={2} md={2} lg={2} xl={2}>
              <MdFiberManualRecord size ='2em' color ="#BED3C7"/>
            </Col>
            <Col className ='centered-children'
                 xs={2} sm={2} md={2} lg={2} xl={2}>
              <MdFiberManualRecord size ='2em' color ="#B97F51"/>
            </Col>
            <Col>
              &nbsp;
            </Col>
          </Row>
        </>
      :
        <>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              &nbsp;
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <Row className = 'vertical-padding-sm'>

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
        </>}
      <Row>
        <Col xs={1} sm={1} md={2} lg={2} xl={2}>
          &nbsp;
        </Col>
        <Col xs={10} sm={10} md={8} lg={8} xl={8}>
          {props.contentTest.map((content, i)=>{
                        return <BlogSegment content ={content}
                                            isMobile={props.isMobile}
                                            key={content.type+i}/>})}
        </Col>
        <Col xs={1} sm={1} md={2} lg={2} xl={2}>
          &nbsp;
        </Col>
      </Row>
      <Row style={{height:'9em'}}>
        &nbsp;
      </Row>
    </Container>
      <Row style={{height:'2em'}} className='roaming-white'>
        &nbsp;
      </Row>

      <NextNav isMobile={props.isMobile}
               nextTitle1 = {props.nextTitle1}
               nextTitle2 = {props.nextTitle2}
               nextTitle3 = {props.nextTitle3}
               nextPic1 = {props.nextPic1}
               nextPic2 = {props.nextPic2}
               nextPic3 = {props.nextPic3}
               nextLink1 = {props.nextLink1}
               nextLink2 = {props.nextLink2}
               nextLink3 = {props.nextLink3}/>

      <Row style={{height:'4em'}} className='roaming-white'>
        &nbsp;
      </Row>
    <Footer isMobile={props.isMobile}/>
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
const LinkBlurbSegment = props=>{
  return(
    <>
    {props.blurb.type==='text'?
      <span>{props.blurb.text}</span>
    :null
    }
    {props.blurb.type ==='link'?
      <span><Link to={props.blurb.link}>{props.blurb.text}</Link></span>
    :null}
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
  const [imageLoaded,setImageLoaded] =useState(false)

  function onImageLoad(){
    setImageLoaded(true)
  }
  return(
    <>
      <Row className ='vertical-padding-sm '>
        <Col className ='centered-children '>
          <img src ={props.src}
               alt = {props.label}
               loading="lazy"
               onLoad={onImageLoad}
               style ={{width:'100%'}}/>
        </Col>
      </Row>
      {imageLoaded?
        null
      :
      <>
        <Row style={{height:'35.5vw'}}className=' vertical-margin-sm' >
          <Col className ='roaming-green centered-children'style = {{width:'100%',height:'100%'}} >
            &nbsp;
          </Col>
        </Row>
      </>
    }
    </>
  )
}

const VerticalBlogImage = props =>{

  return(
    <>
      <Row className ='vertical-padding-sm'>
        <Col className ='centered-children'>
          <img src ={props.src}
               alt = {props.label}
               loading="lazy"
               style ={{width:'100%'}} />
        </Col>
      </Row>
    </>
  )
}

const DipTych = props =>{
  const [image1Loaded,setImage1Loaded] =useState(false)
  const [image2Loaded,setImage2Loaded] =useState(false)
  function onImage1Load(){
    setImage1Loaded(true)
  }
  function onImage2Load(){
    setImage2Loaded(true)
  }
  return(
<>
    {props.isMobile?
    <>
      <Row className ='vertical-padding-sm'>

            <img src ={props.src1}
                 alt = {props.label}
                 loading="lazy"
                 onLoad={onImage1Load}
                 style ={{width:'100%'}}/>
          </Row>
          <Row className ='vertical-padding-sm'>
            <img src ={props.src2}
                 alt = {props.label}
                 loading="lazy"
                 onLoad={onImage2Load}
                 style ={{width:'100%'}}/>
          </Row>

    </>
    :
    <>
      <Row className ='vertical-padding-sm'>
        <Col className ='centered-children'>
          <img src ={props.src1}
               alt = {props.label}
               loading="lazy"
               onLoad={onImage1Load}
               style ={{width:'100%'}} />
        </Col>

        <Col className ='centered-children'>
          <img src ={props.src2}
               alt = {props.label}
               loading="lazy"
               onLoad={onImage2Load}
               style ={{width:'100%'}}/>
        </Col>
      </Row>
      {image1Loaded &&image2Loaded?
        null
        :
        <>
          <Row style={{height:'47.5vw'}}className=' vertical-margin-sm' >
            <Col className ='roaming-green centered-children'style = {{width:'100%',height:'100%'}} >
              &nbsp;
            </Col>
          </Row>
        </>

      }
    </>}


    </>
  )
}


export default GalleryBody;
