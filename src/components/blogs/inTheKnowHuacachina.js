import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';

import huacachina10 from '../../assets/galleries/huacachina/huacachina10.jpg'

import huacachina12 from '../../assets/galleries/huacachina/huacachina12.jpg'
import huacachina14 from '../../assets/galleries/huacachina/huacachina14.jpg'


import banos16 from '../../assets/galleries/banos/banos16.jpg'
import cusco6 from '../../assets/galleries/cusco/cusco6.jpg'
import sacredValley20 from '../../assets/galleries/sacredValley/sacredValley20.jpg'
import huacachina1 from '../../assets/blogPics/inTheKnowHuacachina/huacachina1.jpg'
import huacachina2 from '../../assets/blogPics/inTheKnowHuacachina/huacachina2.jpg'
import huacachina3 from '../../assets/blogPics/inTheKnowHuacachina/huacachina3.jpg'
import huacachina4 from '../../assets/blogPics/inTheKnowHuacachina/huacachina4.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const InTheKnowHuacachina = props => {

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
    <BlogBody header ={{src:huacachina10, label:'In The Know Huacachina'}}

              nextTitle1={"Peru Itinerary"}
              nextTitle2={'In The Know: Cusco'}
              nextTitle3={"Banos Activity Guide"}
              nextPic1 ={sacredValley20}
              nextPic2 ={cusco6}
              nextPic3 ={banos16}
              nextLink1= {'/peruItinerary'}
              nextLink2= {'/inTheKnowCusco'}
              nextLink3= {'/banosActivityGuide'}

              topBlurb={{type:'topBlurb',
                         updated:'July 2022',
                         content:[{type:'text',text:"One of Peru's most interesting destination's is Huacachina, a tiny village built around the 'Oasis of America.'"}]}}

              isMobile={isMobile}
              contentTest ={[{type:'header',text:"In The Know Huacachina"},


                            // TEMP:
                            {type:'paragraph',text: "One of Peru's most interesting destinations is Huacachina, a tiny village built around the 'Oasis of America.' The lagoon was created by seepage from an underwater aquifer. There are many legends of how the lake was created, but the local indigenous people believe it was created by a mourning weeping woman, and named the area Huacachina which means weeping woman in Quechua. Unfortunately due to well-drilling, the naturally occurring water is decreasing so now it's being artificially filled in order to preserve the tourism industry. Whether this oasis is natural or not, this place is out of a storybook... filled with wonder, illusion, and playfulness."},
                            {type:'header',text:"How long to stay: "},
                            {type:'paragraph',text:"We recommend 2 days and 1 night if you’re on a tight schedule. If you have some breathing room in your schedule, add an extra night to lounge by the pool or do a tour to the nearby town of Paracas so you can do a boat tour of Ballestas Islands (Peru’s Poor Man’s Galapagos Islands.)"},

                            {type:'header',text:"What to do:"},
                            {type:'listItem',text:"1. Go on a sand buggy/sand boarding tour at sunset"},
                            {type:'paragraph',text:"If you don’t go sand buggying or sandboarding in Huacachina, did you even go? This activity is a staple among visitors and you’ll notice that every single person in the town is doing this at sunset. We had so much fun riding the buggy on the dunes – at times it felt like we were on a roller coaster. Don’t book this tour ahead of time, as it’s very easy to find last minute tours at a fraction of the cost in person. They are on average 35-40 soles per person. Every tour, from what we could tell, does pretty much the same thing so don’t stress too much about who you are booking with. "},
                            {type:'horizontalImage',src:huacachina4},
                            {type:'listItem',text:"2. Walk the highest dune for sunrise"},
                            {type:'paragraph',text:"While the highest sand dune looks massive, it’s not as hard to climb as it seems. It took us less than an hour to climb to the highest point both times we did it. While the view is spectacular for sunset, at sunrise you’ll have the dune to yourself and you’ll be able to climb up during the cool temperatures. The sunrise we saw from the dune was the most epic sunrise we’ve ever seen in our lives. "},
                            {type:'horizontalImage',src:huacachina2},
                            {type:'listItem',text:"3. Paraglide"},
                            {type:'paragraph',text:"While we did not paraglide ourselves, it sounds like a really fun thing to do in Huacachina. Our friend did it and raved about the experience, and we watched paragliders one evening and it looked so fun. We were recommended @icaroparagliding (their IG handle) when we were looking into it and found out it costs 260 soles per person. "},
                            {type:'diptych',src1:huacachina12,src2:huacachina14},

                            {type:'listItem',text:"4. Rent a paddle boat on the oasis"},
                            {type:'paragraph',text:"If you want a fun and chill thing to do in the day between sunrise and sunset, may we recommend renting a paddle boat on the oasis. The boat rentals are 30 soles for 20 minutes. It’s a fun way to get a new perspective on the dunes. "},
                            {type:'diptych',src1:huacachina1,src2:huacachina3},

                            {type:'header',text:"How to Get There:"},
                            {type:'paragraph',text:"It’s a 4.5 hour bus from Lima to Ica, the nearby city. Once you reach Ica, you can take a taxi to Huacachina for 15 soles. We recommend the bus company Cruz Del Sur, as they have been reliable and very comfortable. "},
                            {type:'header',text:"Where to stay: "},
                            {type:'paragraph',text:"Most of the accommodations in Huacachina are no-frills budget hotels or hostels. We stayed at Desert Nights Hostel and were pleased with the cleanliness and how quiet it is (considering Huacachina is known for partying.) Its sister property across the road, Eco Camp, has a pool which we were able to use which we really enjoyed. "},
                            {type:'header',text:"Where to eat: "},
                            {type:'paragraph',text:"There is not much in terms of vegan options in Huacachina, but there are a few spots that can offer you vegan dishes. The place we most frequented was La Casa de Bamboo which had quite a few options. We also checked out Wild Olive Trattoria which were able to make a pizza and pasta dish vegan."},

                           ]}/>
  </div>
  </>
)}

export default InTheKnowHuacachina;
