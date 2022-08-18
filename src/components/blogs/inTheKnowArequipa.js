import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';

import arequipa6 from '../../assets/galleries/arequipa/arequipa6.jpg'


const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const InTheKnowArequipa = props => {

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
    <BlogBody header ={{src:arequipa6, label:'In The Know Arequipa'}}

              topBlurb={{type:'topBlurb',
                         updated:'July 2022',
                         content:[{type:'text',text:"Peru’s second largest city, Arequipa, is often a quick stop for travellers looking to visit one of the deepest canyons in the world: the Colca Canyon. We believe it should be a destination in its own right, as we fell in love with the old town’s architecture and charm, as well as the city’s climate and sunsets. "}]}}

              isMobile={isMobile}
              contentTest ={[{type:'header',text:"In The Know Arequipa"},

                            {type:'paragraph',text:"Peru’s second largest city, Arequipa, is often a quick stop for travellers looking to visit one of the deepest canyons in the world: the Colca Canyon. We believe it should be a destination in its own right, as we fell in love with the old town’s architecture and charm, as well as the city’s climate and sunsets. Our favourite thing to do was simply wander the city’s oldest neighbourhood, San Lázaro, which features some original buildings from the city’s inception by the Spanish in 1540. It’s nicknamed the white city as a majority of the buildings in this neighbourhood are built from white or pink volcanic rock. We also had a hard time passing up a sunset at Plaza de Armas, one of the most beautiful squares in Latin America (in our opinion.) It’s often called the land of volcanoes as they populate the skyline, and one of the best spots to see it is from the square where the church perfectly frames the city’s most well known volcano: Misti. "},

                            {type:'header',text:"How long to stay: "},
                            {type:'paragraph', text:"To explore the town properly we would recommend 2-3 days, but add on more time if you’re planning a full day tour or trek to the Colca Canyon. We stayed a total of 9 days here and didn’t get bored, although when you find a city like Arequipa as a full-time traveller, it’s easy to get comfortable and want to hang around."},

                            {type:'header',text:"What to do:"},
                            {type:'listItem',text:"1. Wander the San Lázaro neighbourhood "},
                            {type:'paragraph', text:"The oldest neighbourhood in the city is filled to the brim with charm. While it’s less colourful and romantic as other colonial neighbourhoods throughout Latin America, it’s white facades and more straight forward architecture make it unique. The best part is when the sun hits the neighbourhood’s walls at around 3pm in the afternoon. Give yourself some time to sit at one of the area’s outdoor patios and make sure to bring your camera along as you won’t be able to resist taking photos. "},
                            {type:'listItem',text:"2. Visit one of the many rooftops in the city (our favourite was sipping coffee at Puku Puku)"},
                            {type:'paragraph', text:"This is the city of rooftops – they are everywhere and for good reason, the city has views of magnificent volcanoes in every direction. One of our favourite spots to hang out with a notebook was Puku Puku. Their great coffee and bean bag chairs made for the perfect spot to rest, take in some vitamin D, and recharge your batteries before or after your next adventure. "},
                            {type:'listItem',text:"3. Watch sunset from a roof surrounding Plaza de Armas (We went to Waya Lookout on numerous occasions) "},
                            {type:'paragraph', text:"We usually only chase sunsets when we’re visiting cities or towns along the ocean, but this city changed that for us. The sunsets we saw here are some of our all time favourites from our travels. Waya Lookout is an amazing vantage point to watch the sunset light spill along the square and turn the whole city golden. Make sure to stick around afterwards as the golden light turns into a pink alpenglow that’ll leave you in awe."},
                            {type:'listItem',text:"4. Walk along Chili River & take in view’s of the city from Yanahuara "},
                            {type:'paragraph', text:"On the other side of the river from where the old town is, is a lovely river walk. Make sure to cross the Puente Grau from the historical centre to reach it. You’ll see beautiful views as you walk the cobble stoned path. The path will lead you to the Yanahuara lookout point (which we didn’t get the chance to visit ourselves but have heard it’s lovely.) "},
                            {type:'listItem',text:"5. Check out Mercado San Camilo (we didn’t do this but heard good things about it!) "},
                            {type:'paragraph', text:"We’ve heard on multiple occasions that this market is one of the best and most interesting in Latin America. While we didn’t see it for ourselves, we wanted to let you know about it. "},

                            {type:'header',text:"Where to stay: "},
                            {type:'paragraph', text:"There are many hostels and hotels close to Plaza des Armes but we personally had an amazing stay at Selina Arequipa which is close to the San Lázaro neighbourhood. It’s our favourite Selina location so far and has an incredible pool and courtyard/garden area that even includes a tree house! "},

                            {type:'header',text:"Where to eat: "},
                            {type:'paragraph', text:"Check out our Peru Vegan Guide for our favourite spots in Arequipa."},
                            {type:'linkParagraph',content:[{type:'text', text:"Check out our "},
                                                           {type:'link', text:'Peru Vegan Guide ',link:"/PeruVeganGuide"},
                                                           {type:'text', text:'for our favourite spots in Arequipa.'}]},


                            {type:'header',text:"Carbon conscious tips: "},
                            {type:'paragraph', text:"-Bring a water bottle with a filter or find a filter water tap (Selina Arequipa has one) to avoid purchasing plastic water bottles"},
                            {type:'paragraph', text:"-Take the night bus or train to and from Arequipa instead of flying"},
                            {type:'paragraph', text:"-Take advantage of some of the great (and affordable) vegan restaurants in town & eat plant-based! "},





                           ]}/>
  </div>
  </>
)}

export default InTheKnowArequipa;
