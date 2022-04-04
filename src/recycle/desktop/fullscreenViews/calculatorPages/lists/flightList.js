import  {  Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import {MdCreate,MdDeleteForever} from "react-icons/md";
import LargeModal from "../../../standardComponents/large-modal"






class FlightList extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      showDeleteFlightModal:false,
    };
  };

  toggleDeleteFlightModal = ()=>{
    this.setState({showDeleteFlightModal:!this.state.showDeleteFlightModal})
  }

  deleteFlight = (flightId)=>{
    this.props.deleteFlight(flightId)
    this.toggleDeleteFlightModal()
  }

  render() {
    console.log('flight list props'+this.props.flight.distance)
    console.log(parseFloat(this.props.flight.distance).toFixed(2))
  return(
    <>
      <Row>
        <Col xs sm md lg xl={4} className = 'horizontal-centered-children '>
          {this.props.flight.fromAirport.Code}

        </Col>
        <Col xs sm md lg xl={4} className = 'horizontal-centered-children '>
          {this.props.flight.toAirport.Code}
        </Col>

        <Col xs sm md lg xl={3} className = 'horizontal-centered-children '>

          {parseFloat(this.props.flight.footprint).toFixed(2)}
        </Col>
        <Col>
          <Button onClick ={()=>this.props.deleteItem('flights',this.props.index)}>Delete</Button>
        </Col>

      </Row>


    </>
)}};

const DeleteFlightForm = ({flightId,deleteFlight})=>{

  return(
    <>
      <Row>
        <p>Are you sure you want to delete this flight?</p>
      </Row>
      <Row>
        <Button onClick ={()=>deleteFlight(flightId)}>Delete</Button>
      </Row>
    </>
  )
}
export default FlightList;
