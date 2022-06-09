import React from 'react';
import BlogHeader from "../elements/blogHeader";
import BlogBody from "../../standardComponents/blogBody";
import  { useState,useEffect } from 'react';

const InTheKnowMedellin = props => {

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
    <BlogBody header ={{src:'MedellinGallery/Medellin11.jpg', label:'In The Know : Medellin'}}
              blurb ={"Medellín is a city with a very complicated history. Most people only know of it through a certain Netflix show and believe it’s still a dangerous place that you shouldn’t visit. "}
              updated={'May 2022'}
              isMobile={isMobile}
              contentTest ={[{type:'paragraph',text:"Medellín is a city with a very complicated history. Most people only know of it through a certain Netflix show and believe it’s still a dangerous place that you shouldn’t visit. You’d be doing yourself a big disservice believing that as this city has a certain magic about it. A magic that most people can’t really identify, yet all feel it. It’s become an expat and digital nomad hub for that reason. "},
                             {type:'paragraph',text:"Maybe the magic has to do with the eternal spring weather it experiences, or the tree lined, coffee shop filled, neighbourhood of Poblado, or the incredible vegan restaurants that seem to be on every block, or the resilience and joy emitted from a lot of the local people. I’m sure it’s a little bit of all of that, and a lot more. "},
                             {type:'paragraph',text:"In our 3 months of travel, Medellín was the place we stayed for the longest and it’s the first place we felt sad to leave. Here is a short guide to help you plan for an amazing stay in this city: "},
                             {type:'horizontalImage',src:'/MedellinGallery/Medellin5.jpg'},

                             {type:'header',text:"How long to stay?"},
                             {type:'paragraph',text:"Medellín is a place you can stay a long time and not get bored. If you have a limited time, I would budget 5-7 days (which would include a must-do day trip to Guatapé) We stayed for 2 weeks and still left without having seen everything we wanted."},

                             {type:'header',text:'What to do:'},
                             {type:'listItem',text:"1) Visit Comuna 13"},
                             {type:'paragraph',text:"What used to be the most dangerous neighbourhood on earth, is now a vibrant, colorful, and innovative home to some of the world’s most resilient people. We toured the comuna with a company called Zippy Tours. There are many companies that offer tours, but we suggest finding one with a guide who lives in the neighbourhood. "},
                             {type:'diptych', src1:'MedellinGallery/Medellin6.jpg',src2:'MedellinGallery/Medellin8.jpg'},
                             {type:'listItem',text:"2) Downtown Walking Tour"},
                             {type:'paragraph',text:"A guided tour of the downtown is a great way to learn more about the city’s complicated past and explore busy areas safely. We did a tour with Real City Tours and had a great time. There is a famous criminal from Medellin with a very popular show on Netflix, and although his life story is woven into the history of the city, we learned very quickly that it is a huge taboo to speak his name out loud."},
                             {type:'listItem',text:"3) Visit the Antioquia Museum"},
                             {type:'paragraph',text:"The Museum of Antioquia is a large art museum in the heart of the city. It has a large collection of Botero works and offers a large collection of contemporary work by other Medellin artists. Visit on a rainy Medellin afternoon as you'll want to spend hours taking in the art and history on display. "},
                             {type:'listItem',text:"4) Ride the Cable Cars to Arvi Park"},
                             {type:'paragraph',text:"There are several cable car systems integrated into the city’s public transit system. We rode one of the gondolas over the city and up into the mountain to Parque Arvi. We ended up exploring in the rain, but if you check the weather beforehand there is an extensive trail network, and you can hire a local guide to take you on a stunning hike."},
                             {type:'horizontalImage',src:'/MedellinGallery/Medellin4.jpg'},
                             {type:'listItem',text:"5) Do a day trip or weekend trip to Guatapè"},
                             {type:'paragraph',text:"Guatape is a small town about 2 hours outside of Medellin that is famously home to El Penol Rock. We took the bus from Medellin and stayed 1 night in town, although many make it into just a day trip. You can get to El Penol Rock easily with a local rickshaw driver, or if you’re looking for a little more adventure you can rent a scooter and take the winding back roads."},

                             {type:'header',text:"Where to stay?"},
                             {type:'paragraph',text:"There are two neighbourhood that tourists stay in: Poblado & Laurales. Poblado is a touch more touristy but has more options in regards to restaurants, cafes, nightlife, and transit. Laurales is is a bit more green and charming, it’s a neighbourhood you feel like you could live in."},

                             {type:'header',text:"Where to eat & drink:"},
                             {type:'paragraph',text:"Check out our vegan in Medellín reel for our favourite spots. If you made us choose just one? That would be really hard but we’d have to say VegStation or AMA. "},

                             {type:'header',text:"Accommodation:"},
                             {type:'paragraph',text:"We stayed at Selina Medellín which had a great cowork & social vibe. We heard amazing things about the Click Clack hotel, Los Patios hostel & Airbnb options in the city."},

                             {type:'header',text:"Carbon Conscious Tips:"},
                             {type:'listItem',text:"1) Ride the metro instead of taking a taxi or Uber."},
                             {type:'paragraph',text:"The residents of Medellin are extremely proud of their metro. We found this pride made the metro cleaner and safer than most we’ve used in North America. It’s about a dollar to get on and it can take you almost the entire length of the valley."},
                             {type:'listItem',text:"2) Eat plant-based!"},
                             {type:'paragraph',text:"Medellin was one of the best food destinations we’ve found in Latin America. There are loads and vegan/vegetarian restaurants to check out. You can see some of our top pics here."},
                             {type:'listItem',text:"3) Buy produce from a local market."},
                             {type:'paragraph',text:"There are local markets all over the city. They are very safe, cheap, and fun to explore even if you’re not in the mood to shop."},

                           ]}/>
  </div>
  </>
)}

export default InTheKnowMedellin;
