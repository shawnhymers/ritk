import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Guatape = props => {

  const[isMobile, setIsMobile]=useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    setTimeout(() => {
      updateDimensions();
      }, 300)
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
      <GalleryBody header ={{src:'GuatapeGallery/Guatape9.jpg', label:'Guatape', subLabel:'Photo Gallery'}}
                blurb ={[{type:'text',text:"Guatape, Colombia is a small Andean resort town a few hours away from Medelín, and is home to Piedra del Peñol, a giant granite rock towering 220 meters high. We stayed there for just one night, which is probably all you need. The town is very much built around tourism, but we felt like it retained a lot more of its charm than other similarly touristy towns. You can read more about our experience"},
                         {type:'link',text:' here.',link:"/InTheKnowGuatape"}]}
                updated={'April 2022'}
                isMobile={isMobile}
                contentTest ={[

                               {type:'horizontalImage',src:'GuatapeGallery/Guatape1.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape18.jpg',src2:'GuatapeGallery/Guatape22.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape13.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape14.jpg',src2:'GuatapeGallery/Guatape20.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape15.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape3.jpg',src2:'GuatapeGallery/Guatape5.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape17.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape6.jpg',src2:'GuatapeGallery/Guatape24.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape16.jpg'},
                               {type:'diptych',src1:'GuatapeGallery/Guatape24.jpg',src2:'GuatapeGallery/Guatape25.jpg'},
                               {type:'horizontalImage',src:'GuatapeGallery/Guatape4.jpg'},

                             ]}/>
    </div>

  </>

)}

export default Guatape;
