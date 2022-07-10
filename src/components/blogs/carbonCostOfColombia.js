import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';
import medellin11 from '../../assets/galleries/medellin/Medellin11.jpg'
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const CarbonCostOfColombia = props => {

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
    <BlogBody header ={{src:medellin11, label:'Carbon Cost of Colombia'}}
              blurb ={"Here is a breakdown of our carbon footprint of 39 days of travelling Colombia."}
              updated={'May 2022'}
              isMobile={isMobile}
              contentTest ={[{type:'header',text:"Carbon Footprint For Colombia"},
                              {type:'horizontalImage',src:'CarbonCostCharts/colombiaCost.png'},
                              {type:'listItem',text:"Total Footprint "},
                                {type:'footprintLine',footprint:'713.2',unit:'KG Co2',centered:true},
                              {type:'footprintComparison',footprintPerDay:'18.3'},
                            {type:'paragraph',text:'Colombia was even easier than our time in Central America when it comes to our carbon footprint. Firstly, we headed to Colombia from Panama City which is a hop skip and a jump compared to if we had returned home and then flew in again from Canada. This is another one of our core take aways for how to reduce your carbon footprint: traveling sequentially, i.e. checking out adjacent countries instead of zig zagging around the globe. Secondly, the vegan food in Colombia (excluding Cartagena) was INCREDIBLE. We had our pick of fully vegan restaurants, and others made vegan options very easily available. We even found tofu and vegan cheese at the supermarkets in Medellin and Bogota.'},
                            {type:'paragraph',text:'Unfortunately, we ended up taking 3 different flights in just 39 days. This was our biggest failure as sustainable travelers during this portion of our trip. The first flight was somewhat unavoidable. Between Panama and Colombia there is the Darien Gap, which is a remote, road-less swath of jungle that is impossible to cross by land. The only non-flight option was a 5-day boat trip which included 3 days on the open ocean. For those looking for an environmentally friendly transportation option it looks like quite the adventure. We weren’t sure if we were up for such an adventure, and our work schedules didn’t line up with the 5 days on the ocean, so we opted for a short flight. '},
                            {type:'paragraph',text:'Our next flight was between Cartagena and Medellin. At this point we were still within our first 100 days of travel and were keenly aware of Colombia’s notorious past. We could have taken a 639 KM bus instead of flying, but with the many stops on the way and all our camera equipment, laptops, hard drives, etc. we thought the bus might be a bit too risky. A few anecdotal stories of being robbed at gun point from some friends we made at our hostel in Cartagena cemented this fear and we booked a flight. After spending a bit more time in Colombia, we started to feel much safer and ended up taking a bus instead of a flight from Medellin to Bogota. '},
                            {type:'paragraph',text:'Our third flight was from Bogota to Armenia. This also could have been a long bus ride, but heavy rains in the mountains came with landslide warnings. We had some work obligations to meet in Quindío, so we didn’t want to risk the delay and chose to fly. '},
                            {type:'paragraph',text:'Our motto is to be mindful and to strive to improve but we do not expect perfection from ourselves. We could have stayed in dorms and taken more buses, but we are always weighing our safety, our comfort, and our environmental impact in order to guide our decisions. '},







                             {type:'header',text:"Flights"},
                             {type:'listItem',text:"1) Panama City to Cartagena"},
                              {type:'footprintLine',footprint:'127.9',unit:'KG Co2'},
                             {type:'listItem',text:"2) Cartagena to Medellin"},
                              {type:'footprintLine',footprint:'130.3',unit:'KG Co2'},
                             {type:'listItem',text:"3) Bogota to Armenia"},
                              {type:'footprintLine',footprint:'92.3',unit:'KG Co2'},

                             {type:'header',text:"Other Transport"},
                              {type:'listItem',text:"1) Round Trip Bus from Medellin to Guatape"},
                                {type:'footprintLine',footprint:'2.9',unit:'KG Co2'},
                              {type:'listItem',text:"2) Bus from Medellin to Bogota"},
                                {type:'footprintLine',footprint:'7.4',unit:'KG Co2'},

                             {type:'header',text:"Food"},
                             {type:'listItem',text:"39 days of a vegan diet"},
                             {type:'footprintLine',footprint:'79.8',unit:'KG Co2'},


                             {type:'header',text:"Accomodation"},
                             {type:'listItem',text:"38 Nights -- Private Rooms at Small Hostels"},
                             {type:'footprintLine',footprint:'251.5',unit:'KG Co2'},

                             {type:'header',text:"Additional Costs"},
                             {type:'listItem',text:"Day Trips / Ubers / Public Transport"},
                            {type:'footprintLine',footprint:'19',unit:'KG Co2'},

                             {type:'header',text:"Overview"},

                             {type:'horizontalImage',src:'CarbonCostCharts/colombiaCost.png'},
                             {type:'listItem',text:"Total Footprint "},
                               {type:'footprintLine',footprint:'713.2',unit:'KG Co2', centered:true},
                             {type:'footprintComparison',footprintPerDay:'18.3'},

                           ]}/>
  </div>
  </>
)}

export default CarbonCostOfColombia;
