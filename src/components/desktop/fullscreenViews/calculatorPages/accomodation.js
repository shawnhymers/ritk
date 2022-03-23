import NewFoodForm from './forms/newFoodForm'
import { Container, Row, Col, Button} from 'react-bootstrap';
import  { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CarbonTotal from "./elements/carbonTotal"
import FormCheck from "react-bootstrap/FormCheck"

const Accomodation = props =>{

  const [type, setType] = useState('basic');
  const [isAdvanced, setIsAdvanced] = useState(false)

  const [hotelType, setHotelType] = useState('smallAvg');

  const [hotelName, setHotelName] = useState('');
  const [numberOfNights, setNumberOfNights] = useState('');

  const [numberOfRooms, setNumberOfRoom] = useState(180);
  const [avgOccupancy, setAvgOccupancy] = useState(95);

  const [electricConsumption, setElectricConsumption] = useState(2540802);
  const [electricEF, setElectricEF] = useState(0.2988);

  const [gasConsumption, setGasConsumption] = useState(4207102);
  const [gasEF, setGasEF] = useState(0.1822);

  const [oilConsumption, setOilConsumption] = useState(657);
  const [oilEF, setOilEF] = useState(2.6765);

  const [carbonFootprint, setCarbonFootprint] = useState(0);

  function selectType(type){
    setType(type);
  }

  function updateNumberOfNights(e){
    setNumberOfNights(e.target.value)
    updateFootprint(e.target.value)
  }
  function updateHotelName(e){
    console.log(e.target.value)
    setHotelName(e.target.value)
  }
  // function updateHotelType(e){
  //   console.log(e.target.value)
  //   setHotelType(e.target.value)
  //   if (e.target.value ==='smallAvg') {
  //     setElectricConsumption(2540802)
  //     setElectricEF(0.2988)
  //     setGasConsumption(4207102)
  //     setGasEF(0.1822)
  //     setOilConsumption(657)
  //     setOilEF(2.6765)
  //   }
  //   else if (e.target.value ==='medAvg') {
  //     setElectricConsumption()
  //     setElectricEF()
  //     setGasConsumption()
  //     setGasEF()
  //     setOilConsumption()
  //     setOilEF()
  //   }
  //   else if (e.target.value ==='largeAvg') {
  //     setElectricConsumption()
  //     setElectricEF()
  //     setGasConsumption()
  //     setGasEF()
  //     setOilConsumption()
  //     setOilEF()
  //
  //   }
  //   updateFootprint()
  // }

  function updateFootprint(numberOfNights){
    console.log('number of nights...'+numberOfNights)
    if (numberOfNights<1) {
      setCarbonFootprint(0)
    }
    else {
      let totalRooms = numberOfRooms*365*(avgOccupancy/100)
      let cost = ((electricConsumption*electricEF +
                  gasConsumption*gasEF+
                  oilConsumption*oilEF)/totalRooms)*numberOfNights
      setCarbonFootprint(cost)
    }

  }
  function updateType(e){
    if (isAdvanced) {
      console.log('setting advanced off')
      setIsAdvanced(false)
      setCarbonFootprint(0)

    }
    else {
      console.log('setting advanced on')
      setIsAdvanced(true)
      setCarbonFootprint(0)

    }
  }
  function updateHotelDetails(e){
    console.log(e.target.value)
  }

  function addHotel(){
    if (hotelName!=='' && carbonFootprint>0) {

      let data ={ type: 'accomodation',
                  carbonFootprint: carbonFootprint,
                  hotelName:hotelName,
                  numberOfNights:numberOfNights }

      setIsAdvanced(false)
      setCarbonFootprint(0)
      setHotelName('')
      setNumberOfNights('')

      setNumberOfRoom(180)
      setAvgOccupancy(95)
      setElectricConsumption(2540802)
      setElectricEF(0.2988)

      setGasConsumption(4207102)
      setGasEF(0.1822)

      setOilConsumption(657)
      setOilEF(2.6765)

      props.addCarbonCostItem(data)
    }
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
            <p className ='form-title'>Accomodation</p>
          </Row>

          <Row className ='form-line'>
            <Col>
              &nbsp;
            </Col>
            <Col>
              &nbsp;
            </Col>
            <Col>
              <FormCheck
                onChange={(e)=>{updateType(e)}}
                type="switch"
                id="custom-switch-"
                label="Advanced"
                checked={isAdvanced}/>
            </Col>
          </Row>
          {isAdvanced?
          <>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="numberOfRooms"
                     name="numberOfRooms"
                     min="1"
                     max="100"
                     value = {numberOfRooms}
                     onChange = {updateHotelDetails}/>
              <label for="numberOfRooms">Number of Rooms</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="avgOccupancy"
                     name="avgOccupancy"
                     min="1"
                     max="100"
                     value = {avgOccupancy}
                     onChange = {updateHotelDetails}/>
              <label for="avgOccupancy">Average Occupancy (%)</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="electricConsumption"
                     name="electricConsumption"
                     min="1"
                     max="100"
                     value = {electricConsumption}
                     onChange = {updateHotelDetails}/>
              <label for="electricConsumption">Electricity Consumption (kWh/Year)</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="electricEF"
                     name="electricEF"
                     min="1"
                     max="100"
                     value = {electricEF}
                     onChange = {updateHotelDetails}/>
              <label for="electricEF">Electricity EF</label>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="gasConsumption"
                     name="gasConsumption"
                     min="1"
                     max="100"
                     value = {gasConsumption}
                     onChange = {updateHotelDetails}/>
              <label for="gasConsumption">Gas Consumption (kWh/Year)</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="gasEF"
                     name="gasEF"
                     min="1"
                     max="100"
                     value = {gasEF}
                     onChange = {updateHotelDetails}/>
              <label for="gasEF">Gas EF</label>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="oilConsumption"
                     name="oilConsumption"
                     min="1"
                     max="100"
                     value = {oilConsumption}
                     onChange = {updateHotelDetails}/>
              <label for="oilConsumption">Oil Consumption (kWh/Year)</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="oilEF"
                     name="oilEF"
                     min="1"
                     max="100"
                     value = {oilEF}
                     onChange = {updateHotelDetails}/>
              <label for="oilEF">Oil EF</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="text"
                     id="name"
                     name="name"
                     min="1"
                     max="100"
                     value = {hotelName}
                     placeholder ='Name:'
                     onChange = {updateHotelName}
                     style ={{width:'25vw'}}/>
              <label htmlFor="names">Name:</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="numberOfNightsAdv"
                     name="numberOfNightsAdv"
                     min="1"
                     max="100"
                     placeholder ='Number of Nights:'
                     value = {numberOfNights}
                     onChange = {updateNumberOfNights}/>
              <label for="numberOfNightsAdv">Number of Nights</label>
            </Row>
          </>
          :
          <>


            <Row className ='form-line nice-input-wrapper'>

              <input type="text"
                     id="name"
                     name="name"
                     min="1"
                     max="100"
                     value = {hotelName}
                     placeholder ='Name:'
                     onChange = {updateHotelName}
                     style ={{width:'25vw'}}/>
              <label htmlFor="names">Name:</label>
            </Row>

            <Row className ='form-line nice-input-wrapper'>

              <input type="number"
                     id="numberOfNights"
                     name="numberOfNights"
                     min="1"
                     max="100"
                     value = {numberOfNights}
                     placeholder ='Number of Nights:'
                     onChange = {updateNumberOfNights}
                     style ={{width:'25vw'}}/>
              <label htmlFor="numberOfNights">Number of Nights:</label>
            </Row>
          </>}

          <CarbonTotal footprint={parseFloat(carbonFootprint).toFixed(1)} label ={'Carbon Footprint (KG)'}/>

          <Row className ='form-submit-line'>
            <Button onClick = {addHotel}>Add</Button>
          </Row>

        </Container>
      </Col>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
    </Row>


    </>
  )
}
export default Accomodation;




//
//
// <Row className = 'vertical-padding-md'>
//   <Col>
//     &nbsp;
//   </Col>
//   <Col>
//     &nbsp;
//   </Col>
//   <Col className ='horizontal-centered-children'>
//     <FormCheck
//       onChange={(e)=>{updateType(e)}}
//       type="switch"
//       id="custom-switch-"
//       label="Advanced Calculation"
//       checked={isAdvanced}/>
//   </Col>
// </Row>
//
// {type === 'basic'?
//   <>
//     <Row className = 'vertical-padding-sm'>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Hotel Type:</FormLabel>
//         <RadioGroup aria-label="gender" name="gender1" value={hotelType} onChange={updateHotelType} row>
//           <FormControlLabel value="smallAvg" control={<Radio />} label="Small Hotel" />
//           <FormControlLabel value="medAvg" control={<Radio />} label="Medium Hotel" />
//           <FormControlLabel value="largeAvg" control={<Radio />} label="Large Hotel" />
//         </RadioGroup>
//       </FormControl>
//       </Row>
//     <Row className ='vertical-padding-md'>
//       <Col className = 'centered-children'>
//         <label htmlFor="names">Name:</label>
//         <input type="text" id="name" name="name" min="1" max="100" value = {hotelName} onChange = {updateHotelName}/>
//       </Col>
//       <Col className = 'centered-children'>
//         <label htmlFor="numberOfNights">Number of Nights:</label>
//         <input type="number" id="numberOfNights" name="numberOfNights" min="1" max="100" value = {numberOfNights} onChange = {updateNumberOfNights}/>
//       </Col>
//     </Row>
//
//   </>
// :null}
// {type === 'advanced'?
//   <>
//     <Row>
//       advanced
//     </Row>
//   </>
//   :null}
//   <CarbonTotal footprint={parseFloat(carbonFootprint).toFixed(1)}/>
//
// <Row className = 'centered-children vertical-padding-md'>
//   <Button>Add</Button>
// </Row>
