import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';
import medellin15 from '../../assets/galleries/medellin/Medellin15.jpg'
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const MedellinFoodGuide = props => {

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
    <BlogBody header ={{src:medellin15, label:'Medellin Food Guide'}}
              blurb ={"Medellin has one of the fastest growing and exciting vegan food scenes in Latin America."}
              updated={'June 2022'}
              isMobile={isMobile}
              contentTest ={[{type:'paragraph',text:"Medellin has one of the fastest growing and exciting vegan food scenes in Latin America. When we arrived and typed ‘vegan’ into google maps and more than 20 red pins showed up, I nearly cried from joy. After spending two weeks in Medellin, we feel we hardly scratched the surface of all the vegan options this city had to offer. The best part about Medellin being a vegan food destination, is that you don’t have to spend a lot! Even the nicer restaurants are so reasonably priced! "},
                             {type:'paragraph',text:"Below is a list of all the restaurants we frequented during our stay in Medellin:"},

                             {type:'listItem',text:"AMA Restaurante"},
                             {type:'paragraph',text:"This 100% vegan restaurant and market has a rotating Menu of the Day which features a soup, main, small dessert, and juice for the incredible price of 18k pesos ($4.75 US) The owner strongly believes that vegan food should be healthy, wholesome, and filling, and she brings that mission to every meal they create. She succeeds in her mission because everytime we visited everything was so delicious and always felt so healthy. We could have dined here every day. "},

                             {type:'listItem',text:"Helecho Vegan Sushi"},
                             {type:'paragraph',text:"This 100% vegan sushi restaurant features a wide array of unique sushi roll options and delicious appetizers. We were blown away by the interesting menu selection and had a hard time choosing what to eat. We tried their Cauliflower Bonbons, Tempura roll, and Green roll. We were both super happy with everything we ordered and loved the unique flavour profile of all the items. Our bill came to 75k pesos ($20 US)  for the three items. "},

                             {type:'listItem',text:"Naturalia Café"},
                             {type:'paragraph',text:"Naturalia Cafe is a vegetarian restaurant that has a wide range of vegan options, and came highly recommended to us by a few locals. They are a neighborhood watering hole, serving breakfast, lunch & dinner, and even put on events in the evening. We tried their breakfast offerings and would love to come back and try their lunch/dinner menu. We first ordered their acai bowl (thinking it was going to be like a yogurt bowl) and were surprised when it came back more like an icecream dessert bowl. (Dessert for breakfast anyone?) We also ordered waffles and a sandwich. We were both happy with our meals but not overly impressed, we definitely want to go back one day and try more of their menu! "},

                             {type:'listItem',text:"TacoVeg"},
                             {type:'paragraph',text:"This casual Mexican food stand that is 100% vegan must have been our most frequented restaurant. It was steps away from our accommodation and was so reasonably priced and delicious! We loved all the dishes we tried but were most blown away by their quesadilla. The vegan cheese they use is delicious and they also include a mix of vegetables and soy meats which come together to create an incredible flavour profile. TacoVeg resembles a fast food place but has heart and creativity in their menu. I even overheard non vegans at our accommodation say how much they liked it! "},

                             {type:'listItem',text:"Café Zorba"},
                             {type:'paragraph',text:"Cafe Zorba came as the most highly recommended food spot for us to check out. Turns out we’re not the only people getting the recommendation, because the first time we attempted to go there the wait time was 30-45 minutes and we had to try again another day. This may sound pretty normal for a lot of North American cities, but this is by far the longest wait time we faced in our entire time traveling Latin America. "},
                             {type:'paragraph',text:"They are a vegetarian pizzeria that offers a few vegan pizzas. We tried all three vegan pizzas (you can split a pizza into two flavours so we were able to try all three between the two of us.) The vegan options were a marinara, spinach, and kale pizza. All were great but the spinach one was incredible – it featured pistachios, caramelized onion, and whipped macadamia cream. (If you can only get one, may it be the spinach option!) Their pizzas are priced at 32k pesos each ($8.50 US) On top of their food being great, their ambiance is really nice for a date night. "},

                             {type:'listItem',text:"VegStation"},
                             {type:'paragraph',text:"VegStation is a 100% vegan restaurant that serves unique & delicious burgers, noodles, and a delicious array of appetizers. This was the first place we went in Medellin (after spending a week in virtually-no-vegan-food-Cartagena) and almost cried as we took a bite of our little empanaditas as it was so good (deep fried perfection!) We also ordered the Navy Burger and the Ramen. The Ramen was okay, but the navy burger really impressed us both. The real star of the show was the potatoes that came with the burger as they tasted like little cheese sticks? I’m not sure how they got a potato to taste like that but we were mega impressed! "},
                              {type:'paragraph',text:"If you’re going to Medellin soon (first of all, we are jealous!) we hope this helps you find a delicious vegan bite to eat! "},


                           ]}/>
  </div>
  </>
)}

export default MedellinFoodGuide;
