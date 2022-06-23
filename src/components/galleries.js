import React from 'react';
import  {  Component } from "react";
import { Row,Col} from 'react-bootstrap';
import DesktopHeader from "./sharedComponents/navComponents/desktopHeader";
import MobileHeader from "./sharedComponents/navComponents/desktopHeader";
import LeftCol from  './sharedComponents/blogComponents/leftCol'
import RightCol from './sharedComponents/blogComponents/rightCol'
import BlogRow from  './sharedComponents/blogComponents/blogRow'
import Footer from "./sharedComponents/footer"

class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      showOutcomeMessage:false,
      galleries:[

            {name:'Granada, Nicaragua',
             pic:'/GranadaGallery/granada10.jpg',
             tags:['food', 'bc','','','','','','','',''],
             link:'/Granada',
             key:'2'},

            {name:'Ometepe Island',
             pic:'/OmetepeGallery/ometepe8.jpg',
             tags:['food', 'bc','','','','','','','',''],
             link:'/Ometepe',
             key:'1'},

            {name:'Costa Rica',
             pic:'/CostaRicaGallery/costaRica1.jpg',
             tags:['activity', 'bc','','','','','','','',''],
             link:'/Costarica',
             key:'3'},

            {name:'Cartagena',
             pic:'/CartagenaGallery/cartagena1.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/cartagena',
             key:'4'},

            {name:'Medellin',
             pic:'/MedellinGallery/Medellin12.jpg',
             tags:['activity', 'bc','','','','','','','',''],
             link:'/medellin',
             key:'5'},

            {name:'Quindio',
             pic:'/QuindioGallery/Quindio18.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/quindo',
             key:'6'},

            {name:'Guatape',
             pic:'/GuatapeGallery/Guatape9.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/guatape',
             key:'7'},

            {name:'Quito',
             pic:'/QuitoGallery/Quito17.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/quito',
             key:'8'},

            {name:'Otavalo',
             pic:'/OtavaloGallery/Otavalo2.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/otavalo',
             key:'9'},

            {name:'Arequipa',
             pic:'/ArequipaGallery/arequipa1.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/arequipa',
             key:'10'},

            {name:'Cusco',
             pic:'/OtavaloGallery/Otavalo2.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/cusco',
             key:'11'},

            {name:'Huacachina',
             pic:'/OtavaloGallery/Otavalo2.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/huacachina',
             key:'12'},

            {name:'Sacred Valley',
             pic:'/SacredValleyGallery/sacredValley14.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/sacredValley',
             key:'13'},

            {name:'Panama City',
             pic:'/OtavaloGallery/Otavalo2.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/panamaCity',
             key:'14'}],
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

  render() {
return(
  <>
  <div style ={{overflowX:'hidden'}}>

  {this.state.isMobile?
      <MobileHeader page ={'gallery'}/>
  :
      <DesktopHeader page ={'gallery'}/>
  }

  <Row className = 'roaming-white vertical-padding-md centered-children' style ={{minHeight:'90vh'}}>

    {this.state.isMobile?
      <>


        <Row className ='nice-input-wrapper form-line ' style ={{paddingTop:'12.5vh'}}>
          &nbsp;
        </Row>
        <Row className ='centered-children'>
            {this.state.galleries.map((gallery, i)=>{
                    return <BlogRow blog ={gallery}
                                     index = {i}
                                     key={gallery.name+i}/>})}
        </Row>
        </>
    :
        <>

        <div style ={{overflowX:'hidden'}} className='roaming-white'>
        <Row className ='nice-input-wrapper form-line ' style ={{paddingTop:'12.5vh'}}>
          &nbsp;
        </Row>
        <Row>
          <Col>
            {this.state.galleries.map((gallery, i)=>{
                    return <LeftCol blog ={gallery}
                                    index = {i}
                                    key={gallery.name+i}/>
                                     })}
          </Col>
          <Col>
            {this.state.galleries.map((gallery, i)=>{
                    return <RightCol blog ={gallery}
                                     index ={i}
                                     key={gallery.name+i}/>
                                     })}
          </Col>
        </Row>
        </div>
        </>
    }

  </Row>

  </div>

<Footer isMobile={this.state.isMobile}/>

  </>
)}}
export default GalleryPage;
