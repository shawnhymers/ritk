import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import About from "../../shared/responsivePages/homeSections/about";
import Header from "../header";

const AboutFull = props => {


return(
  <>
    <About view ={props.view}/>
  </>
)}

export default AboutFull;
