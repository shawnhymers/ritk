import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import About from "../homeSections/about";
import Header from "../homeSections/header";

const AboutFull = props => {


return(
  <>
    <Header page ='about'
            changeView ={props.changeView}/>
    <About view ={props.view}/>
  </>
)}

export default AboutFull;
