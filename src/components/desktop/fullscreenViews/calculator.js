import React from 'react';
import  { useState } from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import Header from "../homeSections/header";
import Flights from "./calculatorPages/flights"
import Food from "./calculatorPages/food"
import Transport from "./calculatorPages/transport/main"
import Accomodation from "./calculatorPages/accomodation"
import Overview from "./calculatorPages/overview"
import CarbonTotal from "./calculatorPages/elements/carbonTotal"


const CalculatorFull = props => {

  const [view, setView] = useState('flights');


return(
  <>
    <Header page ='calculator'
            changeView ={props.changeView}/>
    <Row className ='roaming-blue'>

      <Container className ='raised-borers round-borders off-white vertical-padding-md vertical-margin-md'>
        <Row className ='vertical-padding-sm'>
          <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
            &nbsp;
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={()=>setView('flights')} >
            <Row className ='centered-children'>
              <img src ='/plane.png' alt ='food' className = 'calculator-icon'/>
            </Row>
            <Row className ='centered-children'>
              <p className = {'centered-text '+(view==='flights'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Flights</p>
            </Row>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={()=>setView('transport')}>
            <Row className ='centered-children'>
              <img src ='/train.png' alt ='food' className = 'calculator-icon'/>
            </Row>
            <Row className ='centered-children'>
            <p className = {'centered-text '+(view==='transport'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Other Transport</p>
            </Row>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={()=>setView('food')}>
            <Row className ='centered-children'>
              <img src ='/avacado.png' alt ='food' className = 'calculator-icon'/>
            </Row>
            <Row className ='centered-children'>
              <p className = {'centered-text '+(view==='food'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Food</p>
            </Row>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={()=>setView('accomodation')}>
            <Row className ='centered-children'>
              <img src ='/tent.png' alt ='food' className = 'calculator-icon'/>
            </Row>
            <Row className ='centered-children'>
            <p className = {'centered-text '+(view==='accomodation'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Accomodation</p>
            </Row>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={()=>setView('overview')}>
            <Row className ='centered-children'>
              <img src ='/trip.png' alt ='food' className = 'calculator-icon'/>
            </Row>
            <Row className ='centered-children'>
            <p className = {'centered-text '+(view==='overview'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text')}>Trip Overview</p>
            </Row>
          </Col>
          <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
            &nbsp;
          </Col>
        </Row>

        <CarbonTotal footprint={parseFloat(props.totalCarbonFootprint).toFixed(1)} label={'Total Carbon Footprint (KG)'}/>

        {view==='flights'?
        <>
          <Flights addCarbonCostItem ={props.addCarbonCostItem}/>
        </>:null}
        {view==='transport'?
        <>
          <Transport addCarbonCostItem ={props.addCarbonCostItem}/>
        </>:null}
        {view==='food'?
        <>
          <Food addCarbonCostItem ={props.addCarbonCostItem}/>
        </>:null}
        {view==='accomodation'?
        <>
          <Accomodation addCarbonCostItem ={props.addCarbonCostItem}/>
        </>:null}
        {view ==='overview'?
        <>
          <Overview totalCarbonFootprint = {props.totalCarbonFootprint}
                    totalFlightCost ={props.totalFlightCost}
                    totalTransportCost = {props.totalTransportCost}
                    totalFoodCost = {props.totalFoodCost}
                    totalAccomodationCost = {props.totalAccomodationCost}/>
        </>:null
        }
      </Container>
    </Row>
  </>
)}

export default CalculatorFull;
