import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import ometepe7 from '../../assets/galleries/ometepe/ometepe7.jpg'
import ometepe13 from '../../assets/galleries/ometepe/ometepe13.jpg'
import ometepe11 from '../../assets/galleries/ometepe/ometepe11.jpg'
import ometepe12 from '../../assets/galleries/ometepe/ometepe12.jpg'
import ometepe5 from '../../assets/galleries/ometepe/ometepe5.jpg'
import ometepe4 from '../../assets/galleries/ometepe/ometepe4.jpg'
import ometepe6 from '../../assets/galleries/ometepe/ometepe6.jpg'
import ometepe10 from '../../assets/galleries/ometepe/ometepe10.jpg'
import ometepe1 from '../../assets/galleries/ometepe/ometepe1.jpg'
import ometepe2 from '../../assets/galleries/ometepe/ometepe2.jpg'
import ometepe3 from '../../assets/galleries/ometepe/ometepe3.jpg'
import ometepe8 from '../../assets/galleries/ometepe/ometepe8.jpg'
import ometepe9 from '../../assets/galleries/ometepe/ometepe9.jpg'
import panama28 from '../../assets/galleries/panama/panama28.jpg'
import costaRica11 from '../../assets/galleries/costaRica/costaRica11.jpg'
import granada2 from '../../assets/galleries/granada/granada2.jpg'


const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Ometepe = props => {

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
  <GalleryBody header ={{src:ometepe7, label:'Ometepe Island', subLabel:'Photo Gallery'}}

               nextTitle1={"Panama City"}
               nextTitle2={'Costa Rica'}
               nextTitle3={"Granada"}
               nextPic1 ={panama28}
               nextPic2 ={costaRica11}
               nextPic3 ={granada2}
               nextLink1= {'/panamaCity'}
               nextLink2= {'/costaRica'}
               nextLink3= {'/granada'}

            blurb ={[{type:'text',text:"Ometepe Island, Nicaragua is an island in lake Nicaragua famous for being the largest on fresh water in the world and for its two volcanoes: Concepcion and Maderas. We swam in Ojo De Agua, rented scooters, and visited beaches with unbeatable views of volcanoes."}]}
            updated={'December 2021'}
            isMobile={isMobile}
            contentTest ={[

                           {type:'horizontalImage',src:ometepe13},
                           {type:'diptych',src1:ometepe11,src2:ometepe12},
                           {type:'horizontalImage',src:ometepe5},
                           {type:'horizontalImage',src:ometepe4},
                           {type:'horizontalImage',src:ometepe6},
                           {type:'horizontalImage',src:ometepe10},
                           {type:'diptych',src1:ometepe1,src2:ometepe2},
                           {type:'horizontalImage',src:ometepe3},
                           {type:'diptych',src1:ometepe8,src2:ometepe9},
                           {type:'horizontalImage',src:ometepe7}
                         ]}/>
                         </div>
  </>
)}

export default Ometepe;
