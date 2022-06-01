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
    <BlogBody header ={{src:'QuitoGallery/quito26.jpg', label:'Carbon Cost of Equador'}}
              blurb ={"Here is a breakdown of our carbon footprint of 21 days of travelling Equador."}
              updated={'May 2022'}
              isMobile={isMobile}
              contentTest ={[{type:'header',text:"Carbon Footprint For Equador"},
                              {type:'horizontalImage',src:'CarbonCostCharts/equadorCost.png'},
                              {type:'listItem',text:"Total Footprint "},
                                {type:'footprintLine',footprint:'354',unit:'KG Co2',centered:true},
                              {type:'footprintComparison',footprintPerDay:'16.9'},


                             {type:'header',text:"Flights"},
                             {type:'listItem',text:"1) Armenia to Quito"},
                              {type:'footprintLine',footprint:'145.6',unit:'KG Co2'},

                             {type:'header',text:"Other Transport"},
                             {type:'listItem',text:"1) Bus from Quito to Tena (195 KM) "},
                              {type:'footprintLine',footprint:'3.5',unit:'KG Co2'},
                             {type:'listItem',text:"2) Bus from Tena to Banos  (138 KM) "},
                              {type:'footprintLine',footprint:'2.5',unit:'KG Co2'},
                             {type:'listItem',text:"3) Bus from Banos to Cuenca  (330 KM) "},
                              {type:'footprintLine',footprint:'5.9',unit:'KG Co2'},

                             {type:'header',text:"Food"},
                             {type:'listItem',text:"21 Days of a Vegan Diet "},
                             {type:'footprintLine',footprint:'44.1',unit:'KG Co2'},

                             {type:'header',text:"Accomodation"},
                             {type:'listItem',text:"20 Nights -- Private Rooms in Small Hostels"},
                             {type:'footprintLine',footprint:'132.4',unit:'KG Co2'},

                             {type:'header',text:"Additional Costs"},
                             {type:'listItem',text:"Day Trips / Ubers / Public Transport"},
                            {type:'footprintLine',footprint:'20',unit:'KG Co2'},

                             {type:'header',text:"Overview"},
                             {type:'horizontalImage',src:'CarbonCostCharts/equadorCost.png'},
                             {type:'listItem',text:"Total Footprint "},
                               {type:'footprintLine',footprint:'354',unit:'KG Co2',centered:true},
                             {type:'footprintComparison',footprintPerDay:'16.9'},
                           ]}/>
  </div>
  </>
)}

export default CarbonCostOfEcuador;
