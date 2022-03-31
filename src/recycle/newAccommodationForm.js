import  {  Component } from "react";
import { Container, Row, Col, Button,Form} from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {MdKeyboardBackspace,MdDeleteForever,MdAddCircle,MdAdd,MdKeyboardArrowRight,MdKeyboardArrowDown} from "react-icons/md";

class NewAccommodationForm extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      standardHotel:'smallAvg',
      showAdvanced:false,
      name:'',
      totalSpace:0,
      numberOfRooms:180,avgOccupancy:95,
                     electricConsumption:2540802,electricEF:0.2988,
                      gasConsumption:4207102,gasEF:0.1822,
                    oilConsumption:657,oilEF:2.6765,
      accommodationsCost:0,
      numberOfNights:0,
    };
  };

  updateHotelParameter = (e)=>{
    console.log('updating parameters')
    console.log(e.target.name)
    console.log(e.target.value)

    this.setState({[e.target.name]:e.target.value},()=>this.calculateAccommodationCost())
  }
  calculateAccommodationCost = ()=>{
    console.log('calculating')
    console.log(this.state.electricConsumption)
    console.log(this.state.gasConsumption)

    let totalRooms = this.state.numberOfRooms*365*(this.state.avgOccupancy/100)
    let cost = ((this.state.electricConsumption*this.state.electricEF +
                this.state.gasConsumption*this.state.gasEF+
                this.state.oilConsumption*this.state.oilEF)/totalRooms)*this.state.numberOfNights
    console.log(cost)

    this.setState({accommodationsCost:cost})


  }
  selectStandardHotel=(e)=>{
    console.log('selecting a standard hotel')
    this.setState({standardHotel:e.target.value})
    console.log(e.target.value)
    if (e.target.value ==='blank') {
      this.setState({numberOfRooms:0,avgOccupancy:0,
                     electricConsumption:0,electricEF:0,
                      gasConsumption:0,gasEF:0,
                    oilConsumption:0,oilEF:0},()=>this.calculateAccommodationCost())
    }
    else if (e.target.value==='smallAvg') {
      console.log('setting to small avg stats')
      this.setState({numberOfRooms:180,avgOccupancy:95,
                     electricConsumption:2540802,electricEF:0.2988,
                      gasConsumption:4207102,gasEF:0.1822,
                    oilConsumption:657,oilEF:2.6765},()=>this.calculateAccommodationCost())
    }
  }
  addHotel = ()=>{
    console.log('saving accommodation')
    let data = {name:this.state.name,
                numberOfRooms:this.state.numberOfRooms,
                avgOccupancy:this.state.avgOccupancy,
                electricConsumption:this.state.electricConsumption,
                gasConsumption:this.state.gasConsumption,
                oilConsumption:this.state.oilConsumption,
                electricEF:this.state.electricEF,
                gasEF:this.state.gasEF,
                oilEF:this.state.oilEF,
                accommodationsCost:this.state.accommodationsCost,
                numberOfNights:this.state.numberOfNights,
                footprint:this.state.accommodationsCost}
    console.log('data were gonna send...'+data)
    this.props.addHotel(data)
    this.props.toggleModal()
  }

  toggleAdvanced = ()=>{
    this.setState({showAdvanced:!this.state.showAdvanced})
  }
  render() {

  return(
<>
<Row>
<Col>
  <label for="names">Name:</label>
  <input type="text" id="name" name="name" min="1" max="100" value = {this.state.name} onChange = {this.updateHotelParameter}/>
</Col>
  <Col>
    <label for="numberOfNights">Number of Nights:</label>
    <input type="number" id="numberOfNights" name="numberOfNights" min="1" max="100" value = {this.state.numberOfNights} onChange = {this.updateHotelParameter}/>
  </Col>
</Row>
<Row className = 'horizontal-centered-children'>

  <FormControl component="fieldset">
    <FormLabel component="legend">Select a Standard Accommodation Type For a Rough Estimate:</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={this.state.standardHotel} onChange={this.selectStandardHotel} row>
      <FormControlLabel value="smallAvg" control={<Radio />} label="Small Hotel" />
      <FormControlLabel value="medAvg" control={<Radio />} label="Medium Hotel" />
      <FormControlLabel value="largeAvg" control={<Radio />} label="Large Hotel" />
    </RadioGroup>
  </FormControl>
  </Row>

  <Row>
    <Col>
      Carbon Footprint:
    </Col>
    <Col>
      {parseFloat(this.state.accommodationsCost).toFixed(2)+' Kg Co2'}
    </Col>
  </Row>

  {this.state.showAdvanced?
    <>
    <Row onClick = {this.toggleAdvanced}>
    <p>Advanced</p>
      <MdKeyboardArrowDown size = '1.2em'/>
    </Row>
    <Row>

        <Col>
          <label for="numberOfRooms">Number of Rooms:</label>
          <input type="number" id="numberOfRooms" name="numberOfRooms" min="1" max="100" value = {this.state.numberOfRooms} onChange = {this.updateHotelParameter}/>
        </Col>
        <Col>
          <label for="avgOccupancy">Average Occupancy (%):</label>
          <input type="number" id="avgOccupancy" name="avgOccupancy" min="1" max="100" value = {this.state.avgOccupancy} onChange = {this.updateHotelParameter}/>
        </Col>
    </Row>
    <Row>
      <Col>
        <label for="electricConsumption">Electricity Consumption (kWh/Year):</label>
        <input type="number" id="electricConsumption" name="electricConsumption" min="1" max="100" value = {this.state.electricConsumption} onChange = {this.updateHotelParameter}/>
      </Col>
      <Col>
        <label for="electricEF">Electricity EF:</label>
        <input type="number" id="electricEF" name="electricEF" min="1" max="100" value = {this.state.electricEF} onChange = {this.updateHotelParameter}/>
      </Col>
      </Row>
    <Row>
      <Col>
        <label for="gasConsumption">Gas Consumption (kWh/Year):</label>
        <input type="number" id="gasConsumption" name="gasConsumption" min="1" max="100" value = {this.state.gasConsumption} onChange = {this.updateHotelParameter}/>
      </Col>
      <Col>
        <label for="gasEF">Gas EF):</label>
        <input type="number" id="gasEF" name="gasEF" min="1" max="100" value = {this.state.gasEF} onChange = {this.updateHotelParameter}/>
      </Col>
    </Row>
    <Row>
      <Col>
        <label for="oilConsumption">Oil Consumption (L/Year):</label>
        <input type="number" id="oilConsumption" name="oilConsumption" min="1" max="100" value = {this.state.oilConsumption}onChange = {this.updateHotelParameter}/>
      </Col>
      <Col>
        <label for="oilEF">Oil EF:</label>
        <input type="number" id="oilEF" name="oilEF" min="1" max="100" value = {this.state.oilEF} onChange = {this.updateHotelParameter}/>
      </Col>
    </Row>
</>
  :

  <Row onClick = {this.toggleAdvanced}>
  <p>Advanced</p>
    <MdKeyboardArrowRight size = '1.2em'/>
  </Row>}




<Row className = 'horizontal-centered-children'>
  <Button onClick = {this.addHotel}>Save Accommodation</Button>
</Row>
</>
)}};
export default NewAccommodationForm;
