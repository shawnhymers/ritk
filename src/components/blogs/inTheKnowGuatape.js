import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';

const InTheKnowGuatape = props => {

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
      <MobileHeader page ={'blog'}/>
  :
      <DesktopHeader page ={'blog'}/>
  }
    <BlogBody header ={{src:'GuatapeGallery/Guatape9.jpg', label:'In The Know : Guatape'}}
              blurb ={"Two hours east of Colombia’s major city Medellín, is a quaint small town that is rich with natural and architectural beauty."}
              updated={'May 2022'}
              isMobile={isMobile}
              contentTest ={[
                             {type:'paragraph',text:'Two hours east of Colombia’s major city Medellín, is a quaint small town that is rich with natural and architectural beauty. It’s become popular as a tourist destination because of its proximity to El Peñol rock, a massive monolith that looks out of this world. The town is also know for how colourful it is. It’s covered in zócalos which are murals that are found on many buildings. This town exudes charm and we personally think it’s a must visit (day or overnight trip) if you’re visiting Medellín. '},
                             {type:'paragraph',text:'Here is a short guide on everything you need to know on Guatapé: '},

                             {type:'header',text:"How To Get There"},
                             {type:'paragraph', text:'We decided to take a local bus to Guatapé instead of doing a tour or organizing private transport. From Medellín’s Terminal Del Norte you can catch a bus that runs every 30 minutes from 2 booths (9 or 14). The cost is 17k ($5.75 CAD) each. Taking the public bus is not only the cheapest way to get to Guatapé, it’s also the most carbon effective.'},

                             {type:'header',text:"How Long To Stay"},
                             {type:'paragraph',text:'Some people go to Guatapé as a day trip but we decided to spend the night there and were happy with our decision. Spending the night allowed us to explore the town at a slow pace and do activities based on the best light/weather. '},

                             {type:'header',text:"What To Do"},
                             {type:'listItem',text:'1) Climb El Peñol Rock'},
                             {type:'paragraph',text:"El Penol Rock is a 65-million-year-old massive stone monolith that stands 200 meters above the valley below. It is an incredible sight to be seen from a distance, but it also provides amazing views from the top. You can climb the 708 steps built into the side of the cliff and come up to the viewing area, which is complete with gift shops, bars, and food stands. If you can plan your trip so you can experience sunset from the lookout, we highly recommend it."},
                             {type:'diptych',src1:'/GuatapeGallery/Guatape28.jpg',src2:'/GuatapeGallery/Guatape31.jpg'},


                             {type:'listItem',text:'2) Rent a Scooter'},
                             {type:'paragraph',text:"The typical way to get El Penol rock is via one of the local rickshaw drivers. A scooter provides a second more scenic option. On a scooter you can take the long side of the ring road that connects the rock and the town of Guatape. It is a beautiful ride, and you get to see El Penol from every angle before you arrive. We rented a scooter from the hostel we were staying at and the whole rental and filling it back up with gas was less than $15."},
                             {type:'horizontalImage',src:'/GuatapeGallery/Guatape29.jpg'},

                             {type:'listItem',text:'3) Rent a Kayak'},
                             {type:'paragraph',text:"Guatape is surrounded by a beautiful system of lakes. Although we didn’t have the weather for it when we were there, there are many companies that offer watercraft rentals. You can rent anything from a kayak to a jet ski. There is an unbelievable amount of water to explore, at whatever your preferred speed is."},
                             {type:'horizontalImage',src:'/GuatapeGallery/Guatape9.jpg'},

                             {type:'listItem',text:'4) Wander The Town and Take Photos!'},
                             {type:'paragraph',text:"Guatape is safe, small, and beautiful. The perfect place for a photo walk. Since a lot of people visit Guatape just for one day, early mornings before the first busses arrive, and in the evening as the last busses head back to Medellin, give you the best chance to avoid large crowds in the background."},
                             {type:'diptych',src1:'/GuatapeGallery/Guatape21.jpg',src2:'/GuatapeGallery/Guatape22.jpg'},

                             {type:'header',text:"Where To Go For Vegan Options"},
                             {type:'listItem',text:'1) Namasté Vegan Food'},
                             {type:'paragraph',text:"This unassuming little restaurant has as a small selection of burgers, salads, and wraps, along with smoothies. They also have a lovely rooftop patio that overlooks the quaint side street below."},

                             {type:'listItem',text:'2) Restaurante Vegano Zona Prosalud'},
                             {type:'paragraph',text:"Centrally located, with a well-priced meal of the day and expansive menu. We barely scratched the surface of their large menu but were very impressed with the meal we had."},

                             {type:'linkParagraph',content:[{type:'text',text:'Curious what it looks like through our eyes? See our photo gallery'},
                                                            {type:'link',text:' here.',link:"/guatape"}]}

                           ]}/>
  </div>
  </>
)}

export default InTheKnowGuatape;
