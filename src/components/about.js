import React, {  lazy, Component } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import {BsInstagram, BsYoutube} from "react-icons/bs";
import {SiTiktok} from "react-icons/si";
import { Link } from "react-router-dom";
import coupleIcon from "../assets/main/coupleIcon.png"

import about1 from '../assets/about/aboutPic1.jpg'
import about2 from '../assets/about/aboutPic2.jpg'

import about3 from '../assets/about/aboutPic3.jpg'
import about4 from '../assets/about/aboutPic4.jpg'

import about5 from '../assets/about/aboutPic5.jpg'
import about6 from '../assets/about/aboutPic6.jpg'

import about7 from '../assets/about/aboutPic7.jpg'
import about8 from '../assets/about/aboutPic8.jpg'

import about9 from '../assets/about/aboutPic9.jpg'
import about10 from '../assets/about/aboutPic10.jpg'

import about11 from '../assets/about/aboutPic11.jpg'
import about12 from '../assets/about/aboutPic12.jpg'

import about13 from '../assets/about/aboutPic13.jpg'
import about14 from '../assets/about/aboutPic14.jpg'
import about15 from '../assets/about/aboutPic15.jpg'

const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));
const Footer = lazy(() => import('./sharedComponents/footer'));
// const LoadScreen = lazy(()=> import('./sharedComponents/loadScreen'))


class AboutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      isLoaded:false,
      showOutcomeMessage:false,


    };
    this.updateDimensions = this.updateDimensions.bind(this);
  };
  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    setTimeout(() => {
      this.updateDimensions();
    }, 300)


  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    if (windowWidth>= windowHeight) {
      if (this.state.isMobile) {
        this.setState({isMobile:false});
      }
    }
    else {
      if (!this.state.isMobile) {
        this.setState({isMobile:true});
      }
    }
  }

  render() {
return(
  <>

    <div style ={{overflowX:'hidden'}}>
      {this.state.isMobile?
          <MobileHeader changeView ={this.updateView}
                         page ={'about'}/>
      :
          <DesktopHeader changeView ={this.updateView}
                         page ={'about'}/>
      }
      <Row className = 'roaming-white vertical-padding-md centered-children' style ={{minHeight:'70vh'}}>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} className ='centered-children'>
          <Container>
            <Row  style ={{paddingTop:'2em'}} >
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className ='centered-children'>
                <img loading="lazy"style ={{width:'90%'}}src ={coupleIcon} alt ='coupleIcon' className = 'couple-icon'/>
              </Col>
            </Row>
            <Row  style ={{marginLeft:'5%',paddingTop:'1em',paddingBottom:'2em'}}className ='horizontal-centered-children '>
              <Col style ={{maxWidth:'2.6em'}}>
                <Link to={{pathname:'https://www.instagram.com/accounts/login/?next=/roamingintheknow/'}}
                      className = 'centered-children'
                      target="_blank" >
                  <BsInstagram size ='1.5em'
                               style ={{cursor:'pointer'}}
                               color='#595456'/>
                </Link>
              </Col>
              <Col style ={{maxWidth:'2.6em'}}>
                <Link to={{pathname:'https://www.tiktok.com/@roamingintheknow'}}
                      className = 'centered-children'
                      target="_blank" >
                  <SiTiktok size ='1.5em'
                            style ={{cursor:'pointer'}}
                            color='#595456'/>
                </Link>
              </Col>

              <Col style ={{maxWidth:'10em'}}>
                 <p className ='centered-text roaming-text-sm charcoal' >@roamingintheknow</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} xl={7}>
          <Row style ={{marginLeft:'5vw',marginRight:'5vw'}}  >
            <p className ='roaming-yellow-text roaming-text large-header-text'>WE ARE ROAMING IN THE KNOW!</p>
          </Row>
          <Row style ={{marginLeft:'5vw',marginRight:'5vw'}}>
            <p className ='roaming-yellow-text roaming-text-sm centered-text'>We’re Shawn and Alia, a married twenty-something couple travelling full-time, all while being mindful of our carbon footprint. We believe balance is an essential part of life which means we want to see the world, but we also want to see it be habitable for generations to come.</p>
          </Row>
        </Col>
      </Row>

      <Row className = 'roaming-white vertical-padding-sm centered-children'>

      <Col xs={3} sm={3} md={3} lg={3} xl={3}>
        &nbsp;
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        <p className = 'roaming-yellow-text roaming-text-md centered-text '>Who Are Alia & Shawn?</p>
        <p className = 'roaming-black-text roaming-text-sm '>We’re a twenty-something married couple who met when we were 18 in our university residence. Alia was studying photography and wanted to move to New York City and be a fashion photographer, Shawn was studying aerospace engineering and wanted to adopt a husky and build a cabin in the woods. After 6 months of being in the same friend group, this unlikely duo fell for each other and found out they actually had a ton of similarities. After 5 years together, once we had finished our degrees, we decided to have a small 8 person wedding and say ‘I do’ to forever. Our post-degree interests each changed a few times over by the time we got married, and we began working in our respective fields unsure of what the future held.</p>


        <Row style={{paddingBottom:'5em'}}>
          <Col className ='centered-children'>
            <img src ={about8}
                 alt = {'couple-pic1'}
                 loading="lazy"
                 style ={{width:'100%'}} />
          </Col>

          <Col className ='centered-children'>
            <img src ={about9}
                 alt = {'couple-pic1'}
                 loading="lazy"
                 style ={{width:'100%'}}/>
          </Col>
        </Row>

        <p className = 'roaming-yellow-text roaming-text-md centered-text '>Why we started traveling:</p>
        <p className = 'roaming-black-text roaming-text-sm '>Our travel bug started when we were planning our honeymoon back in 2019. Both of us having just finished university and gotten married, we finally began thinking about where in the world we would like to go. We began watching youtube videos, found amazing travel vloggers, began reading Conde Nast Traveler, and admired many travel blogs. Suddenly our list of potential honeymoon destinations grew a couple pages long. The travel bug bit us hard. </p>
        <p className = 'roaming-black-text roaming-text-sm '>Since we only had a short period of time during the Christmas holidays we decided to go to Mexico City and Cancun because we wanted some sunshine and some tacos without a long travel day… who doesn’t? </p>
        <p className = 'roaming-black-text roaming-text-sm '>We promised ourselves that our honeymoon in Mexico was the beginning of prioritizing travel in our life and decided that we would save up and backpack Europe in the summer of 2020. </p>
        <Row className ='vertical-padding-md '>
          <Col className ='centered-children '>
            <img src ={about4}
                 alt = {'couple-in-mexico'}
                 loading="lazy"
                 style ={{width:'100%'}}/>
          </Col>
        </Row>

        <p className = 'roaming-black-text roaming-text-sm '>Well, we all know what happened in 2020…and safe to say all of our travel dreams got put on hold. Instead, we moved across the country and began living in Vancouver, BC. We fell in love with hiking, biking, and the outdoors. We became more conscious of the climate crisis and decided to become vegan. While our days in Vancouver were incredible, and we did get to do lots of local travel, our travel bug intensified with time. </p>
        <p className = 'roaming-black-text roaming-text-sm '>In the summer of 2021, we sat on a picnic blanket looking out to Vancouver’s False Creek and rewrote a list of all the places we wanted to travel. The list looked a bit different from 2 years prior, but one thing that stayed the same was that it was several pages long. Our potential trips we wanted to make once the pandemic was behind us grew longer as the sun disappeared behind the mountains. We spent more evenings in the park revisiting the list until it morphed into a massive five-year timeline with 15 separate trips planned.</p>
        <p className = 'roaming-black-text roaming-text-sm '>We realized that our list did not fit into any of our budgets: financial, time off, or carbon footprint. Our environmental impact has always been important to us, but it had become even more so since our move to Vancouver. We wondered if it was possible to travel while keeping our carbon footprint in mind, and that’s when we realized that traveling full-time could be the way to do it.</p>
        <Row className ='vertical-padding-md '>
          <Col className ='centered-children '>
            <img src ={about6}
                 alt = {'couple-in-whistler'}
                 loading="lazy"
                 style ={{width:'100%'}}/>
          </Col>
        </Row>
        <p className = 'roaming-black-text roaming-text-sm '>Since Shawn was working remotely already, and Alia is a freelance photographer, we realized now was a good time in our life to consider full-time travel. Safe to say, it did not take long to convince ourselves that we could make it work. </p>
        <p className = 'roaming-black-text roaming-text-sm '>A few months later, we sold 75% of our things, packed up our Vancouver apartment, and booked a one way flight to Nicaragua with a rough plan to try and make it down to Peru or Bolivia. </p>

        <p className = 'roaming-yellow-text roaming-text-md centered-text'>Traveling carbon-consciously:</p>
        <p className = 'roaming-black-text roaming-text-sm '>Before we began traveling, we decided to make our best effort to travel at or below the footprint of the average Canadian. We had no idea if this was possible or not, but it was a challenge we wanted to take on. </p>
        <p className = 'roaming-black-text roaming-text-sm '>Our plan of action on how to do this would include the following:</p>
        <p className = 'roaming-black-text roaming-text-sm '>- Keep eating plant-based </p>
        <p className = 'roaming-black-text roaming-text-sm '>- Travel slowly & sequentially</p>
        <p className = 'roaming-black-text roaming-text-sm '>- Avoiding flights as much as possible </p>
        <p className = 'roaming-black-text roaming-text-sm '>- Staying in small hostels or eco-accommodations</p>
        <p className = 'roaming-black-text roaming-text-sm '>- Buying local food & cooking ourselves</p>
        <p className = 'roaming-black-text roaming-text-sm '>- Not buying new clothes/items</p>
        <Row className ='vertical-padding-md '>
          <Col className ='centered-children '>
            <img src ={about14}
                 alt = {'biking in sportgastien'}
                 loading="lazy"
                 style ={{width:'100%'}}/>
          </Col>
        </Row>
        <p className = 'roaming-black-text roaming-text-sm '>Shawn got to work on building a carbon footprint calculator that would assist us on tracking our travels. When we began traveling we realized that even though our flight to Central America, and a couple flights between destinations, were very costly towards our carbon footprint goals, other things we were doing like eating plant-based and taking many long distance bus journeys, were averaging us down considerably. This challenge of ours led us to building this platform to document our journey, share our travel experiences and what we’ve learnt trying to travel sustainably, so others could travel with their carbon footprint in mind too.</p>
        <Row className ='vertical-padding-md '>
          <Col className ='centered-children '>
            <img src ={about15}
                 alt = {'biking in sportgastien'}
                 loading="lazy"
                 style ={{width:'100%'}}/>
          </Col>
        </Row>
        <p className = 'roaming-black-text roaming-text-sm '>For us, carbon-conscious travel is really about doing your best. If you can take long night buses, eat plant-based, travel for months at a time, and stay in shared dorms everywhere you go, great! But if you have a bad back, have other dietary restrictions that make plant-based eating difficult, have a job or family you can’t leave for long, or can’t imagine sleeping in a room full of strangers, that’s alright too. The idea behind carbon-conscious travel is taking your carbon footprint into consideration, along with your safety and comfort, to choose the mode of travel that is best for you and the planet. Naysayers will say that if you care about the climate crisis you shouldn’t travel at all, but we believe it’s important to actually explore the world to see for yourself why it’s worth saving. </p>
        <p className = 'roaming-black-text roaming-text-sm '>That’s why along with our sustainable travel content, we share travel inspiration (in our galleries!) and location guides. You can read more sustainable travel content and find our guides on our blog. </p>

        <Row className ='vertical-padding-md '>
          <Col className ='centered-children '>
            <img src ={about1}
                 alt = {'couple-in-Cartagena'}
                 loading="lazy"
                 style ={{width:'100%'}}/>
          </Col>
        </Row>
      </Col>
      <Col xs={3} sm={3} md={3} lg={3} xl={3}>
        &nbsp;
      </Col>

      </Row>
      <Row style={{minHeight:'4em'}} className='roaming-white'>
        &nbsp;
      </Row>
      <Footer isMobile={this.state.isMobile}/>
    </div>


  </>
)}}
export default AboutPage;

//
//
// <Col style ={{maxWidth:'2.6em'}}>
//   <Link to={{pathname:'https://www.youtube.com/'}}
//         className = 'centered-children'
//         target="_blank">
//     <BsYoutube size ='1.5em'
//                style ={{cursor:'pointer'}}
//                color='#595456'/>
//   </Link>
// </Col>
