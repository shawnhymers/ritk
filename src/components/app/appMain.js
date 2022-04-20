import  {  Component } from "react";
import React from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';

import DesktopHeader from "./elements/desktopHeader";
import MobileHeader from "./elements/mobileHeader";

import HomePage from "./appPages/home/main"
import About from "./appPages/about";
import Calculator from "./appPages/calculator";
import Blog from "./appPages/blog";

class AppMain extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {

      view:'main',
      urlOverride:false,

      blogSearch :'',
      blogs:[
             {name:'Vancouver Food Guide',
              pic:'/vancouverFood.jpg',
              tags:['food', 'bc','','','','','','','',''],
              link:'/VancouverFoodGuide'},

              {name:'Whistler Food Guide',
               pic:'/whistlerFood.jpg',
               tags:['food', 'bc','','','','','','','',''],
               link:'/WhistlerFoodGuide'},

              {name:'Whistler Activity Guide',
               pic:'/whistlerActivity.jpg',
               tags:['activity', 'bc','','','','','','','',''],
               link:'/WhistlerActivityGuide'},

               {name:'Vancouver Activity Guide',
                pic:'/vancouverActivity.jpg',
                tags:['activity', 'notbc','','','','','','','',''],
                link:'/VancouverActivityGuide'}
             ],
      galleries:[
             {name:'Ometepe Island',
              pic:'/galleryTest1.jpg',
              tags:['food', 'bc','','','','','','','',''],
              link:'/ometepeGallery',
              key:'1'},

              {name:'Granada, Nicaragua',
               pic:'/galleryTest2.jpg',
               tags:['food', 'bc','','','','','','','',''],
               link:'/nicaraguaGallery',
               key:'2'},

              {name:'Costa Rica',
               pic:'/galleryTest3.jpg',
               tags:['activity', 'bc','','','','','','','',''],
               link:'/costaRicaGallery',
               key:'3'},

               {name:'Another Thing',
                pic:'/galleryTest1.jpg',
                tags:['activity', 'notbc','','','','','','','',''],
                link:'/anotherGallery',
                key:'4'},

                {name:'Costa Rica',
                 pic:'/galleryTest3.jpg',
                 tags:['activity', 'bc','','','','','','','',''],
                 link:'/costaRicaGallery',
                 key:'5'},

                 {name:'Another Thing',
                  pic:'/galleryTest1.jpg',
                  tags:['activity', 'notbc','','','','','','','',''],
                  link:'/anotherGallery',
                  key:'6'}
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

  resetRedirectView = ()=>{
    console.log('triggering the redirect view reset')
  }
  updateView=(view)=>{
    console.log('updating app view')
    this.setState({view:view,urlOverride:true})
  }

  render() {


  return(
    <>

    <div style ={{overflowX:'hidden'}}>

      {this.props.isMobile?
          <MobileHeader changeView ={this.updateView}
                         page ={this.state.view}/>
      :
          <DesktopHeader changeView ={this.updateView}
                         urlView ={this.props.urlView}
                         urlOverride ={this.state.urlOverride}
                         page ={this.state.view}/>
      }

      {(this.state.view ==='main' && this.props.urlView===undefined)
    || (this.props.urlView==='home' && this.state.urlOverride===false)
    || (this.state.view ==='main' &&this.state.urlOverride===true)?
        <>
          <HomePage galleryImages ={this.state.galleries}
                    isMobile={this.props.isMobile}/>
        </>
      :null}

      {this.state.view === 'about' || (this.props.urlView==='about' && this.state.urlOverride===false)?
      <>
        <About changeView ={this.props.updatePageView}
               view ={this.state.view}
               isMobile={this.props.isMobile}/>
      </>
      :null}

      {this.state.view === 'blog' || (this.props.urlView==='blog' && this.state.urlOverride===false)?
      <div className ='roaming-white'>
        <Blog changeView ={this.props.updatePageView}
              blogs = {this.state.blogs}
              blogSearch ={this.state.blogSearch}
              isMobile={this.props.isMobile}/>
      </div>
      :null}

      {this.state.view === 'calculator'|| (this.props.urlView==='calculator' && this.state.urlOverride===false)?
      <>

        <Calculator changeView ={this.props.updatePageView}
                    addCarbonCostItem ={this.props.addCarbonCostItem}
                    totalCarbonCost={this.props.totalCarbonCost}
                    totalFlightCost = {this.props.totalFlightCost}
                    totalTransportCost = {this.props.totalTransportCost}
                    totalFoodCost = {this.props.totalFoodCost}
                    totalAccomodationCost = {this.props.totalAccomodationCost}
                    isMobile={this.props.isMobile}/>

      </>
      :null}
      {this.state.view === 'gallery' || (this.props.urlView==='gallery' && this.state.urlOverride===false)?
      <>
        <div className ='roaming-white'>
          <Blog changeView ={this.props.updatePageView}
                blogs = {this.state.galleries}
                blogSearch ={this.state.blogSearch}
                isMobile={this.props.isMobile}/>
        </div>
      </>
      :null}



      </div>
    </>
)}};
export default AppMain;
