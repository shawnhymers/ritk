import  {  Component } from "react";
import { Container, Row, Col, Button,Form} from 'react-bootstrap';
// import {MdKeyboardArrowRight,MdKeyboardArrowDown} from "react-icons/md";


class Dropdown extends Component {
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
  <option value={this.props.value}  >{this.props.value}</option>
</>
)}};
export default Dropdown;
