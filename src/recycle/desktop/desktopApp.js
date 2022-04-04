import  {  Component } from "react";
import React from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import About from "../shared/responsivePages/homeSections/about";
import Header from "./homeSections/header";
import Links from "../shared/responsivePages/homeSections/links";
import Blog from "../shared/responsivePages/homeSections/blog";

import AboutFull from "./fullscreenViews/about";
import SocialFull from "./fullscreenViews/social";
import CalculatorFull from "./fullscreenViews/calculator";
import BlogFull from "./fullscreenViews/blog";

class DesktopApp extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,

      view:'main',

      blogSearch :'',
      blogs:[
             {name:'Vancouver Food Guide',
              pic:'/vancouverFood.jpg',
              tags:['food', 'bc',''],
              link:'/VancouverFoodGuide'},

              {name:'Whistler Food Guide',
               pic:'/whistlerFood.jpg',
               tags:['food', 'bc',''],
               link:'/WhistlerFoodGuide'},

              {name:'Whistler Activity Guide',
               pic:'/whistlerActivity.jpg',
               tags:['activity', 'bc',''],
               link:'/WhistlerActivityGuide'},

               {name:'Vancouver Activity Guide',
                pic:'/vancouverActivity.jpg',
                tags:['activity', 'notbc',''],
                link:'/VancouverActivityGuide'}
             ]
    };
  };

  componentDidMount(){
    console.log('desktop App Mounted')
    console.log(this.props)

    if (this.props.view !== undefined) {
      this.setState({view:this.props.view})
    }
    else {
      this.setState({view:'main'})
    }
  }

  useLink =(link)=>{
    console.log('using this link...'+link)
    this.setState({view:'blog',blogSearch:link})
  }

  render() {


  return(
    <>

    <div style ={{overflowX:'hidden'}}>
      {this.props.pageView ==='main'?
        <>
          <Header changeView ={this.props.updatePageView}/>
            <Row className ='red'style ={{pading:'0vh'}}>
              <img src= "/bannerPic.jpeg" alt = 'banner pic' className = 'banner-pic'/>
            </Row>
          <About view ={this.state.view}/>
          <Links useLink ={this.useLink}/>
          <Blog/>
        </>
      :null}
      {this.props.pageView === 'about'?
      <>
        <AboutFull changeView ={this.props.updatePageView}
                   view ={this.state.view}/>
      </>
      :null}
      {this.props.pageView === 'blog'?
      <>
        <BlogFull changeView ={this.props.updatePageView}
                  blogs = {this.state.blogs}
                  blogSearch ={this.state.blogSearch}/>
      </>
      :null}
      {this.props.pageView === 'calculator'?
      <>
        <CalculatorFull changeView ={this.props.updatePageView}
                        addCarbonCostItem ={this.props.addCarbonCostItem}
                        totalCarbonFootprint={this.props.totalCarbonCost}
                        totalFlightCost = {this.props.totalFlightCost}
                        totalTransportCost = {this.props.totalTransportCost}
                        totalFoodCost = {this.props.totalFoodCost}
                        totalAccomodationCost = {this.props.totalAccomodationCost}/>
      </>
      :null}
      {this.props.pageView === 'social'?
      <>
        <SocialFull changeView ={this.props.updatePageView}/>
      </>
      :null}

      </div>
    </>
)}};
export default DesktopApp;
