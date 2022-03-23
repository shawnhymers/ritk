import airportData from "../../../data/airportData"
import  {  Component } from "react";
import AirportOptions from './lists/airportOptions';
import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SearchDrop from '../../../standardComponents/searchDrop';
import CarbonTotal from './elements/carbonTotal'

class FlightCalculator extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      fromCity:'',
      fromOptions:airportData,
      toOptions:airportData,
      selectedFromCity:{temp:''},
      toCity:'',
      toSearchValue:'',
      fromSearchValue:'',

      selectedToCity:{temp:''},
      distance :'0',
      class:'Economy',
      flightFinalCost:'0',
      flightType:'Round Trip',
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
    console.log('updating flight distance')
    console.log(this.state.fromCity);
    // Getting co-ordinates as radians
    let fromLat = this.state.fromCity.lat*(Math.PI/180)
    let fromLong = this.state.fromCity.long*(Math.PI/180)

    let toLat = this.state.toCity.lat*(Math.PI/180)
    let toLong = this.state.toCity.long*(Math.PI/180)

    let longDiff = Math.abs(fromLong-toLong);
    let latDiff = Math.abs(fromLat-toLat);

    let sinLatDiff = Math.sin((latDiff/2))
    let elm1 = Math.pow(sinLatDiff, 2)

    let sinLongDiff = Math.sin((longDiff/2))
    let elm2 = Math.cos(fromLat)*Math.cos(toLat)* Math.pow(sinLongDiff, 2)

    let distance = 2*6378.1*Math.asin(Math.sqrt((elm1+elm2)))

    if (this.state.flightType ==='One Way') {
      this.setState({distance:distance},()=>{this.calculateFlightFootprint(distance)});
    }
    else if (this.state.flightType==='Round Trip') {
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
    if (this.state.class ==='Economy') {
      shortHaulCabinWeightFactor = 0.96;
      longHaulCabinWeightFactor = 0.8;
    }
    else if (this.state.class ==='Business') {
      shortHaulCabinWeightFactor = 1.26;
      longHaulCabinWeightFactor = 1.54;
    }
    else if (this.state.class ==='First Class') {
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

    if (this.state.flightType ==='One Way') {
      this.setState({flightFinalCost:finalCost})
    }
    else if (this.state.flightType === 'Round Trip') {
      let newFinalCost = finalCost*2
      this.setState({flightFinalCost:newFinalCost})
    }

  }


  selectClass = (e)=>{
    this.setState({class:e.target.value},()=>{this.calculateFlightFootprint(this.state.distance)})
  }
  selectFlightType = (e)=>{
    this.setState({flightType:e.target.value},()=>{this.updateDistance()})
  }
  selectSearchBy = (e)=>{
    console.log(e.target.value)
    this.setState({searchBy:e.target.value})
  }
  saveFlight = ()=>{


  let  data = {toAirport:this.state.selectedToCity,
            fromAirport : this.state.selectedFromCity,
            distance :  this.state.distance,
            footprint :this.state.flightFinalCost,
            class : this.state.class}

    this.props.saveFlight(data)
  }

  addFlight = ()=>{
    let  data = {toAirport:this.state.toCity,
              fromAirport : this.state.fromCity,
              distance :  this.state.distance,
              carbonFootprint :this.state.flightFinalCost,
              class : this.state.class,
              flightType: this.state.flightType,
              type :'flight'}

    if (data.toAirport!==''&&data.fromAirport!=='') {
      this.props.addCarbonCostItem(data)
      this.setState({toCity:{temp:''},
                     fromCity:{temp:''},
                     selectedToCity:{temp:''},
                     selectedFromCity:{temp:''},
                     distance:0,
                     flightFinalCost:0,
                     class:'Economy',
                     flightType:'Round Trip',
                     toSearchValue:'',
                     fromSearchValue:'',
                     fromOptions:airportData,
                     toOptions:airportData},()=>{console.log(this.state)})
    }

  }

  updateToAirportOptions=(e)=>{
    let searchBy = this.state.searchBy;
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
      var options = airportData;
    }
    this.setState({toOptions:options},()=>{return(options)})
  }
  updateFromAirportOptions=(e)=>{
    let searchBy = this.state.searchBy;
    console.log('updating from airport options')
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
      var options = airportData;
    }
    this.setState({fromOptions:options},console.log(this.state))

  }

  selectFromAirport=(data)=>{

    // let selectedCity = airportData[airportData.findIndex(x=>x.Code === data.Code)];
    this.setState({fromCity:data},()=>this.updateDistance())
  }
  selectToAirport=(data)=>{
    // let selectedCity = airportData[airportData.findIndex(x=>x.Code === code)];
    this.setState({toCity:data},()=>this.updateDistance())
  }

  setFromSearchValue = (value) => {
    this.setState({fromSearchValue:value})
  }
  setToSearchValue = (value) => {
      this.setState({toSearchValue:value})
  }
  render() {

  return(
  <>



  <Row className ='vertical-padding-sm'>
    <Col xs={1} sm={1} md={1} lg={2} xl={3}>
      &nbsp;
    </Col>
    <Col>
      <Container className ='form-container white'>
        <Row className ='form-line'>
          <p className ='form-title'>Flight Details</p>
        </Row>
        <Row className ='form-line'>
          <FormControl component="fieldset">
            <FormLabel component="legend">Search By:</FormLabel>
            <RadioGroup row aria-label="drivingType" name="searchBy" value={this.state.searchBy} onChange={(e)=>this.selectSearchBy(e)}>
              <FormControlLabel value="City" control={<Radio />} label="City" />
              <FormControlLabel value="Country" control={<Radio />} label="Country" />
              <FormControlLabel value="Airport" control={<Radio />} label="Airport"/>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row className ='form-line'>
          <SearchDrop options={this.state.fromOptions}
                      inputId ={'fromOptions'}
                      inputName={'from'}
                      inputLabel={'From:'}
                      searchValue = {this.state.fromSearchValue}
                      updateOptions = {this.updateFromAirportOptions}
                      selectOption = {this.selectFromAirport}
                      setSearchValue ={this.setFromSearchValue}
                      displayKeys ={['City','Airport','Code']}
                      keyFields ={['index']}/>
        </Row>
        <Row className ='form-line'>
          <SearchDrop options={this.state.toOptions}
                      inputId ={'toOptions'}
                      inputName={'to'}
                      inputLabel={'To:'}
                      searchValue = {this.state.toSearchValue}
                      updateOptions = {this.updateToAirportOptions}
                      selectOption = {this.selectToAirport}
                      setSearchValue ={this.setToSearchValue}
                      displayKeys ={['City','Airport','Code']}
                      keyFields ={['index']}/>
        </Row>
        <Row className ='form-line'>
          <FormControl component="fieldset">
            <FormLabel component="legend">Class:</FormLabel>
            <RadioGroup row aria-label="drivingType" name="searchBy" value={this.state.class} onChange={(e)=>this.selectClass(e)}>
              <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
              <FormControlLabel value="Business" control={<Radio />} label="Business" />
              <FormControlLabel value="First Class" control={<Radio />} label="FirstClass" />
            </RadioGroup>
          </FormControl>
        </Row>
        <Row className ='form-line'>
          <FormControl component="fieldset">
            <FormLabel component="legend">Trip Type:</FormLabel>
            <RadioGroup row aria-label="drivingType" name="searchBy" value={this.state.flightType} onChange={(e)=>this.selectFlightType(e)}>
              <FormControlLabel value="Round Trip" control={<Radio />} label="Round Trip" />
              <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
            </RadioGroup>
          </FormControl>
        </Row>
          {parseFloat(this.state.distance)>0?
            <>
              <CarbonTotal footprint={parseFloat(this.state.flightFinalCost).toFixed(1)} label ={'Carbon Footprint (KG)'}/>
            </>
            :
            <>
              <CarbonTotal footprint={0} label ={'Carbon Footprint (KG)'}/>
            </>
          }
        <Row className ='form-submit-line'>
          <Button onClick ={this.addFlight}>Add</Button>
        </Row>
      </Container>
    </Col>
    <Col xs={1} sm={1} md={1} lg={2} xl={3}>
      &nbsp;
    </Col>
  </Row>


  </>
)}};
export default FlightCalculator;
//
//
// <Row >
//   <FormControl component="fieldset">
//     <FormLabel component="legend">Search By:</FormLabel>
//     <RadioGroup row aria-label="searchBy" name="searchBy" value={this.state.searchBy} onChange={this.selectSearchBy}>
//       <FormControlLabel value="City" control={<Radio />} label="City" />
//       <FormControlLabel value="Country" control={<Radio />} label="Country" />
//       <FormControlLabel value="Airport" control={<Radio />} label="Airport" />
//       <FormControlLabel value="Code" control={<Radio />} label="Airport Code" />
//     </RadioGroup>
//   </FormControl>
// </Row>

