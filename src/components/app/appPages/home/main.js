import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import AboutPreview from "./aboutPreview";
import BlogPreview from "./blogPreview";
import LinksPreview from "./linksPreview";
import GalleryPreview from "./galleryPreview"
import Footer from "./footer"
import  { useState } from 'react';

const HomePage = props => {

  const [galleryImages]=useState([{src:"galleryTest1.jpg",alt:"test-alt",label:"Ometepe Island"},
                                  {src:"galleryTest2.jpg",alt:"test-alt",label:"Granada"},
                                  {src:"galleryTest3.jpg",alt:"test-alt",label:"Costa Rica"},
                                  {src:"galleryTest1.jpg",alt:"test-alt",label:"Ometepe Island"},
                                  {src:"galleryTest2.jpg",alt:"test-alt",label:"Granada"},
                                  {src:"galleryTest3.jpg",alt:"test-alt",label:"Costa Rica"},
                                  {src:"galleryTest1.jpg",alt:"test-alt",label:"Ometepe Island"},
                                  {src:"galleryTest2.jpg",alt:"test-alt",label:"Granada"}])

return(
  <>
    <Row className ='red'style ={{pading:'0vh'}}>
      <img src= "/bannerPic.jpeg" alt = 'banner pic' className = 'banner-pic'/>
    </Row>
    <AboutPreview />
    <LinksPreview />
    <BlogPreview/>
    <GalleryPreview galleryImages={galleryImages}/>
    <Footer/>
  </>
)
}

export default HomePage;
