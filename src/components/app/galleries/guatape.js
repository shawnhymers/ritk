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
      <GalleryBody header ={{src:'GuatapeGallery/guatape9.jpg', label:'Guatape'}}
                blurb ={"Guatape Blurb"}
                updated={'December 2021'}
                isMobile={isMobile}
                contentTest ={[
                               {type:'header',text:"Guatape Title"},
                               {type:'horizontalImage',src:'GuatapeGallery/guatape1.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/guatape18.jpg',src2:'GuatapeGallery/guatape22.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/guatape13.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/guatape14.jpg',src2:'GuatapeGallery/guatape20.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/guatape15.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/guatape3.jpg',src2:'GuatapeGallery/guatape5.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/guatape17.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/guatape6.jpg',src2:'GuatapeGallery/guatape24.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/guatape16.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/guatape24.jpg',src2:'GuatapeGallery/guatape25.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/guatape4.jpg'},

                             ]}/>
    </div>

  </>

)}

export default Guatape;
