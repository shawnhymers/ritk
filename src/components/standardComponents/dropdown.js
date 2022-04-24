import  {  Component } from "react";

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
  <option value={this.props.value}  >{this.props.displayValue}</option>
</>
)}};
export default Dropdown;
