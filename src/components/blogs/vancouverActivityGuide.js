import React from 'react';
import { Container,Row} from 'react-bootstrap';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import  { useState,useEffect } from 'react';

const VancouverActivityGuide = props => {
  const[isMobile, setIsMobile]=useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    setTimeout(() => {
      updateDimensions();
      }, 300)
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
    {isMobile?
        <MobileHeader page ={'blog'}/>
    :
        <DesktopHeader page ={'blog'}/>
    }
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
