import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import AboutPreview from "./aboutPreview";
import BlogPreview from "./blogPreview";
import LinksPreview from "./linksPreview";

const HomePage = props => {


return(
  <>
    <Row className ='red'style ={{pading:'0vh'}}>
      <img src= "/bannerPic.jpeg" alt = 'banner pic' className = 'banner-pic'/>
    </Row>
    <AboutPreview />
    <LinksPreview />
    <BlogPreview/>
  </>
)
}

export default HomePage;
