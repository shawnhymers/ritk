import React, {  lazy} from 'react';
import BlogBody from "../sharedComponents/blogComponents/blogBody";
import  { useState,useEffect } from 'react';
const DesktopHeader = lazy(() => import('../sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('../sharedComponents/navComponents/mobileHeader'));

const BanosActivityGuide = props => {

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
    <BlogBody header ={{src:'banos/banos20.jpg', label:'Banos Activity Guide'}}
              blurb ={"Most travelers assume all the adventure Ecuador has to offer is to be had in the Galapagos, but that’s far from the truth. "}
              updated={'May 2022'}
              isMobile={isMobile}
              contentTest ={[{type:'header',text:"Banos Activity Guide"},

                            {type:'paragraph',text:'Most travelers assume all the adventure Ecuador has to offer is to be had in the Galapagos, but that’s far from the truth. When we visited Ecuador, we didn’t have time (or budget!) to visit the Galapagos, but it still ended up being an incredible, adrenaline filled, gorgeous destination nevertheless. Banos is a small city, 3-4 hours south of Quito, and it is Ecuador’s adventure capital. It’s a stunning town, surrounded by gorgeous green mountains, rivers, and waterfalls. We spent a week in this town and found plenty of adventures to go on that ranged from nice and relaxing to extremely adventurous. We have compiled a guide of the activities we did in Banos in order of most chill to most adventurous.'},

                            {type:'header',text:"Top 5 Things To Do"},

                            {type:'listItem',text:"1. Visit a Thermal Bath"},
                            {type:'paragraph',text:"Did you know Banos is famous for its healing and holy thermal baths? The city’s full name is Baños de Agua Santa (Bath of Holy Water) and has hot springs powered by Tungurahua Volcano. Many people believe that the Virgin Mary appeared by the waterfall, Cascada de la Virgen, that’s visible from the entire area and this sighting started the belief that the water is holy. The water contains minerals such as sulfur, silica, sodium and potassium chloride, potassium sulfate, magnesium bicarbonate, calcium and iron, which many people believe gives it healing effects."},
                            {type:'paragraph',text:"We visited two of the cheaper baths: Termas de la Virgen  (entry is $3 per person), the original thermal bath, and El Salado (entry is $4 per person), the slightly newer bath. Our favourite bath was definitely El Salado, which felt much cleaner and had much better temperature options for the baths. A bonus feature of El Salado is it has a river running right next to it, so you can cool off in the river rather than a cold bath which we found to be very incredible. "},
                            {type:'diptych',src1:'banos/banos3.jpg',src2:'banos/banos4.jpg'},
                            {type:'paragraph',text:"El Salado is also the less touristy of the two, and we found ourselves sitting in baths with local residents ranging from 60-80+ years old. Ecuadorians believe bathing in this water will prevent poor health and heal them from a range of ailments and illnesses. We were the youngest people there (unless you count the grandchildren that got dragged along!) We found going to El Salado to be a local experience much more than we had anticipated. "},
                            {type:'paragraph',text:"If you are feeling like a more upscale experience, there are beautiful baths in a spa environment at the Luna Volcan Adventure Spa. (Entry is $20 per person) "},

                            {type:'listItem',text:"2. Visit La Casa del Arbol "},
                            {type:'paragraph',text:"La Casa del Arbol is Banos’ most instagrammable spot. While we are usually hesitant to go to such an “instagrammy” place, we were happy we did because we were blown away by how beautiful this property is. It’s far more than just a pretty swing! For only $1, you get access to immaculate grounds planted with beautiful flowers, many incredible view points of the surrounding valleys, exhilarating swing sets, and a tiny zip line. You can stay for as long as you like, and if you want you could spend some time at their reasonably priced cafe. There’s also nothing stopping you from bringing your own picnic and setting up a spot to take in the incredible view! "},
                            {type:'paragraph',text:"Our only word of caution is getting back from the swing set! The bus does not run frequently so try to time your visit with when the bus times are. Or you could arrange a pick up time with your cab driver. "},
                            {type:'horizontalImage',src:'banos/banos5.jpg'},

                            {type:'listItem',text:"3. Hike to Sendero de la Virgen"},
                            {type:'paragraph',text:"On the mountain’s that surround the city, there are multiple look out points to the valley below. One of them is a large Virgin Mary statue that you can hike to from one of the town’s main roads. One morning us and a group of friends set out to hike this one, somewhat oblivious to the fact the hike was almost 700 stairs straight up. Once we got up to the statue, it was inside a cloud so we didn’t get rewarded with a spectacular view. But every now and then the clouds would break to reveal the valley below. On a clear sunset, this hike would be spectacular and worth the challenging trek up as the views of the valley are unbeatable. It’s a great workout no matter what, if that’s your thing!"},
                            {type:'diptych',src1:'banos/banos1.jpg',src2:'banos/banos2.jpg'},


                            {type:'listItem',text:"4. Bike the Ruta de las Cascadas"},
                            {type:'paragraph',text:"If there’s one thing you need to do while in Baños, it’s bike the Ruta de las Cascadas, a 20km stretch of highway that has many incredible waterfalls and lots of fun adventure activities. Us and a group of friends rented bikes from a shop in town for the day for only $5 a bike and decided to do the route self-guided (we were lucky as one of our pals is Ecuadorian who’d biked the route before!) It’s totally doable to do the route self-guided if you study the route a bit ahead of time. There’s only a handful of confusing spots but for the most part it’s straight forward. Do be warned though, even with our local sim card we were in and out of service all day as we biked through some more rural areas."},
                            {type:'horizontalImage',src:'banos/banos12.jpg'},
                            {type:'paragraph',text:"We stopped at the first waterfall, Cascada de Agoyán, to do a $10 zip line over it. At first we were nervous because the zipline office looked essentially deserted but then we found a helpful and encouraging employee to help us out. The zipline was incredible as you literally fly over the massive waterfall and incredible valley below. This was the only zipline we did, but there are plenty of other options along the route, including Ecuador’s longest zipline. As far as views go, we think this one was the best option. "},
                            {type:'horizontalImage',src:'banos/banos8.jpg'},
                            {type:'paragraph',text:"Then we saw a few more waterfalls, Cascada Manto de la Novia and some other smaller ones, before arriving at the biggest and most famous waterfall of them all: Paílón del Diablo. It costs $2 each to enter the area of Paílón del Diablo and includes a small 20 minute hike. You can climb behind the waterfall, go on a suspension bridge, and sit at a cafe overlooking the falls. We were wowed by the power and beauty of these falls. "},
                            {type:'diptych',src1:'banos/banos19.jpg',src2:'banos/banos18.jpg'},
                            {type:'paragraph',text:"One of the best parts of this bike route is it’s almost all downhill or flat. Aside from a couple small uphill sections you’re mostly blasting downhill. Naturally, we worried about the return trip, but fortunately there are trucks waiting at the end point for you and they will ferry you and your bike back to town for just $2.50."},
                            {type:'paragraph',text:"Accessibility note: if you cannot bike, there are scooter rentals in town which would be equally fun. There are also tours that drive you to all the falls but we all agreed that the scenery on the bike ride was the highlight for us. "},
                            {type:'diptych',src1:'banos/banos16.jpg',src2:'banos/banos17.jpg'},

                            {type:'listItem',text:"5. Repel a Waterfall "},
                            {type:'paragraph',text:"If there’s a place to rappel down waterfalls, Banos is the spot! This town is known for its incredible waterfalls and has a wide range of adventurous water activities to do because of it. You can go rafting here which we heard is extremely fun and also do canyoning (which is essentially rappelling). Our group decided to go canyoning with the tour company that works with the hostel Selina called Explorsierra. We got picked up from the hostel, given our wetsuits and shoes, and were driven approximately 45 minutes to where we began a hike up the waterfall with all our gear on. Once we completed the hike, we repelled down 3 large waterfalls and one small waterfall, and finished our time sliding down some rocks (a pretty big drop, you still have to be attached to ropes for it!) The entire time the guides were taking go-pro photos and videos so we could relive the exhilarating and frightening experience afterwards! Of all the adventurous activities I have done, this was by far the scariest and most adrenaline fueled! Some of those waterfalls were close to 40 feet high! "},


                           ]}/>
  </div>
  </>
)}

export default BanosActivityGuide;
