import  {  Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import gridData from "../../../gridData"
import Dropdown from '../../../standardComponents/dropdown';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class NewTrainForm extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      selectedGridRegion:{
        country:'Austria',
        carbon:0.18,
        nox:0.32,
        nmvoc:0.02,
        pm:0.05,
        Source: 'IEA 2015, Eurostat 2015, ifeu 2016'
      },
      selectedEngineType:'Electric',
      distance:0,
      footprint:0
    };
  };

  selectGridRegion = (e)=>{
    let gridRegion = gridData[gridData.findIndex(x=>x.country ===e.target.value)]
    console.log(gridRegion)
    this.setState({selectedGridRegion:gridRegion},()=>this.updateFootprint())
  }

  updateInput =(e)=>{this.setState({[e.target.name]:e.target.value},()=>this.updateFootprint())}
  updateFootprint = ()=>{

    if (this.state.selectedEngineType ==='Electric') {
      console.log(this.state.selectedGridRegion)
      // distance x 88.2 watt hours per passenger KM * EF of the regions grid
      let footprint = parseFloat(this.state.distance)*0.0882*this.state.selectedGridRegion.carbon;
      this.setState({footprint:footprint})
    }
    else if (this.state.selectedEngineType==='Diesel') {
      // distance* 0.0252 kg of diesel per passenger KM * EF well to Wheel of diesel
      let footprint = parseFloat(this.state.distance)*0.0252*3.132;
      this.setState({footprint:footprint})
    }

  }

  addTrain = ()=>{
    let data = {
      country:this.state.selectedGridRegion.country,
      engineType:this.state.selectedEngineType,
      distance:this.state.distance,
      footprint:this.state.footprint
    }

    this.props.addTrain(data)
  }
  render() {

  return(
  <>
    <Row>
      <p>
        Select the Country:
      </p>
    </Row>
    <Row>
      <Col className = 'horizontal-centered-children'>
        <select value = {this.selectedGridRegion} onChange = {this.selectGridRegion} className="browser-default">
          {gridData.map((grid, i)=>{return <Dropdown value = {grid.country}
                                                        key={grid.country+i}/>})}
        </select>
      </Col>
    </Row>

    <Row>
      <Col>
        <FormControl component="fieldset">
          <FormLabel component="legend">Engine Type:</FormLabel>
          <RadioGroup row aria-label="train" name="selectedEngineType" value={this.state.selectedEngineType} onChange={this.updateInput}>
            <FormControlLabel value="Electric" control={<Radio />} label="Electric" />
            <FormControlLabel value="Diesel" control={<Radio />} label="Diesel" />
          </RadioGroup>
        </FormControl>
      </Col>
      <Col className = 'input-field'>
        <input type = 'number' min="1" max="10000" id= "trainDistance" value = {this.state.distance} name = "distance" onChange ={this.updateInput}/>
        <label htmlFor="trainDistance">Distance (km)</label>
      </Col>
    </Row>

    <Row>
      <Col>
        Carbon Footprint:
      </Col>
      <Col>
        {parseFloat(this.state.footprint).toFixed(2)+ ' Kg Co2'}
      </Col>
    </Row>
    <Row className = 'horizontal-centered-children'>
      <Button onClick = {this.addTrain}>Save</Button>
    </Row>
  </>
)}};
export default NewTrainForm;
