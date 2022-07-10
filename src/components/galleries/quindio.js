import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';
import quindio22 from '../../assets/galleries/quindio/Quindio22.jpg'
import quindio26 from '../../assets/galleries/quindio/Quindio26.jpg'
import quindio20 from '../../assets/galleries/quindio/Quindio20.jpg'
import quindio24 from '../../assets/galleries/quindio/Quindio24.jpg'
import quindio23 from '../../assets/galleries/quindio/Quindio23.jpg'
import quindio8 from '../../assets/galleries/quindio/Quindio8.jpg'
import quindio1 from '../../assets/galleries/quindio/Quindio1.jpg'
import quindio7 from '../../assets/galleries/quindio/Quindio7.jpg'
import quindio10 from '../../assets/galleries/quindio/Quindio10.jpg'
import quindio9 from '../../assets/galleries/quindio/Quindio9.jpg'
import quindio11 from '../../assets/galleries/quindio/Quindio11.jpg'
import quindio12 from '../../assets/galleries/quindio/Quindio12.jpg'
import quindio13 from '../../assets/galleries/quindio/Quindio13.jpg'
import quindio2 from '../../assets/galleries/quindio/Quindio2.jpg'
import quindio16 from '../../assets/galleries/quindio/Quindio16.jpg'
import quindio15 from '../../assets/galleries/quindio/Quindio15.jpg'
import quindio3 from '../../assets/galleries/quindio/Quindio3.jpg'
import quindio5 from '../../assets/galleries/quindio/Quindio5.jpg'
import quindio17 from '../../assets/galleries/quindio/Quindio17.jpg'


const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Quindio = props => {

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
    <GalleryBody header ={{src:quindio22, label:'Quindio', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Quindo, Colombia is a part of the “Coffee Triangle”, a part of the Colombian Paisa region in the rural area of Colombia famous for its moderate weather and impressive coffee plantations. It is also home to the famous Valle de Cocora, which is one of the beautiful places we’ve seen to date. We stayed near Filandia for a bit over a week and the entire time we felt like we were in a dream. The lush green rolling hills and countryside calmness was a lovely juxtaposition to our time in the busy Colombian cities."}]}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[

                            {type:'horizontalImage',src:quindio22},
                            {type:'horizontalImage',src:quindio26},
                            {type:'horizontalImage',src:quindio20},
                            {type:'diptych',src1:quindio24,src2:quindio23},
                            {type:'horizontalImage',src:quindio8},
                            {type:'diptych',src1:quindio1,src2:quindio7},
                            {type:'horizontalImage',src:quindio10},
                            {type:'horizontalImage',src:quindio9},
                            {type:'horizontalImage',src:quindio11},
                            {type:'horizontalImage',src:quindio12},
                            {type:'horizontalImage',src:quindio13},
                            {type:'horizontalImage',src:quindio2},
                            {type:'diptych',src1:quindio16,src2:quindio15},

                             {type:'horizontalImage',src:quindio3},
                             {type:'diptych',src1:quindio5,src2:quindio17},
                           ]}/>
  </div>

  </>

)}

export default Quindio;
