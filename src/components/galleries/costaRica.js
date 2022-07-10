import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import costaRica9 from '../../assets/galleries/costaRica/costaRica9.jpg'

import costaRica8 from '../../assets/galleries/costaRica/costaRica8.jpg'
import costaRica35 from '../../assets/galleries/costaRica/costaRica35.jpg'
import costaRica34 from '../../assets/galleries/costaRica/costaRica34.jpg'
import costaRica33 from '../../assets/galleries/costaRica/costaRica33.jpg'
import costaRica27 from '../../assets/galleries/costaRica/costaRica27.jpg'
import costaRica19 from '../../assets/galleries/costaRica/costaRica19.jpg'
import costaRica22 from '../../assets/galleries/costaRica/costaRica22.jpg'
import costaRica21 from '../../assets/galleries/costaRica/costaRica21.jpg'
import costaRica20 from '../../assets/galleries/costaRica/costaRica20.jpg'
import costaRica23 from '../../assets/galleries/costaRica/costaRica23.jpg'
import costaRica7 from '../../assets/galleries/costaRica/costaRica7.jpg'
import costaRica24 from '../../assets/galleries/costaRica/costaRica24.jpg'
import costaRica1 from '../../assets/galleries/costaRica/costaRica1.jpg'
import costaRica2 from '../../assets/galleries/costaRica/costaRica2.jpg'
import costaRica18 from '../../assets/galleries/costaRica/costaRica18.jpg'
import costaRica13 from '../../assets/galleries/costaRica/costaRica13.jpg'
import costaRica14 from '../../assets/galleries/costaRica/costaRica14.jpg'
import costaRica15 from '../../assets/galleries/costaRica/costaRica15.jpg'
import costaRica16 from '../../assets/galleries/costaRica/costaRica16.jpg'


const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const CostaRica = props => {

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
     <GalleryBody header ={{src:costaRica9, label:'Costa Rica', subLabel:'Photo Gallery'}}

               blurb ={[{type:'text',text:"Costa Rica is one of the most popular Central American vacation destinations, known for its beaches, jungles, diverse wildlife, and volcanoes. We were in Costa Rica for just over three weeks traveling between La Fortuna, Monteverde, and Manuel Antonio. We swam in some of the warmest bodies of water at some of the nicest beaches we’ve ever been to, hiked through a cloud forest, and saw about 100 waterfalls. It was beautiful, safe, and accessible. The only downside was, due to popularity, everything was quite busy and expensive."}]}
               updated={'February 2022'}
               isMobile={isMobile}
               contentTest ={[

                              {type:'diptych',src1:costaRica8,src2:costaRica35},
                              {type:'diptych',src1:costaRica34,src2:costaRica33},
                              {type:'horizontalImage',src:costaRica27},
                              {type:'diptych',src1:costaRica19,src2:costaRica22},

                              {type:'diptych',src1:costaRica21,src2:costaRica20},
                              {type:'horizontalImage',src:costaRica23},

                              {type:'diptych',src1:costaRica7,src2:costaRica24},
                              {type:'diptych',src1:costaRica2,src2:costaRica1},
                              {type:'horizontalImage',src:costaRica18},

                              {type:'diptych',src1:costaRica14,src2:costaRica13},
                              {type:'diptych',src1:costaRica15,src2:costaRica16},

                            ]}/>
   </div>
  </>
  )}

  export default CostaRica;
