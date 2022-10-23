import React, {  lazy, Component, useState } from 'react';
import { Row,Col, Button} from 'react-bootstrap';
import { Prompt } from 'react-router'
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {changeView, resetNavState} from "../store/actions/creators/navigation"
import{resetSubmitState} from "../store/actions/creators/submits"
import coupleIcon from "../assets/icons/coupleIcon.png"
const FlightForm = lazy(() => import('./forms/calculatorForms/flights'));
const TransportForm = lazy(() => import('./forms/calculatorForms/transportation/main'));
const FoodForm = lazy(() => import('./forms/calculatorForms/food'));
const AccomodationForm = lazy(() => import('./forms/calculatorForms/accomodation'));
const Overview = lazy(() => import('./forms/calculatorForms/overview'));
const CarbonTotal = lazy(() => import('./sharedComponents/carbonTotal'));
const DesktopHeader = lazy(() => import('./sharedComponents/navComponents/desktopHeader'));
const MobileHeader = lazy(() => import('./sharedComponents/navComponents/mobileHeader'));
const Footer = lazy(() => import('./sharedComponents/footer'));
const OutcomeMessage = lazy(() => import('./sharedComponents/outcomeMessage'));
const LargeModal = lazy(() => import('./sharedComponents/largeModal'));


class CalculatorPage extends Component {

  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      shouldBlockNavigation:false,
      showOutcomeMessage:false,
      outcomeMessageType:'positive',
      showModalPrompt:false
    };
    this.updateDimensions = this.updateDimensions.bind(this);

  };
  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    if (this.props.submits.flightList.length>0 ||
     this.props.submits.carList.length>0 ||
     this.props.submits.busList.length>0 ||
     this.props.submits.trainList.length>0 ||
     this.props.submits.foodList.length>0 ||
     this.props.submits.dietList.length>0 ||
     this.props.submits.hotelList.length>0)
     {
      this.setState({showModalPrompt:true})
      }
    setTimeout(() => {
      this.updateDimensions();
    }, 300)

  }

  componentDidUpdate () {
  if (this.state.shouldBlockNavigation) {
    window.onbeforeunload = () => true
  } else {
    window.onbeforeunload = undefined
  }
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

  closeMessage = ()=>{
    this.setState({showOutcomeMessage:false})
  }
  closeModal=()=>{
    this.setState({showModalPrompt:false})
  }
  startFresh=()=>{
    this.props.dispatch(resetNavState())
    this.props.dispatch(resetSubmitState())
    this.setState({showModalPrompt:false})
  }
  render() {

  return(
    <>

      <div style ={{overflowX:'hidden'}} >
      {this.state.showModalPrompt ?
       <>
       <LargeModal isOpen={true}
                   closeModal ={this.closeModal}
                   modalTitle ={''}
                   modalBody = {<>
                     <Row className = 'centered-children'>
                     <img src= {coupleIcon}
                          alt = 'couple Icon'
                          style={{width:'10em',paddingBottom: '1em'}}/>
                     </Row>
                     <Row className = 'centered-children'>
                       <p className = 'centered-text roaming-yellow-text balloon-text '>HI THERE!</p>
                     </Row>
                     <Row className = 'centered-children'>
                       <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                         &nbsp;
                       </Col>
                       <Col  xs={10} sm={10} md={10} lg={10} xl={10} className = 'centered-children'>
                         <p className = 'centered-text center-justified-text roaming-black-text blog-body'>Would you like to start back where you left off, or start fresh?</p>
                       </Col>
                       <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                         &nbsp;
                       </Col>
                     </Row>
                     <Row>
                      <Col className='centered-children'>
                        <Button variant='custom' onClick={this.closeModal}>Continue</Button>
                      </Col>
                      <Col className='centered-children'>
                        <Button variant='custom' onClick={this.startFresh}>Start Fresh</Button>
                      </Col>
                     </Row></>}/>
       </>
       :
       null}
      {this.state.showOutcomeMessage?
        <OutcomeMessage isMobile ={this.state.isMobile}
                        outcomeMessageType = {this.state.outcomeMessageType}
                        closeMessage ={this.closeMessage}
                        message ={this.state.outcomeMessage}/>
      :null}
      {this.state.isMobile?
          <MobileHeader changeView ={this.updateView}
                         page ={this.state.view}/>
      :
          <DesktopHeader changeView ={this.updateView}
                         page ={'calculator'}/>
      }
      <Calculator navigation={this.props.navigation}
                  submits={this.props.submits}
                  isMobile={this.state.isMobile}/>

      <Footer isMobile={this.state.isMobile}
              isCalculator={true}/>

        </div>


    </>

)}};
const mapStateToProps = (state) => {
  return{submits:state.submits,navigation:state.navigation}
};

