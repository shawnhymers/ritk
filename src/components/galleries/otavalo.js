import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Otavalo = props => {

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
    <GalleryBody header ={{src:'OtavaloGallery/otavalo1.jpg', label:'Otavalo', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Otavalo is a town in the Andean highlands in the Imbabura province of northern Ecuador famous for its outdoor market in the central Plaza de Ponchos. It is the largest crafts market in South America, where hundreds of indigenous crafts people sell their textiles and handicrafts. We only spent an afternoon here during a day trip from Quito (the nearby capital city). The market was a super fun experience. The wares were reasonably priced and well made, and the locals were a blast to try to bargain with."}]}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Otavalo Title"},
                            {type:'horizontalImage',src:'OtavaloGallery/Otavalo15.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/Otavalo14.jpg',src2:'OtavaloGallery/Otavalo24.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/Otavalo23.jpg',src2:'OtavaloGallery/Otavalo20.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/Otavalo18.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/Otavalo17.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/Otavalo1.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/Otavalo2.jpg',src2:'OtavaloGallery/Otavalo5.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/Otavalo6.jpg'},
                            {type:'diptych',src1:'OtavaloGallery/Otavalo8.jpg',src2:'OtavaloGallery/Otavalo9.jpg'},
                            {type:'horizontalImage',src:'OtavaloGallery/Otavalo7.jpg'},


                           ]}/>
  </div>

  </>

)}

export default Otavalo;
