import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../standardComponents/galleryBody";
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
    <GalleryBody header ={{src:'QuindioGallery/Quindio22.jpg', label:'Quindio'}}
              blurb ={"Quindo Blurb"}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Quindio Title"},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio22.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio26.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio20.jpg'},
                            {type:'diptych',src1:'QuindioGallery/Quindio24.jpg',src2:'QuindioGallery/Quindio23.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio8.jpg'},
                            {type:'diptych',src1:'QuindioGallery/Quindio1.jpg',src2:'QuindioGallery/Quindio7.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio10.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio9.jpg'},



                            {type:'horizontalImage',src:'QuindioGallery/Quindio11.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio12.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio13.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio2.jpg'},
                            {type:'diptych',src1:'QuindioGallery/Quindio16.jpg',src2:'QuindioGallery/Quindio15.jpg'},

                             {type:'horizontalImage',src:'QuindioGallery/Quindio3.jpg'},
                             {type:'diptych',src1:'QuindioGallery/Quindio5.jpg',src2:'QuindioGallery/Quindio17.jpg'},
                           ]}/>
  </div>

  </>

)}

export default Quindio;
