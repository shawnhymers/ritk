import { Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {  MdFiberManualRecord } from "react-icons/md";
import Footer from "../app/appPages/home/footer"
import { Link } from "react-router-dom";

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

return(
  <>
    <Container className ='full-width roaming-white' style ={{margin:'0vh',padding:'0vh',overflofX:'hidden'}}>
      <Row className ='fill-width  blog-header-wrapper'
           style ={{margin:'0vh',padding:'0vh'}}>
        <p className ='blog-label centered-text'>{props.header.label}</p>
        <img src ={props.header.src}
             alt = {props.header.label}
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
      {props.isMobile?
        <>
          <Row className = 'vertical-padding-sm '>
            <Col>
              &nbsp;
            </Col>
            <Col className ='centered-children'
                 xs={2} sm={2} md={2} lg={2} xl={2}>
              <MdFiberManualRecord size ='2em' color ="#E7E2CD"/>
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
      <Footer/>
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

  return(
    <>
      <Row className ='vertical-padding-sm '>
        <Col className ='centered-children '>
          <img src ={props.src}
               alt = {props.label}
               style ={{width:'100%'}}
               onContextMenu={false}/>
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
          <img src ={props.src}
               alt = {props.label}
               style ={{width:'100%'}}
               onContextMenu={dummy} />
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
      <Col>
        <p className ={'centered-text roaming-text medium-text '+(parseInt(props.footprintPerDay/41.5*100)<=100? " roaming-green-text":" roaming-red-text")}>{parseInt(props.footprintPerDay/41.5*100)+'% The average Canadian footprint'}</p>
      </Col>
      <Col>
        <p className ={'centered-text roaming-text  medium-text'+(parseInt(props.footprintPerDay/13*100)<=100? " roaming-green-text":" roaming-red-text")}>{parseInt(props.footprintPerDay/13*100)+'% The global average footprint'}</p>
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
<>
    {props.isMobile?
    <>
      <Row className ='vertical-padding-sm'>

            <img src ={props.src1}
                 alt = {props.label}
                 style ={{width:'95%'}}
                 onContextMenu={dummy} />
          </Row>
          <Row className ='vertical-padding-sm'>
            <img src ={props.src2}
                 alt = {props.label}
                 style ={{width:'95%'}}
                 onContextMenu={dummy} />
          </Row>

    </>
    :
    <>
      <Row className ='vertical-padding-sm'>
        <Col className ='centered-children'>
          <img src ={props.src1}
               alt = {props.label}
               style ={{width:'100%'}}
               onContextMenu={dummy} />
        </Col>

        <Col className ='centered-children'>
          <img src ={props.src2}
               alt = {props.label}
               style ={{width:'100%'}}
               onContextMenu={dummy} />
        </Col>
      </Row>
    </>}


    </>
  )
}

export default BlogBody;


// <Col>
//   <p className ='centered-text roaming-text medium-link-text'>{props.distance+' KM'}</p>
// </Col>
