import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/mobileHeader";
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Huacachina = props => {

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
    <GalleryBody header ={{src:'HuacachinaGallery/huacachina23.jpg', label:'Huacachina', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Huacachina is a tiny village built around a desert oasis just outside of the city of Ica, Peru. The lagoon originally was a natural feature created by seepage from an underwater aquifer. Unfortunately, due to well-drilling, the naturally occurring water is decreasing and now the tourist site is being artificially supported. Regardless, it is a very magical place. We stayed for 2 nights which we thought was a great amount of time. Some people come for just a day trip but we think it is worth the extra time to experience everything Huacachina has to offer, such as sunrise/sunset on the dunes, sand boarding, and ripping around on the dune buggies. We had a blast the whole time and kept being blown away by the beauty of the oasis and surrounding desert. "},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[

                            {type:'diptych',src1:'HuacachinaGallery/huacachina15.jpg',src2:'HuacachinaGallery/huacachina14.jpg'},
                            {type:'horizontalImage',src:'HuacachinaGallery/huacachina22.jpg'},
                            {type:'diptych',src1:'HuacachinaGallery/huacachina5.jpg',src2:'HuacachinaGallery/huacachina2.jpg'},
                            {type:'diptych',src1:'HuacachinaGallery/huacachina3.jpg',src2:'HuacachinaGallery/huacachina4.jpg'},

                            {type:'horizontalImage',src:'HuacachinaGallery/huacachina8.jpg'},
                            {type:'horizontalImage',src:'HuacachinaGallery/huacachina10.jpg'},
                            {type:'horizontalImage',src:'HuacachinaGallery/huacachina13.jpg'},
                            {type:'horizontalImage',src:'HuacachinaGallery/huacachina20.jpg'},
                            {type:'horizontalImage',src:'HuacachinaGallery/huacachina18.jpg'},
                            {type:'diptych',src1:'HuacachinaGallery/huacachina1.jpg',src2:'HuacachinaGallery/huacachina12.jpg'},


                           ]}/>
  </div>

  </>

)}

export default Huacachina;
