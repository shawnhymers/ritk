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
                blurb ={[{type:'text',text:"Medellín, Colombia is located in the Aburrá Valley, which is a central region of the Andes Mountains. It is one of the largest cities in the country and is nicknamed the “City of Eternal Spring” for its temperate weather. We stayed in Medellín for two weeks, which is long enough to see most of the city's top sites, but we could have stayed much longer. It is an incredibly livable city with an indescribable energy. You can read more about our       experience"},
                         {type:'link', text:'here',link:"/InTheKnowMedellin"}]}
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
