import  {  Component } from "react";
import React from "react";
import AboutPreview from "./sharedComponents/previewComponents/aboutPreview";
import BlogPreview from "./sharedComponents/previewComponents/blogPreview";
import LinksPreview from "./sharedComponents/previewComponents/linksPreview";
import GalleryPreview from "./sharedComponents/previewComponents/galleryPreview"
import Footer from "./sharedComponents/footer"
import { Row} from 'react-bootstrap';
import DesktopHeader from "./sharedComponents/navComponents/desktopHeader";
import MobileHeader from "./sharedComponents/navComponents/desktopHeader";

class Main extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      showOutcomeMessage:false,
      galleryPreviews:[
        {name:'Costa Rica Photo Gallery',
         pic:'/galleryTest1.jpg',
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Costarica',
         key:'1'},
         {name:'Costa Rica',
          pic:'/galleryTest2.jpg',
          tags:['activity', 'bc','','','','','','','',''],
          link:'/Costarica',
          key:'2'},
          {name:'Costa Rica',
           pic:'/galleryTest3.jpg',
           tags:['activity', 'bc','','','','','','','',''],
           link:'/Costarica',
           key:'3'},
           {name:'Costa Rica',
            pic:'/galleryTest1.jpg',
            tags:['activity', 'bc','','','','','','','',''],
            link:'/Costarica',
            key:'4'},
        {name:'Costa Rica',
         pic:'/galleryTest2.jpg',
         tags:['activity', 'bc','','','','','','','',''],
         link:'/Costarica',
         key:'5'},
         {name:'Costa Rica',
          pic:'/galleryTest3.jpg',
          tags:['activity', 'bc','','','','','','','',''],
          link:'/Costarica',
          key:'6'},
      ]


    };
    this.updateDimensions = this.updateDimensions.bind(this);
  };
  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    window.scrollTo(0, 0);
    this.updateDimensions();
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    if (windowWidth>= windowHeight) {
      this.setState({isMobile:false});
    }
    else {
      this.setState({isMobile:true});
    }
  }
  useLink =(link)=>{
    this.setState({view:'blog',blogSearch:link,urlOverride:true})

  }


  render() {

  return(
    <>
    <div style ={{overflowX:'hidden'}}>

      {this.state.isMobile?
          <MobileHeader changeView ={this.updateView}
                         page ={this.state.view}/>
      :
          <DesktopHeader changeView ={this.updateView}
                         urlView ={this.props.urlView}
                         urlOverride ={this.state.urlOverride}
                         page ={this.state.view}/>
      }
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
        <Row style ={{pading:'0vh'}}>
          <img src= "/mobileCover1.jpg"
               alt = 'banner pic'
               className = 'banner-pic'/>
        </Row>
      </>
      :
      <>
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
