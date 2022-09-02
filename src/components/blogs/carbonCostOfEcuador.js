import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';
import quito26 from '../../assets/galleries/quito/Quito26.jpg'

import quito17 from '../../assets/galleries/quito/Quito17.jpg'
import cartagena12 from "../../assets/galleries/cartagena/cartagena12.jpg"
import blog3 from "../../assets/blogPreview/blog3.jpg"
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const CarbonCostOfEcuador = props => {

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
      <MobileHeader page ={'blog'}/>
  :
      <DesktopHeader page ={'blog'}/>
  }
    <BlogBody header ={{src:quito26, label:'Carbon Cost of Ecuador'}}
              nextTitle1={'Carbon Cost of Flying'}
              nextTitle2={"Carbon Cost of Central America"}
              nextTitle3={"Carbon Cost of Colombia"}
              nextPic1 ={blog3}
              nextPic2 ={quito17}
              nextPic3 ={cartagena12}
              nextLink1= {'/carbonCostOfFlying'}
              nextLink2= {'/carbonCostOfLatam'}
              nextLink3= {'/carbonCostOfColombia'}
              topBlurb={{type:'topBlurb',
                         updated:'May 2022',
                         content:[{type:'text',text:"Here is a breakdown of our carbon footprint of 21 days of travelling Ecuador."}]}}

              isMobile={isMobile}
              contentTest ={[{type:'header',text:"Carbon Footprint For Ecuador"},
                              {type:'horizontalImage',src:'CarbonCostCharts/equadorCost.png'},
                              {type:'totalFootprint',text:"Total Footprint:"},
                                {type:'footprintLine',footprint:'354',unit:'KG Co2',centered:true},
                              {type:'footprintComparison',footprintPerDay:'16.9'},

                              {type:'paragraph',text:"Ecuador is a country that makes it easier to have a reduced carbon footprint. With 79% of its power coming from hydroelectricity, a yearlong growing season that allows for local production of many fruits and vegetables, vegan food options in every city, and a country small enough that bus travel is very doable, this has been one of the easiest countries to keep our carbon footprint equivalent or less than it would be back home. Embracing the local way of life, eating plant-based, and using shared transportation is the easiest way to be carbon conscious in Ecuador."},
                              {type:'paragraph',text:"Our biggest carbon cost was our flight to Quito from Colombia. We were rushing from one work commitment in Colombia to another in Ecuador, and there were several travel advisories warning to avoid the land border at the time. "},
                              {type:'paragraph',text:"Once in the country we were able to get around strictly via bus. We went from Quito to Tena, to Banos, to Cuenca. Each destination was well worth a few days exploring and breaking up the journey into so many stops meant that each bus was pretty short. "},
                              {type:'paragraph',text:"We found eating plant based was simple. In the major cities the grocery stores were stocked with plant-based alternatives meats and cheeses, and tofu was pretty easy to find. Also, the local markets throughout the country were always happy to make us a simple plate of rice, beans, potatoes, plantains, and veggies. Adding a little Ajii sauce made it amazing!"},
                              {type:'paragraph',text:"So far Ecuador has been our smallest footprints to date with an average of just 16.9 KG a day. Our target while travelling has been 41 KG a day, which is the Canadian average, so we were thrilled to come in under half of our target."},


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
                             {type:'totalFootprint',text:"Total Footprint "},
                               {type:'footprintLine',footprint:'354',unit:'KG Co2',centered:true},
                             {type:'footprintComparison',footprintPerDay:'16.9'},
                           ]}/>
  </div>
  </>
)}

export default CarbonCostOfEcuador;
