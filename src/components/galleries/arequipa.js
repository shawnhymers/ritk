import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Arequipa = props => {

  const[isMobile, setIsMobile]=useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    updateDimensions()
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
    <GalleryBody header ={{src:'ArequipaGallery/Arequipa6.jpg', label:'Arequipa', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Arequipa, Peru is a 14th century colonial city surrounded by three volcanoes. Its picturesque historic district consists of buildings made from mostly white and pink volcanic rock and is home to the charming Plaza de Armas. Arequipa is an amazing destination in its own right, but is also a popular destination for those looking to explore the nearby Colca Canyon. We stayed in Arequipa for about a week and a half. Although that was plenty of time to enjoy the typical sights and take part in the popular tours, we could have stayed for a lot longer since it’s so livable. It is a charming city and the weather when we visited in June was perfect."},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[
                            {type:'header',text:"Arequipa"},

                            {type:'diptych',src1:'ArequipaGallery/Arequipa12.jpg',src2:'ArequipaGallery/Arequipa11.jpg'},
                            {type:'diptych',src1:'ArequipaGallery/Arequipa18.jpg',src2:'ArequipaGallery/Arequipa17.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa21.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/Arequipa7.jpg',src2:'ArequipaGallery/Arequipa16.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa15.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/Arequipa22.jpg',src2:'ArequipaGallery/Arequipa14.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa35.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/Arequipa34.jpg',src2:'ArequipaGallery/Arequipa36.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa23.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/Arequipa37.jpg',src2:'ArequipaGallery/Arequipa24.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa30.jpg'},

                            {type:'diptych',src1:'ArequipaGallery/Arequipa28.jpg',src2:'ArequipaGallery/Arequipa26.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa29.jpg'},

                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa25.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa31.jpg'},
                            {type:'horizontalImage',src:'ArequipaGallery/Arequipa32.jpg'},




                           ]}/>
  </div>

  </>

)}

export default Arequipa;
