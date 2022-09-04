import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';
import huacachina23 from '../../assets/galleries/huacachina/huacachina23.jpg'
import huacachina15 from '../../assets/galleries/huacachina/huacachina15.jpg'
import huacachina14 from '../../assets/galleries/huacachina/huacachina14.jpg'
import huacachina22 from '../../assets/galleries/huacachina/huacachina22.jpg'
import huacachina5 from '../../assets/galleries/huacachina/huacachina5.jpg'
import huacachina2 from '../../assets/galleries/huacachina/huacachina2.jpg'
import huacachina3 from '../../assets/galleries/huacachina/huacachina3.jpg'
import huacachina4 from '../../assets/galleries/huacachina/huacachina4.jpg'
import huacachina8 from '../../assets/galleries/huacachina/huacachina8.jpg'
import huacachina10 from '../../assets/galleries/huacachina/huacachina10.jpg'

import huacachina13 from '../../assets/galleries/huacachina/huacachina13.jpg'
import huacachina20 from '../../assets/galleries/huacachina/huacachina20.jpg'
import huacachina18 from '../../assets/galleries/huacachina/huacachina18.jpg'
import huacachina1 from '../../assets/galleries/huacachina/huacachina1.jpg'
import huacachina12 from '../../assets/galleries/huacachina/huacachina12.jpg'

import huaraz19 from '../../assets/galleries/huaraz/huaraz19.jpg'
import arequipa1 from '../../assets/galleries/arequipa/arequipa1.jpg'
import sacredValley15 from '../../assets/galleries/sacredValley/sacredValley15.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const Huacachina = props => {

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
    <GalleryBody header ={{src:huacachina23, label:'Huacachina', subLabel:'Photo Gallery'}}
              nextTitle1={"Huaraz"}
              nextTitle2={'Arequipa'}
              nextTitle3={"The Sacred Valley"}
              nextPic1 ={huaraz19}
              nextPic2 ={arequipa1}
              nextPic3 ={sacredValley15}
              nextLink1= {'/huaraz'}
              nextLink2= {'/arequipa'}
              nextLink3= {'/sacredValley'}
              blurb ={[{type:'text',text:"Huacachina is a tiny village built around a desert oasis just outside of the city of Ica, Peru. This is one of those places that is so unique, you have to see for yourself. Aside from taking in the unreal views, we sand boarded, rode dune buggies, and hiked the dunes for sunrise and sunset. "},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[

                            {type:'diptych',src1:huacachina15,src2:huacachina14},
                            {type:'horizontalImage',src:huacachina22},
                            {type:'diptych',src1:huacachina5,src2:huacachina2},
                            {type:'diptych',src1:huacachina3,src2:huacachina4},

                            {type:'horizontalImage',src:huacachina8},
                            {type:'horizontalImage',src:huacachina10},
                            {type:'horizontalImage',src:huacachina13},
                            {type:'horizontalImage',src:huacachina20},
                            {type:'horizontalImage',src:huacachina18},
                            {type:'diptych',src1:huacachina1,src2:huacachina12},


                           ]}/>
  </div>

  </>

)}

export default Huacachina;
