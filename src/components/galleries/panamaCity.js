import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const PanamaCity = props => {

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
  {isMobile?
      <MobileHeader page ={'gallery'}/>
  :
      <DesktopHeader page ={'gallery'}/>
  }
    <GalleryBody header ={{src:'/PanamaGallery/panama9.jpg', label:'Panama City'}}
              blurb ={[{type:'text',text:"Panama blurb "},
                       {type:'link',text:'here',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Panama City"},

                            {type:'horizontalImage',src:'/PanamaGallery/panama1.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama14.jpg',src2:'/PanamaGallery/panama15.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama2.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama7.jpg',src2:'/PanamaGallery/panama8.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama12.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama13.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama5.jpg',src2:'/PanamaGallery/panama6.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama18.jpg',src2:'/PanamaGallery/panama19.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama16.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama20.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama10.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama24.jpg',src2:'/PanamaGallery/panama23.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama21.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama25.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama26.jpg',src2:'/PanamaGallery/panama28.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama27.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama33.jpg',src2:'/PanamaGallery/panama30.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama31.jpg',src2:'/PanamaGallery/panama32.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama34.jpg'},





                           ]}/>
  </div>

  </>

)}

export default PanamaCity;