export default connect(mapStateToProps)(CalculatorPage);


const MobileNav = props => {

return(
  <>

    <Row style ={{position:'fixed',bottom:'0vh',margin:'auto',minHeight:'6em',zIndex:34}}
         className ='centered-children fill-width white vertical-padding-sm'>
      <Col onClick={()=>props.updateView('flights')}
           className ='mobile-nav-col'>
        <Row className ='centered-children'>
          <img src ='/plane.png'
               alt ='food'
               size ={'2em'}
               loading="lazy"
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.navigation.view==='flights'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Flights</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('transportation')}
           className ='mobile-nav-col'>
        <Row className ='centered-children'>
          <img src ='/train.png'
               alt ='food'
               loading="lazy"
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.navigation.view==='transportation'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Transport</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('food')}
           className ='mobile-nav-col'>
        <Row className ='centered-children'>
          <img src ='/avacado.png'
               alt ='food'
               size ={'2em'}
               loading="lazy"
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.navigation.view==='food'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Food</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('accomodation')}
           className ='mobile-nav-col'>
        <Row className ='centered-children'>
          <img src ='/tent.png'
               alt ='food'
               loading="lazy"
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.navigation.view==='accomodation'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Accomodation</p>
        </Row>
      </Col>
      <Col onClick={()=>props.updateView('overview')}
           className ='mobile-nav-col'>
        <Row className ='centered-children'>
          <img src ='/trip.png'
               alt ='food'
               loading="lazy"
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(props.navigation.view==='overview'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
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
               loading="lazy"
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
               loading="lazy"
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
               loading="lazy"
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
               loading="lazy"
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
               loading="lazy"
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
  const dispatch = useDispatch();
  console.log('calculator props')
  console.log(props)

  function updateView(view){
    if(view ==='flights'){
      dispatch(changeView({view:view,stepCount:props.navigation.stepCount}))
    }
    else if (view==='transportation' && props.navigation.stepCount<=2) {
      dispatch(changeView({view:view,stepCount:2}))
    }
    else if (view==='transportation' && props.navigation.stepCount>2) {
      dispatch(changeView({view:view,stepCount:props.navigation.stepCount}))
    }
    else if (view==='food'&& props.navigation.stepCount<=3) {
      dispatch(changeView({view:view,stepCount:3}))
    }
    else if (view==='food'&& props.navigation.stepCount>3) {
      dispatch(changeView({view:view,stepCount:props.navigation.stepCount}))
    }
    else if (view==='accomodation'&& props.navigation.stepCount<=4) {
      dispatch(changeView({view:view,stepCount:4}))
    }
    else if (view==='accomodation'&& props.navigation.stepCount>4) {
      dispatch(changeView({view:view,stepCount:props.navigation.stepCount}))
    }
    else if (view==='overview'&& props.navigation.stepCount<=5) {
      dispatch(changeView({view:view,stepCount:5}))
    }
    else if (view==='overview'&& props.navigation.stepCount>5) {
      dispatch(changeView({view:view,stepCount:props.navigation.stepCount}))
    }
  }

  const flightCostSum = props.submits.flightList.reduce((accumulator, flight) => {
    return accumulator + parseFloat(flight.carbonFootprint);
  }, 0);
  const carCostSum = props.submits.carList.reduce((accumulator, car) => {
    return accumulator + parseFloat(car.carbonFootprint);
  }, 0);
  const busCostSum = props.submits.busList.reduce((accumulator, bus) => {
    return accumulator + parseFloat(bus.carbonFootprint);
  }, 0);
  const trainCostSum = props.submits.trainList.reduce((accumulator, train) => {
    return accumulator + parseFloat(train.carbonFootprint);
  }, 0);

  const foodCostSum = props.submits.foodList.reduce((accumulator, food) => {
    return accumulator + parseFloat(food.carbonFootprint);
  }, 0);
  const dietCostSum = props.submits.dietList.reduce((accumulator, diet) => {
    return accumulator + parseFloat(diet.carbonFootprint);
  }, 0);
  const hotelCostSum = props.submits.hotelList.reduce((accumulator, hotel) => {
    return accumulator + parseFloat(hotel.carbonFootprint);
  }, 0);
  const carbonFootprint=carCostSum+busCostSum+trainCostSum+foodCostSum+dietCostSum+hotelCostSum+flightCostSum;


return(
  <>

  {!props.isMobile?
    <>
    <Row style ={{paddingTop:'10vh'}} className ='roaming-white'>
      <DesktopNav view ={props.navigation.view}
                  stepCount ={props.navigation.stepCount}
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
        <CarbonTotal footprint={carbonFootprint}
                     label={'Total Carbon Footprint (KG)'}/>
    </Row>
    {props.navigation.view==='flights'?
    <>
      <Row  className =' centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <FlightForm />
      </Row>
    </>:null}
    {props.navigation.view==='transportation'?
    <>
      <Row  className =' centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <TransportForm />
      </Row>
    </>:null}
    {props.navigation.view==='food'?
    <>
      <Row  className =' centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <FoodForm />
      </Row>
    </>:null}

    {props.navigation.view==='accomodation'?
    <>
    <Row  className ='centered-children roaming-white' style ={{paddingBottom:'9em'}}>
      <AccomodationForm />
    </Row>
    </>:null}

    {props.navigation.view==='overview'?
    <>
      <Row  className ='centered-children roaming-white' style ={{paddingBottom:'9em'}}>
        <Overview isMobile={props.isMobile}/>
      </Row>
    </>:null}


    {props.isMobile?
      <>
        <MobileNav view ={props.navigation.view}
                   updateView ={updateView}/>
      </>:null}

  </>
)}

//
// addToList =(type,data)=>{
//   console.log('adding to list of carbon items')
//   console.log('type is...'+type)
//   console.log('data is...'+data)
//   let tempArray = this.state[type]
//   tempArray.push(data);
//   console.log('temp array is...'+tempArray)
//   this.setState({[type]:tempArray},()=>{console.log(this.state[type])});
// }
// addCarbonCostItem = (data)=>{
//   if (data.type==='flight') {
//     this.addToList(data.type,data)
//     this.setState({totalFlightCost:this.state.totalFlightCost+data.carbonFootprint,
//                    showOutcomeMessage:true,
//                    shouldBlockNavigation:true,
//                    outcomeMessageType:'positive',
//                    outcomeMessage:'Added succesfully!'})
//
//   }
//   else if (data.type ==='transport') {
//     this.addToList(data.subType,data)
//
//     if (data.subType==='car') {
//       this.setState({totalCarCost:this.state.totalCarCost+data.carbonFootprint,
//                      totalTransportCost:this.state.totalTransportCost+data.carbonFootprint,
//                      showOutcomeMessage:true,
//                      shouldBlockNavigation:true,
//                      outcomeMessageType:'positive',
//                      outcomeMessage:'Added succesfully!'})
//     }
//     else if (data.subType==='bus') {
//       this.setState({totalBusCost:this.state.totalBusCost+data.carbonFootprint,
//                      totalTransportCost:this.state.totalTransportCost+data.carbonFootprint,
//                      showOutcomeMessage:true,
//                      shouldBlockNavigation:true,
//                      outcomeMessageType:'positive',
//                      outcomeMessage:'Added succesfully!'})
//     }
//     else if (data.subType==='train') {
//       this.setState({totalTrainCost:this.state.totalTrainCost+data.carbonFootprint,
//                      totalTransportCost:this.state.totalTransportCost+data.carbonFootprint,
//                      showOutcomeMessage:true,
//                      shouldBlockNavigation:true,
//                      outcomeMessageType:'positive',
//                      outcomeMessage:'Added succesfully!'})
//     }
//
//   }
//   else if (data.type ==='food') {
//     this.addToList(data.type,data)
//     this.setState({totalFoodCost:this.state.totalFoodCost+data.carbonFootprint,
//                    showOutcomeMessage:true,
//                    shouldBlockNavigation:true,
//                    outcomeMessageType:'positive',
//                    outcomeMessage:'Added succesfully!'})
//   }
//   else if (data.type ==='diet') {
//     console.log('saving a diet line in main.js')
//     this.addToList(data.type,data)
//     this.setState({totalFoodCost:this.state.totalFoodCost+data.carbonFootprint,
//                    showOutcomeMessage:true,
//                    shouldBlockNavigation:true,
//                    outcomeMessageType:'positive',
//                    outcomeMessage:'Added succesfully!'})
//   }
//   else if (data.type ==='accomodation') {
//     this.addToList(data.type,data)
//     this.setState({totalAccomodationCost:this.state.totalAccomodationCost+data.carbonFootprint,
//                    showOutcomeMessage:true,
//                    shouldBlockNavigation:true,
//                    outcomeMessageType:'positive',
//                    outcomeMessage:'Added succesfully!'})
//   }
//   else {
//     this.setState({showOutcomeMessage:true,
//                    outcomeMessageType:'negative',
//                    outcomeMessage:'Oops! Something went wrong.'})
//   }
//   this.setState({totalCarbonCost:this.state.totalCarbonCost+data.carbonFootprint})
// }
