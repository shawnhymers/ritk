import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

import arequipa6 from '../../assets/galleries/arequipa/arequipa6.jpg'
import arequipa12 from '../../assets/galleries/arequipa/arequipa12.jpg'
import arequipa11 from '../../assets/galleries/arequipa/arequipa11.jpg'
import arequipa18 from '../../assets/galleries/arequipa/arequipa18.jpg'
import arequipa17 from '../../assets/galleries/arequipa/arequipa17.jpg'
import arequipa21 from '../../assets/galleries/arequipa/arequipa21.jpg'
import arequipa7 from '../../assets/galleries/arequipa/arequipa7.jpg'
import arequipa16 from '../../assets/galleries/arequipa/arequipa16.jpg'
import arequipa15 from '../../assets/galleries/arequipa/arequipa15.jpg'
import arequipa22 from '../../assets/galleries/arequipa/arequipa22.jpg'
import arequipa14 from '../../assets/galleries/arequipa/arequipa14.jpg'
import arequipa35 from '../../assets/galleries/arequipa/arequipa35.jpg'
import arequipa34 from '../../assets/galleries/arequipa/arequipa34.jpg'
import arequipa36 from '../../assets/galleries/arequipa/arequipa36.jpg'
import arequipa23 from '../../assets/galleries/arequipa/arequipa23.jpg'
import arequipa37 from '../../assets/galleries/arequipa/arequipa37.jpg'
import arequipa24 from '../../assets/galleries/arequipa/arequipa24.jpg'
import arequipa30 from '../../assets/galleries/arequipa/arequipa30.jpg'
import arequipa28 from '../../assets/galleries/arequipa/arequipa28.jpg'
import arequipa26 from '../../assets/galleries/arequipa/arequipa26.jpg'
import arequipa29 from '../../assets/galleries/arequipa/arequipa29.jpg'
import arequipa25 from '../../assets/galleries/arequipa/arequipa25.jpg'
import arequipa31 from '../../assets/galleries/arequipa/arequipa31.jpg'
import arequipa32 from '../../assets/galleries/arequipa/arequipa32.jpg'
import huacachina15 from '../../assets/galleries/huacachina/huacachina15.jpg'
import sacredValley15 from '../../assets/galleries/sacredValley/sacredValley15.jpg'
import huaraz19 from '../../assets/galleries/huaraz/huaraz19.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const Arequipa = props => {

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
    <GalleryBody header ={{src:arequipa6, label:'Arequipa', subLabel:'Photo Gallery'}}

              nextTitle1={"Huaraz"}
              nextTitle2={'Huacachina'}
              nextTitle3={"The Sacred Valley"}
              nextPic1 ={huaraz19}
              nextPic2 ={huacachina15}
              nextPic3 ={sacredValley15}
              nextLink1= {'/huaraz'}
              nextLink2= {'/huacachina'}
              nextLink3= {'/sacredValley'}

              blurb ={[{type:'text',text:"Arequipa, Peru is a 14th century colonial city surrounded by three volcanoes. Its picturesque historic district consists of buildings made from mostly white volcanic rock and is home to the charming Plaza de Armas. It’s the gateway to the Colca Canyon, the world’s second deepest canyon and home to the largest flying bird in the world, the endangered Andean Condor. "},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[


                            {type:'diptych',src1:arequipa12,src2:arequipa11},
                            {type:'diptych',src1:arequipa18,src2:arequipa17},
                            {type:'horizontalImage',src:arequipa21},

                            {type:'diptych',src1:arequipa7,src2:arequipa16},
                            {type:'horizontalImage',src:arequipa15},

                            {type:'diptych',src1:arequipa22,src2:arequipa14},
                            {type:'horizontalImage',src:arequipa35},

                            {type:'diptych',src1:arequipa34,src2:arequipa36},
                            {type:'horizontalImage',src:arequipa23},

                            {type:'diptych',src1:arequipa37,src2:arequipa24},
                            {type:'horizontalImage',src:arequipa30},

                            {type:'diptych',src1:arequipa28,src2:arequipa26},
                            {type:'horizontalImage',src:arequipa29},

                            {type:'horizontalImage',src:arequipa25},
                            {type:'horizontalImage',src:arequipa31},
                            {type:'horizontalImage',src:arequipa32},




                           ]}/>
  </div>

  </>

)}

export default Arequipa;
