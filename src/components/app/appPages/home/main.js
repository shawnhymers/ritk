import React from 'react';
import {Row} from 'react-bootstrap';
import AboutPreview from "./aboutPreview";
import BlogPreview from "./blogPreview";
import LinksPreview from "./linksPreview";
import GalleryPreview from "./galleryPreview"
import Footer from "./footer"

const HomePage = props => {

return(
  <>

    {props.isMobile?
      <>
        <Row style ={{pading:'0vh'}}>
          <img src= "/mobileCover1.jpg"
               alt = 'banner pic'
               className = 'banner-pic'/>
        </Row>
      </>
      :
      <>
        <Row style ={{pading:'0vh'}}>
          <img src= "/bannerPic.jpeg"
               alt = 'banner pic'
               className = 'banner-pic'/>
        </Row>
      </>}

    <AboutPreview />
    <LinksPreview useLink={props.useLink}/>
    <BlogPreview/>
    <GalleryPreview galleryImages={props.galleryImages}/>
    <Footer/>
  </>
)
}

export default HomePage;
