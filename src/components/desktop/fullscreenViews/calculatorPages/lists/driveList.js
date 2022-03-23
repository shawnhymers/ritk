import  {  Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import LargeModal from "../../../standardComponents/large-modal"
import {MdKeyboardBackspace,MdDeleteForever,MdAddCircle,MdAdd} from "react-icons/md";


class DriveList extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      temp:''
    };
  };


  render() {

  return(
  <>
  <Row>
  <Col xs sm md lg xl={3}>
    {this.props.drive.vehicle}
  </Col>
  <Col xs sm md lg xl={3}>
    {this.props.drive.distance}
  </Col>
  <Col xs sm md lg xl={3}>
    {this.props.drive.drivingType}
  </Col>

    <Col xs sm md lg xl={2}>
      {parseFloat(this.props.drive.footprint).toFixed(2)}
    </Col>
    <Col xs sm md lg xl={1}>
      <MdDeleteForever size = '1.2em' onClick ={()=>this.props.deleteItem('drives',this.props.index)} />
    </Col>
  </Row>
  </>
)}};
export default DriveList;
