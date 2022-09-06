import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';

import cusco7 from '../../assets/galleries/cusco/cusco7.jpg'
import sacredValley14 from '../../assets/galleries/sacredValley/sacredValley14.jpg'
import arequipa1 from '../../assets/galleries/arequipa/arequipa1.jpg'
import huacachina14 from '../../assets/galleries/huacachina/huacachina14.jpg'
import cusco2 from '../../assets/blogPics/inTheKnowCusco/cusco2.jpg'
import cusco3 from '../../assets/blogPics/inTheKnowCusco/cusco3.jpg'

const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const InTheKnowCusco = props => {

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
    <BlogBody header ={{src:cusco7, label:'In The Know: Cusco'}}
              nextTitle1={"In The Know: Arequipa"}
              nextTitle2={'Peru Itinerary'}
              nextTitle3={"In The Know: Huacachina"}
              nextPic1 ={arequipa1}
              nextPic2 ={sacredValley14}
              nextPic3 ={huacachina14}
              nextLink1= {'/inTheKnowArequipa'}
              nextLink2= {'/peruItinerary'}
              nextLink3= {'/InTheKnowHuacachina'}
              topBlurb={{type:'topBlurb',
                         updated:'July 2022',
                         content:[{type:'text',text:"Cusco is undoubtedly one of the most popular destinations in Peru. As the gateway to the Sacred Valley and Machu Picchu, it’s a city that all travellers will find themselves in for some amount of time."}]}}

              isMobile={isMobile}
              contentTest ={[{type:'header',text:"In The Know: Cusco"},


                            // TEMP:
                            {type:'paragraph',text: "Cusco is undoubtedly one of the most popular destinations in Peru. As the gateway to the Sacred Valley and Machu Picchu, it’s a city that all travellers will find themselves in for some amount of time. We believe this city has so much to offer outside of being a gate in and out of the Sacred Valley. It’s a very livable city with incredible restaurants, gorgeous architecture, night life, and a good vibe. We spent 10 days in Cusco after a group tour of the Sacred Valley, so we weren't really interested in doing some of the more popular attractions in the city such as ruins and museums. (Though we’ve heard great things about both!) We wanted to create a guide that showcased the less touristy things there is to do in this city."},
                            {type:'header',text:"How long to stay: "},
                            {type:'paragraph',text:"We recommend 2 weeks (cumulatively – you’ll want to spend some time before and after your tour of the sacred valley.) . Although, you could definitely stay longer or shorter than that. You could stay for a couple days before your sacred valley tour or you could live there for a month – Cusco is the kind of place you can stay for a long time and it doesn’t get boring!"},

                            {type:'header',text:"What to do:"},

                            {type:'listItem',text:"1. Hang out in the San Blas neighbourhood"},
                            {type:'paragraph',text:"Our favourite thing to do in most cities is simply walk around, admire the architecture and way of life, and grab a cup of coffee. The best place to do that in Cusco is the San Blas neighbourhood where every street is a delight for the eyes. We recommend watching the streets of San Blas from L'atelier Café’s balcony (the coffee isn’t great, but the views make up for it.) Or park up on a bench in the main square, where on certain days of the week they have a pop up market. Most importantly, wander every charming nook and cranny of this gorgeous neighbourhood (And don’t forget your camera!)"},
                            {type:'horizontalImage',src:cusco2},
                            {type:'listItem',text:"2. Visit the 12th best vegan restaurant in the world, Green Point"},

                            {type:'paragraph',text:"Our favourite restaurant in all of Latin America is Green Point in Cusco. Turns out we’re not the only ones who feel that way because they have been rated the 12th best vegan restaurant in the world. Visiting Green Point is an experience you’ll keep wanting to come back for. It’s open for all meals, has a take away bakery, has their own brewery & distillery, and offers a reasonably priced ‘menu del dia’ lunch every weekday. We practically lived at this restaurant and miss it since we’ve left Cusco! "},

                            {type:'listItem',text:"3. Check out Cusco’s local markets: San Pedro Market & San Blas Market. "},
                            {type:'paragraph',text:"If you want a taste of local life and local food, make sure to check out two of Cusco’s local markets. Not only can you buy a wide range of produce, food, and other goodies, you can learn about Peru’s diverse corn, potatoes, and grains. You can also get a look at some of the herbal and natural remedies Peruvians use to cure ailments. San Pedro is much bigger & offers a huge range of items to browse & purchase. If you go to San Blas Market, check out Govinda Lila, the first vegan restaurant in Cusco. Their menu del dia options are super cheap and very filling!"},


                            {type:'listItem',text:"4. Enjoy food or a beverage from the lovely outdoor cafeteria / garden of Cabin & Garden (you can stay at the cabins too along with a resident llama!)"},
                            {type:'paragraph', text:'While walking around the San Blas neighbourhood, we stumbled upon this cute garden patio with little food and beverage stands and an amazing view of the city. It’s a great place to bring a book, enjoy some sunshine, hang out with some llamas, and enjoy this beautiful city.'},
                            {type:'listItem',text:"5. Do a day trip "},
                            {type:'paragraph', text:'Cusco is rich in day trip options to choose from. There are so many incredible natural wonders that are doable day trips from Cusco: Lake Humantay, Rainbow Mountain, Palccoyo Mountain, and 7 lagunas Ausangate are some of the most popular. We did Lake Humantay and Palccoyo Mountain – and definitely would have done the other two if we had the time.'},
                            {type:'paragraph', text:'One note: I would probably skip Laguna Humantay if you are planning to go to Huaraz! You will see even better blue lagoons for a fraction of the price there.'},
                            {type:'horizontalImage',src:cusco3},


                            {type:'header',text:"Where to eat"},
                            {type:'externalLinkParagraph',content:[{type:'text',text:"Check out our "},
                                                           {type:'link',text:'Cusco Vegan Reel',link:"https://www.instagram.com/p/CetjLu9g7yK/"},
                                                           {type:'text',text:" or "},
                                                           {type:'link',text:'Peru Vegan Food Guide',link:"https://roamingintheknow.com/PeruVeganGuide"},
                                                           {type:'text',text:" for what we ate. "},]},

                           ]}/>
  </div>
  </>
)}

export default InTheKnowCusco;
