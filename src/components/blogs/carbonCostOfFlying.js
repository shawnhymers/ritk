import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';
import cartagena12 from "../../assets/galleries/cartagena/cartagena12.jpg"
import quito6 from '../../assets/galleries/quito/Quito6.jpg'
import quito17 from '../../assets/galleries/quito/Quito17.jpg'
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const CarbonCostOfFlying = props => {

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
    <BlogBody header ={{src:'/planeWingHorizontal.jpg', label:'Carbon Cost of Flying'}}
              nextTitle1={'Carbon Cost of Flying'}
              nextTitle2={"Carbon Cost of Central America"}
              nextTitle3={"Carbon Cost of Colombia"}
              nextPic1 ={quito6}
              nextPic2 ={quito17}
              nextPic3 ={cartagena12}
              nextLink1= {'/carbonCostOfEcuador'}
              nextLink2= {'/carbonCostOfLatam'}
              nextLink3= {'/carbonCostOfColombia'}
              topBlurb={{type:'topBlurb',
                         updated:'June 2022',
                         content:[{type:'text',text:"Flying is amazing. You hop into a little metal tube, put on a movie or a podcast, and get launched at insane speeds and hurtle through the atmosphere and then land safely on the other side of the planet later that day. However, this speed and convenience comes at a cost to your carbon footprint."}]}}

              isMobile={isMobile}
              contentTest ={[{type:'header',text:"How much carbon does flying produce?"},
                             {type:'paragraph',text:"In short, flights are not great for the environment. For example, a round trip flight from LA to New York generates over 1,200 KG of Co2. A shorter round-trip flight between London to Paris generate 218 KG of Co2. To put these numbers in perspective, the global average carbon footprint for an entire year is 4,734 KG. Although some populations produce much more: The average for Europe is 7,832 KG, Oceania is 9, 526.5 KG, and North America is 11,770 KG."},

                             {type:'header',text:"Why does flying produce so much carbon?"},
                             {type:'paragraph',text:"The obvious contributor here is the fuel. Each flight consumes massive amounts of fuel which releases carbon directly into the atmosphere. On top of this, carbon is also released during the pre-production of that fuel, and more is released to move that fuel around to get it into the planes. Furthermore, there is a carbon cost associated with the building and maintaining the required airport infrastructure to support the aerospace industry. "},
                             {type:'paragraph',text:"Flights also produce a level of non Co2 radiative forcing, which is a fancy way of saying all the other stuff aviation does to increase the greenhouse effect. The contrails you can see sometimes trailing behind planes have a slight warming effect on the planet. The soot and water vapour deposited into the atmosphere during flight do as well. Interestingly, the nitrogen oxide produced during a flight warms the planet through ozone production and cools the planet through methane reduction. Long story short, when doing the calculations, all these indirect effects are summed up in what we call “non Co2 radiative forcing”."},

                             {type:'header',text:"How does this impact my travel plans?"},
                             {type:'paragraph',text:"When planning shorter vacations, the environmental impact of the flight is most travelers largest factor in their carbon footprint. Let’s take a look a hypothetical trip. If couple from Toronto want to spend a two-week vacation in Costa Rica, this would be the typical carbon footprint."},

                             {type:'listItem',text:"1.	Round trip flight from Toronto to San Jose."},
                             {type:'paragraph',text:"1, 200 KG"},
                             {type:'listItem',text:"2.	14 days of eating a balanced diet (a mix of meat, vegetarian, and vegan foods)."},
                             {type:'paragraph',text:"143 KG"},
                             {type:'listItem',text:"3.	300 KM driven in their rented 2017 Rav 4."},
                             {type:'paragraph',text:"35.5 KG"},
                             {type:'listItem',text:"4.	13 nights at a mid-sized hotel"},
                             {type:'paragraph',text:"100 KG"},

                             {type:'paragraph',text:"The total carbon footprint of their vacation is close to 1,500 KG. Over 80% of that cost was just the flight in and out. "},


                             {type:'header',text:"How is the carbon cost of flying calculated?"},
                             {type:'paragraph',text:"We calculate the carbon equivalent cost of a flight with this formula:"},
                             {type:'paragraph',text:"This formula considers the following 8 factors:"},
                             {type:'listItem',text:"1.	Carbon produced by fuel burnt during the flight"},
                             {type:'listItem',text:"2.	Carbon produced during fuel pre-production"},
                             {type:'listItem',text:"3.	Carbon cost of airport infrastructure "},
                             {type:'listItem',text:"4.	The number of seats"},
                             {type:'listItem',text:"5.	Average passenger load"},
                             {type:'listItem',text:"6.	Average cargo load"},
                             {type:'listItem',text:"7.	Non Co2 radiative forcing "},
                             {type:'listItem',text:"8.	The flight type (long or short haul)"},

                             {type:'paragraph',text:"If you’re interested in the nitty gritty, here is the breakdown of the variables: "},
                             {type:'listItem',text:"1.	x – Flight Distance (KM)"},
                             {type:'listItem',text:"2.	S – The average number of seats on board"},
                             {type:'listItem',text:"3.	PLF – Passenger load factor (a factor used to adjust for the fact that not all flights are entirely full)"},
                             {type:'listItem',text:"4.	CF – Cargo factor (a factor used to adjust for the average weight of cargo carried on passenger flights)"},
                             {type:'listItem',text:"5.	CW – Cabin class weighting factor"},
                             {type:'listItem',text:"6.	EF – Jet fuel emission factor"},
                             {type:'listItem',text:"7.	M – Non Co2 radiative effects multiplier"},
                             {type:'listItem',text:"8.	P – Emission factor for the pre-production of jet fuel."},
                             {type:'listItem',text:"9.	AF – Aircraft factor"},
                             {type:'listItem',text:"10.	A – Airport infrastructure emissions"},


                             {type:'paragraph',text:"The following numeric values are used for these parameters, considering a short haul flight to be a flight under 1500 KM and a long-haul flight to be over 2500 KM. For flight between these distances a linear interpolation is used for each parameter value."},
                             {type:'paragraph', text:"The last missing piece here is the actual flight distance. For the purpose of this formula, we approximate the distance of each flight using the co-ordinates of the two airports and the ‘Great Circle Distance’ between them. "},
                             {type:'paragraph',text:"The true flight distance between two airports is generally longer than the approximation given by the ‘Great Circle Distance’ method. This is due to air traffic control efficiency, unpredictable weather systems, and the occasional need for pilots to circle their destination before being cleared for landing. To account for this an extra 95 KM is added to all flights. It sounds arbitrary, but this is actually a standard we adopted from the European standard DIN EN 16258 (2012)."},
                           ]}/>
  </div>
  </>
)}

export default CarbonCostOfFlying;
