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
              blurb ={[{type:'text',text:"Huacachina is a tiny village built around a desert oasis just outside of the city of Ica, Peru. The lagoon originally was a natural feature created by seepage from an underwater aquifer. Unfortunately, due to well-drilling, the naturally occurring water is decreasing and now the tourist site is being artificially supported. Regardless, it is a very magical place. We stayed for 2 nights which we thought was a great amount of time. Some people come for just a day trip but we think it is worth the extra time to experience everything Huacachina has to offer, such as sunrise/sunset on the dunes, sand boarding, and ripping around on the dune buggies. We had a blast the whole time and kept being blown away by the beauty of the oasis and surrounding desert. "},
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
