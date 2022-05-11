import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Cartagena = props => {

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
     <GalleryBody header ={{src:'CartagenaGallery/cartagena13.jpg', label:'Granada'}}
                  blurb ={"Cartagena Blurb"}
                  updated={'December 2021'}
                  isMobile={isMobile}
                  contentTest ={[
                                {type:'header',text:"Cartagena Title"},
                                {type:'horizontalImage',src:'CartagenaGallery/cartagena1.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena9.jpg',src2:'CartagenaGallery/cartagena11.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena10.jpg',src2:'CartagenaGallery/cartagena15.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena14.jpg',src2:'CartagenaGallery/cartagena12.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena17.jpg',src2:'CartagenaGallery/cartagena7.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena5.jpg',src2:'CartagenaGallery/cartagena16.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena1.jpg',src2:'CartagenaGallery/cartagena2.jpg'}
                               ]}/>
   </div>
  </>
  )}

  export default Cartagena;
