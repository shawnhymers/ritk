import  {  Component } from "react";
import React from "react";
import {  Row, Col,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import HelpIcon from "../../standardComponents/helpIcon"

const LeftCol = props =>{

  return(
    <>
    {props.index% 2 === 0?
      <>
        <Row >

          <Link to={props.blog.link}
                className = 'centered-children' >
            <img src={props.blog.pic}
                 alt="Nita lake"
                 style = {{width:'80%'}}
                 className = 'blog-zoom  vertical-margin-sm'/>
          </Link>
        </Row>
        <Row className = 'centered-children bottom-padding-md'>
          <p className = ' centered-children roaming-text large-caption-text'
             style = {{fontSize:'2em'}}>{props.blog.name}</p>
        </Row>
      </>
    :null}


    </>
  )}


const RightCol = props =>{

  return(
    <>
    {props.index% 2 !== 0?
      <>
        <Row >
          <Link to={props.blog.link} className = 'centered-children' >
            <img src={props.blog.pic} alt="Nita lake" style = {{width:'80%'}} className = 'blog-zoom vertical-margin-sm'/>
          </Link>
        </Row>
        <Row className = 'centered-children bottom-padding-md'>
           <p className = 'centered-children roaming-text large-caption-text' style = {{fontSize:'2em'}}>{props.blog.name}</p>
        </Row>
      </>
    :null}


    </>
  )}

  const BlogRows = props =>{

    return(
      <>
        <Row className ='centered-children'>
          <Link to={props.blog.link} className = 'centered-children' className ='centered-children'>
            <img src={props.blog.pic} alt="Nita lake" style = {{width:'80%'}} className = 'blog-zoom  vertical-margin-sm'/>
          </Link>
        </Row>
        <Row className = 'centered-children'>
          <p className = ' centered-children roaming-text large-caption-text' style = {{fontSize:'2em'}}>{props.blog.name}</p>
        </Row>
      </>
    )}

class Blog extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      searchValue:'',
      emptySearch:false,
      blogs:[]
    };
  };

  componentDidMount(){
    console.log('blog mounted')
    window.scrollTo(-10, 0);
    this.setState({blogs:this.props.blogs,searchValue:this.props.blogSearch})
    let tempBlogs = []

    for (var i = 0; i < this.props.blogs.length; i++) {
      if (this.props.blogs[i].tags.includes(this.props.blogSearch.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
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

    for (var i = 0; i < this.props.blogs.length; i++) {
      if (this.props.blogs[i].tags[0].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[1].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[2].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[3].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[4].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[5].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[6].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[7].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[8].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
      else if (this.props.blogs[i].tags[9].includes(value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
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

    {this.props.isMobile?
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
                  return <BlogRows blog ={blog}
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



    </>
)}};
export default Blog;
