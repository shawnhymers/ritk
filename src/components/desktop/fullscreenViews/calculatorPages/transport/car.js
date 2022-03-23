import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import FormCheck from "react-bootstrap/FormCheck"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import  { useState } from 'react';
import CustomDropdown from '../../../../standardComponents/dropdown';
import smallCarData from "../../../../data/smallCarData";
// import CarOptions from "../forms/carOptions";
import SearchDrop from '../../../../standardComponents/searchDrop';
import CarbonTotal from "../elements/carbonTotal"

const Car = props => {

  const [isAdvanced, setType]=useState(false)

  // const [emmisions, setEmmisions] = useState('200');
  const [milage, setMilage] = useState('7')
  const [distance, setDistance]=useState('')
  const [carbonFootprint, setCarbonFootprint] = useState(0)

  const [basicCarType,setBasicCarType] = useState('StandardCar')
  const [basicDrivingType,setBasicDrivingType] = useState('City')

  const [advancedDrivingType,setAdvancedDrivingType] = useState('City')
  const [searchBy, setSearchBy] = useState('Make');
  const [year, setYear] = useState('2020');
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [vehicleOptions, setVehicleOptions] = useState([smallCarData]);

  const [carSearchValue, setCarSearchValue]= useState('');

  const [passengers, setPassengers]= useState('');

  function selectYear(e){
    setYear(e.target.value)
  }
  function selectSearchBy(e){
    setSearchBy(e.target.value)
  }
  function updatePassengers(e){
    setPassengers(e.target.value)
    updateCarbonFootprint(distance,milage,passengers)
  }
  function updateBasicCarType(e){
    let basicCarType = e.target.value;
    setBasicCarType(basicCarType)

    if (basicDrivingType ==='City') {
      if (basicCarType === 'GasGuzzler') {
        setMilage(15);
        updateCarbonFootprint(distance,15,passengers);
      }
      else if (basicCarType === 'StandardCar') {
        setMilage(9);
        updateCarbonFootprint(distance,9,passengers);
      }
      else if (basicCarType ==='EfficientCar') {
        setMilage(5);
        updateCarbonFootprint(distance,5,passengers);
      }
    }
    else if (basicDrivingType === 'Highway') {
      if (basicCarType === 'GasGuzzler') {
        setMilage(10);
        updateCarbonFootprint(distance,10,passengers);
      }
      else if (basicCarType === 'StandardCar') {
        setMilage(7.5);
        updateCarbonFootprint(distance,7.5,passengers);
      }
      else if (basicCarType ==='EfficientCar') {
        setMilage(4);
        updateCarbonFootprint(distance,4,passengers);
      }
    }
    else if (basicDrivingType ==='Mixed') {
      if (basicCarType === 'GasGuzzler') {
        setMilage(12.5);
        updateCarbonFootprint(distance,12.5,passengers);
      }
      else if (basicCarType === 'StandardCar') {
        setMilage(8.25);
        updateCarbonFootprint(distance,8.25,passengers);
      }
      else if (basicCarType ==='EfficientCar') {
        setMilage(4.5);
        updateCarbonFootprint(distance,4.5,passengers);
      }
    }
  }

  function updateBasicDrivingType(e){
    console.log('updating badic driving type')
    let basicDrivingType = e.target.value;
    setBasicDrivingType(basicDrivingType)
    if (basicDrivingType ==='City') {
      if (basicCarType === 'GasGuzzler') {
        setMilage(15);
        updateCarbonFootprint(distance,15,passengers);
      }
      else if (basicCarType === 'StandardCar') {
        setMilage(9);
        updateCarbonFootprint(distance,9,passengers);
      }
      else if (basicCarType ==='EfficientCar') {
        setMilage(5);
        updateCarbonFootprint(distance,5,passengers);
      }
    }
    else if (basicDrivingType === 'Highway') {
      if (basicCarType === 'GasGuzzler') {
        setMilage(10);
        updateCarbonFootprint(distance,10,passengers);
      }
      else if (basicCarType === 'StandardCar') {
        setMilage(7.5);
        updateCarbonFootprint(distance,7.5,passengers);
      }
      else if (basicCarType ==='EfficientCar') {
        setMilage(4);
        updateCarbonFootprint(distance,4,passengers);
      }
    }
    else if (basicDrivingType ==='Mixed') {
      if (basicCarType === 'GasGuzzler') {
        setMilage(12.5);
        updateCarbonFootprint(distance,12.5,passengers);
      }
      else if (basicCarType === 'StandardCar') {
        setMilage(8.25);
        updateCarbonFootprint(distance,8.25,passengers);
      }
      else if (basicCarType ==='EfficientCar') {
        setMilage(4.5);
        updateCarbonFootprint(distance,4.5,passengers);
      }
    }
  }

  function updateDistance(e){
    setDistance(e.target.value)
    updateCarbonFootprint(e.target.value,milage,passengers)
  }
  function updateVehicleInput(e){
    setVehicleSearch(e.target.value)
    let options = []
    if (e.target.value !=='') {

      var yearOptions = smallCarData.filter(function (el)
      {
          return el.Year===parseInt(year)
      });
      console.log('year options are')
      console.log(yearOptions)

      let options = yearOptions.filter(function (el)
      {
        if (searchBy==='Make') {
          return el.Make.toUpperCase().includes(e.target.value.toUpperCase())
        }
        else if (searchBy==='Model') {
          return el.Model.toUpperCase().includes(e.target.value.toUpperCase())
        }
      });
        setVehicleOptions(options)
    }
    else {
        setVehicleOptions(options)
    }


  }
  function updateType(e){
    console.log(e.target.value)
    if (isAdvanced) {
      console.log('setting advanced off')
      setType(false)
      setCarbonFootprint(0)
      setMilage(0)
      setDistance('')
      setPassengers('')
    }
    else {
      console.log('setting advanced on')
      setType(true)
      setCarbonFootprint(0)
      setMilage(0)
      setDistance('')
      setPassengers('')
    }

  }

  function selectVehicleOption(data){
    setVehicle(data)
    if (advancedDrivingType==='City') {
      setMilage(data['Fuel Consumption City (L per 100 km)'])
      updateCarbonFootprint(distance,data['Fuel Consumption City (L per 100 km)'],passengers)
    }
    else if (advancedDrivingType ==='Highway') {
      setMilage(data['Fuel Consumption Hwy (L per 100 km)'])
      updateCarbonFootprint(distance,data['Fuel Consumption Hwy (L per 100 km)'],passengers)
    }
    else if (advancedDrivingType === 'Mixed') {
      setMilage(data['Comb (L per 100 km)'])
      updateCarbonFootprint(distance,data['Comb (L per 100 km)'],passengers)
    }


  }
  function updateVehicleOptions(e){
    console.log('updating vehicle options')
    console.log(e.target.value)
    if (e.target.value !=='') {

      var yearOptions = smallCarData.filter(function (el)
        {
            return el.Year===parseInt(year)
        });

      var options = yearOptions.filter(function (el)
      {
        if (searchBy==='Make') {
          return el.Make.toUpperCase().includes(e.target.value.toUpperCase())
        }
        else if (searchBy==='Model') {
          return el.Model.toUpperCase().includes(e.target.value.toUpperCase())
        }
      });
    }
    else {
      options = smallCarData;
    }
    setVehicleOptions(options);
  }

  function updateAdvancedDrivingType(e){
    let advancedDrivingType = e.target.value;
    setAdvancedDrivingType(advancedDrivingType)

    if (advancedDrivingType==='City') {
      setMilage(vehicle['Fuel Consumption City (L per 100 km)'])
      updateCarbonFootprint(distance,vehicle['Fuel Consumption City (L per 100 km)'],passengers)
    }
    else if (advancedDrivingType ==='Highway') {
      setMilage(vehicle['Fuel Consumption Hwy (L per 100 km)'])
      updateCarbonFootprint(distance,vehicle['Fuel Consumption Hwy (L per 100 km)'],passengers)
    }
    else if (advancedDrivingType === 'Mixed') {
      setMilage(vehicle['Comb (L per 100 km)'])
      updateCarbonFootprint(distance,vehicle['Comb (L per 100 km)'],passengers)
    }

  }
  function updateCarbonFootprint(distance,milage,passengers){
    let carbonFootprint = (distance/100)*milage*2.3/passengers;
    setCarbonFootprint(carbonFootprint)
  }

  function addDrive(){

    if (carbonFootprint>0) {
      if (isAdvanced) {
        let data = {distance:distance,
                    passengers:passengers,
                    carbonFootprint:carbonFootprint,
                    drivingType:advancedDrivingType,
                    vehicle:vehicle,
                    type:'transport',
                    subType:'car'}
        props.addCarbonCostItem(data)
      }
      else {
        let data = {distance:distance,
                    passengers:passengers,
                    carbonFootprint:carbonFootprint,
                    drivingType:basicDrivingType,
                    vehicle:basicCarType,
                    type:'transport',
                    subType:'car'}
        props.addCarbonCostItem(data)
      }
      resetState()
    }






  }
  function resetState(){
    setType(false)
    // setEmmisions('200')
    setMilage('7')
    setDistance('')
    setCarbonFootprint(0)
    setBasicCarType('StandardCar')
    setBasicDrivingType('City')

    setAdvancedDrivingType('City')
    setSearchBy('Make')
    setYear('2020')
    setVehicleSearch('')
    setVehicle('')
    setVehicleOptions([smallCarData])
  }

  const years=['2022','2021','2020','2019','2018','2017','2016','2015','2014'
              ,'2013','2012', '2011','2010','2009','2008','2007','2006','2005'
              ,'2004','2003','2002','2001','2000','1999','1998','1997','1996','1995'];

return(
  <>
  <Row className ='vertical-padding-md'>
    <Col xs={1} sm={1} md={1} lg={2} xl={3}>
      &nbsp;
    </Col>
    <Col>
      <Container className ='form-container white'>
        <Row className ='form-line'>
          <p className ='form-title'>Car Trip</p>
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
        {!isAdvanced?
          <>

          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type of Driving:</FormLabel>
              <RadioGroup row aria-label="drivingType" name="searchBy" value={basicDrivingType} onChange={updateBasicDrivingType}>
                <FormControlLabel value="City" control={<Radio />} label="City" />
                <FormControlLabel value="Highway" control={<Radio />} label="Highway" />
                <FormControlLabel value="Mixed" control={<Radio />} label="Mixed" />
              </RadioGroup>
            </FormControl>
          </Row>

          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type of Car:</FormLabel>
              <RadioGroup row aria-label="carType" name="carType" value={basicCarType} onChange={updateBasicCarType}>
                <FormControlLabel value="GasGuzzler" control={<Radio />} label="Gas Guzzler" />
                <FormControlLabel value="StandardCar" control={<Radio />} label="Standard Car" />
                <FormControlLabel value="EfficientCar" control={<Radio />} label="Efficient Car" />
              </RadioGroup>
            </FormControl>
          </Row>

          <Row className ='form-line nice-input-wrapper'>
            <input type="number"
                   name="passengers"
                   min="1"
                   max="10000"
                   value = {passengers}
                   placeholder = "Number of Passengers"
                   onChange = {updatePassengers}
                   style ={{width:'25vw'}}/>
            <label htmlFor="passengers">Number of Passengers</label>
          </Row>

          <Row className ='form-line nice-input-wrapper'>
            <input type="number"
                   name="distance"
                   min="1"
                   max="100"
                   value = {distance}
                   placeholder = "Distance (Km)"
                   onChange = {updateDistance}
                   style = {{maxWidth:'25vw'}}/>
            <label htmlFor="distance">Distance (Km)</label>
          </Row>
          </>
          :
          <>
            <Row className ='form-line'>
              <FormControl component="fieldset">
                <FormLabel component="legend">Type of Driving:</FormLabel>
                <RadioGroup row aria-label="drivingType" name="advancedDrivingType" value={advancedDrivingType} onChange={updateAdvancedDrivingType}>
                  <FormControlLabel value="City" control={<Radio />} label="City" />
                  <FormControlLabel value="Highway" control={<Radio />} label="Highway" />
                  <FormControlLabel value="Mixed" control={<Radio />} label="Mixed" />
                </RadioGroup>
              </FormControl>
            </Row>
            <Row className ='form-line'>
              <FormControl component="fieldset">
                <FormLabel component="legend">Search By:</FormLabel>
                <RadioGroup row aria-label="searchBy" name="searchBy" value={searchBy} onChange={selectSearchBy}>
                  <FormControlLabel value="Make" control={<Radio />} label="Make" />
                  <FormControlLabel value="Model" control={<Radio />} label="Model" />
                </RadioGroup>
              </FormControl>
            </Row>

            <Row className ='form-line'>
              <FormLabel component="legend">Production Year:</FormLabel>
              <select value = {year} onChange = {selectYear} className="browser-default">
                {years.map((year, i)=>{return <CustomDropdown value = {year}
                                                              key={year+i}/>})}
              </select>
            </Row>

            <Row className ='form-line'>
              <SearchDrop options={vehicleOptions}
                          inputId ={'carOptions'}
                          inputName={'vehicle'}
                          inputLabel={'Vehicle'}
                          searchValue = {carSearchValue}
                          setSearchValue ={setCarSearchValue}
                          updateOptions = {updateVehicleOptions}
                          selectOption = {selectVehicleOption}
                          displayKeys = {['Year','Make','Model']}
                          valueKey ={'Make'}
                          keyFields ={['Year','Make','Model']}/>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     name="passengers"
                     min="1"
                     max="10000"
                     value = {passengers}
                     placeholder = "Number of Passengers"
                     onChange = {updatePassengers}
                     style ={{width:'25vw'}}/>
              <label htmlFor="passengers">Number of Passengers</label>
            </Row>

            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     name="distance"
                     min="1"
                     max="10000"
                     value = {distance}
                     placeholder = "Distance (Km)"
                     onChange = {updateDistance}
                     style ={{width:'25vw'}}/>
              <label htmlFor="distance">Distance (Km)</label>
            </Row>

          </>}
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

export default Car;
//
// <Col className ='centered-children'>
//   <FormControl component="fieldset">
//     <FormLabel component="legend">Driving Type:</FormLabel>
//     <RadioGroup  aria-label="driving" name="driving" value={drivingType} onChange={updateDrivingType}>
//       <FormControlLabel value="City" control={<Radio />} label="City" />
//       <FormControlLabel value="Highway" control={<Radio />} label="Highway" />
//       <FormControlLabel value="Mixed" control={<Radio />} label="Mixed" />
//     </RadioGroup>
//   </FormControl>
// </Col>



//
//
// <Row>
// <Col>
//   &nbsp;
// </Col>
//   <Col className ='centered-children' onClick ={()=>{updateType('basic')}}>
//     <p className = {(type ==='basic'? 'roaming-text roaming-yellow-text':'roaming-text')}>Basic</p>
//   </Col>
//   <Col className ='centered-children'>
//     <p>|</p>
//   </Col>
//   <Col className ='centered-children' onClick ={()=>{updateType('advanced')}}>
//     <p className = {(type ==='advanced'? 'roaming-text roaming-yellow-text':'roaming-text')}>Advanced</p>
//   </Col>
//   <Col>
//     &nbsp;
//   </Col>
// </Row>


//
//
// {isAdvanced?
//   <>
//
//
//   <Dropdown drop = "down">
//     <Dropdown.Toggle as={CustomToggle}>
//       <Row className = 'input-field centered-children' >
//       <input type = 'text' id= "vehicleSearch" value = {vehicleSearch} name = "vehicleSearch" onChange ={updateVehicleInput}/>
//       <label htmlFor="vehicleSearch">Vehicle</label>
//       </Row>
//     </Dropdown.Toggle>
//     <Dropdown.Menu>
//     <Dropdown.Item disabled>Select An Vehicle:</Dropdown.Item>
//     <Dropdown.Divider />
//     {vehicleOptions.map((car, i)=>{return <CarOptions car = {car}
//                                                       selectVehicle = {selectVehicle}
//                                                       key={car.Make+i}/>})}
//
//
//     </Dropdown.Menu>
//   </Dropdown>
//   </>:null}




    //
    //
    //
    //
    //
    // <Row className = 'vertical-padding-md'>
    //   {!isAdvanced?
    //     <>
    //       <Col style ={{marginLeft:'5vw'}}>
    //         <Row className ='nice-input-wrapper'>
    //           <input type="number"
    //                  name="distance"
    //                  min="1"
    //                  max="100"
    //                  value = {distance}
    //                  placeholder = "Distance (Km)"
    //                  onChange = {updateDistance}/>
    //           <label htmlFor="distance">Distance (Km)</label>
    //         </Row>
    //       </Col>
    //       <Col className ='horizontal-centered-children'>
    //         <FormControl component="fieldset">
    //           <FormLabel component="legend">Type of Car:</FormLabel>
    //           <RadioGroup col aria-label="carType" name="carType" value={basicCarType} onChange={updateBasicCarType}>
    //             <FormControlLabel value="GasGuzzler" control={<Radio />} label="Gas Guzzler" />
    //             <FormControlLabel value="StandardCar" control={<Radio />} label="Standard Car" />
    //             <FormControlLabel value="EfficientCar" control={<Radio />} label="Efficient Car" />
    //           </RadioGroup>
    //         </FormControl>
    //       </Col>
    //       <Col className ='horizontal-centered-children'>
    //         <FormControl component="fieldset">
    //           <FormLabel component="legend">Type of Driving:</FormLabel>
    //           <RadioGroup col aria-label="drivingType" name="searchBy" value={basicDrivingType} onChange={updateBasicDrivingType}>
    //             <FormControlLabel value="City" control={<Radio />} label="City" />
    //             <FormControlLabel value="Highway" control={<Radio />} label="Highway" />
    //             <FormControlLabel value="Mixed" control={<Radio />} label="Mixed" />
    //           </RadioGroup>
    //         </FormControl>
    //       </Col>
    //
    //     </>
    //   :
    //     <>
    //
    //     <Col className ='horizontal-centered-children'>
    //
    //     </Col>
    //     <Col >
    //       <Row className = 'horizontal-centered-children' style ={{width:'25vw'}}>
    //         <FormLabel component="legend">Production Year:</FormLabel>
    //         <select value = {year} onChange = {selectYear} className="browser-default">
    //           {years.map((year, i)=>{return <CustomDropdown value = {year}
    //                                                         key={year+i}/>})}
    //         </select>
    //       </Row>
    //     </Col>
    //
    //     <Col className ='horizontal-centered-children'>
    //
    //     </Col>
    //     </>}
    //
    //   <Col className ='horizontal-centered-children'>
    //     <FormCheck
    //       onChange={(e)=>{updateType(e)}}
    //       type="switch"
    //       id="custom-switch-"
    //       label="Advanced Search"
    //       checked={isAdvanced}/>
    //   </Col>
    // </Row>
    //
    //
    // {isAdvanced?
    //   <>
    //     <Row className ='vertical-padding-md'>
    //       <Col style ={{width:'25vw',marginLeft:'5vw'}} className ='centered-children'>
    //         <SearchDrop options={vehicleOptions}
    //                     inputId ={'carOptions'}
    //                     inputName={'vehicle'}
    //                     inputLabel={'Vehicle'}
    //                     updateOptions = {updateVehicleOptions}
    //                     selectOption = {selectVehicleOption}
    //                     displayKeys = {['Year','Make','Model']}
    //                     valueKey ={'Make'}
    //                     keyFields ={['Year','Make','Model']}/>
    //       </Col>
    //       <Col className ='centered-children'>
    //         <Row className ='nice-input-wrapper'style ={{width:'25vw'}}>
    //           <input type="number"
    //                  name="distance"
    //                  min="1"
    //                  max="100"
    //                  value = {distance}
    //                  placeholder = "Distance (Km)"
    //                  onChange = {updateDistance}/>
    //           <label htmlFor="distance">Distance (Km)</label>
    //         </Row>
    //       </Col>
    //
    //     </Row>
    //
    //
    //   </>
    // :null }
    //
