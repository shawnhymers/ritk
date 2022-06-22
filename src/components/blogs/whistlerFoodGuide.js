import React from 'react';
import DesktopHeader from "../sharedComponents/navComponents/desktopHeader";
import MobileHeader from "../sharedComponents/navComponents/desktopHeader";
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';

const WhistlerFoodGuide = props => {
  const[isMobile, setIsMobile]=useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
      updateDimensions()
    window.addEventListener("contextmenu", e => e.preventDefault());

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
  <BlogBody header ={{src:'WhistlerFoodGuide/whistlerFood5.jpg', label:'Whistler Food Guide'}}
            blurb ={"Whistler isn't the most vegan friendly place in the world, but here are a few gems!"}
            updated={'December 2021'}
            isMobile={isMobile}
            contentTest ={[{type:'header',text:'Whistler Food Guide'},
                           {type:'paragraph',text:"Despite its proximity to Canada’s vegan capital (Vancouver) and being a hub for outdoor and wellness activities, Whistler doesn’t have an abundance of plant-based dining options. As someone who frequents the town a lot, this has been a source of frustration for me. Many of Whistler’s top dining options recommended through mainstream blogs/vlogs can hardly offer a salad to vegans which is a bummer for folks looking to celebrate a special occasion."},

                           {type:'header',text:"Top ‘Going out for a nice meal’ Dining Options:"},
                           {type:'paragraph',text:'Whistler has become a go-to destination for special occasions. I haven’t experienced one trip where I haven’t come across at least 5 bachelorette parties. Since Shawn and I typically visit more often in the summertime, we usually spend our anniversary in the town which means we are on the constant lookout for vegan-friendly spots to have a nicer meal. Here are our favorites:'},

                           {type:'listItem',text:'The Raven Room, $$$'},
                           {type:'paragraph',text:'Located in Pan Pacific Village Center, The Raven Room is a young restaurant that a local couple, Steph and Jason, opened three years ago. The main dishes of their menu rotate based on what’s in season, which makes this restaurant a fun spot to stop by during every visit, as there is always something new. Despite their menu constantly changing, they promise to always have a quarter of their menu be vegan. (Which is a better percentage than most places in the town!) The Raven Room is also really well known for their cocktails, and if that’s not your thing, will make a really great mocktail as well.'},
                           {type:'paragraph',text:'We had the privilege of trying most of the vegan items on their menu and found their appetizers to be a real stand out. Based on them alone, the Raven Room rose to the top spot in our vegan food in Whistler list.'},
                           {type:'diptych', src1:'WhistlerFoodGuide/whistlerFood2.jpg', src2:'WhistlerFoodGuide/whistlerFood3.jpg'},

                           {type:'paragraph',text:'Our favorite dishes: Crispy Cauliflower'},
                           {type:'paragraph',text:'It sounds boring but it’s anything but. I know that a cauliflower dish is a go-to vegan dish on almost every restaurant menu, but trust me when I tell you none stand up to this one. I’ll go ahead and say that this cauliflower dish is the best in the entire sea-to-sky corridor and lower mainland of Vancouver. (Which is saying a lot considering how many vegan restaurants there are in that area!)'},
                           {type:'paragraph',text:'Runner up: a tie between their Fried Maki and Beet Tartare. Both are unique, delicious, and surprising in the best of ways. '},

                           {type:'listItem',text:'Aura Restaurant, Nita Lake Lodge, $$-$$$'},
                           {type:'paragraph',text:'Though we have never stayed at Nita Lake Lodge, we always give this beautiful accommodation in Whistler’s Creekside Village a spot on our itinerary. They have two restaurants, a coffee shop, a spa, access to walking and biking trails, and a publicly accessible lake/dock. It’s a beautiful place that brings us great joy whether we are dining there or not. We have dined there on multiple occasions for dinner and brunch, and for the purposes of this list we are highlighting their brunch menu. It’s one of the few places in Whistler where you can find more than one vegan option on a brunch menu, and they sure do not disappoint.'},
                           {type:'paragraph',text:'Since there are only two vegan options at the moment on their brunch menu there isn’t much use highlighting our favorite dishes. They have one sweet (banana bread french toast) and one savory option (tofu and hash scramble), so it’s totally up to your taste buds which one to go with. Both are unique spins on classic breakfast items that’ll leave you impressed and satisfied.'},
                           {type:'diptych', src1:'WhistlerFoodGuide/whistlerFood6.jpg', src2:'WhistlerFoodGuide/whistlerFood1.jpg'},

                           {type:'header',text:'Top ‘Take out or easy cheap(er) meal’ Options:'},
                           {type:'listItem',text:'Ed’s BReD, $'},
                           {type:'paragraph',text:'Though this is a take out only spot, it deserves a top spot on this area of the food guide. This is a vegan bakery/coffee shop that creates daily savory and sweet baked goods in Whistler’s Creekside Village. We will often swing by and grab their sourdough tartine for lunch. Their sourdough tartine’s have different toppings depending on the day as they are always switching things up depending on what’s in season. They remind me of pizza buns – but much more sophisticated! While you’re there, you must also pick up a loaf of sourdough bread or some of their incredible cinnamon rolls. As you can tell, we have no fear of carbs and you shouldn’t either when you visit this place!'},
                           {type:'diptych',src1:'WhistlerActivityBlog/whistlerActivity9.jpg',src2:'WhistlerActivityBlog/whistlerActivity10.jpg'},

                           {type:'listItem',text:'La Cantina Tacos, $'},
                           {type:'paragraph',text:'La Cantina is a no-frills take out spot (with tables you can dine at) that offers vegan or vegan optional Mexican food. My personal favourite is the Mestizo taco – so simple but so yum.'},
                           {type:'header',text:'Honorable Mentions:'},
                           {type:'listItem',text:'Earls, $$'},
                           {type:'paragraph',text:'Earls has really stepped up it’s game when it comes to plant-based options. I was pleasantly surprised when last summer I found they had an entire section of their menu dedicated to plant-based eats. Our favourite dishes on the menu are the Crispy Tofu Roll and Zen Bowl. If you come during happy hour, a lot of our favourite dishes have a good discount on them. The only reason this isn’t on the list is that we find it can be hit or miss with them. It seems that depending on the chef, the menu items taste slightly different.'},
                           {type:'listItem',text:'Tandoori Grill Indian Cuisine, $$'},
                           {type:'paragraph',text:'Whistler has a number of Indian restaurants, but we have only tried this one. We really like their vegan/vegetarian options and appreciate that they label the vegan items so clearly. Shawn really likes them but I’m kinda whatever about them, so that’s why it goes into the honourable mentions.'},
                           {type:'listItem',text:'The Green Moustache Organic Café, $$'},
                           {type:'paragraph',text:'The Green Moustache is one of the few 100% plant-based spots in Whistler (Eds BReD being the other) and while we really want to love this place, we haven’t been *that* impressed by what we have tried. We felt like we couldn’t leave a 100% vegan spot off the list though, and admit that we haven’t tried much from their menu. So if you’re looking for breakfast items, smoothies, and take out items before 3pm, this might be worth a try!'},
                           {type:'paragraph',text:'That wraps up our Whistler Vegan food guide! Eating vegan is one of the easiest ways to reduce your carbon footprint while at home or on the road. If you’ve been to this special place, where did you eat? Let us know if we missed one of your favourites!'}
            ]}/>
            </div>
  </>
)}

export default WhistlerFoodGuide;
