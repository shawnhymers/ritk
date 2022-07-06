import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/mobileHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Quindio = props => {

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
    <GalleryBody header ={{src:'QuindioGallery/Quindio22.jpg', label:'Quindio', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Quindo, Colombia is a part of the “Coffee Triangle”, a part of the Colombian Paisa region in the rural area of Colombia famous for its moderate weather and impressive coffee plantations. It is also home to the famous Valle de Cocora, which is one of the beautiful places we’ve seen to date. We stayed near Filandia for a bit over a week and the entire time we felt like we were in a dream. The lush green rolling hills and countryside calmness was a lovely juxtaposition to our time in the busy Colombian cities."}]}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[

                            {type:'horizontalImage',src:'QuindioGallery/Quindio22.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio26.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio20.jpg'},
                            {type:'diptych',src1:'QuindioGallery/Quindio24.jpg',src2:'QuindioGallery/Quindio23.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio8.jpg'},
                            {type:'diptych',src1:'QuindioGallery/Quindio1.jpg',src2:'QuindioGallery/Quindio7.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio10.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio9.jpg'},



                            {type:'horizontalImage',src:'QuindioGallery/Quindio11.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio12.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio13.jpg'},
                            {type:'horizontalImage',src:'QuindioGallery/Quindio2.jpg'},
                            {type:'diptych',src1:'QuindioGallery/Quindio16.jpg',src2:'QuindioGallery/Quindio15.jpg'},

                             {type:'horizontalImage',src:'QuindioGallery/Quindio3.jpg'},
                             {type:'diptych',src1:'QuindioGallery/Quindio5.jpg',src2:'QuindioGallery/Quindio17.jpg'},
                           ]}/>
  </div>

  </>

)}

export default Quindio;
