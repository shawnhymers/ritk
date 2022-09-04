import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import quito15 from '../../assets/galleries/quito/Quito15.jpg'
import quito27 from '../../assets/galleries/quito/Quito27.jpg'
import quito6 from '../../assets/galleries/quito/Quito6.jpg'
import quito11 from '../../assets/galleries/quito/Quito11.jpg'
import quito13 from '../../assets/galleries/quito/Quito13.jpg'
import quito26 from '../../assets/galleries/quito/Quito26.jpg'
import quito24 from '../../assets/galleries/quito/Quito24.jpg'
import quito22 from '../../assets/galleries/quito/Quito22.jpg'
import quito3 from '../../assets/galleries/quito/Quito3.jpg'
import quito1 from '../../assets/galleries/quito/Quito1.jpg'
import quito2 from '../../assets/galleries/quito/Quito2.jpg'
import quito4 from '../../assets/galleries/quito/Quito4.jpg'

import quito31 from '../../assets/galleries/quito/Quito31.jpg'
import quito32 from '../../assets/galleries/quito/Quito32.jpg'
import quito33 from '../../assets/galleries/quito/Quito33.jpg'
import quito34 from '../../assets/galleries/quito/Quito34.jpg'
import quito35 from '../../assets/galleries/quito/Quito35.jpg'


import quindio23 from '../../assets/galleries/quindio/Quindio23.jpg'
import sacredValley15 from '../../assets/galleries/sacredValley/sacredValley15.jpg'
import cusco6 from '../../assets/galleries/cusco/cusco6.jpg'
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Quito = props => {

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
    <GalleryBody header ={{src:quito15, label:'Quito', subLabel:'Photo Gallery'}}

                 nextTitle1={"Sacred Valley"}
                 nextTitle2={'Cusco'}
                 nextTitle3={"Quindio"}
                 nextPic1 ={sacredValley15}
                 nextPic2 ={cusco6}
                 nextPic3 ={quindio23}
                 nextLink1= {'/sacredValley'}
                 nextLink2= {'/cusco'}
                 nextLink3= {'/quindio'}

              blurb ={[{type:'text',text:"Quito, Ecuador is the country's capital and is built not only on top of an ancient Incan city, but also on the equator. It’s also the gateway to the country’s most famous volcano, Cotopaxi. You can read more about our experience "},
                       {type:'link',text:'here',link:'/InTheKnowQuito'}]}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[

                            {type:'diptych',src1:quito27,src2:quito6},
                            {type:'horizontalImage',src:quito11},
                            {type:'horizontalImage',src:quito13},

                            {type:'horizontalImage',src:quito26},
                            {type:'diptych',src1:quito24,src2:quito22},
                            {type:'horizontalImage',src:quito3},
                            {type:'diptych',src1:quito1,src2:quito2},
                            {type:'horizontalImage',src:quito4},
                            {type:'horizontalImage',src:quito34},
                            {type:'horizontalImage',src:quito31},
                            {type:'horizontalImage',src:quito32},
                            {type:'diptych',src1:quito35,src2:quito33},



                           ]}/>
  </div>

  </>

)}

export default Quito;
