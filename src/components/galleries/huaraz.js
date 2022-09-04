import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import huaraz3 from '../../assets/galleries/huaraz/huaraz3.jpg'
import huaraz10 from '../../assets/galleries/huaraz/huaraz10.jpg'
import huaraz9 from '../../assets/galleries/huaraz/huaraz9.jpg'
import huaraz7 from '../../assets/galleries/huaraz/huaraz7.jpg'
import huaraz19 from '../../assets/galleries/huaraz/huaraz19.jpg'
import huaraz17 from '../../assets/galleries/huaraz/huaraz17.jpg'
import huaraz18 from '../../assets/galleries/huaraz/huaraz18.jpg'
import huaraz14 from '../../assets/galleries/huaraz/huaraz14.jpg'
import huaraz21 from '../../assets/galleries/huaraz/huaraz21.jpg'
import huaraz12 from '../../assets/galleries/huaraz/huaraz12.jpg'
import huaraz5 from '../../assets/galleries/huaraz/huaraz5.jpg'
import huaraz6 from '../../assets/galleries/huaraz/huaraz6.jpg'
import huaraz4 from '../../assets/galleries/huaraz/huaraz4.jpg'
import huaraz2 from '../../assets/galleries/huaraz/huaraz2.jpg'

import huacachina12 from '../../assets/galleries/huacachina/huacachina12.jpg'
import arequipa1 from '../../assets/galleries/arequipa/arequipa1.jpg'
import sacredValley15 from '../../assets/galleries/sacredValley/sacredValley15.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const Huaraz = props => {

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
      <GalleryBody header ={{src:huaraz3, label:'Huaraz', subLabel:'Photo Gallery'}}
                  nextTitle1={"Huacachina"}
                  nextTitle2={'Arequipa'}
                  nextTitle3={"The Sacred Valley"}
                  nextPic1 ={huacachina12}
                  nextPic2 ={arequipa1}
                  nextPic3 ={sacredValley15}
                  nextLink1= {'/huacachina'}
                  nextLink2= {'/arequipa'}
                  nextLink3= {'/sacredValley'}
                blurb ={[{type:'text',text:"Huaraz is Peru’s hiking capital and gateway to the Peruvian Andes’ Cordillera Blanca range. The hikes accessible from this town feature some of the best views we’ve ever seen. The hikes pictured below are Laguna Parón, Laguna Churup, and our favourite, Laguna 69. "},
                         {type:'link', text:'',link:"/InTheKnowMedellin"}]}
                updated={'July 2022'}
                isMobile={isMobile}
                contentTest ={[
                               {type:'diptych',src1:huaraz10,src2:huaraz9},
                               {type:'horizontalImage',src:huaraz7},
                               {type:'diptych',src1:huaraz19,src2:huaraz17},
                               {type:'horizontalImage',src:huaraz18},
                               {type:'horizontalImage',src:huaraz14},
                               {type:'horizontalImage',src:huaraz21},
                               {type:'horizontalImage',src:huaraz12},
                               {type:'horizontalImage',src:huaraz5},
                               {type:'horizontalImage',src:huaraz6},
                               {type:'diptych',src1:huaraz4,src2:huaraz2},
                             ]}/>
    </div>

  </>

)}

export default Huaraz;
