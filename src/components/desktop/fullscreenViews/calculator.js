import React from 'react';
import  { useState } from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import Header from "../homeSections/header";
import FlightForm from "../../shared/forms/calculatorForms/flights"
import FoodForm from "../../shared/forms/calculatorForms/food"
import CarForm from "../../shared/forms/calculatorForms/car"
import AccomodationForm from "../../shared/forms/calculatorForms/accomodation"
import Overview from "../../shared/forms/calculatorForms/overview"
import CarbonTotal from "../../shared/elements/carbonTotal"


const CalculatorFull = props => {

  const [view, setView] = useState('flights');
  const [stepCount, setStepCount]= useState(1)

  function changeView(view){
    setView(view)
    if (view==='transport' && stepCount<=2) {
      setStepCount(2)
    }
    else if (view==='food'&& stepCount<=3) {
      setStepCount(3)
    }
    else if (view==='accomodation'&& stepCount<=4) {
      setStepCount(4)
    }
    else if (view==='overview'&& stepCount<=5) {
      setStepCount(5)
    }
  }
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
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>changeView('flights')} >
            <Row className ='centered-children'>
              <img src ='/plane.png'
                   alt ='food'
                   className ={'calculator-icon '+((stepCount>0)? "":"fadded")}/>
            </Row>
            <Row className ='centered-children'>
              <p className = {'centered-text '
                             +(view==='flights'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                             +((stepCount>0)? "":"fadded")}>Flights</p>
            </Row>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>changeView('transport')}>
            <Row className ='centered-children'>
              <img src ='/train.png'
                   alt ='food'
                   className ={'calculator-icon '+((stepCount>1)? "":"fadded")}/>
            </Row>
            <Row className ='centered-children'>
            <p className = {'centered-text '
                           +(view==='transport'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                           +((stepCount>1)? " ":"fadded")}>Transport</p>
            </Row>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>changeView('food')}>
            <Row className ='centered-children'>
              <img src ='/avacado.png'
                   alt ='food'
                   className ={'calculator-icon '+((stepCount>2)? "":"fadded")}/>
            </Row>
            <Row className ='centered-children'>
              <p className = {'centered-text '
                             +(view==='food'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                             +((stepCount>2)? "":"fadded")}>Food</p>
            </Row>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>changeView('accomodation')}>
            <Row className ='centered-children'>
              <img src ='/tent.png'
                   alt ='food'
                   className ={'calculator-icon '+((stepCount>3)? "":"fadded")}/>
            </Row>
            <Row className ='centered-children'>
            <p className = {'centered-text '
                           +(view==='accomodation'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                           +((stepCount>3)? "":"fadded")}>Accomodation</p>
            </Row>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>changeView('overview')}>
            <Row className ='centered-children'>
              <img src ='/trip.png'
                   alt ='food'
                   className ={'calculator-icon '+((stepCount>4)? "":"fadded")}/>
            </Row>
            <Row className ='centered-children'>
            <p className = {'centered-text '
                           +(view==='overview'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                           +((stepCount>4)? "":"fadded")}>Overview</p>
            </Row>
          </Col>
          <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
            &nbsp;
          </Col>
        </Row>

        <CarbonTotal footprint={parseFloat(props.totalCarbonFootprint).toFixed(1)} label={'Total Carbon Footprint (KG)'}/>

        {view==='flights'?
        <>
          <FlightForm addCarbonCostItem ={props.addCarbonCostItem}/>
        </>:null}
        {view==='transport'?
        <>
          <CarForm addCarbonCostItem ={props.addCarbonCostItem}/>
        </>:null}
        {view==='food'?
        <>
          <FoodForm addCarbonCostItem ={props.addCarbonCostItem}/>
        </>:null}
        {view==='accomodation'?
        <>
          <AccomodationForm addCarbonCostItem ={props.addCarbonCostItem}/>
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
