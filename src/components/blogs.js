import  {  Component } from "react";
import React from "react";
import {  Row, Col,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import HelpIcon from "./standardComponents/helpIcon"
import DesktopHeader from "./elements/desktopHeader";
import MobileHeader from "./elements/mobileHeader";
import LeftCol from  './standardComponents/blogComponents/leftCol'
import RightCol from './standardComponents/blogComponents/rightCol'
import BlogRow from  './standardComponents/blogComponents/blogRow'
import Footer from "./app/appPages/home/footer"

class BlogPage extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      searchValue:'',
      emptySearch:false,
      blogSearch:'',
      blogs:[

            {name:'In The Know Medellin',
             pic:'/MedellinGallery/Medellin11.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/InTheKnowMedellin'},

             {name:'Carbon Cost of Our Diet',
              pic:'/whistlerFood.jpg',
              tags:['activity', 'notbc','carbon footprint','','','','','','',''],
              link:'/CarbonCostOfDiet'},

              {name:'Whistler Activity Guide',
               pic:'/whistlerActivity.jpg',
               tags:['activity guide', 'bc','','','','','','','',''],
               link:'/WhistlerActivityGuide'},

            {name:'Vancouver Food Guide',
             pic:'/vancouverFood.jpg',
             tags:['food guide', 'bc','','','','','','','',''],
             link:'/VancouverFoodGuide'},

            {name:'Whistler Food Guide',
             pic:'/whistlerFood.jpg',
             tags:['food guide', 'bc','','','','','','','',''],
             link:'/WhistlerFoodGuide'},

            {name:'Carbon Cost of Latam',
             pic:'/CostaRicaGallery/costaRica15.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfLatam'},

            {name:'Carbon Cost of Flying',
             pic:'/planeWing.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfFlying'},

            {name:'Carbon Cost of Colombia',
             pic:'/MedellinGallery/Medellin11.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfColombia'},

            {name:'Carbon Cost of Ecuador',
             pic:'/QuitoGallery/Quito26.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfEcuador'},


             {name:'Banos Activity Guide',
              pic: '/banos/banos5.jpg',
              tags:['activity guide', 'notbc','','','','','','','',''],
              link:'/BanosActivityGuide'
            },


            {name:'In The Know Quito',
             pic:'/QuitoGallery/Quito17.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/InTheKnowQuito'},

            {name:'In The Know Guatape',
             pic:'/GuatapeGallery/Guatape1.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/InTHeKnowGuatape'},

              {name:'Medellin Food Guide',
               pic:'/GuatapeGallery/Guatape1.jpg',
               tags:['food guide', 'notbc','','','','','','','',''],
               link:'/MedellinFoodGuide'},
                ],
    };
  };

  componentDidMount(){
    console.log('blog mounted')
    window.scrollTo(-10, 0);
    this.setState({blogs:this.state.blogs,searchValue:this.state.blogSearch})
    let tempBlogs = []

    for (var i = 0; i < this.state.blogs.length; i++) {
      if (this.state.blogs[i].tags.includes(this.state.blogSearch.toLowerCase())) {
        tempBlogs.push(this.state.blogs[i])
      }
    }
    if (tempBlogs.length>0) {
      this.setState({blogs:tempBlogs})
    }
    else {
      this.setState({blogs:tempBlogs,emptySearch:true})
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
    console.log('searching by tag')
    console.log(value)
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
    }

    if (tempBlogs.length===0) {
      this.setState({emptySearch:true,blogs:tempBlogs})
    }
    else {
      this.setState({emptySearch:false,blogs:tempBlogs})
    }


  }


  render() {


  return(
    <>
    {this.state.isMobile?
        <MobileHeader changeView ={this.updateView}
                       page ={'blog'}/>
    :
        <DesktopHeader changeView ={this.updateView}
                       page ={'blog'}/>
    }


    <div style ={{overflowX:'hidden'}} className='roaming-white'>
    {this.state.isMobile?
    <>

      <Row className ='nice-input-wrapper form-line ' style ={{paddingTop:'12.5vh'}}>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <Row>
            <input onChange={this.tagInput}
                   value={this.state.searchValue}
                   id="searchValue"
                   type="text"
                   placeholder='Search'
                   className ='roaming-white'/>
            <label htmlFor="searchValue" >Search</label>
          </Row>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
      </Row>
      <Row className ='centered-children'>
          {this.state.blogs.map((blog, i)=>{
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
                <img style ={{width:'120%'}}src ="/icon/aliaIcon.png" alt ='aliaIcon' />
              </Col>
              <Col xs={5} sm={5} md={5} lg={5} xl={5} className='centered-children'>
                <div class="box3 sb14" style={{marginTop: '10vh'}}><p className ='roaming-text-sm'>Whoops! We don't have a blog about that yet.</p></div>
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
      <Row className ='nice-input-wrapper form-line' style ={{paddingTop:'12.5vh'}}>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          &nbsp;
        </Col>
        <Col  xs={6} sm={6} md={6} lg={6} xl={6}>
          <Row>
            <input onChange={this.tagInput}
                   onBlur = {this.tagSearch}
                   value={this.state.searchValue}
                   id="searchValue"
                   type="text"
                   placeholder='Search'
                   className ='roaming-white'/>
            <label htmlFor="searchValue" >Search</label>
          </Row>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <HelpIcon message ="Search by keyword to find what you're looking for."/>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col>
          {this.state.blogs.map((blog, i)=>{
                  return <LeftCol blog ={blog}
                                  index = {i}
                                  key={blog.name+i}/>
                                   })}
        </Col>
        <Col>
          {this.state.blogs.map((blog, i)=>{
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
                <img style ={{width:'100%'}}src ="/icon/aliaIcon.png" alt ='aliaIcon' />
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} xl={3} className='centered-children'>
                <div class="box3 sb14"style={{marginTop: '20vh'}}><p className ='roaming-text-sm'>Whoops! We don't have a blog about that yet.</p></div>
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
    </div>
<Footer isMobile={this.state.isMobile}/>


    </>
)}};
export default BlogPage;
