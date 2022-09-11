import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import guatape9 from '../../assets/galleries/guatape/Guatape9.jpg'
import guatape1 from '../../assets/galleries/guatape/Guatape1.jpg'
import guatape18 from '../../assets/galleries/guatape/Guatape18.jpg'
import guatape22 from '../../assets/galleries/guatape/Guatape22.jpg'
import guatape13 from '../../assets/galleries/guatape/Guatape13.jpg'
import guatape14 from '../../assets/galleries/guatape/Guatape14.jpg'
import guatape20 from '../../assets/galleries/guatape/Guatape20.jpg'
import guatape15 from '../../assets/galleries/guatape/Guatape15.jpg'
import guatape3 from '../../assets/galleries/guatape/Guatape3.jpg'
import guatape5 from '../../assets/galleries/guatape/Guatape5.jpg'
import guatape17 from '../../assets/galleries/guatape/Guatape17.jpg'
import guatape6 from '../../assets/galleries/guatape/Guatape6.jpg'
import guatape23 from '../../assets/galleries/guatape/Guatape23.jpg'
import guatape24 from '../../assets/galleries/guatape/Guatape24.jpg'
import guatape16 from '../../assets/galleries/guatape/Guatape16.jpg'
import guatape25 from '../../assets/galleries/guatape/Guatape25.jpg'
import guatape4 from '../../assets/galleries/guatape/Guatape4.jpg'


import quito17 from '../../assets/galleries/quito/Quito17.jpg'
import quindio23 from '../../assets/galleries/quindio/Quindio23.jpg'
import medellin13 from '../../assets/galleries/medellin/Medellin13.jpg'

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
      <GalleryBody header ={{src:guatape9, label:'Guatape', subLabel:'Photo Gallery'}}
                   // TEMP:
                   nextTitle1={"Quito"}
                   nextTitle2={'Quindio'}
                   nextTitle3={"Medellin"}
                   nextPic1 ={quito17}
                   nextPic2 ={quindio23}
                   nextPic3 ={medellin13}
                   nextLink1= {'/quito'}
                   nextLink2= {'/quindio'}
                   nextLink3= {'/medellin'}

                blurb ={[{type:'text',text:"Guatape, Colombia is a small Andean resort town a few hours away from Medellín, and is home to Piedra del Peñol, a giant granite rock towering 220 meters high. This town experiences a high amount of tourism, but we felt like it retained a lot more of its charm than other similarly touristy towns. You can read more about our experience "},
                         {type:'link',text:' here.',link:"/InTheKnowGuatape"}]}
                updated={'April 2022'}
                isMobile={isMobile}
                contentTest ={[

                               {type:'horizontalImage',src:guatape1},
                               {type:'diptych',src1:guatape18,src2:guatape22},
                               {type:'horizontalImage',src:guatape13},
                               {type:'diptych',src1:guatape14,src2:guatape20},
                               {type:'horizontalImage',src:guatape15},
                               {type:'diptych',src1:guatape3,src2:guatape5},
                               {type:'horizontalImage',src:guatape17},
                               {type:'diptych',src1:guatape6,src2:guatape24},
                               {type:'horizontalImage',src:guatape16},
                               {type:'diptych',src1:guatape23,src2:guatape25},
                               {type:'horizontalImage',src:guatape4},

                             ]}/>
    </div>

  </>

)}

export default Guatape;
