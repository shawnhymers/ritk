import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {useState} from "react";
import gridData from "../../../../data/gridData"
import SearchDrop from '../../../../standardComponents/searchDrop';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CarbonTotal from "../elements/carbonTotal"



const Train = props => {

  const [countrySearchValue, setCountrySearchValue] =useState('')

  const [countryOptions, setCountryOptions] = useState(gridData);
  const [selectedGridRegion,setGridRegion]  = useState('');

  const [distance, setDistance] =useState('');
  const [engineType, setEngineType] =useState('diesel');

  const [carbonFootprint,setCarbonFootprint] =useState(0)

  const [countryError,setCountryError]=useState(false)
  const [distanceError,setDistanceError]=useState(false)


  function updateGridRegions(e){
    console.log('udating grid regions')
    console.log(e.target.value);
    var options = gridData.filter(function (el)
    {
      return el.country.toUpperCase().includes(e.target.value.toUpperCase())
    })
    setCountryOptions(options);

  }
  function updateEngineType(e){
    console.log('updating Engine type')
    setEngineType(e.target.value);
    updateCarbonFootprint(e.target.value,distance,selectedGridRegion)
  }
  function updateDistance(e){
    console.log('updating distance')
    setDistance(e.target.value);
    updateCarbonFootprint(engineType,e.target.value,selectedGridRegion)
  }
  function selectGridRegion(region){
    console.log('setting grid region')
    console.log(region);
    setGridRegion(region)
    updateCarbonFootprint(engineType,distance,region)
  }
  function updateCarbonFootprint(engineType, distance, region){
    let footprint=0;
    if (engineType==='electric') {
      let footprint = parseFloat(distance)*0.0882*region.carbon;
      setCarbonFootprint(footprint)
    }
    else if (engineType==='diesel') {
      let footprint = parseFloat(distance)*0.0252*3.132;
      setCarbonFootprint(footprint)
    }
    else {
      setCarbonFootprint(footprint)
    }

  }
  function updateCountrySearchValue(value){
    setCountrySearchValue(value)
    if (value==='') {
      setGridRegion({})
    }
  }
  function addTrain(){

    if (carbonFootprint>0) {
      let data ={country:selectedGridRegion,
                 distance: distance,
                 engineType:engineType,
                 carbonFootprint:carbonFootprint,
                 type:'transport',
                 subType:'train'
             }
      props.addCarbonCostItem(data)
      resetState()
    }
    else {
      if (distance<=0) {
        setDistanceError(true)
      }
      else {
        setDistanceError(false)
      }
      if (selectedGridRegion.country===undefined) {
        setCountryError(true)
      }
      else{
        setCountryError(false)
      }
      console.log(selectedGridRegion)
    }
  }

  function resetState(){
    setCountryOptions(gridData)
    setGridRegion('')
    setDistance('')
    setEngineType('diesel')
    setCountrySearchValue('')
    setCarbonFootprint(0)
    setDistanceError(false)
    setCountryError(false)
  }
return(
  <>
    <Row className ='vertical-padding-md'>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
      <Col>
        <Container className ='form-container white'>
          <Row className ='form-line'>
            <p className ='form-title'>Train Trip</p>
          </Row>

          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">Engine Type:</FormLabel>
              <RadioGroup row aria-label="train" name="selectedEngineType" value={engineType} onChange={updateEngineType}>
                <FormControlLabel value="electric" control={<Radio />} label="Electric" />
                <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
              </RadioGroup>
            </FormControl>
          </Row>

          <Row className ='form-line'>
            <SearchDrop options={countryOptions}
                        inputId ={'gridRegion'}
                        inputName={'gridRegion'}
                        inputLabel={'Select The Country'}
                        searchValue = {countrySearchValue}
                        setSearchValue ={updateCountrySearchValue}
                        updateOptions = {updateGridRegions}
                        selectOption = {selectGridRegion}
                        displayKeys = {['country']}
                        valueKey ={'carbon'}
                        keyFields ={['country']}
                        invalidInput={countryError}/>
          </Row>

          <Row className ='form-line nice-input-wrapper'>
            <input type = 'number'
                   min="1"
                   max="10000"
                   id= "distance"
                   value = {distance}
                   name = "distance"
                   placeholder = "Distance (Km)"
                   onChange ={updateDistance}
                   style ={{width:'25vw'}}
                   className ={distanceError? "error-input":""}/>
            <label htmlFor="distance"
                   className ={distanceError? "error-label":""}>
              Distance (km)
            </label>
          </Row>

          <CarbonTotal footprint={parseFloat(carbonFootprint).toFixed(1)} label ={'Carbon Footprint (KG)'}/>

          <Row className ='form-submit-line'>
            <Button onClick = {addTrain}>Add</Button>
          </Row>

        </Container>
      </Col>
    <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
    </Row>










  </>
)}

