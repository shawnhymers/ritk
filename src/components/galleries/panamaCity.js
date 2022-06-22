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
    <GalleryBody header ={{src:'QuitoGallery/Quito15.jpg', label:'Quito'}}
              blurb ={[{type:'text',text:"Arequipa blurb "},
                       {type:'link',text:'here',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Arequipa"},
                            {type:'diptych',src1:'QuitoGallery/Quito27.jpg',src2:'QuitoGallery/Quito6.jpg'},
                            {type:'horizontalImage',src:'QuitoGallery/Quito11.jpg'},
                            {type:'horizontalImage',src:'QuitoGallery/Quito13.jpg'},
                            {type:'horizontalImage',src:'QuitoGallery/Quito26.jpg'},
                            {type:'diptych',src1:'QuitoGallery/Quito24.jpg',src2:'QuitoGallery/Quito22.jpg'},
                            {type:'horizontalImage',src:'QuitoGallery/Quito3.jpg'},
                            {type:'diptych',src1:'QuitoGallery/Quito1.jpg',src2:'QuitoGallery/Quito2.jpg'},
                            {type:'horizontalImage',src:'QuitoGallery/Quito4.jpg'},


                           ]}/>
  </div>

  </>

)}

export default PanamaCity;
