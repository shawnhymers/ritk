import React from 'react';
import { Container,Row} from 'react-bootstrap';
import BlogHeader from "../elements/blogHeader";
import  { useState,useEffect } from 'react';

const VancouverActivityGuide = props => {
  const[isMobile, setIsMobile]=useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
      updateDimensions()
    window.addEventListener("contextmenu", e => e.preventDefault());

    })

  function updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    console.log('updating dimensions')
    if (windowWidth>= windowHeight) {
      setIsMobile(false)
    }
    else {
      setIsMobile(true)
    }
  }

return(
  <>
    <div style ={{overflowX:'hidden'}}>
    <Container>
      <BlogHeader isMobile={isMobile}/>
      <Row>
        <p>Vancouver Activity Guide</p>
      </Row>

      <Row>
        <p>Vancouver Activity Guide</p>
      </Row>
    </Container>

    </div>
  </>
)}

export default VancouverActivityGuide;
