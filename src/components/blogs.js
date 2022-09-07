import React, {  lazy, Component } from 'react';
import {  Row, Col,Container} from 'react-bootstrap';

import banos5 from '../assets/galleries/banos/banos5.jpg'
import quito17 from '../assets/galleries/quito/Quito17.jpg'
import quito26 from '../assets/galleries/quito/Quito26.jpg'
import quindio18 from '../assets/galleries/quindio/Quindio18.jpg'
import medellin13 from '../assets/galleries/medellin/Medellin13.jpg'
import medellin22 from '../assets/galleries/medellin/Medellin22.jpg'
import guatape1 from '../assets/galleries/guatape/Guatape1.jpg'
import costaRica15 from '../assets/galleries/costaRica/costaRica15.jpg'
// import arequipa38 from '../assets/galleries/arequipa/arequipa38.jpg'
import arequipa1 from '../assets/galleries/arequipa/arequipa1.jpg'
import arequipa39 from '../assets/galleries/arequipa/arequipa39.jpg'
import huacachina11 from '../assets/galleries/huacachina/huacachina11.jpg'
import sacredValley17 from '../assets/galleries/sacredValley/sacredValley17.jpg'
import cusco23 from '../assets/galleries/cusco/cusco23.jpg'


const HelpIcon = lazy(() => import('./sharedComponents/helpIcon'));
const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));
const LeftCol = lazy(() => import('./sharedComponents/blogComponents/leftCol'));
const RightCol = lazy(() => import('./sharedComponents/blogComponents/rightCol'));
const BlogRow = lazy(() => import('./sharedComponents/blogComponents/blogRow'));
const Footer = lazy(() => import('./sharedComponents/footer'));

