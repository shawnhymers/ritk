import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Huacachina = props => {

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
              blurb ={[{type:'text',text:"Huacachina is a tiny village built around a desert oasis just outside of the city of Ica, Peru. The lagoon originally was a natural feature created by seepage from an underwater aquifer. Unfortunately, due to well-drilling, the naturally occurring water is decreasing and now the tourist site is being artificially supported. Regardless, it is a very magical place. We stayed for 2 nights which we thought was a great amount of time. Some people come for just a day trip but we think it is worth the extra time to experience everything Huacachina has to offer, such as sunrise/sunset on the dunes, sand boarding, and ripping around on the dune buggies. We had a blast the whole time and kept being blown away by the beauty of the oasis and surrounding desert. "},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
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

export default Huacachina;
