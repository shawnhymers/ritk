import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import AboutPreview from "./aboutPreview";
import BlogPreview from "./blogPreview";
import LinksPreview from "./linksPreview";
import GalleryPreview from "./galleryPreview"
import Footer from "./footer"
import  { useState } from 'react';

const HomePage = props => {


return(
  <>
    <Row style ={{pading:'0vh'}}>
      <img src= "/bannerPic.jpeg" alt = 'banner pic' className = 'banner-pic'/>
    </Row>
    <AboutPreview />
    <LinksPreview />
    <BlogPreview/>
    <GalleryPreview galleryImages={props.galleryImages}/>
    <Footer/>
  </>
)
}

export default HomePage;
