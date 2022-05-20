import React from 'react';
import BlogHeader from "../elements/blogHeader";
import BlogBody from "../../standardComponents/blogBody";
import  { useState,useEffect } from 'react';

const CarbonCostOfEcuador = props => {

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
    <BlogHeader isMobile={isMobile}/>
    <BlogBody header ={{src:'vancouverFood.jpg', label:'Carbon Cost of LATAM'}}
              blurb ={"Whether you're a vegan veteran, or just looking to expand your plant based options -- this guides got you covered."}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[{type:'paragraph',text:"I’m just going to come out and say it: Vancouver is the mecca of vegan food."},
                             {type:'diptych', src1:'VancouverFoodBlog/vancouverFood8.jpg',src2:'VancouverFoodBlog/vancouverFood7.jpg'},
                             {type:'header',text:"Flights"},
                             {type:'listItem',text:"1) Toronto To San Salvador"},
                             {type:'listItem',text:"2) San Salvador To Managua"},

                             {type:'header',text:"Other Transport"},
                             {type:'listItem',text:"1) "},

                             {type:'header',text:"Food"},
                             {type:'listItem',text:"1) "},

                             {type:'header',text:"Accomodation"},
                             {type:'listItem',text:"1) "},

                             {type:'header',text:"Overview"},
                             {type:'listItem',text:"1) "},
                           ]}/>
  </div>
  </>
)}

export default CarbonCostOfEcuador;
