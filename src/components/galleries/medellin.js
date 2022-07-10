import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import medellin11 from '../../assets/galleries/medellin/Medellin11.jpg'
import medellin7 from '../../assets/galleries/medellin/Medellin7.jpg'
import medellin6 from '../../assets/galleries/medellin/Medellin6.jpg'
import medellin2 from '../../assets/galleries/medellin/Medellin2.jpg'
import medellin8 from '../../assets/galleries/medellin/Medellin8.jpg'
import medellin5 from '../../assets/galleries/medellin/Medellin5.jpg'
import medellin10 from '../../assets/galleries/medellin/Medellin10.jpg'
import medellin14 from '../../assets/galleries/medellin/Medellin14.jpg'
import medellin21 from '../../assets/galleries/medellin/Medellin21.jpg'
import medellin19 from '../../assets/galleries/medellin/Medellin19.jpg'
import medellin15 from '../../assets/galleries/medellin/Medellin15.jpg'
import medellin18 from '../../assets/galleries/medellin/Medellin18.jpg'
import medellin17 from '../../assets/galleries/medellin/Medellin17.jpg'
import medellin20 from '../../assets/galleries/medellin/Medellin20.jpg'


const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Medellin = props => {

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
      <GalleryBody header ={{src:medellin11, label:'Medellin', subLabel:'Photo Gallery'}}
                blurb ={[{type:'text',text:"Medellín, Colombia is located in the Aburrá Valley, which is a central region of the Andes Mountains. It is one of the largest cities in the country and is nicknamed the “City of Eternal Spring” for its temperate weather. We stayed in Medellín for two weeks, which is long enough to see most of the city's top sites, but we could have stayed much longer. It is an incredibly livable city with an indescribable energy. You can read more about our       experience"},
                         {type:'link', text:'here',link:"/InTheKnowMedellin"}]}
                updated={'December 2021'}
                isMobile={isMobile}
                contentTest ={[

                               {type:'horizontalImage',src:medellin11},
                               {type:'diptych',src1:medellin7,src2:medellin6},
                               {type:'diptych',src1:medellin2,src2:medellin8},
                               {type:'horizontalImage',src:medellin5},
                               {type:'horizontalImage',src:medellin10},
                               {type:'horizontalImage',src:medellin14},
                               {type:'diptych',src1:medellin21,src2:medellin19},
                               {type:'horizontalImage',src:medellin15},
                               {type:'diptych',src1:medellin18,src2:medellin17},
                               {type:'horizontalImage',src:medellin20},

                             ]}/>
    </div>

  </>

)}

export default Medellin;
