import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';
import sacredValley17 from '../../assets/galleries/sacredValley/sacredValley17.jpg'
import sacredValley8 from '../../assets/galleries/sacredValley/sacredValley8.jpg'
import sacredValley13 from '../../assets/galleries/sacredValley/sacredValley13.jpg'
import sacredValley2 from '../../assets/galleries/sacredValley/sacredValley2.jpg'
import sacredValley10 from '../../assets/galleries/sacredValley/sacredValley10.jpg'
import sacredValley7 from '../../assets/galleries/sacredValley/sacredValley7.jpg'
import sacredValley6 from '../../assets/galleries/sacredValley/sacredValley6.jpg'
import sacredValley5 from '../../assets/galleries/sacredValley/sacredValley5.jpg'
import sacredValley12 from '../../assets/galleries/sacredValley/sacredValley12.jpg'
import sacredValley23 from '../../assets/galleries/sacredValley/sacredValley23.jpg'
import sacredValley1 from '../../assets/galleries/sacredValley/sacredValley1.jpg'
import sacredValley24 from '../../assets/galleries/sacredValley/sacredValley24.jpg'
import sacredValley27 from '../../assets/galleries/sacredValley/sacredValley27.jpg'
import sacredValley25 from '../../assets/galleries/sacredValley/sacredValley25.jpg'
import sacredValley28 from '../../assets/galleries/sacredValley/sacredValley28.jpg'
import sacredValley29 from '../../assets/galleries/sacredValley/sacredValley29.jpg'
import sacredValley26 from '../../assets/galleries/sacredValley/sacredValley26.jpg'
import sacredValley21 from '../../assets/galleries/sacredValley/sacredValley21.jpg'
import sacredValley22 from '../../assets/galleries/sacredValley/sacredValley22.jpg'
import sacredValley14 from '../../assets/galleries/sacredValley/sacredValley14.jpg'
import sacredValley20 from '../../assets/galleries/sacredValley/sacredValley20.jpg'
import sacredValley19 from '../../assets/galleries/sacredValley/sacredValley19.jpg'
import sacredValley18 from '../../assets/galleries/sacredValley/sacredValley18.jpg'




const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const SacredValley = props => {

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
    <GalleryBody header ={{src:sacredValley17, label:'Sacred Valley', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"The Sacred Valley is a famous region in Peru’s Andean highlands that stretches over 60 square kilometers. Its fertile land once formed the center of Incan civilization. Today, the Sacred Valley is known for small villages, Incan ruins, and of course the main attraction: Machu Picchu. We visited the Sacred Valley as a part of a group tour and were amazed with what we saw. Visiting Machu Picchu and the other Incan sites was a really special experience, and even during the bus and train rides between locations we were surrounded by incredible mountains and rugged scenery along the way."},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[


                            {type:'diptych',src1:sacredValley8,src2:sacredValley13},
                            {type:'diptych',src1:sacredValley2,src2:sacredValley10},
                            {type:'horizontalImage',src:sacredValley7},
                            {type:'diptych',src1:sacredValley6,src2:sacredValley5},
                            {type:'horizontalImage',src:sacredValley12},
                            {type:'horizontalImage',src:sacredValley23},
                            {type:'horizontalImage',src:sacredValley1},
                            {type:'horizontalImage',src:sacredValley24},
                            {type:'diptych',src1:sacredValley27,src2:sacredValley25},
                            {type:'diptych',src1:sacredValley28,src2:sacredValley29},
                            {type:'horizontalImage',src:sacredValley26},
                            {type:'horizontalImage',src:sacredValley21},

                            {type:'diptych',src1:sacredValley22,src2:sacredValley14},
                            {type:'diptych',src1:sacredValley20,src2:sacredValley19},
                            {type:'horizontalImage',src:sacredValley18},





                           ]}/>
  </div>

  </>

)}

export default SacredValley;
