import  {  Component } from "react";
import React from "react";
import Header from "./header"
import About from "../shared/responsivePages/homeSections/about"
import Links from "../shared/responsivePages/homeSections/links"
import Blog from "../shared/responsivePages/homeSections/blog"
import AboutFull from "./fullscreenViews/about"
import BlogFull from "./fullscreenViews/blog"
import SocialFull from "./fullscreenViews/social"
// import { Container, Row, Col, Button} from 'react-bootstrap';
class MobileApp extends Component {
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



  render() {

  return(
    <>

    <div style ={{overflowX:'hidden'}}>
      <Header changeView ={this.props.updatePageView}
              view ={this.props.pageView}/>
      {this.props.pageView ==='main'?
        <>
        <About view ={this.state.view}/>
        <Links useLink ={this.useLink}/>
        <Blog />
        </>
        :null}
      {this.props.pageView==='about'?
      <>
        <AboutFull/>
      </>
      :null}
      {this.props.pageView ==='blog'?
      <>
        <BlogFull blogs = {this.state.blogs}
                  blogSearch ={this.state.blogSearch}/>
      </>
      :null}
      {this.props.pageView ==='calculator'?
      <>
        calc
      </>
      :null}
      {this.props.pageView ==='social'?
      <>
        <SocialFull />
      </>
      :null}
    </div>
    </>
)}};
export default MobileApp;
