import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import otavalo1 from '../../assets/galleries/otavalo/Otavalo1.jpg'
import otavalo15 from '../../assets/galleries/otavalo/Otavalo15.jpg'
import otavalo14 from '../../assets/galleries/otavalo/Otavalo14.jpg'
import otavalo24 from '../../assets/galleries/otavalo/Otavalo24.jpg'
import otavalo23 from '../../assets/galleries/otavalo/Otavalo23.jpg'
import otavalo20 from '../../assets/galleries/otavalo/Otavalo20.jpg'
import otavalo18 from '../../assets/galleries/otavalo/Otavalo18.jpg'
import otavalo17 from '../../assets/galleries/otavalo/Otavalo17.jpg'
import otavalo2 from '../../assets/galleries/otavalo/Otavalo2.jpg'
import otavalo5 from '../../assets/galleries/otavalo/Otavalo5.jpg'
import otavalo6 from '../../assets/galleries/otavalo/Otavalo6.jpg'
import otavalo8 from '../../assets/galleries/otavalo/Otavalo8.jpg'
import otavalo9 from '../../assets/galleries/otavalo/Otavalo9.jpg'
import otavalo7 from '../../assets/galleries/otavalo/Otavalo7.jpg'
import sacredValley15 from '../../assets/galleries/sacredValley/sacredValley15.jpg'
import cusco6 from '../../assets/galleries/cusco/cusco6.jpg'
import quito17 from '../../assets/galleries/quito/Quito17.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Otavalo = props => {

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
    <GalleryBody header ={{src:otavalo1, label:'Otavalo', subLabel:'Photo Gallery'}}

              nextTitle1={"Cusco"}
              nextTitle2={'Sacred Valley'}
              nextTitle3={"Quito"}
              nextPic1 ={cusco6}
              nextPic2 ={sacredValley15}
              nextPic3 ={quito17}
              nextLink1= {'/cusco6'}
              nextLink2= {'/sacredValley'}
              nextLink3= {'/quito'}

              blurb ={[{type:'text',text:"Otavalo is a town in the Andean highlands in the Imbabura province of northern Ecuador famous for its outdoor market in the central Plaza de Ponchos. It is the largest crafts market in South America, where hundreds of indigenous crafts people sell their textiles and handicrafts."}]}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[

                            {type:'horizontalImage',src:otavalo15},
                            {type:'diptych',src1:otavalo14,src2:otavalo24},
                            {type:'diptych',src1:otavalo23,src2:otavalo20},
                            {type:'horizontalImage',src:otavalo18},
                            {type:'horizontalImage',src:otavalo17},
                            {type:'horizontalImage',src:otavalo1},
                            {type:'diptych',src1:otavalo2,src2:otavalo5},
                            {type:'horizontalImage',src:otavalo6},
                            {type:'diptych',src1:otavalo8,src2:otavalo9},
                            {type:'horizontalImage',src:otavalo7},


                           ]}/>
  </div>

  </>

)}

export default Otavalo;