export default Train;


//
// <select value = {selectedGridRegion} onChange = {updateGridRegion} className="browser-default">
//   {gridData.map((grid, i)=>{return <Dropdown value = {grid.country}
//                                                 key={grid.country+i}/>})}
// </select>


//
//
// <Row>
//   <Col className = 'horizontal-centered-children'>
//     <SearchDrop options={countryOptions}
//                 inputId ={'gridRegion'}
//                 inputName={'gridRegion'}
//                 inputLabel={'Select The Country'}
//                 updateOptions = {updateGridRegions}
//                 selectOption = {selectGridRegion}
//                 displayKeys = {['country']}
//                 valueKey ={'carbon'}
//                 keyFields ={['country']}/>
//   </Col>
// </Row>
// <Row>
//   <Col>
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Engine Type:</FormLabel>
//       <RadioGroup row aria-label="train" name="selectedEngineType" value={engineType} onChange={updateEngineType}>
//         <FormControlLabel value="electric" control={<Radio />} label="Electric" />
//         <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
//       </RadioGroup>
//     </FormControl>
//   </Col>
//   <Col className = 'input-field'>
//     <input type = 'number' min="1" max="10000" id= "trainDistance" value = {distance} name = "distance" onChange ={updateDistance}/>
//     <label htmlFor="trainDistance">Distance (km)</label>
//   </Col>
// </Row>

// <Row>
//   <Col xs sm md lg xl={2}>
//   &nbsp;
//   </Col>
//   <Col xs sm md lg xl={4}>
//     <Row className =' vertical-margin-sm nice-input-wrapper'>
//       <input type = 'number' min="1" max="10000" id= "trainDistance" value = {distance} name = "distance" onChange ={updateDistance} style ={{width:'25vw'}}/>
//       <label htmlFor="trainDistance">Distance (km)</label>
//     </Row>
//     <Row className ='centered-children vertical-margin-sm'>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Engine Type:</FormLabel>
//         <RadioGroup row aria-label="train" name="selectedEngineType" value={engineType} onChange={updateEngineType}>
//           <FormControlLabel value="electric" control={<Radio />} label="Electric" />
//           <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
//         </RadioGroup>
//       </FormControl>
//     </Row>
//     <Row className =' vertical-margin-sm'>
//       <SearchDrop options={countryOptions}
//                   inputId ={'gridRegion'}
//                   inputName={'gridRegion'}
//                   inputLabel={'Select The Country'}
//                   updateOptions = {updateGridRegions}
//                   selectOption = {selectGridRegion}
//                   displayKeys = {['country']}
//                   valueKey ={'carbon'}
//                   keyFields ={['country']}/>
//     </Row>
//
//   </Col>
//   <Col xs sm md lg xl={4}>
//     <CarbonTotal footprint={parseFloat(carbonFootprint).toFixed(1)}/>
//   </Col>
//   <Col xs sm md lg xl={2}>
//   &nbsp;
//   </Col>
// </Row>