//
// <Row >
//   <FormControl component="fieldset">
//     <FormLabel component="legend">Type</FormLabel>
//     <RadioGroup row aria-label="gender" name="gender1" value={this.state.flightType} onChange={this.selectFlightType}>
//       <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
//       <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
//     </RadioGroup>
//   </FormControl>
// </Row>
//

//
//
// <Container style = {{maxHeight:'45vh',overflowY:'scroll'}} >
//     <Row>
//       Select Location:
//     </Row>
//     {this.state.toOptions.map((option, i)=>{
//                 return <AirportOptions
//                   option = {option}
//                   selectAirport = {this.selectAirport}
//                     toOrFrom = {'to'}
//                   key={'to'+i}/>})}
//     {this.state.fromOptions.map((option, i)=>{
//                 return <AirportOptions
//                   option = {option}
//                   selectAirport = {this.selectAirport}
//                   toOrFrom = {'from'}
//                   key={'from'+i}/>})}
//
// </Container>

//
//
// <Row className =' nice-input-wrapper '>
//   <input type = 'text'
//          id= "fromCity"
//          value = {this.state.fromCity}
//          name = "fromCity"
//          onChange ={this.updateInput}
//          placeholder='From'
//         />
//   <label htmlFor="fromCity" >From</label>
// </Row>
//
// <Row className =' nice-input-wrapper '>
//   <input type = 'text'
//          id= "toCity"
//          value = {this.state.toCity}
//          name = "toCity"
//          onChange ={this.updateInput}
//          placeholder='To'/>
//   <label htmlFor="toCity" >To</label>
// </Row>




