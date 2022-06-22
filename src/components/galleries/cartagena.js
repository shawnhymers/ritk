import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Cartagena = props => {

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
     <GalleryBody header ={{src:'CartagenaGallery/cartagena13.jpg', label:'Cartagena'}}
                  blurb ={[{type:'text',text:"Cartagena, Colombia is a city built around one of the major ports on Colombia’s northern coast. It has served as a vital port town since 1540. We were in Cartagena for a little over a week which was definitely enough for us to feel like we knew it. The old town is charming, but we found the heat, the hectic streets, and the party atmosphere a bit much for us."}]}
                  updated={'March 2022'}
                  isMobile={isMobile}
                  contentTest ={[
                                {type:'header',text:"Cartagena Title"},
                                {type:'horizontalImage',src:'CartagenaGallery/cartagena13.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena9.jpg',src2:'CartagenaGallery/cartagena11.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena10.jpg',src2:'CartagenaGallery/cartagena15.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena14.jpg',src2:'CartagenaGallery/cartagena12.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena17.jpg',src2:'CartagenaGallery/cartagena7.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena5.jpg',src2:'CartagenaGallery/cartagena16.jpg'},
                                {type:'diptych',src1:'CartagenaGallery/cartagena1.jpg',src2:'CartagenaGallery/cartagena2.jpg'}
                               ]}/>
   </div>
  </>
  )}

  export default Cartagena;
