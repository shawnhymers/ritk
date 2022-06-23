import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Cusco = props => {

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
    <GalleryBody header ={{src:'CuscoGallery/cusco10.jpg', label:'Cusco'}}
              blurb ={[{type:'text',text:"Cusco blurb "},
                       {type:'link',text:'here',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Cusco"},

                            {type:'diptych',src1:'CuscoGallery/cusco20.jpg',src2:'CuscoGallery/cusco19.jpg'},
                            {type:'diptych',src1:'CuscoGallery/cusco4.jpg',src2:'CuscoGallery/cusco16.jpg'},
                            {type:'horizontalImage',src:'CuscoGallery/cusco7.jpg'},

                            {type:'horizontalImage',src:'CuscoGallery/cusco14.jpg'},
                            {type:'diptych',src1:'CuscoGallery/cusco2.jpg',src2:'CuscoGallery/cusco6.jpg'},
                            {type:'diptych',src1:'CuscoGallery/cusco9.jpg',src2:'CuscoGallery/cusco8.jpg'},
                            {type:'diptych',src1:'CuscoGallery/cusco15.jpg',src2:'CuscoGallery/cusco1.jpg'},
                            {type:'horizontalImage',src:'CuscoGallery/cusco18.jpg'},


                           ]}/>
  </div>

  </>

)}

export default Cusco;
