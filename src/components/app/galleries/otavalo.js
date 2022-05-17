import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Otavalo = props => {

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
    <GalleryBody header ={{src:'OtavaloGallery/otavalo1.jpg', label:'Otavalo'}}
              blurb ={"Otavalo Blurb"}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Quindio Title"},
                            {type:'horizontalImage',src:'OtavaloGallery/otavalo15.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/otavalo14.jpg',src2:'OtavaloGallery/otavalo24.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/otavalo23.jpg',src2:'OtavaloGallery/otavalo20.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/otavalo18.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/otavalo17.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/otavalo1.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/otavalo2.jpg',src2:'OtavaloGallery/otavalo5.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/otavalo6.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/otavalo8.jpg',src2:'OtavaloGallery/otavalo9.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/otavalo7.jpg'},


                           ]}/>
  </div>

  </>

)}

export default Otavalo;
