import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

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
    <GalleryBody header ={{src:'ArequipaGallery/arequipa6.jpg', label:'Arequipa', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Arequipa, Peru is a 14th century colonial city surrounded by three volcanoes. Its picturesque historic district consists of buildings made from mostly white and pink volcanic rock and is home to the charming Plaza de Armas. Arequipa is an amazing destination in its own right, but is also a popular destination for those looking to explore the nearby Colca Canyon. We stayed in Arequipa for about a week and a half. Although that was plenty of time to enjoy the typical sights and take part in the popular tours, we could have stayed for a lot longer since it’s so livable. It is a charming city and the weather when we visited in June was perfect."},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[


                            {type:'diptych',src1:'ArequipaGallery/arequipa12.jpg',src2:'ArequipaGallery/arequipa11.jpg'},
                            {type:'diptych',src1:'ArequipaGallery/arequipa18.jpg',src2:'ArequipaGallery/arequipa17.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa21.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/arequipa7.jpg',src2:'ArequipaGallery/arequipa16.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa15.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/arequipa22.jpg',src2:'ArequipaGallery/arequipa14.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa35.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/arequipa34.jpg',src2:'ArequipaGallery/arequipa36.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa23.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/arequipa37.jpg',src2:'ArequipaGallery/arequipa24.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa30.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/arequipa28.jpg',src2:'ArequipaGallery/arequipa26.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa29.jpg'},

                            {type:'horizontalImage',src:'ArequipaGallery/arequipa25.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa31.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/arequipa32.jpg'},




                           ]}/>
  </div>

  </>

)}

export default Arequipa;
