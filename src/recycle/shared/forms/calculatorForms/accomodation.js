import { Container, Row, Col, Button} from 'react-bootstrap';
import  { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CarbonTotal from "../../elements/carbonTotal"
import FormCheck from "react-bootstrap/FormCheck"

const Accomodation = props =>{

  const [type, setType] = useState('basic');
  const [isAdvanced, setIsAdvanced] = useState(false)

  const [hotelType, setHotelType] = useState('smallAvg');

  const [hotelName, setHotelName] = useState('');
  const [numberOfNights, setNumberOfNights] = useState('');

  const [advancedHotelDetails, setAdvancedHotelDetails]=useState({ hotelName:'',
                                                                   numberOfNights:'',
                                                                   numberOfRooms:180,
                                                                   avgOccupancy:95,
                                                                   electricConsumption:2540802,
                                                                   electricEF:0.2988,
                                                                   gasConsumption:4207102,
                                                                   gasEF:0.1822,
                                                                   oilConsumption:657,
                                                                   oilEF:2.6765})
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const [basicErrors, setBasicErrors] =useState({nameError:false,
                                                 nightsError:false})

  const [advancedErrors, setAdvancedErrors] = useState({nameError:false,
                                                        nightsError:false,
                                                        occupancyError:false,
                                                        numberOfRoomsError:false,
                                                        electricConsumptionError:false,
                                                        electricEFError:false,
                                                        gasConsumptionError:false,
                                                        gasEFError:false,
                                                        oilConsumptionError:false,
                                                        oilEFError:false})
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
  function updateFootprint(numberOfNights){
    console.log('number of nights...'+numberOfNights)
    if (numberOfNights<1) {
      setCarbonFootprint(0)
    }
    else {
      let totalRooms = advancedHotelDetails.numberOfRooms*365*(advancedHotelDetails.avgOccupancy/100)
      let cost = ((advancedHotelDetails.electricConsumption*advancedHotelDetails.electricEF +
                  advancedHotelDetails.gasConsumption*advancedHotelDetails.gasEF+
                  advancedHotelDetails.oilConsumption*advancedHotelDetails.oilEF)/totalRooms)*advancedHotelDetails.numberOfNights
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
    let temp ={hotelName:advancedHotelDetails.hotelName,
               numberOfNights:advancedHotelDetails.numberOfNights,
               numberOfRooms:advancedHotelDetails.numberOfRooms,
               avgOccupancy:advancedHotelDetails.avgOccupancy,
               electricConsumption:advancedHotelDetails.electricConsumption,
               electricEF:advancedHotelDetails.electricEF,
               gasConsumption:advancedHotelDetails.gasConsumption,
               gasEF:advancedHotelDetails.gasEF,
               oilConsumption:advancedHotelDetails.oilConsumption,
               oilEF:advancedHotelDetails.oilEF}
    temp[e.target.name]=e.target.value;
    if (e.target.name ==='avgOccupancy') {
      if (e.target.value>100) {
        temp['avgOccupancy']=100;
      }
    }
    setAdvancedHotelDetails(temp)
  }
  function resetState(){
    setIsAdvanced(false)
    setCarbonFootprint(0)
    setHotelName('')
    setNumberOfNights('')
    setAdvancedHotelDetails({ hotelName:'',
                              numberOfNights:'',
                              numberOfRooms:180,
                              avgOccupancy:95,
                              electricConsumption:2540802,
                              electricEF:0.2988,
                              gasConsumption:4207102,
                              gasEF:0.1822,
                              oilConsumption:657,
                              oilEF:2.6765})

  }
  function addHotel(){
    if (hotelName!=='' && carbonFootprint>0) {

      let data ={ type: 'accomodation',
                  carbonFootprint: carbonFootprint,
                  hotelName:hotelName,
                  numberOfNights:numberOfNights }


      props.addCarbonCostItem(data)
    }
    else {
      let nameError=false;
      let nightsError=false;
      let occupancyError=false;
      let numberOfRoomsError=false;
      let electricConsumptionError=false;
      let electricEFError=false;
      let gasConsumptionError=false;
      let gasEFError=false;
      let oilConsumptionError=false;
      let oilEFError=false;

      if (isAdvanced) {

        if (advancedHotelDetails.hotelName ==='') {
          nameError=true;
        }
        if (advancedHotelDetails.numberOfNights==='') {
          nightsError =true;
        }
        if (advancedHotelDetails.avgOccupancy===''){
          occupancyError=true;
        }
        if (advancedHotelDetails.numberOfRooms===''){
          numberOfRoomsError=true;
        }
        if (advancedHotelDetails.electricConsumption===''){
          electricConsumptionError=true;
        }
        if (advancedHotelDetails.electricEF===''){
          electricEFError=true;
        }
        if (advancedHotelDetails.gasConsumption===''){
          gasConsumptionError=true;
        }
        if (advancedHotelDetails.gasEF===''){
          gasEFError=true;
        }
        if (advancedHotelDetails.oilConsumption===''){
          oilConsumptionError=true;
        }
        if (advancedHotelDetails.oilEF===''){
            oilEFError=true;
        }
        let advancedErrors ={nameError:nameError,
                             nightsError:nightsError,
                             occupancyError:occupancyError,
                             numberOfRoomsError:numberOfRoomsError,
                             electricConsumptionError:electricConsumptionError,
                             electricEFError:electricEFError,
                             gasConsumptionError:gasConsumptionError,
                             gasEFError:gasEFError,
                             oilConsumptionError:oilConsumptionError,
                             oilEFError:oilEFError}
        setAdvancedErrors(advancedErrors);
        }
      else {
        if (hotelName ==='') {
          nameError=true;
        }
        if (numberOfNights==='') {
          nightsError =true;
        }
        let basicErrors ={nameError:nameError,
                          nightsError:nightsError}
        setBasicErrors(basicErrors)
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
              <input type="number"
                     id="numberOfRooms"
                     name="numberOfRooms"
                     placeholder ='Number of Rooms'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.numberOfRooms}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.numberOfRoomsError? "error-input":""}/>
              <label htmlFor="numberOfRooms"
                     className ={advancedErrors.numberOfRoomsError? "error-label":""}>
                Number of Rooms
              </label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="avgOccupancy"
                     name="avgOccupancy"
                     placeholder ='Average Occupancy (%)'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.avgOccupancy}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.occupancyError? "error-input":""}/>
              <label htmlFor="avgOccupancy"
                     className ={advancedErrors.occupancyError? "error-label":""}>
                Average Occupancy (%)
              </label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="electricConsumption"
                     name="electricConsumption"
                     placeholder = 'Electricity Consumption (kWh/Year)'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.electricConsumption}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.electricConsumptionError? "error-input":""}/>
              <label htmlFor="electricConsumption"
                     className ={advancedErrors.electricConsumptionError? "error-label":""}>Electricity Consumption (kWh/Year)</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="electricEF"
                     name="electricEF"
                     placeholder ='Electricity EF'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.electricEF}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.electricEFError? "error-input":""}/>
              <label htmlFor="electricEF"
                     className ={advancedErrors.electricEFError? "error-label":""}>
                Electricity EF
              </label>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="gasConsumption"
                     name="gasConsumption"
                     placeholder ='Gas Consumption (kWh/Year)'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.gasConsumption}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.gasConsumptionError? "error-input":""}/>
              <label htmlFor="gasConsumption"
                     className ={advancedErrors.gasConsumptionError? "error-label":""}>
                Gas Consumption (kWh/Year)
              </label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="gasEF"
                     name="gasEF"
                     placeholder ='Gas EF'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.gasEF}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.gasEFError? "error-input":""}/>
              <label htmlFor="gasEF"
                     className ={advancedErrors.gasEFError? "error-label":""}>
                Gas EF
              </label>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="oilConsumption"
                     name="oilConsumption"
                     placeholder ='Oil Consumption (kWh/Year)'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.oilConsumption}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.oilConsumptionError? "error-input":""}/>
              <label htmlFor="oilConsumption"
                     className ={advancedErrors.oilConsumptionError? "error-label":""}>
                Oil Consumption (kWh/Year)
              </label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="oilEF"
                     name="oilEF"
                     placeholder ='Oil EF'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.oilEF}
                     onChange = {updateHotelDetails}
                     className ={advancedErrors.oilEFError? "error-input":""}/>
              <label htmlFor="oilEF"
                     className ={advancedErrors.oilEFError? "error-label":""}>Oil EF</label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="text"
                     id="name"
                     name="name"
                     placeholder='Name'
                     min="1"
                     max="100"
                     value = {advancedHotelDetails.hotelName}
                     placeholder ='Name:'
                     onChange = {updateHotelName}
                     style ={{width:'25vw'}}
                     className ={advancedErrors.nameError? "error-input":""}/>
              <label htmlFor="names"
                     className ={advancedErrors.nameError? "error-label":""}>
                Name:
              </label>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="numberOfNightsAdv"
                     name="numberOfNightsAdv"
                     placeholder ='Number of Nights'
                     min="1"
                     max="100"
                     placeholder ='Number of Nights:'
                     value = {advancedHotelDetails.numberOfNights}
                     onChange = {updateNumberOfNights}
                     className ={advancedErrors.nightsError? "error-input":""}/>
              <label for="numberOfNightsAdv"
                     className ={advancedErrors.nightsError? "error-label":""}>
                Number of Nights
              </label>
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
                     style ={{width:'25vw'}}
                     className ={basicErrors.nameError? "error-input":""}/>
              <label htmlFor="names"
                     className ={basicErrors.nameError? "error-label":""}>
                Name:
              </label>
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
                     style ={{width:'25vw'}}
                     className ={basicErrors.nightsError? "error-input":""}/>
              <label htmlFor="numberOfNights"
                     className ={basicErrors.nightsError? "error-label":""}>
                Number of Nights:
              </label>
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
