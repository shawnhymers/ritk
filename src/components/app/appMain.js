import  {  Component } from "react";
import React from "react";
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

            {name:'Carbon Cost of Latam',
             pic:'/CostaRicaGallery/costarica15.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/VancouverActivityGuide'},

            {name:'Carbon Cost of Flying',
             pic:'/planeWing.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/VancouverActivityGuide'},

            {name:'Carbon Cost of Colombia',
             pic:'/MedellinGallery/medellin11.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/VancouverActivityGuide'},

            {name:'Carbon Cost of Ecuador',
             pic:'/QuitoGallery/quito26.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/VancouverActivityGuide'},

            {name:'Carbon Cost of Our Diet',
             pic:'/whistlerFood.jpg',
             tags:['activity', 'notbc','','','','','','','',''],
             link:'/VancouverActivityGuide'},
              ],

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
                 pic:'/MedellinGallery/medellin12.jpg',
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
                    pic:'/QuitoGallery/quito17.jpg',
                    tags:['activity', 'notbc','','','','','','','',''],
                    link:'/quito',
                    key:'8'},
                    {name:'Otavalo',
                     pic:'/OtavaloGallery/otavalo2.jpg',
                     tags:['activity', 'notbc','','','','','','','',''],
                     link:'/otavalo',
                     key:'9'}
             ],
      previewGalleries:[
        {name:'Costa Rica',
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
  };

  componentDidMount(){
    if (this.props.view !== undefined) {
      this.setState({view:this.props.view})
    }
    else {
      this.setState({view:'main'})
    }
  }

  useLink =(link)=>{
    this.setState({view:'blog',blogSearch:link,urlOverride:true})

  }

  resetRedirectView = ()=>{
    console.log('triggering the redirect view reset')
  }
  updateView=(view)=>{
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
                    galleryPreviews={this.state.previewGalleries}
                    isMobile={this.props.isMobile}
                    useLink ={this.useLink}/>
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
      <>
        <div className ='roaming-white'>
          <Blog changeView ={this.props.updatePageView}
                blogs = {this.state.blogs}
                blogSearch ={this.state.blogSearch}
                isMobile={this.props.isMobile}/>
        </div>
      </>
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
                    isMobile={this.props.isMobile}
                    flightList={this.props.flightList}
                    transportList={this.props.transportList}
                    foodList={this.props.foodList}
                    hotelList={this.props.hotelList}/>

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
