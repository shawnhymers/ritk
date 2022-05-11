import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const CostaRica = props => {

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
     <GalleryBody header ={{src:'CostaRicaGallery/costaRica9.jpg', label:'Costa Rica'}}
               blurb ={"Costa Rica Blurb"}
               updated={'December 2021'}
               isMobile={isMobile}
               contentTest ={[
                              {type:'header',text:"Costa Rica Title"},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica8.jpg',src2:'CostaRicaGallery/costaRica35.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica34.jpg',src2:'CostaRicaGallery/costaRica33.jpg'},
                              {type:'horizontalImage',src:'CostaRicaGallery/costaRica27.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica19.jpg',src2:'CostaRicaGallery/costaRica22.jpg'},

                              {type:'diptych',src1:'CostaRicaGallery/costaRica21.jpg',src2:'CostaRicaGallery/costaRica20.jpg'},
                              {type:'horizontalImage',src:'CostaRicaGallery/costaRica23.jpg'},

                              {type:'diptych',src1:'CostaRicaGallery/costaRica7.jpg',src2:'CostaRicaGallery/costaRica24.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica2.jpg',src2:'CostaRicaGallery/costaRica1.jpg'},
                              {type:'horizontalImage',src:'CostaRicaGallery/costaRica18.jpg'},

                              {type:'diptych',src1:'CostaRicaGallery/costaRica14.jpg',src2:'CostaRicaGallery/costaRica13.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica15.jpg',src2:'CostaRicaGallery/costaRica16.jpg'},

                            ]}/>
   </div>
  </>
  )}

  export default CostaRica;
