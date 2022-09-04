import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import granada10 from '../../assets/galleries/granada/granada10.jpg'
import granada6 from '../../assets/galleries/granada/granada6.jpg'
import granada4 from '../../assets/galleries/granada/granada4.jpg'
import granada5 from '../../assets/galleries/granada/granada5.jpg'
import granada3 from '../../assets/galleries/granada/granada3.jpg'
import granada2 from '../../assets/galleries/granada/granada2.jpg'
import granada1 from '../../assets/galleries/granada/granada1.jpg'
import granada11 from '../../assets/galleries/granada/granada11.jpg'
import granada13 from '../../assets/galleries/granada/granada13.jpg'
import granada14 from '../../assets/galleries/granada/granada14.jpg'
import granada12 from '../../assets/galleries/granada/granada12.jpg'
import granada9 from '../../assets/galleries/granada/granada9.jpg'
import granada7 from '../../assets/galleries/granada/granada7.jpg'
import granada8 from '../../assets/galleries/granada/granada8.jpg'
import panama28 from '../../assets/galleries/panama/panama28.jpg'
import costaRica11 from '../../assets/galleries/costaRica/costaRica11.jpg'
import ometepe1 from '../../assets/galleries/ometepe/ometepe1.jpg'
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const Granada = props => {

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
  <GalleryBody header ={{src:granada10, label:'Granada', subLabel:'Photo Gallery'}}

               nextTitle1={"Panama City"}
               nextTitle2={'Costa Rica'}
               nextTitle3={"Ometepe Island"}
               nextPic1 ={panama28}
               nextPic2 ={costaRica11}
               nextPic3 ={ometepe1}
               nextLink1= {'/panamaCity'}
               nextLink2= {'/costaRica'}
               nextLink3= {'/ometepe'}
            blurb ={[{type:'text',text:"Granada, Nicaragua is a beautiful colonial city on the coast of lake Nicaragua and is the oldest colonial city in Latin America. Visiting Masaya Volcano, climbing the city’s bell tower at sunset, and shopping at the hectic and colourful local market were highlights for us."}]}
            updated={'February 2022'}
            isMobile={isMobile}
            contentTest ={[

                           {type:'horizontalImage',src:granada6},
                           {type:'diptych',src1:granada4,src2:granada5},
                           {type:'horizontalImage',src:granada3},
                           {type:'diptych',src1:granada2,src2:granada1},
                           {type:'horizontalImage',src:granada11},
                           {type:'diptych',src1:granada14,src2:granada13},
                           {type:'horizontalImage',src:granada12},
                           {type:'horizontalImage',src:granada9},
                           {type:'diptych',src1:granada7,src2:granada8},
                           {type:'horizontalImage',src:granada10}
                         ]}/>
</div>
  </>
)}

export default Granada;
//
// {type:'header',text:"Granada Title"},
// {type:'listItem',text:"3) Beet Box"},
// {type:'paragraph', text:''},
