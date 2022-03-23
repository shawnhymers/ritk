import  {  Component } from "react";
import airportData from "../../../../data/airportData"
import CustomToggle from "../../../standardComponents/customToggle";
import { Container, Row, Col, Button,Form,Dropdown} from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class AirportOptions extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      highlight:false
    };
  };
  select = ()=>{
    this.props.selectAirport(this.props.option,this.props.toOrFrom)
  }
  startHighlight = ()=>{
    this.setState({highlight:true})
  }
  stopHighlight= ()=>{
    this.setState({highlight:false})
  }
  render() {

  return(
    <>


      <Dropdown.Item onClick = {this.select}>{this.props.option.Airport}</Dropdown.Item>

    </>
)}};

class NewFlightForm extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      fromCity:'',
      fromOptions:[],
      selectedFromCity:{temp:''},
      toCity:'',
      toOptions:[],
      selectedToCity:{temp:''},
      distance :'0',
      class:'economy',
      flightFinalCost:'0',
      flightType:'roundTrip',
      searchBy:'City'
    };
  };
  selectAirport = (airport,toOrFrom)=>{

    if (toOrFrom ==='from') {
      let fromOptions = []
      fromOptions.push(airport)
      console.log('from Options are')
      console.log(fromOptions)
      this.setState({fromCity:airport.Airport,selectedFromCity:airport, fromOptions:[],toOptions:[]},()=>{this.updateDistance()})
    }
    else if (toOrFrom ==='to') {
      let toOptions = []
      toOptions.push(airport)
      console.log('to Options are')
      console.log(toOptions)
      this.setState({toCity:airport.Airport,selectedToCity:airport,fromOptions:[],toOptions:[]},()=>{this.updateDistance()})
    }
  }

  //  Using Vincenty's formula to calculate distance between two lat and long co ordinates
  updateDistance = ()=>{
    // Getting co-ordinates as radians
    let fromLat = this.state.selectedFromCity.lat*(Math.PI/180)
    let fromLong = this.state.selectedFromCity.long*(Math.PI/180)

    let toLat = this.state.selectedToCity.lat*(Math.PI/180)
    let toLong = this.state.selectedToCity.long*(Math.PI/180)

    let longDiff = Math.abs(fromLong-toLong);
    let latDiff = Math.abs(fromLat-toLat);

    let sinLatDiff = Math.sin((latDiff/2))
    let elm1 = Math.pow(sinLatDiff, 2)

    let sinLongDiff = Math.sin((longDiff/2))
    let elm2 = Math.cos(fromLat)*Math.cos(toLat)* Math.pow(sinLongDiff, 2)

    let distance = 2*6378.1*Math.asin(Math.sqrt((elm1+elm2)))

    if (this.state.flightType ==='oneWay') {
      this.setState({distance:distance},()=>{this.calculateFlightFootprint(distance)});
    }
    else if (this.state.flightType==='roundTrip') {
      let newDistance = distance*2
      this.setState({distance:newDistance},()=>{this.calculateFlightFootprint(distance)});
    }

    return(distance)
  }

  calculateFlightFootprint = (distance)=> {
     // Parameters that are the same for short or long
    let emmisionFactor = 3.15;
    let passengerLoadFactor = 0.82;
    let nonCo2Multiplier = 2; // accounts for the non co2 effects of the flight
    let preproductionFactor =0.54; //CO2e emission factor for preproduction jet fuel, kerosene
    let aircraftFactor = 0.00038;
    let airportInfastructureFactor = 11.68;

    // Parameters that depend on distance
    let a,b,c = 0;
    let seats = 0;
    let cargoFactor = 0;
    let cabinWeightFactor = 0;
    let shortHaulCabinWeightFactor = 0;
    let longHaulCabinWeightFactor = 0;

    // Setting the cabin weight factor bassed on class.
    // We set the short and long values so we can interpolate between
    if (this.state.class ==='economy') {
      shortHaulCabinWeightFactor = 0.96;
      longHaulCabinWeightFactor = 0.8;
    }
    else if (this.state.class ==='business') {
      shortHaulCabinWeightFactor = 1.26;
      longHaulCabinWeightFactor = 1.54;
    }
    else if (this.state.class ==='first') {
      shortHaulCabinWeightFactor = 2.40;
      longHaulCabinWeightFactor = 2.40;
    }

    // For short haul
    if (distance<=1500) {
      a = 0;
      b = 2.714;
      c = 1166.52;
      seats = 153.51;
      cargoFactor = 0.93;
      cabinWeightFactor = shortHaulCabinWeightFactor;
    }
    // For long haul
    else if (distance>=2500) {
      a = 0.0001;
      b = 7.104;
      c = 5044.93;
      seats = 280.21;
      cargoFactor = 0.74;
      cabinWeightFactor = longHaulCabinWeightFactor;

    }
    // For the inbetween hauls
    else {
      a = (((2500-distance)*0) + ((distance-1500)*0.0001))/(1000);
      b = (((2500-distance)*2.714) + ((distance-1500)*7.104))/(1000);
      c = (((2500-distance)*1166.52) + ((distance-1500)*5044.93))/(1000);
      seats = (((2500-distance)*153.51) + ((distance-1500)*280.21))/(1000);
      cargoFactor = (((2500-distance)*0.93) + ((distance-1500)*0.74))/(1000);
      cabinWeightFactor = (((2500-distance)*shortHaulCabinWeightFactor) + ((distance-1500)*longHaulCabinWeightFactor))/(1000);
    }
    let flightCost = a*Math.pow(distance,2) + b*distance + c;

    let personalFlightCost = flightCost/(seats*passengerLoadFactor);

    let fuelProductionFactor = emmisionFactor*nonCo2Multiplier + parseFloat(preproductionFactor)

    let term1 = personalFlightCost*cargoFactor*cabinWeightFactor*fuelProductionFactor;

    let term2 = aircraftFactor*distance;

    let term3 = airportInfastructureFactor;

    let finalCost = parseFloat(term1)+parseFloat(term2)+parseFloat(term3);

    if (this.state.flightType ==='oneWay') {
      this.setState({flightFinalCost:finalCost})
    }
    else if (this.state.flightType === 'roundTrip') {
      let newFinalCost = finalCost*2
      this.setState({flightFinalCost:newFinalCost})
    }

  }

  updateInput = (e) =>{
    let name = e.target.name;
    let searchBy = this.state.searchBy;
    if (name ==='fromCity') {
      if (e.target.value !=='') {
        var options = airportData.filter(function (el)
        {
          if (searchBy==='City') {
            return el.City.toUpperCase().includes(e.target.value.toUpperCase())
          }
          else if (searchBy==='Airport') {
            return el.Airport.toUpperCase().includes(e.target.value.toUpperCase())
          }
          else if (searchBy==='Country') {
            return el.Country.toUpperCase().includes(e.target.value.toUpperCase())
          }
          else if (searchBy==='Code') {
            return el.Code.toUpperCase().includes(e.target.value.toUpperCase())
          }

        });
      }
      else {
        var options = []
      }
      this.setState({[name]:e.target.value, fromOptions:options.slice(0,10),toOptions:[]})
    }
    else if (name ==='toCity') {
      if (e.target.value !=='') {
        var options = airportData.filter(function (el)
        {
          if (searchBy==='City') {
            return el.City.toUpperCase().includes(e.target.value.toUpperCase())
          }
          else if (searchBy==='Airport') {
            return el.Airport.toUpperCase().includes(e.target.value.toUpperCase())
          }
          else if (searchBy==='Country') {
            return el.Country.toUpperCase().includes(e.target.value.toUpperCase())
          }
          else if (searchBy==='Code') {
            return el.Code.toUpperCase().includes(e.target.value.toUpperCase())
          }
        });
      }
      else {
        var options = []
      }
      this.setState({[name]:e.target.value, toOptions:options.slice(0,10),fromOptions:[]})
    }

  }
  selectClass = (e)=>{
    this.setState({class:e.target.value},()=>{this.calculateFlightFootprint(this.state.distance)})
  }
  selectFlightType = (e)=>{
    this.setState({flightType:e.target.value},()=>{this.updateDistance()})
  }
  selectSearchBy = (e)=>{
    this.setState({searchBy:e.target.value})
  }
  addFlight = ()=>{


  let  data = {toAirport:this.state.selectedToCity,
            fromAirport : this.state.selectedFromCity,
            distance :  this.state.distance,
            footprint :this.state.flightFinalCost,
            class : this.state.class}

    this.props.addFlight(data)
  }

  render() {

  return(
    <>
    <Container >
      <Form autocomplete="off">

          <Row className = ''>
            <Col className = 'horizontal-centered-children'>
              <FormControl component="fieldset">
                <FormLabel component="legend">Search By:</FormLabel>
                <RadioGroup  aria-label="searchBy" name="searchBy" value={this.state.searchBy} onChange={this.selectSearchBy}>
                  <FormControlLabel value="City" control={<Radio />} label="City" />
                  <FormControlLabel value="Country" control={<Radio />} label="Country" />
                  <FormControlLabel value="Airport" control={<Radio />} label="Airport" />
                  <FormControlLabel value="Code" control={<Radio />} label="Airport Code" />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col className = 'horizontal-centered-children'>
              <FormControl component="fieldset">
                <FormLabel component="legend">Class</FormLabel>
                <RadioGroup  aria-label="gender" name="gender1" value={this.state.class} onChange={this.selectClass}>
                  <FormControlLabel value="economy" control={<Radio />} label="Economy" />
                  <FormControlLabel value="business" control={<Radio />} label="Business" />
                  <FormControlLabel value="first" control={<Radio />} label="First Class" />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col className = 'horizontal-centered-children'>
              <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup  aria-label="gender" name="gender1" value={this.state.flightType} onChange={this.selectFlightType}>
                  <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
                  <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                </RadioGroup>
              </FormControl>
            </Col>

          </Row>

          <Row>
            <Col className = 'input-field  horizontal-centered-children'>
              <Dropdown drop = "up">
                <Dropdown.Toggle as={CustomToggle}>
                  <Row className = 'input-field centered-children' >
                    <input type = 'text' id= "fromCity" value = {this.state.fromCity} name = "fromCity" onChange ={this.updateInput} />
                    <label htmlFor="fromCity">From</label>
                  </Row>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item disabled>Select An Airport:</Dropdown.Item>
                <Dropdown.Divider />
                {this.state.fromOptions.map((option, i)=>{
                            return <AirportOptions
                              option = {option}
                              selectAirport = {this.selectAirport}
                              toOrFrom = {'from'}
                              key={'from'+i}/>})}


                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className = 'input-field  horizontal-centered-children'>
            <Dropdown drop = "up">
              <Dropdown.Toggle as={CustomToggle} >
                <Row className = 'input-field centered-children' >
                  <input type = 'text' id= "toCity" value = {this.state.toCity} name = "toCity" onChange ={this.updateInput}/>
                  <label htmlFor="toCity">To</label>
                </Row>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item disabled>Select An Airport:</Dropdown.Item>
                <Dropdown.Divider />
                {this.state.toOptions.map((option, i)=>{
                            return <AirportOptions
                              option = {option}
                              selectAirport = {this.selectAirport}
                                toOrFrom = {'to'}
                              key={'to'+i}/>})}


              </Dropdown.Menu>
            </Dropdown>
            </Col>

          </Row>


          <Row>
            <Col className = 'centered-children'>
              Distance is:
            </Col>
            <Col className = 'centered-children'>
              FootPrint is:
            </Col>

          </Row>

          <Row>
            <Col className = 'horizontal-centered-children'>
              {parseFloat(this.state.distance).toFixed(2)+' (Km)'}
            </Col>
            <Col className = 'horizontal-centered-children'>
            {parseFloat(this.state.flightFinalCost).toFixed(2)+' (Kg)'}
            </Col>

          </Row>

          <Row className ='horizontal-centered-children'>
            <Button onClick = {this.addFlight}>Add</Button>
          </Row>

</Form>

</Container>
    </>
)}};
export default NewFlightForm;
