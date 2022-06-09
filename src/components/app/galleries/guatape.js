import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Guatape = props => {

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
      <GalleryBody header ={{src:'GuatapeGallery/Guatape9.jpg', label:'Guatape'}}
                blurb ={"Guatape Blurb"}
                updated={'December 2021'}
                isMobile={isMobile}
                contentTest ={[
                               {type:'header',text:"Guatape Title"},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape1.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape18.jpg',src2:'GuatapeGallery/Guatape22.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape13.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape14.jpg',src2:'GuatapeGallery/Guatape20.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape15.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape3.jpg',src2:'GuatapeGallery/Guatape5.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape17.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape6.jpg',src2:'GuatapeGallery/Guatape24.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape16.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape24.jpg',src2:'GuatapeGallery/Guatape25.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape4.jpg'},

                             ]}/>
    </div>

  </>

)}

export default Guatape;
