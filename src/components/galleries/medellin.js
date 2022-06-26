import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Medellin = props => {

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
      <GalleryBody header ={{src:'MedellinGallery/Medellin11.jpg', label:'Medellin', subLabel:'Photo Gallery'}}
                blurb ={[{type:'text',text:"Medellín, Colombia is located in the Aburrá Valley, which is a central region of the Andes Mountains. It is one of the largest cities in the country and is nicknamed the “City of Eternal Spring” for its temperate weather. We stayed in Medellín for two weeks, which is long enough to see most of the city's top sites, but we could have stayed much longer. It is an incredibly livable city with an indescribable energy. You can read more about our       experience"},
                         {type:'link', text:'here',link:"/InTheKnowMedellin"}]}
                updated={'December 2021'}
                isMobile={isMobile}
                contentTest ={[
                               {type:'header',text:"Medellin Title"},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin11.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin7.jpg',src2:'MedellinGallery/Medellin6.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin2.jpg',src2:'MedellinGallery/Medellin8.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin5.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin10.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin14.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin21.jpg',src2:'MedellinGallery/Medellin19.jpg'},


                               {type:'horizontalImage',src:'MedellinGallery/Medellin15.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin18.jpg',src2:'MedellinGallery/Medellin17.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin20.jpg'},

                             ]}/>
    </div>

  </>

)}

export default Medellin;
