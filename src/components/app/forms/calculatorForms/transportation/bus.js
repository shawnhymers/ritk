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

const BusForm = props => {


  const [milage, setMilage] = useState('7')
  const [distance, setDistance]=useState('')
  const [carbonFootprint, setCarbonFootprint] = useState(0)
  const [drivingType, setDrivingType] = useState('City')
  const [fullness, setFullness] = useState('Packed')

  const [distanceError,setDistanceError] =useState(false);


  function updateDistance(e){
    setDistance(e.target.value);
    updateCarbonFootprint(e.target.value,milage,fullness)
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
    setMilage('7')
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
                <FormControlLabel value="City" control={<Radio />} label="City" />
                <FormControlLabel value="Highway" control={<Radio />} label="Highway" />
                <FormControlLabel value="Mixed" control={<Radio />} label="Mixed" />
              </RadioGroup>
            </FormControl>
          </Row>

          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">How Full?</FormLabel>
              <RadioGroup row aria-label="drivingType" name="searchBy" value={fullness} onChange={updateFullness}>
                <FormControlLabel value="Packed" control={<Radio />} label="Packed" />
                <FormControlLabel value="Mostly Full" control={<Radio />} label="Mostly Full" />
                <FormControlLabel value="Half Full" control={<Radio />} label="Half Full" />
                <FormControlLabel value="Mostly Empty" control={<Radio />} label="Mostly Empty" />
                <FormControlLabel value="Ghost Town" control={<Radio />} label="Ghost Town" />
                <FormControlLabel value="Just Me" control={<Radio />} label="Just Me" />
              </RadioGroup>
            </FormControl>
          </Row>

          <Row className ='form-line nice-input-wrapper'>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <Row>
                <input type="number"
                       name="distance"
                       min="1"
                       max="100000"
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
              <HelpIcon message ="Total distance driven in this car."/>
            </Col>
          </Row>

          <CarbonTotal footprint={parseFloat(carbonFootprint).toFixed(1)} label ={'Carbon Footprint (KG)'}/>

          <Row className ='form-submit-line'>
            <Button onClick = {addDrive}>Add</Button>
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
