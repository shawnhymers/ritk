import  {  Component } from "react";
import React from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';

import DesktopHeader from "./elements/desktopHeader";
import MobileHeader from "./elements/mobileHeader";

import HomePage from "./appPages/home/main"
import About from "./appPages/about";
import Gallery from "./appPages/gallery";
import Calculator from "./appPages/calculator";
import Blog from "./appPages/blog";

class AppMain extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {

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
             ],
      galleryImages:[{src:"vancouverFood.jpg",alt:"test-alt",label:"test"},
                     {src:"vancouverFood.jpg",alt:"test-alt",label:"test"},
                     {src:"vancouverFood.jpg",alt:"test-alt",label:"test"},
                     {src:"vancouverFood.jpg",alt:"test-alt",label:"test"},
                     {src:"vancouverFood.jpg",alt:"test-alt",label:"test"},
                     {src:"vancouverFood.jpg",alt:"test-alt",label:"test"},
                     {src:"vancouverFood.jpg",alt:"test-alt",label:"test"},
                     {src:"vancouverFood.jpg",alt:"test-alt",label:"test"}]
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

  updateView=(view)=>{
    console.log('updating app view')
    this.setState({view:view})
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
                         page ={this.state.view}/>
      }

      {this.state.view ==='main'?
        <>
          <HomePage isMobile={this.props.isMobile}/>
        </>
      :null}

      {this.state.view === 'about'?
      <>
        <About changeView ={this.props.updatePageView}
               view ={this.state.view}
               isMobile={this.props.isMobile}/>
      </>
      :null}

      {this.state.view === 'blog'?
      <div className ='roaming-white'>
        <Blog changeView ={this.props.updatePageView}
              blogs = {this.state.blogs}
              blogSearch ={this.state.blogSearch}
              isMobile={this.props.isMobile}/>
      </div>
      :null}

      {this.state.view === 'calculator'?
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
      {this.state.view === 'gallery'?
      <>
        <Gallery changeView ={this.props.updatePageView}
                 galleryImages ={this.state.galleryImages}
                isMobile={this.props.isMobile}/>
      </>
      :null}



      </div>
    </>
)}};
export default AppMain;
