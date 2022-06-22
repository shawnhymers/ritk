import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Quito = props => {

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
              blurb ={[{type:'text',text:"Quito, Ecuador is the country's capital and is actually built on top of an ancient Incan city. You can clearly see Incan stones making up the foundations of many of the buildings in the old town. We were there for about a week and did several day trips from the city. The old town was amazing and the day trips you can do from the city are incredible. Be warned though, the city sits at almost 3,000 M above sea level, so before you fully acclimate make sure you take it slow and stay hydrated. You can read more about our experience "},
                       {type:'link',text:'here',link:'/InTheKnowQuito'}]}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Quito Title"},
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

export default Quito;
