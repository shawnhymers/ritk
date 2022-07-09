import React, {  lazy, Component } from 'react';
import { Row} from 'react-bootstrap';
import LazyLoad from "react-lazyload";

import homePageHorizontal from '../assets/main/homePageHorizontal.jpg'
import coupleIcon from "../assets/main/coupleIcon.png"

import arequipaSquare from '../assets/main/arequipaSquare.jpg'
import huacachinaSquare from '../assets/main/huacachinaSquare.jpg'
import sacredValleysquare from '../assets/main/sacredValleysquare.jpg'
import cuscoSquare from '../assets/main/cuscoSquare.jpg'
import otavaloSquare from '../assets/main/otavaloSquare.jpg'
import quitoSquare from '../assets/main/quitoSquare.jpg'
import DesktopHeader from './sharedComponents/navComponents/desktopHeader'
// const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));

const AboutPreview = lazy(() => import('./sharedComponents/previewComponents/aboutPreview'));
const BlogPreview = lazy(() => import('./sharedComponents/previewComponents/blogPreview'));
const LinksPreview = lazy(() => import('./sharedComponents/previewComponents/linksPreview'));
const GalleryPreview = lazy(() => import('./sharedComponents/previewComponents/galleryPreview'));
const Footer = lazy(() => import('./sharedComponents/footer'));
// const homePageHorizontal = lazy(()=> import('../assets/main/homePageHorizontal.jpg'));
// const ArequipaSquare = lazy(()=> import('../assets/main/arequipaSquare.jpg'))


class Main extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      showOutcomeMessage:false,
      galleryPreviews:[
        {name:'Huacachina',
         pic:huacachinaSquare,
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Huacachina',
         key:'1'},
         {name:'Arequipa',
          pic: arequipaSquare,
          tags:['activity', 'bc','','','','','','','',''],
          link:'/Arequipa',
          key:'2'},
          {name:'Sacred Valley',
           pic:sacredValleysquare,
           tags:['activity', 'bc','','','','','','','',''],
           link:'/SacredValley',
           key:'3'},
           {name:'Cusco',
            pic:cuscoSquare,
            tags:['activity', 'bc','','','','','','','',''],
            link:'/Cusco',
            key:'4'},
        {name:'Otavalo',
         pic:otavaloSquare,
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Otavalo',
         key:'5'},
         {name:'Quito',
          pic:quitoSquare,
          tags:['activity', 'bc','','','','','','','',''],
          link:'/Quito',
          key:'6'},
      ]


    };
    this.updateDimensions = this.updateDimensions.bind(this);
  };
  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    setTimeout(() => {
      this.updateDimensions();
    }, 100)
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

        <HomePage galleryPreviews={this.state.galleryPreviews}
                  isMobile={this.state.isMobile}/>
      </div>


    </>
)}};
export default Main;

const HomePage = props => {

return(
  <>
    <LazyLoad height={'50vh'}>
    {props.isMobile?
      <>
        <MobileHeader />
        <Row style ={{pading:'0vh'}}>
          <img src= "/mobileCover1.jpg"
               alt = 'banner pic'
               loading="lazy"
               className = 'banner-pic'/>
        </Row>
      </>
      :
      <>
        <DesktopHeader />
        <Row style ={{pading:'0vh'}}>
          <img src= {homePageHorizontal}
               alt = 'banner pic'
               loading="lazy"
               className = 'banner-pic'/>
        </Row>
      </>}

    <AboutPreview />
    <LinksPreview useLink={props.useLink}/>
    <GalleryPreview galleryImages={props.galleryPreviews}/>
    <BlogPreview/>

    <Footer isMobile={props.isMobile}/>
      </LazyLoad>
  </>
)
}
