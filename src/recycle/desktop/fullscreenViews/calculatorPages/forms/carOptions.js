import  {  Component } from "react";
import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
class CarOptions extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      temp:''
    };
  };

  select = ()=>{
    this.props.selectVehicle(this.props.car)
  }
  startHighlight = ()=>{
    this.setState({highlight:true})
  }
  stopHighlight= ()=>{
    this.setState({highlight:false})
  }

  render() {

  return(
<>
<Dropdown.Item onClick = {this.select}>{ this.props.car.Year+' '+this.props.car.Make+' '+this.props.car.Model}</Dropdown.Item>


</>
)}};
export default CarOptions;
