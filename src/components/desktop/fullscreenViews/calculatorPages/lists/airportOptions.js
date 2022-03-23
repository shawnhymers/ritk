import  {  Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';

class AirportOptions extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      highlight:false
    };
  };
  select = ()=>{
    this.props.selectAirport(this.props.option,this.props.toOrFrom)
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
      <Container className ={'w3-card w3-round '+(this.state.highlight? 'raised-borders' : '')}>
        <Row onClick = {this.select}
             onMouseEnter = {this.startHighlight}
             onMouseLeave = {this.stopHighlight}
             >
          {this.props.option.Airport}
        </Row>
      </Container>
    </>
)}};
export default AirportOptions;
