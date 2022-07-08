import React, {  lazy, Component } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import {BsInstagram, BsYoutube} from "react-icons/bs";
import {SiTiktok} from "react-icons/si";
import { Link } from "react-router-dom";

const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));
const Footer = lazy(() => import('./sharedComponents/footer'));

class AboutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
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
    <Row className = 'roaming-white vertical-padding-md centered-children' style ={{minHeight:'90vh'}}>
      <Col xs={12} sm={12} md={5} lg={5} xl={5} className ='centered-children'>
        <Container>
          <Row  style ={{paddingTop:'2em'}} >
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className ='centered-children'>
              <img style ={{width:'90%'}}src ="/coupleIcon.png" alt ='coupleIcon' className = 'couple-icon'/>
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
            <Col style ={{maxWidth:'2.6em'}}>
              <Link to={{pathname:'https://www.youtube.com/'}}
                    className = 'centered-children'
                    target="_blank">
                <BsYoutube size ='1.5em'
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
          <p className ='roaming-yellow-text roaming-text large-header-text centered-text'>WE ARE ROAMING IN THE KNOW!</p>
        </Row>
        <Row style ={{marginLeft:'5vw',marginRight:'5vw'}}>
          <p className ='roaming-yellow-text roaming-text-sm centered-text'>We’re Shawn and Alia, a married twenty-something couple with a desire to travel full time and live our lives to the fullest, all while being mindful of our footprint. We believe balance is an essential part of life which means we want to see the world, but we also want to see it be habitable for generations to come. </p>
        </Row>
      </Col>
    </Row>
    <Footer isMobile={this.state.isMobile}/>
  </div>



  </>
)}}
export default AboutPage;
