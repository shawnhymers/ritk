import React, {  lazy} from 'react';
import GalleryBody from "../sharedComponents/galleryComponents/galleryBody";
import  { useState,useEffect } from 'react';
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));
const PanamaCity = props => {

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
    <GalleryBody header ={{src:'/PanamaGallery/panama9.jpg', label:'Panama City', subLabel:'Photo Gallery'}}
              blurb ={[{type:'text',text:"Panama City, Panama is a huge and modern city that is the country's capital. Although the city spreads over a huge area, the small, cobblestoned historic district is where most tourists find themselves spending most of their time. We were only in the city for 6 nights as an extended layover during our flight from Costa Rica to Colombia. The historic district was nice and the canal was awesome in the truest sense of the word, but overall we found the vibe to be a bit standoffish and we never felt too comfortable. Of course, we were visiting recently after the city was coming out of a very strict pandemic lockdown, so businesses and people’s mental health were not at their best, which may have contributed to the uneasy vibe we were picking up."},
                       {type:'link',text:'',link:'/InTheKnowQuito'}]}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[


                            {type:'horizontalImage',src:'/PanamaGallery/panama1.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama14.jpg',src2:'/PanamaGallery/panama15.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama2.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama7.jpg',src2:'/PanamaGallery/panama8.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama12.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama13.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama5.jpg',src2:'/PanamaGallery/panama6.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama18.jpg',src2:'/PanamaGallery/panama19.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama16.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama20.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama10.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama24.jpg',src2:'/PanamaGallery/panama23.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama21.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama25.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama26.jpg',src2:'/PanamaGallery/panama28.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama27.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama33.jpg',src2:'/PanamaGallery/panama30.jpg'},
                            {type:'diptych',src1:'/PanamaGallery/panama31.jpg',src2:'/PanamaGallery/panama32.jpg'},
                            {type:'horizontalImage',src:'/PanamaGallery/panama34.jpg'},





                           ]}/>
  </div>

  </>

)}

export default PanamaCity;
