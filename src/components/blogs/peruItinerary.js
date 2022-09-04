import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';

import sacredValley17 from '../../assets/galleries/sacredValley/sacredValley17.jpg'

import arequipa18 from '../../assets/galleries/arequipa/arequipa18.jpg'
import arequipa39 from '../../assets/galleries/arequipa/arequipa39.jpg'
import cusco6 from '../../assets/galleries/cusco/cusco6.jpg'
import peruItinerary1 from '../../assets/blogPics/peruItinerary/peruItinerary1.jpg'
import peruItinerary5 from '../../assets/blogPics/peruItinerary/peruItinerary5.jpg'
import peruItinerary6 from '../../assets/blogPics/peruItinerary/peruItinerary6.jpg'
import peruItinerary2 from '../../assets/blogPics/peruItinerary/peruItinerary2.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const PeruItinerary = props => {

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
    <BlogBody header ={{src:sacredValley17, label:'Peru Itinerary'}}

              nextTitle1={'In The Know: Arequipa'}
              nextTitle2={"Peru Vegan Guide"}
              nextTitle3={"In The Know: Cusco"}
              nextPic1 ={arequipa18}
              nextPic2 ={arequipa39}
              nextPic3 ={cusco6}
              nextLink1= {'/inTheKnowArequipa'}
              nextLink2= {'/peruVeganGuide'}
              nextLink3= {'/inTheKnowCusco'}

              isMobile={isMobile}
              topBlurb={{type:'topBlurb',updated:'July 2022',content:[{type:'text',text:'Peru is an incredible country to travel – it has the most diverse scenery, beauty, architecture, and history. We spent 7 weeks travelling slowly through Peru, and still feel like there’s more to see. This blog was inspired by a collaboration we did with '},
                                        {type:'link',text:'@seeyouontheroad_',link:'https://www.instagram.com/seeyouontheroad_/?hl=en'},
                                        {type:'text',text:' on Instagram.'}]}}
              contentTest ={[



                {type:'header',text:"Peru Itinerary"},

                            {type:'paragraph',text:"Peru is an incredible country to travel – it has the most diverse scenery, beauty, architecture, and history. We spent 7 weeks travelling slowly through Peru, and still feel like there’s more to see.  We’ve met people who have travelled Peru in two weeks, and people who have spent all 90 days of their tourist visa. No matter how much time you have, we’re certain you’ll love this country. "},

                            {type:"paragraph",text:"Below we have chronicled how we would recommend travelling to Peru. The most frequent way you’ll get around is by bus, so we recommend taking Cruz del Sur buses. You can book with them online and we have found them to be reliable and comfortable. "},
                            {type:'header',text:"Lima (3-7 Nights)"},
                            {type:"paragraph",text:"Chances are you’ll be landing in Lima as your first stop in Peru. Lima is the country’s capital and has plenty of activities to do, but is not the most exciting stop on the roster. If you are travelling slowly, we would recommend spending 3-7 nights in the city throughout your trip (chances are you'll be flying out from here or will use Lima as a pit stop before heading to Huaraz if you’re planning to visit there.) "},
                            {type:"paragraph",text:"Stay: There’s plenty of great AirBnb’s in the city. Here is one we stayed at that we loved. We also stayed at Selina Milaflores & Cowork which was very central to activities in Miraflores and offered many tours. "},
                            {type:'externalLinkParagraph',content:[{type:'text',text:"Stay: There’s plenty of great AirBnb’s in the city. "},
                                                           {type:'link',text:'Here',link:"https://www.airbnb.ca/rooms/48564315?source_impression_id=p3_1660589717_0S9MLDApQxIEZBQC"},
                                                           {type:'text',text:" is one we stayed at that we loved. We also stayed at Selina Milaflores & Cowork which was very central to activities in Miraflores and offered many tours. "},]},


                            {type:'listItem',text:"To Do:"},
                            {type:'list',content:[{text:"- Visit Larcomar Mall "},
                                                  {text:"- Rent an electric scooter and ride along the waterfront"},
                                                  {text:"- Take a surf lesson"},
                                                  {text:"- Visit one of Barranco’s many lovely coffee shops"},
                                                  {text:"- Enjoy dining at one of Lima’s incredible restaurants (if you’re vegan, check out Veda Restaurant) "},]},

                            {type:"paragraph",text:"Once you’re ready to move on, hop on an early morning bus to Huacachina. "},

                            {type:'header',text:"Huacachina (1-2 Nights)"},
                            {type:"paragraph",text:"Peru’s famous desert oasis is a 4.5 bus ride away from Lima. You’ll take the bus to the nearby city of Ica and then take a cab to Huacachina for 15 soles. "},
                            {type:"paragraph",text:"Stay: We stayed at Desert Nights Hostel, the sister hotel to popular EcoCamp Huacachina. While EcoCamp is popular, three people who stayed there recommended against it. We were happy with our stay at Desert Nights Hostel as it was clean, quiet, and gave us access to EcoCamp’s pool."},

                            {type:'listItem',text:"To Do:"},
                            {type:'list',content:[{text:"- Go on a sand buggy & sandboarding tour (Book in person when you arrive. It should cost 35-40 soles per person.)"},
                                                  {text:"- Watch sunrise or sunset from the tallest sand dune"},
                                                  {text:"- Rent a paddle boat on the oasis (costs 30 soles for 20 minutes)"},
                                                  {text:"- Paraglide (we did not do this although it looked like fun)"},
                                                  {text:"- Spend time at the pool and soak up the heat before you move on"},]},

                            {type:"paragraph",text:"Either take a night bus to Arequipa or add one of the following two destinations onto your itinerary:"},
                            {type:'listItem',text:"Paracas "},
                            {type:"paragraph",text:"The town of Paracas is a popular day trip from Huacachina or next stop for many travellers. If you are interested in visiting the Ballestas Islands (Peru’s Poor Man’s Galapagos) then you may want to consider visiting here for a night."},
                            {type:'listItem',text:"Nazca "},
                            {type:"paragraph",text:"We did not visit Nazca, but if you are interested in seeing ancient hieroglyphs you may want to take a bus from Huacachina to Nazca, take a flight over the hieroglyphs (which you can book last minute from agencies near the bus stop) and continue onto Arequipa without spending a night there. (It’s actually been recommended to us by @seeyouontheroad_ on IG to not spend a night here.)   "},
                            {type:'horizontalImage',src:peruItinerary1},

                            {type:'header',text:"Arequipa (3-7 Nights)"},
                            {type:"paragraph",text:"Peru’s second largest city, Arequipa, is often a quick stop for travellers looking to visit one of the deepest canyons in the world: the Colca Canyon. This city and a visit to the Colca Canyon can be done quickly, but we do encourage you to take this stop a little slower as this city is beautiful to spend some time in. "},
                            {type:"paragraph",text:"Stay: We stayed at Selina Arequipa. This location is one of their best as it has a beautiful garden area with a tree house and a pool. Their private plus rooms are really nice."},
                            {type:'listItem',text:"To Do:"},
                            {type:'list',content:[{text:"- A day trip or 2 day/1 night trek of the Colca Canyon"},
                                                  {text:"- Wander the San Lázaro neighbourhood "},
                                                  {text:"- Watch sunset on of the rooftop terraces overlooking Plaza des Armes (Waya Lookout was where we went)"}]},
                            {type:'paragraph',text:"Once you’re ready to move on, take a bus to either Puno or straight to Cusco."},
                            {type:'horizontalImage',src:peruItinerary5},

                            {type:'header',text:"Puno/Lake Titicaca "},

                            {type:'externalLinkParagraph',content:[{type:'text',text:"We skipped visiting Lake Titicaca but we’ve been recommended to book a homestay on Taquile Island by "},
                                                           {type:'link',text:'@seeyouontheroad_',link:"https://www.instagram.com/seeyouontheroad_/"},]},

                            {type:'header',text:"Cusco (1-2 Weeks Cumulatively)"},
                            {type:"paragraph",text:"Cusco is a vibrant beautiful city that is the gateway to the Sacred Valley and Machu Picchu. It has many wonderful things to do in the city as well as incredible day trip options to choose from which make it a city that’s worth lingering in before and after your tour of the Sacred Valley. "},
                            {type:"paragraph",text:"Stay: There are many great AirBnb options in the area. While we do not recommend the one we stayed in, our friends found a great one in the San Blas neighbourhood. For hostels, we recommend Selina and for hotels, we recommend Casa Andina. We stayed at their ‘Standard’ location but thought the location of their San Blas one was ideal. "},
                            {type:'listItem',text:"To Do:"},
                            {type:"list",content:[{text:"- Do a day trip Lake Humantay, Rainbow Mountain, Palccoyo Mountain, or  7 lagunas Ausangate (We did Palcoyo and Laguna Humantay but would definitely visit the other two options the next time around) "},
                                                  {text:"- Wander the San Blas neighbourhood & eat lunch at Green Point"},
                                                  {text:"- Cusco’s local markets: San Pedro Market & San Blas Market"}]},

                            {type:"paragraph",text:"At this point, you’ll want to see the Sacred Valley. Since we did not plan this ourselves, we cannot recommend how to get around."},
                            {type:'horizontalImage',src:peruItinerary6},

                            {type:'header',text:"Sacred Valley"},
                            {type:"paragraph",text:"We did a tour of the Sacred Valley and this is the itinerary we did:"},
                            {type:"paragraph",text:"1 night in Pisac: Our first stop in the Sacred Valley was Pisac which is a 45 minute drive away from Cusco. The following morning we did the Pisac Ruins Hike which we enjoyed. The tour then headed to Ollantaytambo."},
                            {type:"paragraph",text:"1 night in Ollantaytambo: We arrived in the lovely small town of Ollantaytambo to stay overnight in order to catch the Peru Rail train to Aguas Calientes the next morning."},
                            {type:"paragraph",text:"1 night in Aguas Calientes: Once we arrived in the town, we dropped our bags at our hotel before taking the 30 minute bus to Machu Picchu. Once we came back from Machu Picchu, we visited the hot springs. The next morning we had the opportunity to visit Machu Picchu again for sunrise which was spectacular. That evening we took the train back down to Ollantaytambo."},
                            {type:"paragraph",text:"1 more night in Ollantaytambo: we spent one more night in this town in order to get an early start the following day. The following day we packed our things and went back to Cusco, stopping at the Maras Salt Mines & Moray Ruins on the way. "},
                            {type:"paragraph",text:"Where to stay: We stayed at Hotel Royal Inka Pisac, Tunupa Lodge Hotel, and Inti Punku Machu Picchu."},
                            {type:"paragraph",text:"Once you have visited the Sacred Valley and Cusco, fly or bus back to Lima to continue to Huaraz or onto your next adventure elsewhere. If you are visiting Huaraz, it is an 8 hour bus ride from Lima."},

                            {type:'header',text:"Huaraz"},
                            {type:"paragraph",text:"If you love hiking, incredibly blue lakes, and unreal mountains, then Huaraz needs to be on your itinerary. This city in the Peruvian Andes is the gateway to incredible hikes and multi-day treks in the Cordillera Blanca mountain range. "},
                            {type:"paragraph",text:"Where to stay: We stayed at Selina Huaraz"},

                            {type:'listItem',text:"To Do:"},
                            {type:"list",content:[{text:"- Laguna 69 Hike (On a tour)"},
                                                  {text:"- Laguna Paron Tour"},
                                                  {text:"- Laguna Churup Hike (Self-Guided)"},
                                                  {text:"- Wilcacocha (We didn’t get time to do this but have heard it’s a great 1st or 2nd day hike to acclimate)"},
                                                  {text:"-Pastoruri Glacier (We also didn’t do this but heard great things)"},]},
                                                  {type:'horizontalImage',src:peruItinerary2},

                            {type:"header",text:"That wraps up our Peru itinerary! "},
                            {type:'linkParagraph',content:[{type:'text', text:"Here are more detailed blog posts on "},
                                                           {type:'link', text:'Cusco, ',link:"/InTheKnowCusco"},
                                                           {type:'link', text:'Arequipa, ',link:"/InTheKnowArequipa"},
                                                           {type:'text', text:'and '},
                                                           {type:'link', text:'Huacachina',link:"/InTheKnowHuacachina"},
                                                           {type:'text', text:" if you would like to continue your research."}]},



                            {type:"paragraph",text:"Happy planning & traveling! "},
                           ]}/>
  </div>
  </>
)}

export default PeruItinerary;

//
// {type:'linkParagraph',content:[{type:'text',text:'Curious what it looks like through our eyes? See our photo gallery'},
//                                {type:'link',text:' here.',link:"/guatape"}]}
