import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import panama9 from '../../assets/galleries/panama/panama9.jpg'
import panama14 from '../../assets/galleries/panama/panama14.jpg'
import panama1 from '../../assets/galleries/panama/panama1.jpg'
import panama15 from '../../assets/galleries/panama/panama15.jpg'
import panama2 from '../../assets/galleries/panama/panama2.jpg'
import panama7 from '../../assets/galleries/panama/panama7.jpg'
import panama8 from '../../assets/galleries/panama/panama8.jpg'
import panama12 from '../../assets/galleries/panama/panama12.jpg'
import panama13 from '../../assets/galleries/panama/panama13.jpg'
import panama5 from '../../assets/galleries/panama/panama5.jpg'
import panama6 from '../../assets/galleries/panama/panama6.jpg'
import panama18 from '../../assets/galleries/panama/panama18.jpg'
import panama19 from '../../assets/galleries/panama/panama19.jpg'
import panama16 from '../../assets/galleries/panama/panama16.jpg'
import panama20 from '../../assets/galleries/panama/panama20.jpg'
import panama10 from '../../assets/galleries/panama/panama10.jpg'
import panama23 from '../../assets/galleries/panama/panama23.jpg'
import panama24 from '../../assets/galleries/panama/panama24.jpg'
import panama21 from '../../assets/galleries/panama/panama21.jpg'
import panama25 from '../../assets/galleries/panama/panama25.jpg'
import panama26 from '../../assets/galleries/panama/panama26.jpg'
import panama28 from '../../assets/galleries/panama/panama28.jpg'
import panama27 from '../../assets/galleries/panama/panama27.jpg'
import panama33 from '../../assets/galleries/panama/panama33.jpg'
import panama30 from '../../assets/galleries/panama/panama30.jpg'
import panama31 from '../../assets/galleries/panama/panama31.jpg'
import panama32 from '../../assets/galleries/panama/panama32.jpg'
import panama34 from '../../assets/galleries/panama/panama34.jpg'
import medellin13 from '../../assets/galleries/medellin/Medellin13.jpg'
import cartagena12 from '../../assets/galleries/cartagena/cartagena12.jpg'

import costaRica11 from '../../assets/galleries/costaRica/costaRica11.jpg'
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const PanamaCity = props => {

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
    <GalleryBody header ={{src:panama9, label:'Panama City', subLabel:'Photo Gallery'}}

                 nextTitle1={"Medellin"}
                 nextTitle2={'Cartagena'}
                 nextTitle3={"Costa Rica"}
                 nextPic1 ={medellin13}
                 nextPic2 ={cartagena12}
                 nextPic3 ={costaRica11}
                 nextLink1= {'/medellin'}
                 nextLink2= {'/cartagena'}
                 nextLink3= {'/costaRica'}

              blurb ={[{type:'text',text:"Panama City, Panama is a huge and modern city that is the country's capital. Although the city spreads over a huge area, the small, cobblestoned historic district is where most tourists find themselves spending most of their time. That and the Panama Canal, of course. We also had the opportunity to visit an Embera community’s village. It was a beautiful experience being welcomed and taught about this Indigenous community’s way of life. "},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[


                            {type:'horizontalImage',src:panama1},
                            {type:'diptych',src1:panama14,src2:panama15},
                            {type:'horizontalImage',src:panama2},
                            {type:'diptych',src1:panama7,src2:panama8},
                            {type:'horizontalImage',src:panama12},
                            {type:'horizontalImage',src:panama13},
                            {type:'diptych',src1:panama5,src2:panama6},
                            {type:'diptych',src1:panama18,src2:panama19},
                            {type:'horizontalImage',src:panama16},
                            {type:'horizontalImage',src:panama20},
                            {type:'horizontalImage',src:panama10},
                            {type:'diptych',src1:panama24,src2:panama23},
                            {type:'horizontalImage',src:panama21},
                            {type:'horizontalImage',src:panama25},
                            {type:'diptych',src1:panama26,src2:panama28},
                            {type:'horizontalImage',src:panama27},
                            {type:'diptych',src1:panama33,src2:panama30},
                            {type:'diptych',src1:panama31,src2:panama32},
                            {type:'horizontalImage',src:panama34},





                           ]}/>
  </div>

  </>

)}

export default PanamaCity;
