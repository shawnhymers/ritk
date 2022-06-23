import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const SacredValley = props => {

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
    <GalleryBody header ={{src:'SacredValleyGallery/sacredValley17.jpg', label:'Sacred Valley'}}
              blurb ={[{type:'text',text:"Arequipa blurb "},
                       {type:'link',text:'here',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Sacred Valley"},

                            {type:'diptych',src1:'SacredValleyGallery/sacredValley8.jpg',src2:'SacredValleyGallery/sacredValley13.jpg'},
                            {type:'diptych',src1:'SacredValleyGallery/sacredValley2.jpg',src2:'SacredValleyGallery/sacredValley10.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley7.jpg'},
                            {type:'diptych',src1:'SacredValleyGallery/sacredValley6.jpg',src2:'SacredValleyGallery/sacredValley5.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley12.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley23.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley1.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley24.jpg'},
                            {type:'diptych',src1:'SacredValleyGallery/sacredValley27.jpg',src2:'SacredValleyGallery/sacredValley25.jpg'},
                            {type:'diptych',src1:'SacredValleyGallery/sacredValley28.jpg',src2:'SacredValleyGallery/sacredValley29.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley26.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley21.jpg'},

                            {type:'diptych',src1:'SacredValleyGallery/sacredValley22.jpg',src2:'SacredValleyGallery/sacredValley14.jpg'},
                            {type:'diptych',src1:'SacredValleyGallery/sacredValley20.jpg',src2:'SacredValleyGallery/sacredValley19.jpg'},
                            {type:'horizontalImage',src:'SacredValleyGallery/sacredValley18.jpg'},





                           ]}/>
  </div>

  </>

)}

export default SacredValley;
