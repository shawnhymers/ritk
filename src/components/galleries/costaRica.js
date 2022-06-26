import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const CostaRica = props => {

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
     <GalleryBody header ={{src:'CostaRicaGallery/costaRica9.jpg', label:'Costa Rica', subLabel:'Photo Gallery'}}

               blurb ={[{type:'text',text:"Costa Rica is one of the most popular Central American vacation destinations, known for its beaches, jungles, diverse wildlife, and volcanoes. We were in Costa Rica for just over three weeks traveling between La Fortuna, Monteverde, and Manuel Antonio. We swam in some of the warmest bodies of water at some of the nicest beaches we’ve ever been to, hiked through a cloud forest, and saw about 100 waterfalls. It was beautiful, safe, and accessible. The only downside was, due to popularity, everything was quite busy and expensive."}]}
               updated={'February 2022'}
               isMobile={isMobile}
               contentTest ={[
                          
                              {type:'diptych',src1:'CostaRicaGallery/costaRica8.jpg',src2:'CostaRicaGallery/costaRica35.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica34.jpg',src2:'CostaRicaGallery/costaRica33.jpg'},
                              {type:'horizontalImage',src:'CostaRicaGallery/costaRica27.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica19.jpg',src2:'CostaRicaGallery/costaRica22.jpg'},

                              {type:'diptych',src1:'CostaRicaGallery/costaRica21.jpg',src2:'CostaRicaGallery/costaRica20.jpg'},
                              {type:'horizontalImage',src:'CostaRicaGallery/costaRica23.jpg'},

                              {type:'diptych',src1:'CostaRicaGallery/costaRica7.jpg',src2:'CostaRicaGallery/costaRica24.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica2.jpg',src2:'CostaRicaGallery/costaRica1.jpg'},
                              {type:'horizontalImage',src:'CostaRicaGallery/costaRica18.jpg'},

                              {type:'diptych',src1:'CostaRicaGallery/costaRica14.jpg',src2:'CostaRicaGallery/costaRica13.jpg'},
                              {type:'diptych',src1:'CostaRicaGallery/costaRica15.jpg',src2:'CostaRicaGallery/costaRica16.jpg'},

                            ]}/>
   </div>
  </>
  )}

  export default CostaRica;
