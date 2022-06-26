import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Granada = props => {

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
  <GalleryBody header ={{src:'GranadaGallery/granada10.jpg', label:'Granada', subLabel:'Photo Gallery'}}
            blurb ={[{type:'text',text:"Granada, Nicaragua is a beautiful colonial city on the coast of lake Nicaragua and is the oldest colonial city in Latin America. We were in Granada for around a week and since it was our first destination in Central America we were a bit intimidated but definitely charmed by the vibrant colonial city."}]}
            updated={'February 2022'}
            isMobile={isMobile}
            contentTest ={[
                  
                           {type:'horizontalImage',src:'GranadaGallery/granada6.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada4.jpg',src2:'GranadaGallery/granada5.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada3.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada2.jpg',src2:'GranadaGallery/granada1.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada11.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada14.jpg',src2:'GranadaGallery/granada13.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada12.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada9.jpg'},
                           {type:'diptych',src1:'GranadaGallery/granada7.jpg',src2:'GranadaGallery/granada8.jpg'},
                           {type:'horizontalImage',src:'GranadaGallery/granada10.jpg'}
                         ]}/>
</div>
  </>
)}

export default Granada;
//
// {type:'header',text:"Granada Title"},
// {type:'listItem',text:"3) Beet Box"},
// {type:'paragraph', text:''},
