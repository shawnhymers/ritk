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

              />

    </>
)}};
export default Main;
