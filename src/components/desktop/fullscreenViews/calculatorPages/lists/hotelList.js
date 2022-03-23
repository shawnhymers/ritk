import  {  Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import LargeModal from "../../../standardComponents/large-modal"
import {MdKeyboardBackspace,MdDeleteForever,MdAddCircle,MdAdd} from "react-icons/md";

class HotelList extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      showDeleteAccommodationModal:false,
    };
  };
  deleteAccommodation =()=>{
    this.props.deleteAccommodation(this.props.hotel._id, this.props.tripId)
    this.toggleDeleteAccommodationModal()
  }
  toggleDeleteAccommodationModal = ()=>{
    this.setState({showDeleteAccommodationModal:!this.state.showDeleteAccommodationModal})
  }

  render() {

  return(
    <>
      <Row>
      <Col xs sm md lg xl={4}>
        {this.props.hotel.name}
      </Col>
        <Col xs sm md lg xl={4}>
          {this.props.hotel.numberOfNights}
        </Col>
        <Col xs sm md lg xl={3}>

          {parseFloat(this.props.hotel.accommodationsCost).toFixed(2)}
        </Col>
        <Col xs sm md lg xl={1}>
          <MdDeleteForever size = '1.2em' onClick ={()=>this.props.deleteItem('hotels',this.props.index)} />
        </Col>
      </Row>

      {this.state.showDeleteAccommodationModal?
        <LargeModal isOpen={true}
                    closeModal ={this.toggleDeleteAccommodationModal}
                    modalTitle ={'Are you sure you want to delete this accommodation'}
                    modalBody = {<>
                                  <Row>
                                    <Button onClick = {this.deleteAccommodation}>Yes Delete</Button>
                                  </Row>
                                </>}

                    />:null}
    </>
)}};
export default HotelList;
