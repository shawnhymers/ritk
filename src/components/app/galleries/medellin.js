import React from 'react';
import GalleryHeader from "../elements/galleryHeader";
import GalleryBody from "../../standardComponents/galleryBody";
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
      <GalleryBody header ={{src:'MedellinGallery/medellin11.jpg', label:'Medellin'}}
                blurb ={"Medellin Blurb"}
                updated={'December 2021'}
                isMobile={isMobile}
                contentTest ={[
                               {type:'header',text:"Medellin Title"},
                               {type:'horizontalImage',src:'MedellinGallery/medellin11.jpg'},
                               {type:'diptych',src1:'MedellinGallery/medellin7.jpg',src2:'MedellinGallery/medellin6.jpg'},
                               {type:'diptych',src1:'MedellinGallery/medellin2.jpg',src2:'MedellinGallery/medellin8.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/medellin5.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/medellin10.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/medellin14.jpg'},
                               {type:'diptych',src1:'MedellinGallery/medellin21.jpg',src2:'MedellinGallery/medellin19.jpg'},


                               {type:'horizontalImage',src:'MedellinGallery/medellin15.jpg'},
                               {type:'diptych',src1:'MedellinGallery/medellin18.jpg',src2:'MedellinGallery/medellin17.jpg'},
                               {type:'horizontalImage',src:'MedellinGallery/medellin20.jpg'},

                             ]}/>
    </div>

  </>

)}

export default Medellin;
