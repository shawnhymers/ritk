import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import  { useState,useEffect } from 'react';
import airportData from "../../data/airportData"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SearchDrop from '../../../standardComponents/searchDrop';
import HelpIcon from "../../../standardComponents/helpIcon"
import CarbonTotal from '../../elements/carbonTotal'

const FlightForm = props => {

  const [searchBy, setSearchBy]=useState('City')

  const [fromOptions, setFromOptions] =useState(airportData)
  const [toOptions, setToOptions] =useState(airportData)

  const [fromCity, setFromCity] = useState({})
  const [toCity, setToCity]= useState({})

  const [fromSearchValue,setFromSearchValue]= useState('')
  const [toSearchValue,setToSearchValue]= useState('')

  const [flightClass, setFlightClass]= useState('Economy')
  const [flightType, setFlightType]= useState('Round Trip')

  const [distance, setDistance] = useState('')
  const [flightFinalCost, setFlightFinalCost] =useState('')

  const [errors,setErrors] = useState({fromAirportError:false,
                                       toAirportError:false})


  // Effects
  useEffect(() => {
   console.log('Do something after distance has changed');
   calculateFlightFootprint(distance)
 }, [distance,flightClass,flightType]);
   useEffect(() => {
    console.log('Do something after city has changed');
    updateDistance()
  }, [toCity,fromCity]);

  // Functions
  function updateDistance(){
    console.log('updating flight distance')
    // Getting co-ordinates as radians
    let fromLat = fromCity.lat*(Math.PI/180)
    let fromLong = fromCity.long*(Math.PI/180)

    let toLat = toCity.lat*(Math.PI/180)
    let toLong = toCity.long*(Math.PI/180)

    let longDiff = Math.abs(fromLong-toLong);
    let latDiff = Math.abs(fromLat-toLat);

    let sinLatDiff = Math.sin((latDiff/2))
    let elm1 = Math.pow(sinLatDiff, 2)

    let sinLongDiff = Math.sin((longDiff/2))
    let elm2 = Math.cos(fromLat)*Math.cos(toLat)* Math.pow(sinLongDiff, 2)

    let distance = 2*6378.1*Math.asin(Math.sqrt((elm1+elm2)))

    if (flightType ==='One Way') {
      setDistance(distance)
    }
    else if (flightType==='Round Trip') {
      let newDistance = distance*2
      setDistance(distance)
    }

    return(distance)
  }
  function calculateFlightFootprint(distance){
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
   if (flightClass ==='Economy') {
     shortHaulCabinWeightFactor = 0.96;
     longHaulCabinWeightFactor = 0.8;
   }
   else if (flightClass ==='Business') {
     shortHaulCabinWeightFactor = 1.26;
     longHaulCabinWeightFactor = 1.54;
   }
   else if (flightClass ==='First Class') {
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

   if (flightType ==='One Way') {
     setFlightFinalCost(finalCost)
   }
   else if (flightType === 'Round Trip') {
     let newFinalCost = finalCost*2
     setFlightFinalCost(newFinalCost)
   }

  }
  function selectClass(e){
    setFlightClass(e.target.value)
  }
  function selectFlightType(e){
    setFlightType(e.target.value)
  }
  function selectSearchBy(e){
    setSearchBy(e.target.value)
  }

  function updateToAirportOptions(e){
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
    setToOptions(options)
    return(options)
  }
  function updateFromAirportOptions(e){

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
    setFromOptions(options)
    return(options)
  }
  function selectFromAirport(data){
    setFromCity(data)
  }
  function selectToAirport(data){
    setToCity(data)
  }
  function addFlight(){
    let  data = {toAirport:toCity,
              fromAirport : fromCity,
              distance : distance,
              carbonFootprint :flightFinalCost,
              class : flightClass,
              flightType: flightType,
              type :'flight'}

    console.log(data.toAirport)
    if (data.toAirport!==''&&data.fromAirport!=='' && data.carbonFootprint>0) {
      props.addCarbonCostItem(data)
      resetState()
    }
    else {
      let errors ={fromAirportError:false,
                   toAirportError:false}
      if (data.toAirport.Airport===undefined) {
        errors.toAirportError=true;
      }
      if (data.fromAirport.Airport===undefined) {
        errors.fromAirportError=true;
      }
      setErrors(errors)
    }

  }
  function resetState(){
    setSearchBy('City')
    setFromOptions(airportData)
    setToOptions(airportData)
    setFromCity({})
    setToCity({})
    setFromSearchValue('')
    setToSearchValue('')

    setFlightClass('Economy')
    setFlightType('Round Trip')
    setDistance('')
    setFlightFinalCost('')
    setErrors({fromAirportError:false,
               toAirportError:false})
  }

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
            <RadioGroup row aria-label="drivingType" name="searchBy" value={searchBy} onChange={(e)=>selectSearchBy(e)}>
              <FormControlLabel value="City" control={<Radio />} label="City" />
              <FormControlLabel value="Country" control={<Radio />} label="Country" />
              <FormControlLabel value="Airport" control={<Radio />} label="Airport"/>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row className ='form-line '>
          <SearchDrop options={fromOptions}
                      inputId ={'fromOptions'}
                      inputName={'from'}
                      inputLabel={'From:'}
                      searchValue = {fromSearchValue}
                      updateOptions = {updateFromAirportOptions}
                      selectOption = {selectFromAirport}
                      setSearchValue ={setFromSearchValue}
                      displayKeys ={['City','Airport','Code']}
                      keyFields ={['index']}
                      invalidInput ={errors.fromAirportError}
                      key ={'From Airport Search'}/>
        </Row>
        <Row className ='form-line'>
          <SearchDrop options={toOptions}
                      inputId ={'toOptions'}
                      inputName={'to'}
                      inputLabel={'To:'}
                      searchValue = {toSearchValue}
                      updateOptions = {updateToAirportOptions}
                      selectOption = {selectToAirport}
                      setSearchValue ={setToSearchValue}
                      displayKeys ={['City','Airport','Code']}
                      keyFields ={['index']}
                      invalidInput ={errors.toAirportError}
                      key ={'To Airport Search'}/>
        </Row>
        <Row className ='form-line'>
          <FormControl component="fieldset">
            <FormLabel component="legend">Class:</FormLabel>
            <RadioGroup row aria-label="drivingType" name="searchBy" value={flightClass} onChange={(e)=>selectClass(e)}>
              <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
              <FormControlLabel value="Business" control={<Radio />} label="Business" />
              <FormControlLabel value="First Class" control={<Radio />} label="FirstClass" />
            </RadioGroup>
          </FormControl>
        </Row>
        <Row className ='form-line'>
          <FormControl component="fieldset">
            <FormLabel component="legend">Trip Type:</FormLabel>
            <RadioGroup row aria-label="drivingType" name="searchBy" value={flightType} onChange={(e)=>selectFlightType(e)}>
              <FormControlLabel value="Round Trip" control={<Radio />} label="Round Trip" />
              <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
            </RadioGroup>
          </FormControl>
        </Row>
          {parseFloat(distance)>0?
            <>
              <CarbonTotal footprint={flightFinalCost} label ={'Carbon Footprint (KG)'}/>
            </>
            :
            <>
              <CarbonTotal footprint={0} label ={'Carbon Footprint (KG)'}/>
            </>
          }
        <Row className ='form-submit-line'>
          <Button onClick ={addFlight}>Add</Button>
        </Row>
      </Container>
    </Col>
    <Col xs={1} sm={1} md={1} lg={2} xl={3}>
      &nbsp;
    </Col>
  </Row>
  </>
)}

export default FlightForm;
