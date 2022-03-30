import Header from "../homeSections/header";
import  {  Component } from "react";
import React from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


const LeftCol = props =>{

  return(
    <>
    {props.index% 2 === 0?
      <>
        <Row >

          <Link to={props.blog.link} className = 'centered-children' >
            <img src={props.blog.pic} alt="Nita lake" style = {{width:'80%'}} className = 'zoom round-borders vertical-margin-sm'/>
          </Link>
        </Row>
        <Row className = 'centered-children'>
          <p className = ' centered-children roaming-text large-caption-text' style = {{fontSize:'2em'}}>{props.blog.name}</p>
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
            <img src={props.blog.pic} alt="Nita lake" style = {{width:'80%'}} className = 'zoom round-borders vertical-margin-sm'/>
          </Link>
        </Row>
        <Row className = 'centered-children'>
           <p className = 'centered-children roaming-text large-caption-text' style = {{fontSize:'2em'}}>{props.blog.name}</p>
        </Row>
      </>
    :null}


    </>
  )}


class BlogFull extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      searchValue:'',
      blogs:[]
    };
  };

  componentDidMount(){
    this.setState({blogs:this.props.blogs,searchValue:this.props.blogSearch})
    let tempBlogs = []

    for (var i = 0; i < this.props.blogs.length; i++) {
      if (this.props.blogs[i].tags.includes(this.props.blogSearch.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
    }

    this.setState({blogs:tempBlogs})

  }
  tagInput = (e)=>{
    this.setState({searchValue:e.target.value})
  }
  tagSearch =(e)=>{

    let tempBlogs = []

    for (var i = 0; i < this.props.blogs.length; i++) {
      if (this.props.blogs[i].tags.includes(e.target.value.toLowerCase())) {
        tempBlogs.push(this.props.blogs[i])
      }
    }

    this.setState({blogs:tempBlogs})

  }


  render() {


  return(
    <>
    <Header page ='blog'
            changeView ={this.props.changeView}/>


        <Row className ='nice-input-wrapper form-line vertical-margin-lg'>
          <input onChange={this.tagInput}
                 onBlur = {this.tagSearch}
                 value={this.state.searchValue}
                 id="searchValue"
                 type="text"
                 placeholder='Search'
                 style ={{width:'25vw' }}/>
          <label htmlFor="searchValue" >Search</label>
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


    </>
)}};
export default BlogFull;
