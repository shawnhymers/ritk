import React, {  lazy, Component } from 'react';
import { Row} from 'react-bootstrap';

const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));

const AboutPreview = lazy(() => import('./sharedComponents/previewComponents/aboutPreview'));
const BlogPreview = lazy(() => import('./sharedComponents/previewComponents/blogPreview'));
const LinksPreview = lazy(() => import('./sharedComponents/previewComponents/linksPreview'));
const GalleryPreview = lazy(() => import('./sharedComponents/previewComponents/galleryPreview'));
const Footer = lazy(() => import('./sharedComponents/footer'));

class Main extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      showOutcomeMessage:false,
      galleryPreviews:[
        {name:'Huacachina',
         pic:'/HuacachinaGallery/huacachinaSquare.jpg',
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Huacachina',
         key:'1'},
         {name:'Arequipa',
          pic:'/ArequipaGallery/arequipaSquare.jpg',
          tags:['activity', 'bc','','','','','','','',''],
          link:'/Arequipa',
          key:'2'},
          {name:'Sacred Valley',
           pic:'/SacredValleyGallery/sacredValleysquare.jpg',
           tags:['activity', 'bc','','','','','','','',''],
           link:'/SacredValley',
           key:'3'},
           {name:'Cusco',
            pic:'/CuscoGallery/cuscoSquare.jpg',
            tags:['activity', 'bc','','','','','','','',''],
            link:'/Cusco',
            key:'4'},
        {name:'Otavalo',
         pic:'/OtavaloGallery/otavaloSquare.jpg',
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Otavalo',
         key:'5'},
         {name:'Quito',
          pic:'/QuitoGallery/quitoSquare.jpg',
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
  useLink =(link)=>{
    this.setState({view:'blog',blogSearch:link,urlOverride:true})

  }


  render() {

  return(
    <>
    <div style ={{overflowX:'hidden'}}>

      <HomePage galleryPreviews={this.state.galleryPreviews}
                isMobile={this.state.isMobile}
                useLink ={this.useLink}/>
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
               className = 'banner-pic'/>
        </Row>
      </>
      :
      <>
        <DesktopHeader />
        <Row style ={{pading:'0vh'}}>
          <img src= "/homePageHorizontal.jpg"
               alt = 'banner pic'
               className = 'banner-pic'/>
        </Row>
      </>}

    <AboutPreview />
    <LinksPreview useLink={props.useLink}/>
    <GalleryPreview galleryImages={props.galleryPreviews}/>
    <BlogPreview/>

    <Footer isMobile={props.isMobile}/>
  </>
)
}
