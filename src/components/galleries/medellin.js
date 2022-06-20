import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../standardComponents/galleryBody";
import  { useState,useEffect } from 'react';

const Medellin = props => {

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
      <GalleryHeader isMobile={isMobile}/>
      <GalleryBody header ={{src:'MedellinGallery/Medellin11.jpg', label:'Medellin'}}
                blurb ={"Medellin Blurb"}
                updated={'December 2021'}
                isMobile={isMobile}
                contentTest ={[
                               {type:'header',text:"Medellin Title"},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin11.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin7.jpg',src2:'MedellinGallery/Medellin6.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin2.jpg',src2:'MedellinGallery/Medellin8.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin5.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin10.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin14.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin21.jpg',src2:'MedellinGallery/Medellin19.jpg'},


                               {type:'horizontalImage',src:'MedellinGallery/Medellin15.jpg'},
                               {type:'diptych',src1:'MedellinGallery/Medellin18.jpg',src2:'MedellinGallery/Medellin17.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/Medellin20.jpg'},

                             ]}/>
    </div>

  </>

)}

export default Medellin;
