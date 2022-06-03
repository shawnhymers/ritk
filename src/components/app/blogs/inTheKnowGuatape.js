import React from 'react';
import BlogHeader from "../elements/blogHeader";
import BlogBody from "../../standardComponents/blogBody";
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
    <BlogHeader isMobile={isMobile}/>
    <BlogBody header ={{src:'GuatapeGallery/guatape9.jpg', label:'In The Know : Guatape'}}
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
                             {type:'listItem',text:'2) Rent a Scooter'},
                             {type:'listItem',text:'3) Rent a Kayak'},
                             {type:'listItem',text:'4) Wander The Town and Take Photos!'},

                             {type:'header',text:"Where To Go For Vegan Options"},
                             {type:'listItem',text:'1) Namasté Vegan Food'},
                             {type:'listItem',text:'2) Restaurante Vegano Zona Prosalud'},

                             {type:'paragraph',text:'Curious what it looks like through our eyes? See our photo gallery here. '}

                           ]}/>
  </div>
  </>
)}

export default InTheKnowGuatape;
