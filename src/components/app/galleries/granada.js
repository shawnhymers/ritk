import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Granada = props => {

  const[isMobile, setIsMobile]=useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    updateDimensions()
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
  <GalleryHeader isMobile={isMobile}/>
  <GalleryBody header ={{src:'GranadaGallery/granada10.jpg', label:'Granada'}}
            blurb ={"Granada Blurb"}
            updated={'December 2021'}
            contentTest ={[
                           {type:'header',text:"Granada Title"},
                           {type:'horizontalImage',src:'GranadaGallery/granada6.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada4.jpg',src2:'GranadaGallery/granada5.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada3.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada2.jpg',src2:'GranadaGallery/granada1.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada11.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada14.jpg',src2:'GranadaGallery/granada13.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada12.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada9.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada7.jpg',src2:'GranadaGallery/granada8.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada10.jpg'}
                         ]}/>
  </>
)}

export default Granada;
//
// {type:'header',text:"Granada Title"},
// {type:'listItem',text:"3) Beet Box"},
// {type:'paragraph', text:''},
