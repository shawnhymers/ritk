import  {  Component } from "react";
import { Row, Col} from 'react-bootstrap';
import {MdDeleteForever} from "react-icons/md";

import foodData from "../../data/allFoodData"

class FoodList extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      showDeleteFoodModal:false
    };
  };

  toggleDeleteFoodModal = ()=>{
    this.setState({showDeleteFoodModal:!this.state.showDeleteFoodModal})
  }
  deleteFood = ()=>{
    console.log('deleting food')
    this.props.deleteFood(this.props.food._id,this.props.tripId)
  }
  render() {

  return(
    <>
      <Row>
        <Col xs sm md lg xl={4}>
          {this.props.food.name+' ('+ foodData[foodData.findIndex(x=>x.food ===this.props.food.name)].servingDescr+')'}
        </Col>
        <Col xs sm md lg xl={3}>
          {this.props.food.amount }
        </Col>

        <Col xs sm md lg xl={4}>
          {parseFloat(this.props.food.footprint).toFixed(2)}
        </Col>
        <Col xs sm md lg xl={1}>
          <MdDeleteForever size = '1.2em' onClick ={()=>this.props.deleteItem('food',this.props.index)} />
        </Col>
      </Row>


    </>
)}};
export default FoodList;
