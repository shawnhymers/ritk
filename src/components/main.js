import  {  Component } from "react";
import React from "react";
import AppMain from "./app/appMain"
import OutcomeMessage from"./standardComponents/outcomeMessage"
// import { ThemeProvider, createMuiTheme  } from '@mui/material/styles';

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
      totalCarCost:0,
      totalBusCost:0,
      totalTrainCost:0,
      totalFoodCost:0,
      totalDietCost:0,
      totalAccomodationCost:0,
      flight:[],
      transport:[],
      car:[],
      bus:[],
      train:[],
      food:[],
      diet:[],
      accomodation:[]

    };
    this.updateDimensions = this.updateDimensions.bind(this);
  };
  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("contextmenu", e => e.preventDefault());
    this.updateDimensions();
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    if (windowWidth>= windowHeight) {
      this.setState({isMobile:false});
    }
    else {
      this.setState({isMobile:true});
    }
  }
  addToList =(type,data)=>{
    console.log('adding to list of carbon items')
    console.log('type is...'+type)
    console.log('data is...'+data)
    let tempArray = this.state[type]
    tempArray.push(data);
    console.log('temp array is...'+tempArray)
    this.setState({[type]:tempArray},()=>{console.log(this.state[type])});
  }
  addCarbonCostItem = (data)=>{
    if (data.type==='flight') {
      this.addToList(data.type,data)
      this.setState({totalFlightCost:this.state.totalFlightCost+data.carbonFootprint,
                     showOutcomeMessage:true,
                     outcomeMessageType:'positive',
                     outcomeMessage:'Added succesfully!'})
    }
    else if (data.type ==='transport') {
      this.addToList(data.subType,data)

      if (data.subType==='car') {
        this.setState({totalCarCost:this.state.totalCarCost+data.carbonFootprint,
                       totalTransportCost:this.state.totalTransportCost+data.carbonFootprint,
                       showOutcomeMessage:true,
                       outcomeMessageType:'positive',
                       outcomeMessage:'Added succesfully!'})
      }
      else if (data.subType==='bus') {
        this.setState({totalBusCost:this.state.totalBusCost+data.carbonFootprint,
                       totalTransportCost:this.state.totalTransportCost+data.carbonFootprint,
                       showOutcomeMessage:true,
                       outcomeMessageType:'positive',
                       outcomeMessage:'Added succesfully!'})
      }
      else if (data.subType==='train') {
        this.setState({totalTrainCost:this.state.totalTrainCost+data.carbonFootprint,
                       totalTransportCost:this.state.totalTransportCost+data.carbonFootprint,
                       showOutcomeMessage:true,
                       outcomeMessageType:'positive',
                       outcomeMessage:'Added succesfully!'})
      }

    }
    else if (data.type ==='food') {
      this.addToList(data.type,data)
      this.setState({totalFoodCost:this.state.totalFoodCost+data.carbonFootprint,
                     showOutcomeMessage:true,
                     outcomeMessageType:'positive',
                     outcomeMessage:'Added succesfully!'})
    }
    else if (data.type ==='diet') {
      console.log('saving a diet line in main.js')
      this.addToList(data.type,data)
      this.setState({totalDietCost:this.state.totalDietCost+data.carbonFootprint,
                     showOutcomeMessage:true,
                     outcomeMessageType:'positive',
                     outcomeMessage:'Added succesfully!'})
    }
    else if (data.type ==='accomodation') {
      this.addToList(data.type,data)
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
                 totalTransportCost={this.state.totalTransportCost}
                 totalCarCost ={this.state.totalCarCost}
                 totalBusCost={this.state.totalBusCost}
                 totalTrainCost ={this.state.totalTrainCost}
                 totalFoodCost ={this.state.totalFoodCost}
                 totalDietCost={this.state.totalDietCost}
                 totalAccomodationCost = {this.state.totalAccomodationCost}
                 flightList ={this.state.flight}
                 transportList ={this.state.transport}
                 carList={this.state.car}
                 busList={this.state.bus}
                 trainList={this.state.train}
                 foodList={this.state.food}
                 dietList={this.state.diet}
                 hotelList={this.state.accomodation}/>

    </>
)}};
export default Main;
