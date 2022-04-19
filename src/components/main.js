import  {  Component } from "react";
import React from "react";
import AppMain from "./app/appMain"
// import MobileApp from "./mobile/mobileApp"
import OutcomeMessage from"./standardComponents/outcomeMessage"
// import { Container, Row, Col, Button} from 'react-bootstrap';
class Main extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      showOutcomeMessage:false,
      outcomeMessageType:'positive',
      flightFormData:{},
      totalCarbonCost:0,
      totalFlightCost:0,
      totalTransportCost:0,
      totalFoodCost:0,
      totalAccomodationCost:0

    };
    this.updateDimensions = this.updateDimensions.bind(this);
  };
  componentDidMount(){

    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
    if(this.props.match.params.view!==undefined){
      // this.setState({view:this.props.match.params.view})
      console.log('linked back from blog')
      console.log(this.props.match.params.view)
    }
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    console.log('updating dimensions')
    if (windowWidth>= windowHeight) {
      this.setState({isMobile:false});
    }
    else {
      this.setState({isMobile:true});
    }
  }

  addToList =(type,data)=>{
    let tempArray = this.state[type]
    tempArray.push(data);
    this.setState({[type]:tempArray},()=>{this.updateCosts()});
  }
  updateCosts =()=>{
    console.log('updating all carbon costs')
  }

  addCarbonCostItem = (data)=>{
    console.log('adding a carbon cost item')
    console.log(data)
    if (data.type==='flight') {
      console.log('adding flight')
      console.log(data)
      this.setState({totalFlightCost:this.state.totalFlightCost+data.carbonFootprint,
                     showOutcomeMessage:true,
                     outcomeMessageType:'positive',
                     outcomeMessage:'Added succesfully!'})
    }
    else if (data.type ==='transport') {
      console.log('adding transport')
      console.log(data)
      this.setState({totalTransportCost:this.state.totalTransportCost+data.carbonFootprint,
                     showOutcomeMessage:true,
                     outcomeMessageType:'positive',
                     outcomeMessage:'Added succesfully!'})
    }
    else if (data.type ==='food') {
      console.log('adding food')
      console.log(data)
      this.setState({totalFoodCost:this.state.totalFoodCost+data.carbonFootprint,
                     showOutcomeMessage:true,
                     outcomeMessageType:'positive',
                     outcomeMessage:'Added succesfully!'})
    }
    else if (data.type ==='accomodation') {
      console.log('adding accomodation')
      console.log(data)
      this.setState({totalAccomodationCost:this.state.totalAccomodationCost+data.carbonFootprint,
                     showOutcomeMessage:true,
                     outcomeMessageType:'positive',
                     outcomeMessage:'Added succesfully!'})
    }
    else {
      this.setState({showOutcomeMessage:true,
                     outcomeMessageType:'negative',
                     outcomeMessage:'Oops! Something went wrong.'})
    }
    this.setState({totalCarbonCost:this.state.totalCarbonCost+data.carbonFootprint})
  }
  closeMessage = ()=>{
    this.setState({showOutcomeMessage:false})
  }
  render() {

  return(
    <>
      {this.state.showOutcomeMessage?
        <OutcomeMessage isMobile ={this.state.isMobile}
                        outcomeMessageType = {this.state.outcomeMessageType}
                        closeMessage ={this.closeMessage}
                        message ={this.state.outcomeMessage}/>
      :null}

      <AppMain isMobile ={this.state.isMobile}
               urlView={this.props.match.params.redirectView}
               addCarbonCostItem ={this.addCarbonCostItem}
               totalCarbonCost = {this.state.totalCarbonCost}
               totalFlightCost = {this.state.totalFlightCost}
               totalTransportCost ={this.state.totalTransportCost}
               totalFoodCost ={this.state.totalFoodCost}
               totalAccomodationCost = {this.state.totalAccomodationCost}/>
    </>
)}};
export default Main;
//
//
//
//
// {this.state.isMobile?
//   <>
//     {this.state.showOutcomeMessage?
//       <>
//         <OutcomeMessage screen='mobile'
//                         outcomeMessageType = {this.state.outcomeMessageType}
//                         closeMessage ={this.closeMessage}
//                         message ={this.state.outcomeMessage}/>
//       </>:null}
//
//       <MobileApp urlView={this.props.match.params.view}
//                  pageView ={this.state.pageView}
//                  updatePageView={this.updatePageView}
//                  flightFormData ={this.state.flightFormData}
//                  addCarbonCostItem ={this.addCarbonCostItem}
//                  totalCarbonCost = {this.state.totalCarbonCost}
//                  totalFlightCost = {this.state.totalFlightCost}
//                  totalTransportCost ={this.state.totalTransportCost}
//                  totalFoodCost ={this.state.totalFoodCost}
//                  totalAccomodationCost = {this.state.totalAccomodationCost}/>
//   </>
// :
//   <>
//     {this.state.showOutcomeMessage?
//       <>
//         <OutcomeMessage screen='desktop'
//                         outcomeMessageType = {this.state.outcomeMessageType}
//                         closeMessage ={this.closeMessage}
//                         message ={this.state.outcomeMessage}/>
//       </>:null}
//     <DesktopApp isMobile ={this.state.isMobile}
//                 urlView={this.props.match.params.view}
//                 pageView ={this.state.pageView}
//                 updatePageView={this.updatePageView}
//                 addCarbonCostItem ={this.addCarbonCostItem}
//                 totalCarbonCost = {this.state.totalCarbonCost}
//                 totalFlightCost = {this.state.totalFlightCost}
//                 totalTransportCost ={this.state.totalTransportCost}
//                 totalFoodCost ={this.state.totalFoodCost}
//                 totalAccomodationCost = {this.state.totalAccomodationCost}/>
//   </>
// }
