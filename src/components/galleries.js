import React, {  lazy, Component } from 'react';
import { Row,Col} from 'react-bootstrap';
import huaraz3 from '../assets/galleries/huaraz/huaraz3.jpg'
import huacachina11 from '../assets/galleries/huacachina/huacachina11.jpg'
import arequipa1 from '../assets/galleries/arequipa/arequipa1.jpg'
import sacredValley14 from '../assets/galleries/sacredValley/sacredValley14.jpg'


const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));
const LeftCol = lazy(() => import('./sharedComponents/blogComponents/leftCol'));
const RightCol = lazy(() => import('./sharedComponents/blogComponents/rightCol'));
const BlogRow = lazy(() => import('./sharedComponents/blogComponents/blogRow'));
const Footer = lazy(() => import('./sharedComponents/footer'));
const LoadScreen = lazy(()=> import('./sharedComponents/loadScreen'))


class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      isLoaded:false,
      showOutcomeMessage:false,
      galleries:[
            {name:'Huaraz',
             pic:huaraz3,
             isVertical:false,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/huaraz',
             key:'1'},

            {name:'Huacachina',
             pic:huacachina11,
             isVertical:true,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/huacachina',
             key:'2'},

            {name:'Arequipa',
             pic:arequipa1,
             isVertical:true,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/arequipa',
             key:'3'},

            {name:'Sacred Valley',
             pic:sacredValley14,
             isVertical:true,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/sacredValley',
             key:'4'},

            {name:'Cusco',
             pic:'/CuscoGallery/cusco23.jpg',
             isVertical:false,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/cusco',
             key:'5'},

            {name:'Otavalo',
             pic:'/OtavaloGallery/Otavalo17.jpg',
             isVertical:false,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/otavalo',
             key:'6'},

            {name:'Quito',
             pic:'/QuitoGallery/Quito17.jpg',
             isVertical:true,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/quito',
             key:'7'},

            {name:'Quindio',
             pic:'/QuindioGallery/Quindio24.jpg',
             isVertical:true,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/quindo',
             key:'8'},

            {name:'Guatape',
             pic:'/GuatapeGallery/Guatape9.jpg',
             isVertical:false,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/guatape',
             key:'9'},

            {name:'Medellin',
             pic:'/MedellinGallery/Medellin13.jpg',
             isVertical:true,
             tags:['activity', 'bc','','','','','','','',''],
             link:'/medellin',
             key:'10'},

            {name:'Cartagena',
             pic:'/CartagenaGallery/cartagena13.jpg',
             isVertical:false,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/cartagena',
             key:'11'},

            {name:'Panama City',
             pic:'/PanamaGallery/panama9.jpg',
             isVertical:false,
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/panamaCity',
             key:'12'},

            {name:'Costa Rica',
             pic:'/CostaRicaGallery/costaRica8.jpg',
             isVertical:true,
             tags:['activity', 'bc','','','','','','','',''],
             link:'/Costarica',
             key:'13'},

            {name:'Ometepe Island',
             pic:'/OmetepeGallery/ometepe13.jpg',
             isVertical:false,
             tags:['food', 'bc','','','','','','','',''],
             link:'/Ometepe',
             key:'14'},

            {name:'Granada',
             pic:'/GranadaGallery/granada4.jpg',
             isVertical:true,
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
    }, 200)

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
