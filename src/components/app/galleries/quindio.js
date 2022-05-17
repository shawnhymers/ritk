import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Quindio = props => {

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
  <div style={{overflowX:'hidden'}}>
    <GalleryHeader isMobile={isMobile}/>
    <GalleryBody header ={{src:'QuindioGallery/quindio22.jpg', label:'Quindio'}}
              blurb ={"Quindo Blurb"}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Quindio Title"},
                            {type:'horizontalImage',src:'QuindioGallery/quindio22.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio26.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio20.jpg'},
                            {type:'diptych',src1:'QuindioGallery/quindio24.jpg',src2:'QuindioGallery/quindio23.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio8.jpg'},
                            {type:'diptych',src1:'QuindioGallery/quindio1.jpg',src2:'QuindioGallery/quindio7.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio10.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio9.jpg'},



                            {type:'horizontalImage',src:'QuindioGallery/quindio11.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio12.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio13.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/quindio2.jpg'},
                            {type:'diptych',src1:'QuindioGallery/quindio16.jpg',src2:'QuindioGallery/quindio15.jpg'},

                             {type:'horizontalImage',src:'QuindioGallery/quindio3.jpg'},
                             {type:'diptych',src1:'QuindioGallery/quindio5.jpg',src2:'QuindioGallery/quindio17.jpg'},
                           ]}/>
  </div>

  </>

)}

export default Quindio;
