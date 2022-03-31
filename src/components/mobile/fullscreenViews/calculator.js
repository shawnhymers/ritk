import  {  Component } from "react";
import React from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import FlightForm from "../../shared/forms/calculatorForms/flights"
import CarForm from "../../shared/forms/calculatorForms/car"
import FoodForm from "../../shared/forms/calculatorForms/food"
import AccomodationForm from "../../shared/forms/calculatorForms/accomodation"
import  { useState } from 'react';
import CarbonTotal from "../../shared/elements/carbonTotal"

const MobileNav = props => {

return(
  <>

    <Row style ={{position:'fixed',bottom:'0vh',margin:'auto'}} className ='centered-children fill-width white vertical-padding-sm'>
      <Col onClick={()=>props.updateView('flights')} >
        <Row className ='centered-children'>
          <img src ='/plane.png'
               alt ='food'
               size ={'2em'}
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='flights'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Flights</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('transportation')}>
        <Row className ='centered-children'>
          <img src ='/train.png'
               alt ='food'
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='transportation'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Transport</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('food')}>
        <Row className ='centered-children'>
          <img src ='/avacado.png'
               alt ='food'
               size ={'2em'}
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='food'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Food</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('accomodation')}>
        <Row className ='centered-children'>
          <img src ='/tent.png'
               alt ='food'
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='accomodation'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Accomodation</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('overview')}>
        <Row className ='centered-children'>
          <img src ='/trip.png'
               alt ='food'
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='overview'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Overview</p>
        </Row>
      </Col>
    </Row>
  </>
)}


const CalculatorFull = props => {

  const [view,setView]=useState('flights')

  function updateView(view){
    setView(view)
  }

return(
  <>
  <MobileNav view ={view}
             updateView ={updateView}/>
    <Row style ={{marginTop:'10vh'}} >
        <CarbonTotal footprint={parseFloat(props.totalCarbonFootprint).toFixed(1)} label={'Total Carbon Footprint (KG)'}/>
    </Row>
    {view==='flights'?
    <>
      <Row  className =' centered-children' style ={{marginBottom:'20vw'}}>
        <FlightForm addCarbonCostItem={props.addCarbonCostItem}/>
      </Row>
    </>:null}
    {view==='transportation'?
    <>
      <Row  className =' centered-children' style ={{marginBottom:'20vw'}}>
        <CarForm addCarbonCostItem={props.addCarbonCostItem}/>
      </Row>
    </>:null}
    {view==='food'?
    <>
      <Row  className =' centered-children' style ={{marginBottom:'20vw'}}>
        <FoodForm addCarbonCostItem={props.addCarbonCostItem}/>
      </Row>
    </>:null}
    {view==='accomodation'?
    <>
    <Row  className ='centered-children' style ={{marginBottom:'20vw'}}>
      <AccomodationForm addCarbonCostItem={props.addCarbonCostItem}/>
    </Row>
    </>:null}

    <MobileNav view ={view}
               updateView ={updateView}/>
  </>
)}

export default CalculatorFull;