//
//
// updateInput = (e) =>{
//   let name = e.target.name;
//   let searchBy = this.state.searchBy;
//   if (name ==='fromCity') {
//     if (e.target.value !=='') {
//       var options = airportData.filter(function (el)
//       {
//         if (searchBy==='City') {
//           return el.City.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//         else if (searchBy==='Airport') {
//           return el.Airport.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//         else if (searchBy==='Country') {
//           return el.Country.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//         else if (searchBy==='Code') {
//           return el.Code.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//
//       });
//     }
//     else {
//       var options = []
//     }
//     this.setState({[name]:e.target.value, fromOptions:options.slice(0,10),toOptions:[]})
//   }
//   else if (name ==='toCity') {
//     if (e.target.value !=='') {
//       var options = airportData.filter(function (el)
//       {
//         if (searchBy==='City') {
//           return el.City.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//         else if (searchBy==='Airport') {
//           return el.Airport.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//         else if (searchBy==='Country') {
//           return el.Country.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//         else if (searchBy==='Code') {
//           return el.Code.toUpperCase().includes(e.target.value.toUpperCase())
//         }
//       });
//     }
//     else {
//       var options = []
//     }
//     this.setState({[name]:e.target.value, toOptions:options.slice(0,10),fromOptions:[]})
//   }
//
// }



