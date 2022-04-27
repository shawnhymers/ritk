import React from 'react';
import BlogHeader from "../elements/blogHeader";
import BlogBody from "../../standardComponents/blogBody";
import  { useState,useEffect } from 'react';

const VancouverFoodGuide = props => {

  const[isMobile, setIsMobile]=useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
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

    <BlogHeader isMobile={isMobile}/>
    <BlogBody header ={{src:'vancouverFood.jpg', label:'Vancouver Food Guide'}}
              blurb ={"Whether you're a vegan veteran, or just looking to expand your plant based options -- this guides got you covered."}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[{type:'paragraph',text:"I’m just going to come out and say it: Vancouver is the mecca of vegan food."},
                             {type:'paragraph',text:"I have not been to every city on HappyCow’s top vegan friendly cities list (though I plan to!), but I feel like Vancouver’s vegan community is hard to beat. It’s diversity of options makes this vegan food guide difficult for a very different reason than most cities – how do I choose my favorites?! "},
                             {type:'paragraph',text:"I have to admit that I have not tried every vegan restaurant in Vancouver’s Lower Mainland, but I have tried A LOT. So many in fact, that I will divide this food guide into 3 categories instead of my usual two."},
                             {type:'diptych', src1:'VancouverFoodBlog/vancouverFood8.jpg',src2:'VancouverFoodBlog/vancouverFood7.jpg'},

                             {type:'header',text:"Top ‘Going out for a nice meal’ dining options:"},
                             {type:'listItem',text:"1) Mila"},
                             {type:'paragraph', text:'Mila filled a void in Vancouver’s vegan food scene for a more upscale experience. Their great atmosphere and unique dishes make it a fun place to go for a special occasion. My favourite dish of theirs is their Fish & Chips – instant nostalgia.'},
                             {type:'horizontalImage',src:'VancouverFoodBlog/vancouverFood2.jpg'},

                             {type:'listItem',text:"2) Aleph"},
                             {type:'paragraph', text:'Aleph is always a good idea for brunch or dinner. I’ve celebrated two special occasions here and am always blown away by what I have. My favourite dish is their pancakes – it’s saying something when the most simple thing on their menu is mind blowing.'},

                             {type:'listItem',text:"3) Sula"},
                             {type:'paragraph', text:'Sula is the only not exclusively vegan place on this list but I definitely felt like I needed to mention it. I was so impressed by their vegan Indian dishes and atmosphere that I would be remiss not to recommend checking it out. Shawn and I both agree that it’s the best Indian food we have ever tried. And though they are not a strictly vegan restaurant, the moment they heard we were looking for a vegan meal they told us all about what rice and naan options were fully vegan. They were so knowledgeable and kind that we didn’t have to second guess any of the food at all.'},

                             {type:'header',text:"Top chill restaurant dining options:"},
                             {type:'listItem',text:"1) Pizzeria Grano"},
                             {type:'paragraph', text:'I don’t know about you, but I find good vegan pizza hard to come by. So when I first tried Pizzeria Grano’s brick oven Neapolitan pizza, I was blown away. They offer a wide variety of pizza’s (17 to be exact!) with three different bases, and you cannot go wrong. My favourite is the pepperonata. Also, if you have room, get a slice of tiramisu – it’s unreal! '},
                             {type:'horizontalImage',src:'VancouverFoodBlog/vancouverFood6.jpg'},

                             {type:'listItem',text:"2) MeeT"},
                             {type:'paragraph', text:'It doesn’t matter who you are with (vegan or not) there is something for everyone at MeeT. While no particular dish stands out to me, it’s the quantity of really good dishes for brunch, lunch, and dinner that puts MeeT on this list. What’s fun about MeeT is that they are constantly experimenting - check out their weekly specials at their three locations. There is always something new and innovative! '},
                             {type:'horizontalImage',src:'VancouverFoodBlog/vancouverFood5.jpg'},

                             {type:'listItem',text:"3) Chickpea (& Chickpea Food Truck)"},
                             {type:'paragraph', text:'While my first experience at Chickpea was a miss, it was their food truck that got me giving them a second chance. As one of those rare vegans who doesn’t love falafel, the fact I like theirs is saying something. Don’t miss their brunch (hello waffles!) and falafel platter with chickpea fries (omg their fries!)'},

                             {type:'header',text:"Top take out/cafe Options:"},
                             {type:'listItem',text:"1) Kind Cafe"},
                             {type:'paragraph', text:'There is so much to love about Kind Cafe: their unique dishes, their specialty lattes, and their zero waste policy. They are a counter service cafe with restaurant quality dishes. My favourites are their Mediterranean Bowl and Buffalo Cauliflower Flatbread. They also make the most unique lattes - the Blue Lavender is my personal favourite. '},
                             {type:'horizontalImage',src:'VancouverFoodBlog/vancouverFood9.jpg'},

                             {type:'listItem',text:"2) Veg Out Food Truck"},
                             {type:'paragraph', text:'This is one of two places on this list that I’ve only frequented once, but that one time left a big impression. It was specifically their wings that left the big impression, despite their small bite. We got their buffalo flavoured ones! '},

                             {type:'listItem',text:"3) Beet Box"},
                             {type:'paragraph', text:'There are many vegan burger spots in Vancouver, but Beet Box takes the cake for our favourite one. (Planetary Burger is our runner up!) Shawn’s favourite is the Nashville Fried Chick-Un Sandwich and mine is the Burger with Cheeze (simple done well!)'},

                             {type:'paragraph', text:'Honestly, there are so many other amazing places to try in Vancouver and I could easily go on but I had to limit myself. What are your favourite spots? I would love to know! '},


                           ]}/>
  </>
)}

export default VancouverFoodGuide;
