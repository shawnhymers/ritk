import  {  Component } from "react";
import { Container, Row, Col, Button,Form,Dropdown} from 'react-bootstrap';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/md";
import CustomDropdown from '../../../standardComponents/dropdown';
import CustomToggle from "../../../standardComponents/customToggle";
import vehicleData from "../../../../data/vehicleData"
// import carData from "../../../carData"
import smallCarData from "../../../../data/smallCarData"
import VehicleSubsets from "./inputs/vehicleSubsets"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CarOptions from "./carOptions"

class NewDrivingForm extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      milage:0,
      distance:0,
      showMilageEstimator:false,

      selectedVehicle:{
        type: "--Select One--",
        milage: "0",
        subsets:[],
        ages:[],
        terrains:[],
        vehicleSubset:'',
        vehicleAge:'',
        vehicleTerrain:''},

      years:['2020','2019','2018','2017','2016','2015','2014','2013','2012',
             '2011','2010','2009','2008','2007','2006','2005','2004','2003',
             '2002','2001','2000','1999','1998','1997','1996','1995'],
      selectedYear:'2020',
      searchBy:'Make',
      drivingType:'City',
      availableMakes:[],
      availableModels:[],
      vehicleOptions:[],
      footprint:0,
      vehicleSearch:''
    };
  };

  updateInput = (e)=>{
    this.setState({[e.target.name]:e.target.value},()=>this.calculateFootprint())
  }

  toggleMilageEstimator = ()=>{
    this.setState({showMilageEstimator:!this.state.showMilageEstimator})
    console.log('toggling the milage estimator')
  }


  // selectVehicle = (e)=>{
  //   console.log('selecting vehicle ')
  //   console.log(e.target.value)
  //   let selectedVehicle = vehicleData[vehicleData.findIndex(x=>x.type ===e.target.value)]
  //   console.log(selectedVehicle)
  //   this.setState({selectedVehicle:selectedVehicle})
  // }
  selectSubset = (e)=>{
    console.log('selecting subset...'+e.target.value)
    this.setState({vehicleSubset:e.target.value})
  }
  selectAge= (e)=>{
    console.log('selecting age...'+e.target.value)
    this.setState({vehicleAge:e.target.value})
  }

  selectTerrain= (e)=>{
    console.log('selecting terrain...'+e.target.value)
    this.setState({vehicleTerrain:e.target.value})
  }
  selectYear = (e)=>{
    console.log('selecting years')

    let input = this.state.vehicleSearch;
    let selectedYear = e.target.value;
    let searchBy = this.state.searchBy;

    var yearOptions = smallCarData.filter(function (el)
    {
        return el.Year===parseInt(selectedYear)
    });
    console.log('year options are')
    console.log(yearOptions)

    var options = yearOptions.filter(function (el)
    {
      if (searchBy==='Make') {
        return el.Make.toUpperCase().includes(input.toUpperCase())
      }
      else if (searchBy==='Model') {
        return el.Model.toUpperCase().includes(input.toUpperCase())
      }
    });

    this.setState({selectedYear:e.target.value,vehicleOptions:options.slice(0,10)})

  }
  selectSearchBy = (e)=>{
    this.setState({searchBy:e.target.value})
  }
  selectDrivingType = (e)=>{
    this.setState({drivingType:e.target.value})
  }

  updateVehicleInput = (e)=>{
    let searchBy = this.state.searchBy;
    let selectedYear = this.state.selectedYear;
    console.log('selected year is...')
    console.log(selectedYear)

      if (e.target.value !=='') {

        var yearOptions = smallCarData.filter(function (el)
        {
            return el.Year===parseInt(selectedYear)
        });
        console.log('year options are')
        console.log(yearOptions)

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
        var options = []
      }




    this.setState({vehicleSearch:e.target.value,vehicleOptions:options.slice(0,10)},()=>{console.log(this.state)})
  }

  selectVehicle = (vehicle)=>{
    // let selectedCar = {vehicle.Year +" "+ vehicle.Make +" "+vehicle.Model}
    let selectedCar = vehicle.Year +" "+vehicle.Make +" "+vehicle.Model
    this.setState({selectedVehicle:vehicle,
                   vehicleSearch:selectedCar,
                   milage:vehicle['Fuel Consumption City (L per 100 km)'],
                   vehicleOptions:[]},()=>this.calculateFootprint())
  }
  calculateFootprint =()=>{
    let footprint = (this.state.distance/100)*this.state.milage*2.3
    console.log('calculating footprint...'+footprint)
    this.setState({footprint:footprint})
  }


  addDrive = ()=>{
    let vehicle = this.state.selectedVehicle;
    let newVehicle = vehicle.Year +" "+vehicle.Make +" "+vehicle.Model
    let data = {vehicle:newVehicle,
                milage:this.state.milage,
                drivingType:this.state.drivingType,
                footprint:this.state.footprint,
                distance: this.state.distance
      }
    this.props.addDrive(data)
  }
  render() {

  return(
    <>
    <Form autocomplete='off'>
    <Row>
    <Col>
      <FormControl component="fieldset">
        <FormLabel component="legend">Search By:</FormLabel>
        <RadioGroup row aria-label="searchBy" name="searchBy" value={this.state.searchBy} onChange={this.selectSearchBy}>
          <FormControlLabel value="Make" control={<Radio />} label="Make" />
          <FormControlLabel value="Model" control={<Radio />} label="Model" />
        </RadioGroup>
      </FormControl>
    </Col>
      <Col>
        <Row>
          <FormLabel component="legend">Production Year:</FormLabel>
          <select value = {this.state.selectedYear} onChange = {this.selectYear} className="browser-default">
            {this.state.years.map((year, i)=>{return <CustomDropdown value = {year}
                                                               key={year+i}/>})}
          </select>
        </Row>
      </Col>

    </Row>






      <Dropdown drop = "down">
        <Dropdown.Toggle as={CustomToggle}>
          <Row className = 'input-field centered-children' >
          <input type = 'text' id= "vehicleSearch" value = {this.state.vehicleSearch} name = "vehicleSearch" onChange ={this.updateVehicleInput}/>
          <label htmlFor="vehicleSearch">Vehicle</label>
          </Row>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item disabled>Select An Vehicle:</Dropdown.Item>
        <Dropdown.Divider />
        {this.state.vehicleOptions.map((car, i)=>{return <CarOptions car = {car}
                                                                     selectVehicle = {this.selectVehicle}
                                                                     key={car.Make+i}/>})}


        </Dropdown.Menu>
      </Dropdown>





    <Row>
      <Col>
        <FormControl component="fieldset">
          <FormLabel component="legend">Driving Type:</FormLabel>
          <RadioGroup  aria-label="driving" name="driving" value={this.state.drivingType} onChange={this.selectDrivingType}>
            <FormControlLabel value="City" control={<Radio />} label="City" />
            <FormControlLabel value="Highway" control={<Radio />} label="Highway" />
            <FormControlLabel value="Mixed" control={<Radio />} label="Mixed" />
          </RadioGroup>
        </FormControl>
      </Col>
      <Col>
        <Row>
          <label htmlFor="milage">Milage (L/100 Km)</label>
          <input type="number"  name="milage" min="1" max="100" value = {this.state.milage} onChange = {this.updateInput}/>
        </Row>
        <Row>
          <label htmlFor="distance">Distance (Km)</label>
          <input type="number" name="distance" min="1" max="100" value = {this.state.distance} onChange = {this.updateInput}/>
        </Row>

      </Col>
    </Row>





    <Row>

    </Row>
    <Row>
      <Col>
      </Col>
      <Col>
      </Col>
    </Row>

      <Row>
      {'Carbon Footprint : '+parseFloat(this.state.footprint).toFixed(2)+' (Kg Co2)'}
      </Row>

      <Row>
        <Button onClick = {this.addDrive}>Save</Button>
      </Row>
      </Form>
    </>
)}};
export default NewDrivingForm;