class BlogPage extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      isLoaded:false,
      searchValue:'',
      emptySearch:false,
      blogSearch:'',
      blogs:[
            {name:'Peru Itinerary',
             pic: sacredValley17,
             tags:['huacachina', 'location guide','peru','sacred valley','arequipa','cusco','huaraz','lima','machu picchu','colca canyon','peru itinerary','','','','',''],
             link:'/PeruItinerary'},

             {name:'Peru Vegan Guide',
              pic: arequipa39,
              tags:['food guide', 'arequipa','peru','south america','vegan','cusco','lima','green point','plant based','sustainability','peru vegan guide','','','','',''],
              link:'/PeruVeganGuide'},

            {name:'In The Know: Huacachina',
             pic: huacachina11,
             tags:['activity guide', 'location guide','peru','south america','huacachina','sand boarding','hostel','in the know: huacachina','','','','','','',''],
             link:'/InTheKnowHuacachina'},

            {name:'In The Know: Arequipa',
             pic: arequipa1,
             tags:['activity guide', 'location guide','peru','south america','arequipa','colca canyon','sustainability','in the know: arequipa','','','','','','',''],
             link:'/InTheKnowArequipa'},

            {name:'In The Know: Cusco',
             pic: cusco23,
             tags:['activity guide', 'location guide','peru','south america','cusco','vegan','sacred valley','in the know: cusco','','','','','','',''],
             link:'/InTheKnowCusco'},

            {name:'Banos Activity Guide',
             pic: banos5,
             tags:['activity guide', 'banos','ecuador','south america','biking','waterfall','latin america','adventure','galapagos','thermal baths','banos activity guide','','','','',''],
             link:'/BanosActivityGuide'},

            {name:'In The Know: Quito',
             pic:quito17,
             tags:['carbon footprint', 'location guide','ecuador','south america','quito','activity guide','sustainability','sustainable','cotopaxi','in the know: quito','','','','',''],
             link:'/InTheKnowQuito'},

            {name:'Carbon Cost of Ecuador',
             pic:quito26,
             tags:['carbon footprint', 'ecuador','south america','sustainable','sustainability','latin america','quito','banos','tenna','carbon cost of ecuador','','','','',''],
             link:'/CarbonCostOfEcuador'},

            {name:'Carbon Cost of Colombia',
             pic:quindio18,
             tags:['carbon footprint', 'colombia','south america','sustainable','sustainability','latin america','medellin','bogata','filandia','carbon cost of colombia','','','','',''],
             link:'/CarbonCostOfColombia'},

            {name:'In The Know: Medellin',
             pic:medellin13,
             tags:['location guide', 'colombia','south america','medellin','activity guide','sustainable','sustainability','communa 13','in the know: medellin','','','','','',''],
             link:'/InTheKnowMedellin'},

            {name:'Medellin Vegan Guide',
             pic:medellin22,
             tags:['food guide', 'vegan','colombia','south america','plant based','sustainable','sustainability','vegetarian','medellin vegan guide','','','','','',''],
             link:'/MedellinFoodGuide'},

            {name:'In The Know: Guatape',
             pic:guatape1,
             tags:['location guide', 'guatape','colombia','south america','activity guide','vegan food','sustainable','sustainability','latin america','el pernol','in the know: guatape','','','','',''],
             link:'/InTheKnowGuatape'},

            {name:'Carbon Cost of Central America',
             pic:costaRica15,
             tags:['carbon footprint', 'latam','latin america','central america','sustainable','sustainability','carbon cost of central america','','','','','','','',''],
             link:'/CarbonCostOfLatam'},

            // {name:'Carbon Cost of Our Diet',
            //  pic:arequipa38,
            //  tags:['activity', 'notbc','carbon footprint','','','','','','',''],
            //  link:'/CarbonCostOfDiet'},

            {name:'Carbon Cost of Flying',
             pic:'/planeWing.jpg',
             tags:['carbon footprint', 'sustainable','sustainability','calculation','carbon cost of flying','','','','','','','','','',''],
             link:'/CarbonCostOfFlying'},

            {name:'Vancouver Vegan Guide',
             pic:'/vancouverFood.jpg',
             tags:['food guide', 'bc','canada','vancouver','vegan','plant based','north america','city','vancouver vegan guide','sustainability','','','','',''],
             link:'/VancouverFoodGuide'},


            {name:'Whistler Activity Guide',
             pic:'/whistlerActivity.jpg',
             tags:['activity guide', 'bc','canada','north america','whistler','hiking','mountain','whistler activity guide','','','','','','',''],
             link:'/WhistlerActivityGuide'},


            {name:'Whistler Vegan Guide',
             pic:'/whistlerFood.jpg',
             tags:['food guide', 'bc','canada','vegan','plant based','sustainable','sustainability','whistler','mountain','','','','','',''],
             link:'/WhistlerFoodGuide'},

                ],

      shownBlogs:[

        {name:'Peru Itinerary',
         pic: sacredValley17,
         tags:['huacachina', 'location guide','peru','sacred valley','arequipa','cusco','huaraz','lima','machu picchu','colca canyon','peru itinerary','','','','',''],
         link:'/PeruItinerary'},

         {name:'Peru Vegan Guide',
          pic: arequipa39,
          tags:['food guide', 'arequipa','peru','south america','vegan','cusco','lima','green point','plant based','sustainability','peru vegan guide','','','','',''],
          link:'/PeruVeganGuide'},

        {name:'In The Know: Huacachina',
         pic: huacachina11,
         tags:['activity guide', 'location guide','peru','south america','huacachina','sand boarding','hostel','in the know: huacachina','','','','','','',''],
         link:'/InTheKnowHuacachina'},

        {name:'In The Know: Arequipa',
         pic: arequipa1,
         tags:['activity guide', 'location guide','peru','south america','arequipa','colca canyon','sustainability','in the know: arequipa','','','','','','',''],
         link:'/InTheKnowArequipa'},

        {name:'In The Know: Cusco',
         pic: cusco23,
         tags:['activity guide', 'location guide','peru','south america','cusco','vegan','sacred valley','in the know: cusco','','','','','','',''],
         link:'/InTheKnowCusco'},

        {name:'Banos Activity Guide',
         pic: banos5,
         tags:['activity guide', 'banos','ecuador','south america','biking','waterfall','latin america','adventure','galapagos','thermal baths','banos activity guide','','','','',''],
         link:'/BanosActivityGuide'},

        {name:'In The Know: Quito',
         pic:quito17,
         tags:['carbon footprint', 'location guide','ecuador','south america','quito','activity guide','sustainability','sustainable','cotopaxi','in the know: quito','','','','',''],
         link:'/InTheKnowQuito'},

        {name:'Carbon Cost of Ecuador',
         pic:quito26,
         tags:['carbon footprint', 'ecuador','south america','sustainable','sustainability','latin america','quito','banos','tenna','carbon cost of ecuador','','','','',''],
         link:'/CarbonCostOfEcuador'},

        {name:'Carbon Cost of Colombia',
         pic:quindio18,
         tags:['carbon footprint', 'colombia','south america','sustainable','sustainability','latin america','medellin','bogata','filandia','carbon cost of colombia','','','','',''],
         link:'/CarbonCostOfColombia'},

        {name:'In The Know: Medellin',
         pic:medellin13,
         tags:['location guide', 'colombia','south america','medellin','activity guide','sustainable','sustainability','communa 13','in the know: medellin','','','','','',''],
         link:'/InTheKnowMedellin'},

        {name:'Medellin Vegan Guide',
         pic:medellin22,
         tags:['food guide', 'vegan','colombia','south america','plant based','sustainable','sustainability','vegetarian','medellin vegan guide','','','','','',''],
         link:'/MedellinFoodGuide'},

        {name:'In The Know: Guatape',
         pic:guatape1,
         tags:['location guide', 'guatape','colombia','south america','activity guide','vegan food','sustainable','sustainability','latin america','el pernol','in the know: guatape','','','','',''],
         link:'/InTheKnowGuatape'},

        {name:'Carbon Cost of Central America',
         pic:costaRica15,
         tags:['carbon footprint', 'latam','latin america','central america','sustainable','sustainability','carbon cost of central america','','','','','','','',''],
         link:'/CarbonCostOfLatam'},

        // {name:'Carbon Cost of Our Diet',
        //  pic:arequipa38,
        //  tags:['activity', 'notbc','carbon footprint','','','','','','',''],
        //  link:'/CarbonCostOfDiet'},

        {name:'Carbon Cost of Flying',
         pic:'/planeWing.jpg',
         tags:['carbon footprint', 'sustainable','sustainability','calculation','carbon cost of flying','','','','','','','','','',''],
         link:'/CarbonCostOfFlying'},


        {name:'Vancouver Vegan Guide',
         pic:'/vancouverFood.jpg',
         tags:['food guide', 'bc','canada','vancouver','vegan','plant based','north america','city','vancouver vegan guide','sustainability','','','','',''],
         link:'/VancouverFoodGuide'},


        {name:'Whistler Activity Guide',
         pic:'/whistlerActivity.jpg',
         tags:['activity guide', 'bc','canada','north america','whistler','hiking','mountain','whistler activity guide','','','','','','',''],
         link:'/WhistlerActivityGuide'},


        {name:'Whistler Vegan Guide',
         pic:'/whistlerFood.jpg',
         tags:['food guide', 'bc','canada','vegan','plant based','sustainable','sustainability','whistler','mountain','','','','','',''],
         link:'/WhistlerFoodGuide'},
                  ],
    };
  };

  componentDidMount(){

    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());

    setTimeout(() => {
      this.updateDimensions();
      if (this.props.match.params.searchTerm!== undefined) {
        this.tagSearch(this.props.match.params.searchTerm)
        this.setState({searchValue:this.props.match.params.searchTerm})
      }
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
  tagInput = (e)=>{
    this.setState({searchValue:e.target.value},()=>{this.tagSearch(e.target.value)})
  }
  suggestedTagInput=(input)=>{
    console.log(input)
    this.setState({searchValue:input},()=>{this.tagSearch(input)})
  }
  tagSearch =(value)=>{
    if (value==='') {
        this.setState({emptySearch:false,shownBlogs:this.state.blogs})
    }
    else {
      let tempBlogs = []
      for (var i = 0; i < this.state.blogs.length; i++) {
        if (this.state.blogs[i].tags[0].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[1].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[2].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[3].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[4].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[5].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[6].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[7].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[8].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
        else if (this.state.blogs[i].tags[9].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }

        else if (this.state.blogs[i].tags[10].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }

        else if (this.state.blogs[i].tags[11].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }

        else if (this.state.blogs[i].tags[12].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }

        else if (this.state.blogs[i].tags[13].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }

        else if (this.state.blogs[i].tags[14].includes(value.toLowerCase())) {
          tempBlogs.push(this.state.blogs[i])
        }
      }
      if (tempBlogs.length===0) {
        this.setState({emptySearch:true,shownBlogs:tempBlogs})
      }
      else {
        this.setState({emptySearch:false,shownBlogs:tempBlogs})
      }
    }
  }

  render() {


  return(
    <>


      <div style ={{overflowX:'hidden'}} >
      {this.state.isMobile?
          <MobileHeader page ={'blog'}/>
      :
          <DesktopHeader page ={'blog'}/>
      }
      <Row className = 'roaming-white vertical-padding-md centered-children' style ={{minHeight:'90vh'}}>
        {this.state.isMobile?
      <>

        <Row className ='nice-input-wrapper form-line roaming-black-text' style ={{paddingTop:'12.5vh'}}>
          <Col xs={3} sm={3} md={4} lg={4} xl={4}>
            &nbsp;
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={4}>
            <Row>
              <input onChange={this.tagInput}
                     value={this.state.searchValue}
                     id="searchValue"
                     type="text"
                     placeholder='Search'
                     className ='roaming-white roaming-black-text'/>
              <label htmlFor="searchValue" className ='charcoal'>Search</label>
            </Row>
          </Col>
          <Col xs={3} sm={3} md={4} lg={4} xl={4}>
            &nbsp;
          </Col>
        </Row>
        <Row className ='centered-children'>
            {this.state.shownBlogs.map((blog, i)=>{
                    return <BlogRow blog ={blog}
                                     index = {i}
                                     key={blog.name+i}/>})}
        </Row>
        {this.state.emptySearch?
          <>
            <Container className ='roaming-white full-width' style={{minHeight:'90vh'}}>
              <Row className ='roaming-white'>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                  &nbsp;
                </Col>
                <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                  <img loading="lazy" style ={{width:'120%'}}src ="/icon/aliaIcon.png" alt ='aliaIcon' />
                </Col>
                <Col xs={5} sm={5} md={5} lg={5} xl={5} className='centered-children'>
                  <div style={{marginTop: '10vh'}}><p className ='box3 sb14 roaming-text-sm'>Whoops! We don't have a blog about that yet.</p></div>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                  &nbsp;
                </Col>
              </Row>
              <Row className ='roaming-white centered-children vertical-padding-sm' >
                <p className ='roaming-text-sm centered-text'>Try some of these popular tags:</p>
              </Row>
              <Row>
                <Col className ='centered-children'>
                  <div className ='suggested-tag' onClick={()=>this.suggestedTagInput('Food Guide')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Food Guide</p>
                  </div>
                </Col>
                <Col className ='centered-children'>
                  <div className ='suggested-tag'  onClick={()=>this.suggestedTagInput('Activity Guide')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Activity Guide</p>
                  </div>
                </Col>
              </Row>
              <Row className='vertical-padding-sm'>
                <Col className ='centered-children'>
                  <div className ='suggested-tag'  onClick={()=>this.suggestedTagInput('Carbon Footprint')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Carbon Footprint</p>
                  </div>
                </Col>
                <Col className ='centered-children'>
                  <div className ='suggested-tag centered-children'  onClick={()=>this.suggestedTagInput('Location Guide')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Location Guide</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </>

        :null}
      </>
      :
      <>
        <Row className ='nice-input-wrapper form-line roaming-black-text' style ={{paddingTop:'12.5vh'}}>
          <Col xs={3} sm={3} md={4} lg={4} xl={4}>
            &nbsp;
          </Col>
            <Col xs={6} sm={6} md={4} lg={4} xl={4}>
            <Row>
              <input onChange={this.tagInput}
                     onBlur = {this.tagSearch}
                     value={this.state.searchValue}
                     id="searchValue"
                     type="text"
                     placeholder='Search'
                     className ='roaming-white roaming-black-text'/>
              <label htmlFor="searchValue" className ='charcoal'>Search</label>
            </Row>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <HelpIcon message ="Search by keyword to find what you're looking for."/>
          </Col>
          <Col xs={1} sm={1} md={2} lg={2} xl={2}>
            &nbsp;
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.shownBlogs.map((blog, i)=>{
                    return <LeftCol blog ={blog}
                                    index = {i}
                                    key={blog.name+i}/>
                                     })}
          </Col>
          <Col>
            {this.state.shownBlogs.map((blog, i)=>{
                    return <RightCol blog ={blog}
                                     index ={i}
                                     key={blog.name+i}/>
                                     })}
          </Col>
        </Row>
        {this.state.emptySearch?
          <>
            <Container className ='roaming-white full-width' style={{minHeight:'90vh'}}>
              <Row className ='roaming-white'>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                  &nbsp;
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img loading="lazy" style ={{width:'100%'}}src ="/icon/aliaIcon.png" alt ='aliaIcon' />
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3} className='centered-children'>
                  <div style={{marginTop: '20vh'}}><p className ='box3 sb14 roaming-text-sm'>Whoops! We don't have a blog about that yet.</p></div>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                  &nbsp;
                </Col>
              </Row>
              <Row className ='roaming-white centered-children vertical-padding-sm' >
                <p className ='roaming-text-sm centered-text'>Try some of these popular tags:</p>
              </Row>
              <Row>
                <Col>
                  &nbsp;
                </Col>
                <Col className ='centered-children'>
                  <div className ='suggested-tag' onClick={()=>this.suggestedTagInput('Food Guide')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Food Guide</p>
                  </div>
                </Col>
                <Col className ='centered-children'>
                  <div className ='suggested-tag'  onClick={()=>this.suggestedTagInput('Activity Guide')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Activity Guide</p>
                  </div>
                </Col>
                <Col className ='centered-children'>
                  <div className ='suggested-tag'  onClick={()=>this.suggestedTagInput('Carbon Footprint')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Carbon Footprint</p>
                  </div>
                </Col>
                <Col className ='centered-children'>
                  <div className ='suggested-tag centered-children'  onClick={()=>this.suggestedTagInput('Location Guide')}>
                    <p className ='roaming-text-sm centered-text' style={{margin:'auto'}}>Location Guide</p>
                  </div>
                </Col>
                <Col>
                  &nbsp;
                </Col>
              </Row>
            </Container>
          </>

        :null}
      </>
  }
      </Row>
      <Footer isMobile={this.state.isMobile}/>
      </div>


    </>
)}};
export default BlogPage;
