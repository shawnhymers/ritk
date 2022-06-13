import React from 'react';
import CarbonTotal from "../../../elements/carbonTotal"
import { Container, Row, Col, Button} from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import  { useState } from 'react';
import HelpIcon from "../../../../standardComponents/helpIcon"
import GreenRadio from "../../../../standardComponents/greenRadio"


const BusForm = props => {


  const [milage, setMilage] = useState(40)
  const [distance, setDistance]=useState('')
  const [carbonFootprint, setCarbonFootprint] = useState(0)
  const [drivingType, setDrivingType] = useState('City')
  const [fullness, setFullness] = useState('Packed')

  const [distanceError,setDistanceError] =useState(false);



  function updateDistance(e){
    if (!isNaN(parseInt(e.target.value))) {
      setDistance(parseInt(parseInt(e.target.value)));
      updateCarbonFootprint(parseInt(e.target.value),milage,fullness)
    }
    else {
      setDistance('');
      updateCarbonFootprint(0,milage,fullness)
    }

  }
  function updateCarbonFootprint(distance,milage,fullness){
    let carbonFootprint=0;
    if (fullness ==='Packed') {
      carbonFootprint = (distance/100)*milage*2.3/45;
    }
    else if (fullness ==='Mostly Full') {
      carbonFootprint = (distance/100)*milage*2.3/33;
    }
    else if (fullness ==='Half Full') {
      carbonFootprint = (distance/100)*milage*2.3/23;
    }
    else if (fullness ==='Mostly Empty') {
      carbonFootprint = (distance/100)*milage*2.3/15;
    }
    else if (fullness ==='Ghost Town') {
      carbonFootprint = (distance/100)*milage*2.3/5;
    }
    else if (fullness === 'Just Me') {
      carbonFootprint = (distance/100)*milage*2.3;
    }
    setCarbonFootprint(carbonFootprint)

  }
  function updateDrivingType(e){
    setDrivingType(e.target.value)
    if (e.target.value ==='City') {
      setMilage(40)
      updateCarbonFootprint(distance,40,fullness)
    }
    else if (e.target.value ==='Highway') {
      setMilage(30)
      updateCarbonFootprint(distance,30,fullness)
    }
    else if (e.target.value ==='Mixed') {
      setMilage(35)
      updateCarbonFootprint(distance,35,fullness)
    }

  }

  function updateFullness(e){
    setFullness(e.target.value)
    updateCarbonFootprint(distance,milage,e.target.value)

  }

  function addDrive(){

    if (carbonFootprint>0) {
      let data = {distance:distance,
                  carbonFootprint:carbonFootprint,
                  drivingType:drivingType,
                  fullness:fullness,
                  type:'transport',
                  subType:'bus'}


      props.addCarbonCostItem(data)
      resetState()
    }
    else {
      if (distance<=0) {
        setDistanceError(true)
      }
    }

  }

  function resetState(){
    setMilage(40)
    setDistance('')
    setCarbonFootprint(0)
    setDrivingType('City')
    setFullness('Packed')
    setDistanceError(false)
  }

return(
  <>
    <Row className =''>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
      <Col>
        <Container className ='form-container white'>

          <Row className ='form-line'>
            <p className ='form-title'>Bus Trip</p>
          </Row>

          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type of Driving:</FormLabel>
              <RadioGroup row aria-label="drivingType" name="searchBy" value={drivingType} onChange={updateDrivingType}>
                <FormControlLabel value="City" control={<GreenRadio />} label="City" />
                <FormControlLabel value="Highway" control={<GreenRadio />} label="Highway" />
                <FormControlLabel value="Mixed" control={<GreenRadio />} label="Mixed" />
                <HelpIcon message ='Select where you will be driving. Driving in the city produces more greenhouse gases than driving the same distance on the highway.'/>
              </RadioGroup>
            </FormControl>
          </Row>

          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">How Full?</FormLabel>
              <RadioGroup row aria-label="drivingType" name="searchBy" value={fullness} onChange={updateFullness}>
                <FormControlLabel value="Packed" control={<GreenRadio />} label="Packed" />
                <FormControlLabel value="Mostly Full" control={<GreenRadio />} label="Mostly Full" />
                <FormControlLabel value="Half Full" control={<GreenRadio />} label="Half Full" />
                <FormControlLabel value="Mostly Empty" control={<GreenRadio />} label="Mostly Empty" />
                <FormControlLabel value="Ghost Town" control={<GreenRadio />} label="Ghost Town" />
                <FormControlLabel value="Just Me" control={<GreenRadio />} label="Just Me" />
                <HelpIcon message ='Select how busy the bus is. A full bus splits the carbon cost across more passengers, resulting in a lower personal footprint.'/>

              </RadioGroup>
            </FormControl>
          </Row>

          <Row className ='form-line nice-input-wrapper'>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <Row>
                <input type="text"
                       name="distance"
                       value = {distance}
                       placeholder = "Distance (Km)"
                       onChange = {updateDistance}
                       className ={distanceError? "error-input":""}/>
                <label htmlFor="distance"
                       className ={distanceError? "error-label":""}>
                  Distance (Km)
                </label>
              </Row>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <HelpIcon message ="Total distance driven on the bus."/>
            </Col>
          </Row>

          <CarbonTotal footprint={carbonFootprint} label ={'Carbon Footprint (KG)'}/>

          <Row className ='form-submit-line'>
            <Button onClick = {addDrive} variant='custom'>Add</Button>
          </Row>

        </Container>
      </Col>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
    </Row>
  </>
)}

export default BusForm;
