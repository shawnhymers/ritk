import  {  Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import LargeModal from "../../../standardComponents/large-modal"
import {MdKeyboardBackspace,MdDeleteForever,MdAddCircle,MdAdd} from "react-icons/md";


class TrainList extends Component {
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
    {this.props.train.country}
  </Col>
    <Col xs sm md lg xl={3}>
      {this.props.train.distance}
    </Col>
    <Col xs sm md lg xl={2}>
      {this.props.train.engineType}
    </Col>
    <Col xs sm md lg xl={2}>
      {parseFloat(this.props.train.footprint).toFixed(2)}
    </Col>
    <Col xs sm md lg xl={1}>
      <MdDeleteForever size = '1.2em' onClick ={()=>this.props.deleteItem('trains',this.props.index)} />
    </Col>


  </Row>
  </>
)}};
export default TrainList;
