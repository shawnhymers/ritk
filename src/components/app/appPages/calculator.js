import React from 'react';
import { Row,Col} from 'react-bootstrap';
import FlightForm from "../forms/calculatorForms/flights"
import TransportForm from "../forms/calculatorForms/transportation/main"
import FoodForm from "../forms/calculatorForms/food"
import AccomodationForm from "../forms/calculatorForms/accomodation"
import Overview from "../forms/calculatorForms/overview"
import  { useState } from 'react';
import CarbonTotal from "../elements/carbonTotal"

const MobileNav = props => {

return(
  <>

    <Row style ={{position:'fixed',bottom:'0vh',margin:'auto',minHeight:'6em'}}
         className ='centered-children fill-width white vertical-padding-sm'>
      <Col onClick={()=>props.updateView('flights')}
           className ='mobile-nav-col'>
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
      <Col onClick={()=>props.updateView('transportation')}
           className ='mobile-nav-col'>
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
      <Col onClick={()=>props.updateView('food')}
           className ='mobile-nav-col'>
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
      <Col onClick={()=>props.updateView('accomodation')}
           className ='mobile-nav-col'>
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
      <Col onClick={()=>props.updateView('overview')}
           className ='mobile-nav-col'>
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

const DesktopNav = props =>{


  return(
    <Row className ='vertical-padding-sm roaming-white'>
      <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
        &nbsp;
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>props.updateView('flights')} >
        <Row className ='centered-children'>
          <img src ='/plane.png'
               alt ='food'
               className ={'calculator-icon '+((props.stepCount>0)? "":"fadded")}/>
        </Row>
        <Row className ='centered-children'>
          <p className = {'centered-text '
                         +(props.view==='flights'? 'balloon-text medium-link-text ':'balloon-text roaming-yellow-text medium-link-text ')
                         +((props.stepCount>0)? "":" fadded")}>Flights</p>
        </Row>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>props.updateView('transportation')}>
        <Row className ='centered-children'>
          <img src ='/train.png'
               alt ='food'
               className ={'calculator-icon '+((props.stepCount>1)? "":"fadded")}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='transportation'? 'balloon-text medium-link-text ':'balloon-text roaming-yellow-text medium-link-text ')
                       +((props.stepCount>1)? " ":"fadded")}>Transport</p>
        </Row>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>props.updateView('food')}>
        <Row className ='centered-children'>
          <img src ='/avacado.png'
               alt ='food'
               className ={'calculator-icon '+((props.stepCount>2)? "":"fadded")}/>
        </Row>
        <Row className ='centered-children'>
          <p className = {'centered-text '
                         +(props.view==='food'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                         +((props.stepCount>2)? "":"fadded")}>Food</p>
        </Row>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>props.updateView('accomodation')}>
        <Row className ='centered-children'>
          <img src ='/tent.png'
               alt ='food'
               className ={'calculator-icon '+((props.stepCount>3)? "":"fadded")}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='accomodation'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                       +((props.stepCount>3)? "":"fadded")}>Accomodation</p>
        </Row>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick ={(e)=>props.updateView('overview')}>
        <Row className ='centered-children'>
          <img src ='/trip.png'
               alt ='food'
               className ={'calculator-icon '+((props.stepCount>4)? "":"fadded")}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.view==='overview'? 'balloon-text medium-link-text':'balloon-text roaming-yellow-text medium-link-text ')
                       +((props.stepCount>4)? "":"fadded")}>Overview</p>
        </Row>
      </Col>
      <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
        &nbsp;
      </Col>
    </Row>
  )
}
const Calculator = props => {

  const [view,setView]=useState('flights')

  const [stepCount, setStepCount]= useState(1)

  function updateView(view){
    setView(view)
    if (view==='transportation' && stepCount<=2) {
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

  {!props.isMobile?
    <>
    <Row style ={{paddingTop:'10vh'}} className ='roaming-white'>
      <DesktopNav view ={view}
                  stepCount ={stepCount}
                  updateView ={updateView}/>
    </Row>
    </>
    :
    <>
    <Row  >
      &nbsp;
    </Row>
    </>}

    <Row className ='roaming-white 'style ={{paddingTop:'10vh'}} >
        <CarbonTotal footprint={props.totalCarbonCost}
                     label={'Total Carbon Footprint (KG)'}/>
    </Row>
    {view==='flights'?
    <>
      <Row  className =' centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <FlightForm addCarbonCostItem={props.addCarbonCostItem} />
      </Row>
    </>:null}
    {view==='transportation'?
    <>
      <Row  className =' centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <TransportForm addCarbonCostItem={props.addCarbonCostItem}/>
      </Row>
    </>:null}
    {view==='food'?
    <>
      <Row  className =' centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <FoodForm addCarbonCostItem={props.addCarbonCostItem}/>
      </Row>
    </>:null}

    {view==='accomodation'?
    <>
    <Row  className ='centered-children roaming-white' style ={{paddingBottom:'9em'}}>
      <AccomodationForm addCarbonCostItem={props.addCarbonCostItem}/>
    </Row>
    </>:null}

    {view==='overview'?
    <>
      <Row  className ='centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <Overview totalCarbonCost = {props.totalCarbonCost}
                  totalFlightCost = {props.totalFlightCost}
                  totalTransportCost={props.totalTransportCost}
                  totalCarCost={props.totalCarCost}
                  totalBusCost={props.totalBusCost}
                  totalTrainCost={props.totalTrainCost}
                  totalFoodCost ={props.totalFoodCost}
                  totalDietCost={props.totalDietCost}
                  totalAccomodationCost = {props.totalAccomodationCost}
                  flightList={props.flightList}
                  transportList={props.transportList}
                  carList={props.carList}
                  busList={props.busList}
                  trainList={props.trainList}
                  foodList={props.foodList}
                  dietList={props.dietList}
                  hotelList={props.hotelList}/>
      </Row>
    </>:null}


    {props.isMobile?
      <>
        <MobileNav view ={view}
                   updateView ={updateView}/>
      </>:null}

  </>
)}

export default Calculator;
