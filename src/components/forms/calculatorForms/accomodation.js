import { Container, Row, Col, Button} from 'react-bootstrap';
import  { useState } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CarbonTotal from "../../sharedComponents/carbonTotal"
import FormCheck from "react-bootstrap/FormCheck"
import HelpIcon from "../../sharedComponents/helpIcon"
import GreenRadio from "../../sharedComponents/formComponents/greenRadio"

const Accomodation = props =>{

  // const [type, setType] = useState('basic');
  const [isAdvanced, setIsAdvanced] = useState(false)

  const [hotelName, setHotelName] =useState('')
  const [hotelSize, setHotelSize]=useState('large')
  const [hotelEffeciency, setHotelEffeciency]=useState('good')

  const [numberOfNights, setNumberOfNights] =useState('')

  const [numberOfGuests, setNumberOfGuests] =useState('')
  const [avgOccupancy, setAvgOccupancy] =useState(95)

  const [electricConsumption, setElectricConsumption] =useState(80)
  const [fuelConsumption, setFuelConsumption]=useState(210)
  const [waterConsumption, setWaterConsumption]=useState(172.5)

  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const [errors, seterrors] = useState({nameError:false,
                                                        nightsError:false,
                                                        occupancyError:false,
                                                        numberOfRoomsError:false,
                                                        electricConsumptionError:false,
                                                        fuelConsumptionError:false,
                                                        waterConsumptionError:false})
  // function selectType(type){
  //   setType(type);
  // }
  function updateHotelSize(e){

    setHotelSize(e.target.value);

    if (e.target.value ==='large') {
      if (hotelEffeciency==='good') {
        // all units are (kWh/m2 year)
        setElectricConsumption(165)
        setFuelConsumption(200)
        setWaterConsumption(220)

        updateFootprint(numberOfGuests,numberOfNights,165,200,220,avgOccupancy)
      }
      else if (hotelEffeciency==='fair') {
        // all units are (kWh/m2 year)
        setElectricConsumption(182.5)
        setFuelConsumption(220)
        setWaterConsumption(255)

        updateFootprint(numberOfGuests,numberOfNights,182.5,220,255,avgOccupancy)
      }
      else if (hotelEffeciency==='poor'){
        // all units are (kWh/m2 year)
        setElectricConsumption(225)
        setFuelConsumption(270)
        setWaterConsumption(300)

        updateFootprint(numberOfGuests,numberOfNights,225,270,300,avgOccupancy)
      }
    }
    else if (e.target.value ==='medium') {
      if (hotelEffeciency==='good') {
        // all units are (kWh/m2 year)
        setElectricConsumption(70)
        setFuelConsumption(190)
        setWaterConsumption(160)

        updateFootprint(numberOfGuests,numberOfNights,70,190,160,avgOccupancy)
      }
      else if (hotelEffeciency==='fair') {
        // all units are (kWh/m2 year)
        setElectricConsumption(80)
        setFuelConsumption(210)
        setWaterConsumption(172.5)

        updateFootprint(numberOfGuests,numberOfNights,80,210,172.5,avgOccupancy)
      }
      else if (hotelEffeciency==='poor'){
        // all units are (kWh/m2 year)
        setElectricConsumption(105)
        setFuelConsumption(245)
        setWaterConsumption(202.5)

        updateFootprint(numberOfGuests,numberOfNights,105,245,202.5,avgOccupancy)
      }
    }
    else if (e.target.value ==='small') {
      if (hotelEffeciency==='good') {
        // all units are (kWh/m2 year)
        setElectricConsumption(60)
        setFuelConsumption(180)
        setWaterConsumption(120)

        updateFootprint(numberOfGuests,numberOfNights,60,180,120,avgOccupancy)
      }
      else if (hotelEffeciency==='fair') {
        // all units are (kWh/m2 year)
        setElectricConsumption(70)
        setFuelConsumption(195)
        setWaterConsumption(130)

        updateFootprint(numberOfGuests,numberOfNights,70,195,130,avgOccupancy)
      }
      else if (hotelEffeciency==='poor'){
        // all units are (kWh/m2 year)
        setElectricConsumption(90)
        setFuelConsumption(225)
        setWaterConsumption(150)

        updateFootprint(numberOfGuests,numberOfNights,90,225,150,avgOccupancy)
      }
    }

  }
  function updateHotelEfficiency(e){
    setHotelEffeciency(e.target.value)

    if (hotelSize ==='large') {
      if (e.target.value==='good') {
        // all units are (kWh/m2 year)
        setElectricConsumption(165)
        setFuelConsumption(200)
        setWaterConsumption(220)

        updateFootprint(numberOfGuests,numberOfNights,165,200,220,avgOccupancy)
      }
      else if (e.target.value==='fair') {
        // all units are (kWh/m2 year)
        setElectricConsumption(182.5)
        setFuelConsumption(220)
        setWaterConsumption(255)

        updateFootprint(numberOfGuests,numberOfNights,182.5,220,255,avgOccupancy)
      }
      else if (e.target.value==='poor'){
        // all units are (kWh/m2 year)
        setElectricConsumption(225)
        setFuelConsumption(270)
        setWaterConsumption(300)

        updateFootprint(numberOfGuests,numberOfNights,225,270,300,avgOccupancy)
      }
    }
    else if (hotelSize ==='medium') {
      if (e.target.value==='good') {
        // all units are (kWh/m2 year)
        setElectricConsumption(70)
        setFuelConsumption(190)
        setWaterConsumption(160)

        updateFootprint(numberOfGuests,numberOfNights,70,190,160,avgOccupancy)
      }
      else if (e.target.value==='fair') {
        // all units are (kWh/m2 year)
        setElectricConsumption(80)
        setFuelConsumption(210)
        setWaterConsumption(172.5)

        updateFootprint(numberOfGuests,numberOfNights,80,210,172.5,avgOccupancy)
      }
      else if (e.target.value==='poor'){
        // all units are (kWh/m2 year)
        setElectricConsumption(105)
        setFuelConsumption(245)
        setWaterConsumption(202.5)

        updateFootprint(numberOfGuests,numberOfNights,105,245,202.5,avgOccupancy)
      }
    }
    else if (hotelSize ==='small') {
      if (e.target.value==='good') {
        // all units are (kWh/m2 year)
        setElectricConsumption(60)
        setFuelConsumption(180)
        setWaterConsumption(120)

        updateFootprint(numberOfGuests,numberOfNights,60,180,120,avgOccupancy)
      }
      else if (e.target.value==='fair') {
        // all units are (kWh/m2 year)
        setElectricConsumption(70)
        setFuelConsumption(195)
        setWaterConsumption(130)

        updateFootprint(numberOfGuests,numberOfNights,70,195,130,avgOccupancy)
      }
      else if (e.target.value==='poor'){
        // all units are (kWh/m2 year)
        setElectricConsumption(90)
        setFuelConsumption(225)
        setWaterConsumption(150)

        updateFootprint(numberOfGuests,numberOfNights,90,225,150,avgOccupancy)
      }
    }
  }

  function updateNumberOfNights(e){
    if (!isNaN(parseInt(e.target.value))) {
      setNumberOfNights(parseInt(e.target.value)*1)
      updateFootprint(numberOfGuests,parseInt(e.target.value),electricConsumption,fuelConsumption,waterConsumption,avgOccupancy)
    }
    else if (e.target.value==='') {
      setNumberOfNights('')
      updateFootprint(numberOfGuests,parseInt(e.target.value),electricConsumption,fuelConsumption,waterConsumption,avgOccupancy)
    }




  }


  function updateNumberOfGuests(e){
    if (!isNaN(parseInt(e.target.value))) {
      setNumberOfGuests(parseInt(e.target.value)*1)
      updateFootprint(parseInt(e.target.value),numberOfNights,electricConsumption,fuelConsumption,waterConsumption,avgOccupancy)
    }
    else if (e.target.value==='') {
      setNumberOfGuests('')
      updateFootprint(parseInt(e.target.value),numberOfNights,electricConsumption,fuelConsumption,waterConsumption,avgOccupancy)
    }
  }

  function updateHotelName(e){
    setHotelName(e.target.value)
  }


  function updateElectricConsumption(e){

    if (!isNaN(parseInt(e.target.value)))  {
      setElectricConsumption(parseInt(e.target.value))
      updateFootprint(numberOfGuests,numberOfNights,parseInt(e.target.value),fuelConsumption,waterConsumption,avgOccupancy)
    }
    else {
      setElectricConsumption('')
      updateFootprint(numberOfGuests,numberOfNights,parseInt(e.target.value),fuelConsumption,waterConsumption,avgOccupancy)
    }

  }


  function updateFuelConsumption(e){
    if (!isNaN(parseInt(e.target.value)))  {
      setFuelConsumption(parseInt(e.target.value))
      updateFootprint(numberOfGuests,numberOfNights,electricConsumption,parseInt(e.target.value),waterConsumption,avgOccupancy)
    }
    else {
      setFuelConsumption('')
      updateFootprint(numberOfGuests,numberOfNights,electricConsumption,parseInt(e.target.value),waterConsumption,avgOccupancy)

    }
  }


  function updateWaterConsumption(e){
    if (!isNaN(parseInt(e.target.value))) {
      setWaterConsumption(parseInt(e.target.value))
      updateFootprint(numberOfGuests,numberOfNights,electricConsumption,fuelConsumption,parseInt(e.target.value),avgOccupancy)

    }
    else {
      setWaterConsumption('')
      updateFootprint(numberOfGuests,numberOfNights,electricConsumption,fuelConsumption,parseInt(e.target.value),avgOccupancy)

    }
  }


  function updateAvgOccupancy(e){
    if (!isNaN(parseInt(e.target.value)))  {
      setAvgOccupancy(parseInt(e.target.value))
      updateFootprint(numberOfGuests,numberOfNights,electricConsumption,fuelConsumption,waterConsumption,e.target.value)
    }
    else {
      setAvgOccupancy('')
      updateFootprint(numberOfGuests,numberOfNights,electricConsumption,fuelConsumption,waterConsumption,e.target.value)
    }

  }

  function updateFootprint(numberOfGuests,numberOfNights,electricConsumption,fuelConsumption,waterConsumption,avgOccupancy){
    if (numberOfNights<1) {
      setCarbonFootprint(0)
    }
    else {

      if (numberOfGuests==='') {
        let cost =parseFloat(numberOfNights)*((((parseFloat(electricConsumption)+parseFloat(fuelConsumption)+parseFloat(waterConsumption))*15)/365)*0.85)/(parseFloat(avgOccupancy)/100);
        setCarbonFootprint(cost)
      }
      else {
        let cost =(parseFloat(numberOfNights)*((((parseFloat(electricConsumption)+parseFloat(fuelConsumption)+parseFloat(waterConsumption))*15)/365)*0.85)/(parseFloat(avgOccupancy)/100))/numberOfGuests;
        setCarbonFootprint(cost)
      }


    }

  }
  function updateType(e){
    if (isAdvanced) {
      setIsAdvanced(false)

    }
    else {
      setIsAdvanced(true)

    }
  }

  function resetState(){
    // setType('basic')
    setIsAdvanced(false)
    setCarbonFootprint(0)
    setHotelName('')
    setHotelSize('large')
    setHotelEffeciency('good')
    setNumberOfNights('')
    setNumberOfGuests('')
    setAvgOccupancy(95)
    setElectricConsumption(80)
    setFuelConsumption(210)
    setWaterConsumption(172.5)
    setCarbonFootprint(0)
  }
  function addHotel(){
    if (hotelName!=='' && carbonFootprint>0) {

      let data ={ type: 'accomodation',
                  carbonFootprint: carbonFootprint,
                  hotelName:hotelName,
                  numberOfNights:numberOfNights,
                  numberOfGuests:numberOfGuests}


      props.addCarbonCostItem(data)
      resetState()
    }
    else {
      let nameError=false;
      let nightsError=false;
      let occupancyError=false;
      let numberOfRoomsError=false;
      let electricConsumptionError=false;
      let fuelConsumptionError=false;
      let waterConsumptionError=false;

      if (isAdvanced) {

        if (hotelName ==='') {
          nameError=true;
        }
        if (numberOfNights==='') {
          nightsError =true;
        }
        if (avgOccupancy===''){
          occupancyError=true;
        }
        if (electricConsumption===''){
          electricConsumptionError=true;
        }
        if (fuelConsumption===''){
          fuelConsumptionError=true;
        }
        if (waterConsumption===''){
          waterConsumptionError=true;
        }

        let errors ={nameError:nameError,
                             nightsError:nightsError,
                             occupancyError:occupancyError,
                             numberOfRoomsError:numberOfRoomsError,
                             electricConsumptionError:electricConsumptionError,
                             fuelConsumptionError:fuelConsumptionError,
                             waterConsumptionError:waterConsumptionError,
                             }
        seterrors(errors);
        }
      else {
        if (hotelName==='') {
          nameError=true;
        }
        if (numberOfNights==='') {
          nightsError =true;
        }
        let errors ={nameError:nameError,
                          nightsError:nightsError}
        seterrors(errors)
      }

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
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="text"
                         id="avgOccupancy"
                         name="avgOccupancy"
                         placeholder ='Average Occupancy (%)'
                         min="1"
                         max="100"
                         value = {avgOccupancy}
                         onChange = {updateAvgOccupancy}
                         className ={errors.occupancyError? "error-input":""}/>
                  <label htmlFor="avgOccupancy"
                         className ={errors.occupancyError? "error-label":""}>
                    Average Occupancy (%)
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ='How full is this hotel typically? A fully booked hotel more effeciently divides their overall carbon footprint over more guests.'/>
              </Col>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="text"
                         id="electricConsumption"
                         name="electricConsumption"
                         placeholder = 'Electricity Consumption (kWh/ M^2 Year)'
                         min="1"
                         max="100"
                         value = {electricConsumption}
                         onChange = {updateElectricConsumption}
                         className ={errors.electricConsumptionError? "error-input":""}/>
                  <label htmlFor="electricConsumption"
                         className ={errors.electricConsumptionError? "error-label":""}>Electricity Consumption (kWh/ M^2 Year)</label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ='Enter the energy use due to electricity consumption.'/>
              </Col>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="text"
                         id="fuelConsumption"
                         name="fuelConsumption"
                         placeholder ='Fuel Consumption (kWh/m^2 Year)'
                         min="1"
                         max="1000"
                         value = {fuelConsumption}
                         onChange = {updateFuelConsumption}
                         className ={errors.fuelConsumptionError? "error-input":""}/>
                  <label htmlFor="fuelConsumption"
                         className ={errors.fuelConsumptionError? "error-label":""}>
                    Fuel Consumption (kWh/ M^2 Year)
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ='Enter the energy use due to fuel consumption.'/>
              </Col>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="text"
                         id="waterConsumption"
                         name="waterConsumption"
                         placeholder ='Water Consumption (kWh/m^2 Year)'

                         value = {waterConsumption}
                         onChange = {updateWaterConsumption}
                         className ={errors.waterConsumptionError? "error-input":""}/>
                  <label htmlFor="gasConsumption"
                         className ={errors.waterConsumptionError? "error-label":""}>
                    Water Consumption (kWh/ M^2 Year)
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ='Enter the energy use due to water consumption.'/>
              </Col>
            </Row>


            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="text"
                         id="hotelName"
                         name="hotelName"
                         value = {hotelName}
                         placeholder ='Name:'
                         onChange = {updateHotelName}
                         className ={errors.nameError? "error-input":""}/>
                  <label htmlFor="hotelName"
                         className ={errors.nameError? "error-label":""}>
                    Name:
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ='Your hotel name helps make sense of all your carbon footprints when you review your trip.'/>
              </Col>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="text"
                         id="numberOfNightsAdv"
                         name="numberOfNightsAdv"

                         placeholder ='Number of Nights:'
                         value = {numberOfNights}
                         onChange = {updateNumberOfNights}
                         className ={errors.nightsError? "error-input":""}/>
                  <label htmlFor="numberOfNightsAdv"
                         className ={errors.nightsError? "error-label":""}>
                    Number of Nights
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ='How many nights are you staying for?'/>
              </Col>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <Row>
              <input type="text"
                     id="numberOfGuests"
                     name="numberOfGuests"
                     value = {numberOfGuests}
                     placeholder ='People Per Room'
                     onChange = {updateNumberOfGuests}
                     className ={errors.nightsError? "error-input":""}/>
              <label htmlFor="numberOfGuests"
                     className ={errors.nightsError? "error-label":""}>
                People Per Room
              </label>
              </Row>
            </Col>
            <Col>
              <HelpIcon message ='How many people are you sharing the room with? Sharing a standard size room distributes the carbon footprint of the stay amongst all those staying in the room.'/>
            </Col>
          </Row>
          </>
          :
          <>

            <Row className ='form-line '>
              <FormControl component="fieldset">
                <FormLabel component="legend">Hotel Size:</FormLabel>
                <RadioGroup row aria-label="hotelSize" name="hotelSize" value={hotelSize} onChange={updateHotelSize}>
                  <FormControlLabel value="large" control={<GreenRadio />} label="Large" />
                  <FormControlLabel value="medium" control={<GreenRadio />} label="Medium" />
                  <FormControlLabel value="small" control={<GreenRadio />} label="Small" />
                  <HelpIcon message ='Large hotels (more than 150 rooms) with air conditioning, laundry & indoor swimming pool. Medium‐sized hotels (50‐150 rooms) without laundry, with heating & air conditioning in some areas. Small hotels (4‐50 rooms) without laundry, with heating & air conditioning in some areas.'/>
                </RadioGroup>
              </FormControl>
            </Row>

            <Row className ='form-line '>
              <FormControl component="fieldset">
                <FormLabel component="legend">Hotel Efficiency:</FormLabel>
                <RadioGroup row aria-label="hotelEffeciency" name="hotelEffeciency" value={hotelEffeciency} onChange={updateHotelEfficiency}>
                  <FormControlLabel value="good" control={<GreenRadio />} label="Good" />
                  <FormControlLabel value="fair" control={<GreenRadio />} label="Fair" />
                  <FormControlLabel value="poor" control={<GreenRadio />} label="Poor" />
                  <HelpIcon message ="A lot goes into determining the efficiency of a hotel. The hotel age, design, location, and amenities. Generally, old and luxury hotels are inefficient. Also, any hotel where there is a large temperature difference inside and outside are very inefficient. New hotels in moderate climates tend to be the most efficient. If you’re unsure, just select ‘Fair’ for an approximation. "/>
                </RadioGroup>
              </FormControl>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="text"
                         id="name"
                         name="name"
                         min="1"
                         max="100"
                         value = {hotelName}
                         placeholder ='Name:'
                         onChange = {updateHotelName}
                         className ={errors.nameError? "error-input":""}/>
                  <label htmlFor="names"
                         className ={errors.nameError? "error-label":""}>
                    Name:
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ='Your hotel name helps make sense of all your carbon footprints when you review your trip.'/>
              </Col>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <Row>
              <input type="text"
                     id="numberOfNights"
                     name="numberOfNights"
                     min="1"
                     max="100"
                     value = {numberOfNights}
                     placeholder ='Number of Nights:'
                     onChange = {updateNumberOfNights}
                     className ={errors.nightsError? "error-input":""}/>
              <label htmlFor="numberOfNights"
                     className ={errors.nightsError? "error-label":""}>
                Number of Nights:
              </label>
              </Row>
            </Col>
            <Col>
              <HelpIcon message ='How many nights will you be staying?'/>
            </Col>
          </Row>

          <Row className ='form-line nice-input-wrapper'>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Row>
            <input type="text"
                   id="numberOfGuests"
                   name="numberOfGuests"
                   min="1"
                   max="100"
                   value = {numberOfGuests}
                   placeholder ='People Per Room'
                   onChange = {updateNumberOfGuests}
                   className ={errors.nightsError? "error-input":""}/>
            <label htmlFor="numberOfGuests"
                   className ={errors.nightsError? "error-label":""}>
              People Per Room
            </label>
            </Row>
          </Col>
          <Col>
            <HelpIcon message ='How many people are you sharing the room with? Sharing a standard size room distributes the carbon footprint of the stay amongst all those staying in the room.'/>
          </Col>
        </Row>
          </>}

          <CarbonTotal footprint={carbonFootprint} label ={'Carbon Footprint (KG)'}/>

          <Row className ='form-submit-line'>
            <Button onClick = {addHotel}  variant='custom'>Add</Button>
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