//
// <Container className = 'full-screen-container vertical-margin-md'>
//
//
//   <Row className ='vertical-padding-md'>
//     <Col className ='centered-children'>
//       <Dropdown>
//         <Dropdown.Toggle  id="dropdown-basic" className="roaming-green" style ={{border:'none'}}>
//           {'Search by: '+this.state.searchBy}
//         </Dropdown.Toggle >
//         <Dropdown.Menu value={this.state.searchBy} onChange={this.selectSearchBy} >
//           <Dropdown.Item onClick = {(e)=>this.selectSearchBy('City')}>City Name</Dropdown.Item>
//           <Dropdown.Item onClick = {(e)=>this.selectSearchBy('Country')}>Country</Dropdown.Item>
//           <Dropdown.Item onClick = {(e)=>this.selectSearchBy('Airport')}>Airport Name</Dropdown.Item>
//           <Dropdown.Item onClick = {(e)=>this.selectSearchBy('Code')}>Airport Code</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </Col>
//
//     <Col className ='centered-children'>
//       <Dropdown>
//         <Dropdown.Toggle  id="dropdown-basic" className="roaming-green" style ={{border:'none'}}>
//           {'Class: '+this.state.class}
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick = {(e)=>this.selectClass('Economy')}>Economy</Dropdown.Item>
//           <Dropdown.Item onClick = {(e)=>this.selectClass('Business')}>Bussiness</Dropdown.Item>
//           <Dropdown.Item onClick = {(e)=>this.selectClass('First Class')}>First Class</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </Col>
//
//     <Col className ='centered-children'>
//       <Dropdown >
//         <Dropdown.Toggle  id="dropdown-basic" className="roaming-green" style ={{border:'none'}}>
//           {'Flight Type: '+this.state.flightType}
//         </Dropdown.Toggle>
//         <Dropdown.Menu >
//           <Dropdown.Item onClick = {(e)=>this.selectFlightType('Round Trip')}>Round Trip</Dropdown.Item>
//           <Dropdown.Item onClick = {(e)=>this.selectFlightType('One Way')}>One Way</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </Col>
//   </Row>
//
//
//   <Row className ='vertical-padding-md'>
//
//     <Col xs sm md lg xl={6} className ='horizontal-centered-children'>
//       <SearchDrop options={this.state.fromOptions}
//                   inputId ={'fromOptions'}
//                   inputName={'from'}
//                   inputLabel={'From:'}
//                   updateOptions = {this.updateFromAirportOptions}
//                   selectOption = {this.selectFromAirport}
//                   displayKeys ={['Airport','Code']}
//                   keyFields ={['index']}/>
//     </Col>
//     <Col xs sm md lg xl={6} className ='horizontal-centered-children'>
//       <SearchDrop options={this.state.toOptions}
//                   inputId ={'toOptions'}
//                   inputName={'to'}
//                   inputLabel={'To:'}
//                   updateOptions = {this.updateToAirportOptions}
//                   selectOption = {this.selectToAirport}
//                   displayKeys ={['Airport','Code']}
//                   keyFields ={['index']}/>
//     </Col>
//
//   </Row>
//
//
//   {parseFloat(this.state.distance)>0?
//     <>
//       <CarbonTotal footprint={parseFloat(this.state.flightFinalCost).toFixed(1)}/>
//     </>
//     :
//     <>
//       <CarbonTotal footprint={0}/>
//     </>
//   }
//
//
//
//
//
//   <Row className = 'horizontal-centered-children vertical-padding-md'>
//     <Col>
//       &nbsp;
//     </Col>
//     <Col className ='centered-children'>
//       <Button onClick = {this.addFlight}>Add</Button>
//     </Col>
//     <Col>
//       &nbsp;
//     </Col>
//   </Row>
//
//
//
//
// </Container>
