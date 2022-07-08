import React, {  lazy, Component } from 'react';
import { Row,Col} from 'react-bootstrap';

const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));
const LeftCol = lazy(() => import('./sharedComponents/blogComponents/leftCol'));
const RightCol = lazy(() => import('./sharedComponents/blogComponents/rightCol'));
const BlogRow = lazy(() => import('./sharedComponents/blogComponents/blogRow'));
const Footer = lazy(() => import('./sharedComponents/footer'));


class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      showOutcomeMessage:false,
      galleries:[
            {name:'Huaraz',
             pic:'/HuacachinaGallery/huacachina18.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/huaraz',
             key:'1'},

            {name:'Huacachina',
             pic:'/HuacachinaGallery/huacachina18.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/huacachina',
             key:'2'},

            {name:'Arequipa',
             pic:'/ArequipaGallery/arequipa1.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/arequipa',
             key:'3'},

            {name:'Sacred Valley',
             pic:'/SacredValleyGallery/sacredValley14.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/sacredValley',
             key:'4'},

            {name:'Cusco',
             pic:'/CuscoGallery/cusco23.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/cusco',
             key:'5'},

            {name:'Otavalo',
             pic:'/OtavaloGallery/Otavalo17.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/otavalo',
             key:'6'},

            {name:'Quito',
             pic:'/QuitoGallery/Quito17.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/quito',
             key:'7'},

            {name:'Quindio',
             pic:'/QuindioGallery/Quindio24.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/quindo',
             key:'8'},

            {name:'Guatape',
             pic:'/GuatapeGallery/Guatape9.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/guatape',
             key:'9'},

            {name:'Medellin',
             pic:'/MedellinGallery/Medellin13.jpg',
             tags:['activity', 'bc','','','','','','','',''],
             link:'/medellin',
             key:'10'},

            {name:'Cartagena',
             pic:'/CartagenaGallery/cartagena13.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/cartagena',
             key:'11'},

            {name:'Panama City',
             pic:'/PanamaGallery/panama9.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/panamaCity',
             key:'12'},

            {name:'Costa Rica',
             pic:'/CostaRicaGallery/costaRica8.jpg',
             tags:['activity', 'bc','','','','','','','',''],
             link:'/Costarica',
             key:'13'},

            {name:'Ometepe Island',
             pic:'/OmetepeGallery/ometepe13.jpg',
             tags:['food', 'bc','','','','','','','',''],
             link:'/Ometepe',
             key:'14'},

            {name:'Granada',
             pic:'/GranadaGallery/granada4.jpg',
             tags:['food', 'bc','','','','','','','',''],
             link:'/Granada',
             key:'15'}


            ],
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

  <Footer isMobile={this.state.isMobile}/>
  </div>


  </>
)}}
export default GalleryPage;
