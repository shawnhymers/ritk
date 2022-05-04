import React from 'react';
import BlogHeader from "../elements/blogHeader";
import BlogBody from "../../standardComponents/blogBody";
import  { useState,useEffect } from 'react';

const WhistlerActivityGuide = props => {
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
  <div style={{overflofX:'hidden'}}>
    <BlogHeader isMobile={isMobile}/>
    <BlogBody header ={{src:'WhistlerActivityBlog/whistlerActivity16.jpg', label:'Whistler Activity Guide'}}
              blurb ={"Whether you're a winter sports junkie, or a beach bum; Whistler has a great day in store for you."}
              updated={'December 2021'}
              isMobile={isMobile}
              contentTest ={[{type:'header',text:'Unique Things to Do in Whistler if you don’t Bike or Ski/Snowboard '},
                             {type:'paragraph',text:'Whistler is a resort town at the base of Blackcomb and Whistler Mountain. (traditionally called Skwikw by the Sḵwx̱wú7mesh (Squamish) Nation and Cwitima in the language of the Líl̓wat Nation.) People flock from all parts of the world to mountain bike in the summer months and ski/snowboard in the winter. These slopes had the world’s eyes on them during the 2010 Winter Olympics and continue to be a place for international competitive events. '},
                             {type:'paragraph',text:'Shawn spent a summer learning how to mountainbike back in 2016, but for the most part Shawn and I don’t participate in the sports most people come to Whistler to do, so we’ve gotten to know everything else there is that’s fun to do in the town. We do hope to eventually participate in these sports, but it’s very expensive (and at times painful) to learn, so we haven’t yet. '},
                             {type:'diptych',src1:'WhistlerActivityBlog/whistlerActivity7.jpg',src2:'WhistlerActivityBlog/whistlerActivity13.jpg'},

                             {type:'header',text:'How to get there:'},
                             {type:'paragraph',text:'Whistler is a 1.5 hour drive north of Vancouver along the sea to sky highway. If you’re coming from Vancouver (which chances are, you will be) you can save both money and carbon footprint by taking the Epic Rides bus to Whistler. This bus is fast, convenient, and inexpensive. ($35 roundtrip per person). A hidden bonus of taking this bus is that you can bring your bikes/skis/snowboards free of charge.'},

                             {type:'header',text:'Summer:'},
                             {type:'paragraph',text:"If you're in Whistler in the summertime and not biking, chances are you’ll want to be hiking or swimming in one of Whistler’s gorgeous lakes. Here is a list of our favourite places to walk, hike, and swim. "},
                             {type:'horizontalImage',src:'WhistlerActivityBlog/whistlerActivity3.jpg'},


                             {type:'listItem',text:'1) Exploring Whistler & Blackcomb Mountain’s Alpine '},
                             {type:'paragraph',text:'If you’re not on a budget, buying a Whistler Blackcomb 360 Experience pass is well worth your while. You can get the day pass or the season pass which lasts from July-September. With either, you get unlimited access to the Whistler and Blackcomb gondola, peak to peak gondola, and the peak chair at the top of Whistler. These gondolas and chair lifts give you access to dozens of alpine hiking trails of different difficulty levels. What I love about this pass is that it gives you the ability to hike the alpine without having to hike up the mountain first. It also makes the alpine and it’s spectacular views accessible to folks of different ages and ability levels. Our favourite blue trail is Blackcomb’s Lakeside Loop and favourite black trail Whistler’s High Note Trail. (Pro tip: If you’re not down for the entire 9.4kkm long high note trail, you can find the best views of the entire trail (photo below) by hiking about 20 mins past the fork that takes you up the half note. Once you’ve experienced those views, hike back to the fork and go up the half note instead. It saves you about 3 km of the most difficult terrain of the hike, but you don’t skip out on any of the best views.)'},
                             {type:'paragraph',text:"Through the use of helicopters, Whistler went from a 50% to a 5% tree removal method for their trails. So when you hike Blackcomb Ascent Trails, you are experiencing the alpine as true to its origin as possible, without being in the backcountry. We appreciate that Whistler is finding as many ways as possible to reduce its environmental footprint and to preserve the mountain’s natural beauty as much as possible."},
                             {type:'paragraph',text:"If you get the season pass, don’t skip out on cloudy days where there is hardly any visibility at the peak. It’s really fun to literally have your head in the clouds and watch them float by in front of you."},
                             {type:'horizontalImage',src:'WhistlerActivityBlog/whistlerActivity14.jpg'},

                             {type:'listItem',text:'2) Explore Whistler Creekside, Nita Lake & Rainbow Park via the Valley Trail'},
                             {type:'paragraph',text:"If you’ve spent a lot of time in Whistler Village, consider exploring Whistler's smaller and more quaint Creekside Village. If you peep our Whistler Vegan Food Guide, you’ll find fun places to eat and drink and Creekside has easy access to the less frequented parts of the Valley Trail. We personally love spending the morning at Nita Lake Lodge (visit the Fix cafe or Aura Restaurant for brunch), dipping our toes in Nita Lake, and walking the valley trail to Rainbow Park/Alta Lake. Both Nita Lake and Rainbow Park have docks where you can launch inflatable paddle boards or kayaks if that’s your jam. This route allows you to see two of Whistler’s prettiest lakes accessible by the valley trail and is a really nice hour long walk. We recommend doing this as a morning activity considering how many nice breakfast/coffee options there are at Creekside."},
                             {type:'diptych',src1:'WhistlerActivityBlog/whistlerActivity9.jpg',src2:'WhistlerActivityBlog/whistlerActivity10.jpg'},

                             {type:'listItem',text:'3) Hike Whistler’s Trainwreck Trail'},
                             {type:'paragraph',text:'This family-friendly trail is pretty fun for all ages and can be best described as short and sweet. The 2 km hike leads you over a beautiful suspension bridge to an area with 5 abandoned trains which you can explore by going inside them or climbing up on top of them. All the trains are covered in graffiti and are fun to photograph even if you’re not a train photography bro. The trailhead is 10-15 minutes south of Whistler Village by car, and around 30 mins by bus.'},
                             {type:'diptych',src1:'WhistlerActivityBlog/whistlerActivity1.jpg',src2:'WhistlerActivityBlog/whistlerActivity2.jpg'},

                             {type:'listItem',text:'Honourable mention:'},
                             {type:'paragraph',text:'Though extremely popular (and therefore not so unique) we always have a great time at Lost Lake. It’s an absolute stunner and always a fun time.  We love to take our inflatable boat and paddle out to the dog dock to meet new four legged friends. During a certain period of time in the summer, there are a few weeks where toads cross the valley trail that leads to the lake so beware of that. When that happens the parking lot closes and the free shuttle bus can’t take you too close, but you can still get to it. Just be careful not to squish the little guys!'},
                             {type:'horizontalImage',src:'WhistlerActivityBlog/whistlerActivity4.jpg'},

                             {type:'header',text:'Winter:'},
                             {type:'paragraph',text:'If you’re in Whistler in the winter time and are at a loss with what to do aside from skiing and snowboarding, here are some ideas:'},

                             {type:'listItem',text:'1) Visit Lost Lake’s nordic skiing and snowshoeing trails.'},
                             {type:'paragraph',text:"Shawn and I decided to give snowshoeing a go on our last winter trip to Whistler and it did not disappoint. In fact, our expectations were wildly exceeded. We’ve been around the Lost Lake trails plenty of times in the summer, so we weren't expecting this to feel that different from our summer hike’s, but we felt like we were in a completely different place. The snowshoe trails are narrow and single file, run along creeks, and weave beneath stunning snow-covered trees. We felt like we were in a winter paradise. It helped that on the afternoon we went, we were met with light snowfall which added to the magic of it all. We rented snowshoes and paid for a day pass in order to do this which ended up being pretty expensive ($70 for the both of us.) At first we couldn’t believe how much we paid, but as we began experiencing the trails and how wonderfully they are maintained, we felt it was worth it. Our first snowshoe experience definitely spoiled us."},
                             {type:'horizontalImage',src:'WhistlerActivityBlog/whistlerActivity15.jpg'},

                             {type:'listItem',text:'2)  Ice Skate in Whistler Village'},
                             {type:'paragraph',text:'Though we never got around to going ice skating on our last winter trip to Whistler, we did walk by the ice rink and it looked really fun. If you’re not skiing or snowboarding, walking the village stroll and ending with a skate around the ice rink is a lovely way to spend the afternoon. Once you’re done ice skating, may we recommend rolling up to PureBread for a warm drink and fun treat?'},
                             {type:'paragraph',text:'A bonus of this activity is that it’s price tag is slightly less which makes it a more affordable family activity.'},

                             {type:'listItem',text:'3) Peak to Peak Gondola'},
                             {type:'paragraph',text:"Though we included the 360 experience pass in our summer to-do list, you can still go up the mountain and ride the peak to peak gondola in the winter. We’ve heard it’s absolutely stunning on a clear sunny day. This activity is definitely on the pricier side, but if you’re traveling from far, the view from the peak to peak is hard to miss."},
                             {type:'paragraph',text:"A fun fact about Whistler Mountain is that it’s on a mission to be carbon neutral and is getting pretty close. Back in 2010, they built a micro hydro renewable energy plant with BC Hydro and Innergexn which returns to the grid a good percentage of Whistler Blackcomb's annual demand. They also donate to various carbon capture programs each year to address this deficit, essentially meaning their energy consumption is carbon neutral. Got to love outdoorsy activities that don’t harm the environment in the process!"},
                             {type:'paragraph',text:"That concludes our round up of unique things to do in whistler if you aren’t participating in the go-to activities. There is plenty more to do in Whistler than just this, but these are our personal favourites. If you want a more extensive list, we recommend checking this one out. It’s winter specific but has lots of things that are both seasons."},
                             {type:'horizontalImage',src:'WhistlerActivityBlog/whistlerActivity17.jpg'}

                           ]}/>
  </div>
  </>


)}

export default WhistlerActivityGuide;
