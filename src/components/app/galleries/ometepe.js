import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Ometepe = props => {

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
  <GalleryBody header ={{src:'OmetepeGallery/ometepe7.jpg', label:'Ometepe Island'}}
            blurb ={"Ometepe Blurb"}
            updated={'December 2021'}
            isMobile={isMobile}
            contentTest ={[
                           {type:'header',text:"Ometepe Title"},
                           {type:'horizontalImage',src:'OmetepeGallery/ometepe13.jpg'},
                           {type:'diptych',src1:'OmetepeGallery/ometepe11.jpg',src2:'OmetepeGallery/ometepe12.jpg'},
                           {type:'horizontalImage',src:'OmetepeGallery/ometepe5.jpg'},
                           {type:'horizontalImage',src:'OmetepeGallery/ometepe4.jpg'},
                           {type:'horizontalImage',src:'OmetepeGallery/ometepe6.jpg'},
                           {type:'horizontalImage',src:'OmetepeGallery/ometepe10.jpg'},
                           {type:'diptych',src1:'OmetepeGallery/ometepe1.jpg',src2:'OmetepeGallery/ometepe2.jpg'},
                           {type:'horizontalImage',src:'OmetepeGallery/ometepe3.jpg'},
                           {type:'diptych',src1:'OmetepeGallery/ometepe8.jpg',src2:'OmetepeGallery/ometepe9.jpg'},
                           {type:'horizontalImage',src:'OmetepeGallery/ometepe7.jpg'}
                         ]}/>
  </>
)}

export default Ometepe;
