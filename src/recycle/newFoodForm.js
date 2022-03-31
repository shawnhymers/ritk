import  {  Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import Dropdown from '../../../../standardComponents/dropdown';
import foodData from "../../../../data/foodData"
import dietData from "../../../../data/dietData"
import {MdKeyboardBackspace,MdDeleteForever,MdAddCircle,MdAdd} from "react-icons/md";

class NewFoodForm extends Component {
  // Setting up initial state
  constructor(props) {
    super(props);
    this.state = {
      selectedFood:{
        food: "Apples",
        ghg_ratio: "0.43",
        servingDescr:'One Apple',
        serving: "0.136078"
      },
      selectedDiet:{
        food:"Balanced Diet",
        ghg_ratio:'8.25',
        servingDescr:'One Average Day',
        serving:'1'
      },
      foodData:[],
      foodQuantity:0,
      dietQuantity:0,

      foodCost:0,
      dietCost:0
    };
  };
  selectFood = (e)=>{
    console.log('selecting a food')
    let selectedFood = foodData[foodData.findIndex(x=>x.food ===e.target.value)]
    console.log(selectedFood)
    this.setState({selectedFood:selectedFood},()=>this.updateFoodCost())

  }

  selectDiet = (e)=>{
    console.log('selecting a diet')
    let selectedDiet = dietData[dietData.findIndex(x=>x.food === e.target.value)]
    console.log(selectedDiet)
    this.setState({selectedDiet:selectedDiet},()=>this.updateFoodCost())

  }

  updateFoodQuantity = (e)=>{
    this.setState({foodQuantity:e.target.value},()=>this.updateFoodCost())

  }
  updateDietQuantity = (e)=>{
    this.setState({dietQuantity:e.target.value},()=>this.updateDietCost())

  }
  updateFoodCost = ()=>{
    let foodCost = this.state.foodQuantity*this.state.selectedFood.ghg_ratio*this.state.selectedFood.serving
    this.setState({foodCost:foodCost})
  }
  updateDietCost = ()=>{
    let dietCost = this.state.dietQuantity*this.state.selectedDiet.ghg_ratio*this.state.selectedDiet.serving
    this.setState({dietCost:dietCost})
  }


  addDiet = ()=>{
    let data = {name:this.state.selectedDiet.food,
                amount:this.state.dietQuantity,
                footprint:this.state.dietCost}
    this.props.addFood(data)
  }
  addFood = ()=>{
    let data = {name:this.state.selectedFood.food,
                amount:this.state.foodQuantity,
                footprint:this.state.foodCost}
    this.props.addFood(data)
  }

  render() {

  return(
<>

  <Row className ='centered-children'>
    <p>Average Diets:</p>
  </Row>
  <Row>
    <Col className ='centered-children'>
    <select value = {this.state.selectedDiet.food} onChange = {this.selectDiet} className="browser-default">
      {dietData.map((diet, i)=>{return <Dropdown value = {diet.food}
                                                 key={diet.food+i}/>})}
    </select>
    </Col>
    <Col className ='centered-children'>
      <label htmlFor="quantityF">{'Number of Days'}</label>
      <input type="number" id="quantity" name="quantity" min="1" max="100" value = {this.state.dietQuantity} onChange = {this.updateDietQuantity}/>

    </Col>
  </Row>
  <Row>
    {'Carbon FootPrint: '+parseFloat(this.state.dietCost).toFixed(2)+' Kg'}
  </Row>
  <Row className = 'centered-children small-bottom-border ' style = {{paddingBottom:'5vh'}}>
    <Button onClick = {this.addDiet}>Add</Button>
  </Row>

  <Row className ='centered-children'>
    <p>Individual Foods:</p>
  </Row>
  <Row>
    <Col className ='centered-children'>
    <select value = {this.state.selectedFood.food} onChange = {this.selectFood} className="browser-default">
      {foodData.map((food, i)=>{return <Dropdown value = {food.food}

                                                 key={food.food+i}/>})}
    </select>
    </Col>
    <Col className ='centered-children'>
      <label htmlFor="quantityF">{'Number of Servings: ('+this.state.selectedFood.servingDescr+'/serving)'}</label>
      <input type="number" id="quantity" name="quantity" min="1" max="100" value = {this.state.foodQuantity} onChange = {this.updateFoodQuantity}/>

    </Col>
  </Row>

  <Row>
    {'Carbon FootPrint: '+parseFloat(this.state.foodCost).toFixed(2)+' Kg'}
  </Row>
  <Row className = 'centered-children '>
    <Button onClick = {this.addFood}>Add</Button>
  </Row>
</>
)}};
export default NewFoodForm;
