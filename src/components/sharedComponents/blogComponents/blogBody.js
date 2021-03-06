import { Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {  MdFiberManualRecord } from "react-icons/md";
import Footer from "../footer"
import { Link } from "react-router-dom";
import  { useState } from 'react';

const BlogSegment = props =>{
  return(
    <>
    {props.content.type ==='paragraph'?<BlogParagraph text ={props.content.text}/>:null}
    {props.content.type ==='linkParagraph'? <Row className ='vertical-margin-md' >
                                              <p className ='blog-body' style={{display:'inline'}}>
                                                {props.content.content.map((content, i)=>{
                                                  return <LinkParagraphSegment content ={content}
                                                                               isMobile={props.isMobile}
                                                                               key={content.type+i}/>})}
                                              </p>
                                            </Row>
                                      :null}
    {props.content.type ==='header'?<BlogHeader text ={props.content.text}/>:null}
    {props.content.type ==='listItem'?<BlogListItem text ={props.content.text} centered={props.content.centered}/>:null}
    {props.content.type ==='diptych'?<DipTych src1 ={props.content.src1} src2 ={props.content.src2} isMobile={props.isMobile}/>:null}
    {props.content.type === 'horizontalImage'? <HorizontalBlogImage src ={props.content.src}/> :null}
    {props.content.type === 'verticalImage'? <VerticalBlogImage src = {props.content.src}/>:null}
    {props.content.type === 'footprintLine'? <FootprintLine unit={props.content.unit}footprint={props.content.footprint} centered={props.content.centered}/>:null}
    {props.content.type === 'footprintComparison'? <FootprintComparison footprintPerDay={props.content.footprintPerDay}/>:null}
    </>
  )
}

const BlogBody = props => {
  const [imageLoaded,setImageLoaded] =useState(false)

  function onImageLoad(){
    setImageLoaded(true)
  }
return(
  <>
    <Container className ='full-width roaming-white' style ={{margin:'0vh',padding:'0vh',overflofX:'hidden'}}>
      <Row className ='fill-width  blog-header-wrapper'
           style ={{margin:'0vh',padding:'0vh'}}>
           {imageLoaded?
             <>
             <p className ='blog-label centered-text'>{props.header.label}</p>
             </>
             :
             null}
        <img src ={props.header.src}
             alt = {props.header.label}
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
        &nbsp;
        </Row>
        </>
      }
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
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={6}>
          {props.contentTest.map((content, i)=>{
                        return <BlogSegment content ={content}
                                            isMobile={props.isMobile}
                                            key={content.type+i}/>})}
        </Col>
        <Col xs={2} sm={2} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
      </Row>

    </Container>
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

const LinkParagraphSegment = props=>{
  return(
    <>
    {props.content.type==='text'?
      <span>{props.content.text}</span>
    :null
    }
    {props.content.type ==='link'?

      <span><Link to={props.content.link}>{props.content.text}</Link></span>

    :null}

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

const FootprintLine =props=>{
  return(
    <>
    <Row >
      <Col className ={(props.centered? "centered-children ":" ")}>
        <p className =' roaming-text blog-body'>{props.footprint+' '+props.unit}</p>
      </Col>
    </Row>
    </>
  )
}

const FootprintComparison=props=>{

  return(
    <>
      <Row>
        {props.footprintPerDay<41.5?
          <Col>
            <p className ={'centered-text roaming-text medium-text roaming-green-text'}>
            {parseInt(100*((41.5-parseFloat(props.footprintPerDay))/((parseFloat(props.footprintPerDay)+41.5)/2)))+'% Less than the average Canadian footprint'}</p>
          </Col>
          :
          <Col>
            <p className ={'centered-text roaming-text medium-text roaming-red-text'}>
            {parseInt(100*((parseFloat(props.footprintPerDay-41.5))/((parseFloat(props.footprintPerDay)+41.5)/2)))+'% More than the average Canadian footprint'}</p>
          </Col>

        }

        {props.footprintPerDay<13?
          <Col>
            <p className ={'centered-text roaming-text  medium-text roaming-green-text'}>
            {parseInt(100*((13-parseFloat(props.footprintPerDay))/((parseFloat(props.footprintPerDay)+13)/2)))+'% Less than the global average footprint'}</p>
          </Col>
        :
          <Col>
            <p className ={'centered-text roaming-text  medium-text roaming-red-text'}>
            {parseInt(100*((parseFloat(props.footprintPerDay)-13)/((parseFloat(props.footprintPerDay)+13)/2)))+'% More than the global average footprint'}</p>
          </Col>
        }



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

export default BlogBody;


// <Col>
//   <p className ='centered-text roaming-text medium-link-text'>{props.distance+' KM'}</p>
// </Col>
