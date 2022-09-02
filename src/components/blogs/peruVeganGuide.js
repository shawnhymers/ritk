import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';

// import banos20 from '../../assets/galleries/banos/banos20.jpg'
import arequipa6 from '../../assets/galleries/arequipa/arequipa6.jpg'
import sacredValley14 from '../../assets/galleries/sacredValley/sacredValley14.jpg'
import cusco6 from '../../assets/galleries/cusco/cusco6.jpg'
import huacachina14 from '../../assets/galleries/huacachina/huacachina14.jpg'
import lima1 from '../../assets/galleries/lima/lima1.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const PeruVeganGuide = props => {

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
    <BlogBody header ={{src:lima1, label:'Peru Vegan Guide'}}

              nextTitle1={"In The Know: Cusco"}
              nextTitle2={'Peru Itinerary'}
              nextTitle3={"In The Know: Huacachina"}
              nextPic1 ={cusco6}
              nextPic2 ={sacredValley14}
              nextPic3 ={huacachina14}
              nextLink1= {'/inTheKnowCusco'}
              nextLink2= {'/peruItinerary'}
              nextLink3= {'/InTheKnowHuacachina'}

              topBlurb={{type:'topBlurb',
                         updated:'July 2022',
                         content:[{type:'text',text:"Peru is incredibly diverse in its natural beauty, culture, and food! Go on any food tour and your tour guide will tell you about how many different kinds of corn, potatoes, and quinoa this country can grow. They also will always tell you – it’s easy to be vegan in this country.  "}]}}

              isMobile={isMobile}
              contentTest ={[{type:'header',text:"Peru Vegan Guide"},

                            {type:'paragraph',text:"Peru is incredibly diverse in its natural beauty, culture, and food! Go on any food tour and your tour guide will tell you about how many different kinds of corn, potatoes, and quinoa this country can grow. They also will always tell you – it’s easy to be vegan in this country. At first glance of a roasted guinea pig stand on the side of the road, you might think there’s no way, but we are happy to report there is a budding vegan scene in Peru. In every city we visited in Peru (no matter how small) we were able to find something to eat, and in the bigger cities there were plenty of exciting vegan restaurants to choose from. "},
                            {type:'paragraph',text:"After 7 weeks in Peru, we’ve definitely had our fair share of vegan food! Rather than making a blog post on every city in Peru, we wanted to share our top vegan spots we’ve found throughout the country in a condensed and concise blog post so you can find some of the best spots right off the bat. "},



                            {type:'header',text:"Best of Lima"},
                            {type:'paragraph',text:'There are so many vegan restaurants in Lima, in fact, we didn’t even get the chance to try all of them! Here are the favourite ones we visited and recommend: '},
                            {type:'listItem',text:"Veda Restaurant"},
                            {type:'paragraph',text:"For a more upscale dining experience, this restaurant should be a top choice. This fully vegan restaurant blew us away. We ordered the Tofu al Miso and Tofu Saltado with Fettuccine. We loved both meals but if we had to recommend only one – it would be the Tofu al Miso. The tofu had an incredible texture and had been marinated to perfection. Don’t skip on dessert – we tried their tiramisu and it was perfect."},
                            {type:'listItem',text:"Seitan Urban Bistro"},
                            {type:'paragraph',text:"From KFC seitan wings in a red bowl to sushi rolls, anything this restaurant thinks they can use seitan to create, they do! Everytime we tried their food, it was delicious and provided true comfort. (We did tend to go for their comfort meals!) Our favourite dishes are the crispy tofu and popcorn seitan (We are suckers for appetizers)."},

                            {type:'header',text:'Best of Arequipa'},
                            {type:'paragraph',text:"For a smaller tourist area than Cusco and Lima, this city packs a heavy punch when it comes to vegan food options. We adored staying in Arequipa – the city is charming, they have the most incredible sunsets, and they have so many incredible vegan food options. Here’s our favourite spots in the city:"},
                            {type:'listItem',text:"El Buda Profano "},
                            {type:'paragraph',text:"This 100% vegan sushi restaurant does simple dishes right. They serve all the classic/traditional dishes one would find at a sushi restaurant, but veganized using tofu and seitan. We ordered gyozas, vegetable tempura, and their california roll. It was the first time we’ve ever ordered seconds at a restaurant… We are still thinking about those gyozas now. We’ve tried vegan sushi in multiple cities throughout Latin America and this takes the cake as our favourite spot. "},
                            {type:'listItem',text:"Prana Vegan Club "},
                            {type:'paragraph',text:"While in Arequipa, we ate at this restaurant almost every single day. With a multi course lunch menu costing 12-20 soles ($4.20-$7.00 CAD) it was hard to keep us away. Aside from their expansive lunch menu, they have an even bigger a la carte menu which includes some delicious pastas and a vegan seitan version of a Peruvian classic - Alitas BBQ. Our favourite dish we had at Prana was the spaghetti bolognaise which, luckily for us, was included in their daily lunch menu. "},
                            {type:'paragraph',text:"Our only comment about Prana is, even though they claim to be a vegan restaurant, they do serve real cheese on certain dishes. Keep an eye out for that and confirm that you want vegan cheese when ordering. "},

                            {type:'header',text:'Best of Cusco'},
                            {type:'paragraph',text:"Cusco, like Lima, is known for having incredible food. Luckily for us vegans, we get some amazing options too. Cusco has one of our favourite restaurants in the world, and really no other spot in the city can compete with the one and only:"},
                            {type:'listItem',text:"Green Point "},
                            {type:'paragraph',text:"It’s not the 12th best vegan restaurant in the world for no reason, no matter what we ordered, our food was always excellent. They serve classic dishes done incredibly well, their presentation is always beautiful, and their service was the best we’ve experienced in all Latin America. The best part? They’re pretty reasonably priced! Their most expensive dishes are 35 soles or $12 CAD, which is why we ate here almost every day we were in Cusco. The dishes we kept reordering were the Pad Thai for dinner and pancakes for breakfast. You cannot go wrong at this restaurant though – no matter what you order, I am convinced it’ll be great."},


                           ]}/>
  </div>
  </>
)}

export default PeruVeganGuide;
