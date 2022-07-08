import React, {  lazy, Component } from 'react';
import {  Row, Col,Container} from 'react-bootstrap';

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
      searchValue:'',
      emptySearch:false,
      blogSearch:'',
      blogs:[
            {name:'Banos Activity Guide',
             pic: '/banos/banos5.jpg',
             tags:['activity guide', 'notbc','','','','','','','',''],
             link:'/BanosActivityGuide'},

            {name:'In The Know Quito',
             pic:'/QuitoGallery/Quito17.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/InTheKnowQuito'},

            {name:'Carbon Cost of Ecuador',
             pic:'/QuitoGallery/Quito26.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfEcuador'},

            {name:'Carbon Cost of Colombia',
             pic:'/QuindioGallery/Quindio18.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfColombia'},

            {name:'In The Know Medellin',
             pic:'/MedellinGallery/Medellin13.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/InTheKnowMedellin'},

            {name:'Medellin Food Guide',
             pic:'/MedellinGallery/Medellin22.jpg',
             tags:['food guide', 'notbc','','','','','','','',''],
             link:'/MedellinFoodGuide'},

            {name:'In The Know Guatape',
             pic:'/GuatapeGallery/Guatape1.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/InTheKnowGuatape'},

            {name:'Carbon Cost of Latam',
             pic:'/CostaRicaGallery/costaRica15.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfLatam'},

            {name:'Carbon Cost of Our Diet',
             pic:'/ArequipaGallery/arequipa38.jpg',
             tags:['activity', 'notbc','carbon footprint','','','','','','',''],
             link:'/CarbonCostOfDiet'},

            {name:'Carbon Cost of Flying',
             pic:'/planeWing.jpg',
             tags:['carbon footprint', 'notbc','','','','','','','',''],
             link:'/CarbonCostOfFlying'},

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

                ],

      shownBlogs:[

        {name:'Banos Activity Guide',
         pic: '/banos/banos5.jpg',
         tags:['activity guide', 'notbc','','','','','','','',''],
         link:'/BanosActivityGuide'},

        {name:'In The Know Quito',
         pic:'/QuitoGallery/Quito17.jpg',
         tags:['carbon footprint', 'notbc','','','','','','','',''],
         link:'/InTheKnowQuito'},

        {name:'Carbon Cost of Ecuador',
         pic:'/QuitoGallery/Quito26.jpg',
         tags:['carbon footprint', 'notbc','','','','','','','',''],
         link:'/CarbonCostOfEcuador'},

        {name:'Carbon Cost of Colombia',
         pic:'/QuindioGallery/Quindio18.jpg',
         tags:['carbon footprint', 'notbc','','','','','','','',''],
         link:'/CarbonCostOfColombia'},

        {name:'In The Know Medellin',
         pic:'/MedellinGallery/Medellin13.jpg',
         tags:['carbon footprint', 'notbc','','','','','','','',''],
         link:'/InTheKnowMedellin'},

        {name:'Medellin Food Guide',
         pic:'/MedellinGallery/Medellin22.jpg',
         tags:['food guide', 'notbc','','','','','','','',''],
         link:'/MedellinFoodGuide'},

        {name:'In The Know Guatape',
         pic:'/GuatapeGallery/Guatape1.jpg',
         tags:['carbon footprint', 'notbc','','','','','','','',''],
         link:'/InTheKnowGuatape'},

        {name:'Carbon Cost of Latam',
         pic:'/CostaRicaGallery/costaRica15.jpg',
         tags:['carbon footprint', 'notbc','','','','','','','',''],
         link:'/CarbonCostOfLatam'},

        {name:'Carbon Cost of Our Diet',
         pic:'/ArequipaGallery/arequipa38.jpg',
         tags:['activity', 'notbc','carbon footprint','','','','','','',''],
         link:'/CarbonCostOfDiet'},

        {name:'Carbon Cost of Flying',
         pic:'/planeWing.jpg',
         tags:['carbon footprint', 'notbc','','','','','','','',''],
         link:'/CarbonCostOfFlying'},

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

      <Row className ='nice-input-wrapper form-line ' style ={{paddingTop:'12.5vh'}}>
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
                   className ='roaming-white'/>
            <label htmlFor="searchValue" >Search</label>
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
                <img style ={{width:'120%'}}src ="/icon/aliaIcon.png" alt ='aliaIcon' />
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
      <Row className ='nice-input-wrapper form-line' style ={{paddingTop:'12.5vh'}}>
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
                   className ='roaming-white'/>
            <label htmlFor="searchValue" >Search</label>
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
                <img style ={{width:'100%'}}src ="/icon/aliaIcon.png" alt ='aliaIcon' />
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
