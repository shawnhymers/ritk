import React from 'react';
import BlogHeader from "../elements/blogHeader";
import BlogBody from "../standardComponents/blogBody";
import  { useState,useEffect } from 'react';

const InTheKnowQuito = props => {

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
    <BlogBody header ={{src:'QuitoGallery/Quito15.jpg', label:'In The Know : Quito'}}
              blurb ={"Quito was somewhere we knew little about before we arrived, and maybe because of that, our expectations going in were not that high."}
              updated={'May 2022'}
              isMobile={isMobile}
              contentTest ={[
                              {type:'paragraph',text:"Quito was somewhere we knew little about before we arrived, and maybe because of that, our expectations going in were not that high. From the moment we landed, our expectations were continuously blown away, beginning with the airport. (Nicest airport in South America?!) The next day we ventured to the Old Town and were once again amazed by how incredible it was. It was the largest and most beautiful old town in all of the Latin American countries we had been so far… it even beat Cartagena in our eyes (controversial opinion I know!) We then found out Quito has South America’s best-preserved and least altered historic centre in Latin America, making it one of the first ever cities to be declared a World Heritage Site by UNESCO."},
                              {type:'paragraph',text:"Quito will likely be on your itinerary if you’re coming to Ecuador as it’s the most common place to fly in and out of the country. Galapagos Islands hoppers will often use the city as a jumping off point to get to the coast, others to the Amazon, and the rest to the countries volcanoes and adventure destinations. Quito is definitely a destination in itself and is a place we could have stayed for a couple weeks. (We were there 10 days)"},
                              {type:'paragraph',text:"We have compiled a short guide so you enjoy Quito as well as wherever you are planning to visit next. "},

                              {type:'header',text:"What To Do"},
                              {type:'listItem',text:"1) Visit The Old Town"},
                              {type:'paragraph',text:"Quito has the most well-preserved old towns in South America and is now a UNESCO world heritage site. The old town is huge and there is a lot to see. From the largest neo-gothic basilica in the Americas to one of the highest statues in South America. "},
                              {type:'horizontalImage',src:'/QuitoGallery/Quito18.jpg'},

                              {type:'listItem',text:"2) Do a Day Trip to Otavalo Market"},
                              {type:'paragraph',text:"You could spend all day in South America’s largest indigenous craft festival. The market stretches over many city blocks and is packed full of incredible handmade items made of different textiles. Keep in mind that bartering is part of the experience, and the vendors are very skilled at going back and forth on the price."},
                              {type:'diptych',src1:'/OtavaloGallery/Otavalo21.jpg',src2:'/OtavaloGallery/Otavalo22.jpg'},

                              {type:'listItem',text:"3) Visit The Equator"},
                              {type:'paragraph',text:"There are several sites along the equator to choose to visit, the one we visited was in Cayambe and is technically more accurate than the famous one closer to Quito. If you have the chance, there are local guides that can explain how the indigenous people knew they were at the centre of the world how unique the site is globally. "},
                              {type:'horizontalImage',src:'/QuitoGallery/Quito30.jpg'},

                              {type:'listItem',text:"4) Walk Around La Floresta Neighbourhood"},
                              {type:'paragraph',text:"The La Floresta Neighbourhood is a hip little area with all the cute coffee shops you could ask for. We took our laptops and had a few fun work dates there. Great place for a coffee, some work, or even catch a movie at Ochoymedio."},

                              {type:'listItem',text:"5) Climb Cotopaxi"},
                              {type:'paragraph',text:"Cotopaxi is one the highest active volcanoes in the world. The hike we did started at around 4,000 m elevation in the parking lot and then we went up to around 5,100 m to visit the glacier. Even without the added challenge of the elevation, it is a steep and unforgiving hike, so make sure you’ve acclimated to the elevation and remember to pack plenty of water."},
                              {type:'horizontalImage',src:'/cotopaxi/cotopaxi1.jpg'},

                              {type:'listItem',text:"6) Ride The TelefériQo Cable Car"},
                              {type:'paragraph',text:"This is one of the highest aerial lifts in the world. We never got around to doing this one, but I really wish we did! "},

                              {type:'header',text:"Where To Stay"},
                              {type:'paragraph',text:'There are two neighbourhoods you’ll likely stay in if you’re visiting: La Floresta and Old Town, and you’ll be happy either way. It depends on if you want to better know the city’s past or present.'},

                              {type:'header',text:'Where to eat for vegan options:'},
                              {type:'paragraph',text:'You can watch our Quito Vegan Food Reel here for everywhere we ate, but our favourite spot was definitely Tandana.'},

                              {type:'header',text:'Carbon Conscious Thoughts:'},
                              {type:'paragraph',text:"Ecuador is a country that makes it easier to have a reduced carbon footprint. With 79% of it’s power coming from hydroelectricity, a year long growing season that allows for local production of many fruits and vegetables, vegan food options in every city, and a country small enough that bus travel is very doable, this has been one of the easiest countries to keep our carbon footprint equivalent or less than it would be back home. Embracing the local way of life, eating plant-based, and using shared transportation is the easiest way to be carbon conscious in Ecuador."},

                           ]}/>
  </div>
  </>
)}

export default InTheKnowQuito;
