import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import cusco10 from '../../assets/galleries/cusco/cusco10.jpg'
import cusco20 from '../../assets/galleries/cusco/cusco20.jpg'
import cusco19 from '../../assets/galleries/cusco/cusco19.jpg'
import cusco4 from '../../assets/galleries/cusco/cusco4.jpg'
import cusco16 from '../../assets/galleries/cusco/cusco16.jpg'
import cusco7 from '../../assets/galleries/cusco/cusco7.jpg'
import cusco14 from '../../assets/galleries/cusco/cusco14.jpg'
import cusco2 from '../../assets/galleries/cusco/cusco2.jpg'
import cusco6 from '../../assets/galleries/cusco/cusco6.jpg'
import cusco9 from '../../assets/galleries/cusco/cusco9.jpg'
import cusco8 from '../../assets/galleries/cusco/cusco8.jpg'
import cusco15 from '../../assets/galleries/cusco/cusco15.jpg'
import cusco1 from '../../assets/galleries/cusco/cusco1.jpg'
import cusco18 from '../../assets/galleries/cusco/cusco18.jpg'




const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Cusco = props => {

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
    <GalleryBody header ={{src:cusco10, label:'Cusco', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Cusco, Peru is a city in the Peruvian Andes that was once famously the capital of the Incan empire. The Incan influence is clear when walking through the narrow cobblestone streets and seeing the Incan stone as building foundations. We were in Cusco for around 2 weeks and had a mixed bag experience. The elevation and the cold wore us out a little, but the charm of the old city and the amazing food to be had made up for it. Aside from beautiful architecture, there isn’t too much to see in the city itself, but there are loads of day tours to do that start from Cusco. To learn more about what we got up to in our time there check out"},
                       {type:'link',text:' our blog about it',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[


                            {type:'diptych',src1:cusco20,src2:cusco19},
                            {type:'diptych',src1:cusco4,src2:cusco16},
                            {type:'horizontalImage',src:cusco7},

                            {type:'horizontalImage',src:cusco14},
                            {type:'diptych',src1:cusco2,src2:cusco6},
                            {type:'diptych',src1:cusco9,src2:cusco8},
                            {type:'diptych',src1:cusco15,src2:cusco1},
                            {type:'horizontalImage',src:cusco18},


                           ]}/>
  </div>

  </>

)}

export default Cusco;
