import React, {  lazy, Component } from 'react';
import { Row} from 'react-bootstrap';
// import OnImagesLoaded from 'react-on-images-loaded';
import homePageHorizontal from '../assets/main/homePageHorizontal.jpg'
// import  { useState,useEffect } from 'react';
import arequipaSquare from '../assets/main/arequipaSquare.jpg'
import huacachinaSquare from '../assets/main/huacachinaSquare.jpg'
import sacredValleysquare from '../assets/main/sacredValleysquare.jpg'
import cuscoSquare from '../assets/main/cuscoSquare.jpg'
import otavaloSquare from '../assets/main/otavaloSquare.jpg'
import huarazSquare from '../assets/main/huarazSquare.jpg'

// const HuarazSquare = lazy(() => import('../assets/main/huarazSquare.jpg'));
const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));
// const LoadScreen = lazy(()=> import('./sharedComponents/loadScreen'))
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
      isLoaded:false,
      imagesLoaded:false,
      showOutcomeMessage:false,
      galleryPreviews:[
        {name:'Huaraz',
         pic:huarazSquare,
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Huaraz',
         key:'1'},
        {name:'Huacachina',
         pic:huacachinaSquare,
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Huacachina',
         key:'2'},
         {name:'Arequipa',
          pic: arequipaSquare,
          tags:['activity', 'bc','','','','','','','',''],
          link:'/Arequipa',
          key:'3'},
          {name:'Sacred Valley',
           pic:sacredValleysquare,
           tags:['activity', 'bc','','','','','','','',''],
           link:'/SacredValley',
           key:'4'},
           {name:'Cusco',
            pic:cuscoSquare,
            tags:['activity', 'bc','','','','','','','',''],
            link:'/Cusco',
            key:'5'},
        {name:'Otavalo',
         pic:otavaloSquare,
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Otavalo',
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
  componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
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
                    isMobile={this.state.isMobile}
                    />
        </div>



    </>
)}};
export default Main;


const HomePage = props => {


return(
  <>

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
        <DesktopHeader componentReady={props.componentReady}/>
        <Row style ={{pading:'0vh'}}>
          <img src= {homePageHorizontal}
               alt = 'banner pic'
               className = 'banner-pic'/>
        </Row>
      </>}

    <AboutPreview componentReady={props.componentReady}/>
    <LinksPreview useLink={props.useLink}
                  componentReady={props.componentReady}/>
    <GalleryPreview galleryImages={props.galleryPreviews}
                    componentReady={props.componentReady}/>
    <BlogPreview componentReady={props.componentReady}/>

    <Footer isMobile={props.isMobile}/>

  </>
)
}
