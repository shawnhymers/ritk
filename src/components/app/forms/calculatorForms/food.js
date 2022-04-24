// import NewFoodForm from './forms/newFoodForm'
import { Container, Row, Col, Button,Form} from 'react-bootstrap';
// import FoodList from "../lists/foodList"
import {useState} from "react";
import Dropdown from '../../../standardComponents/dropdown';
import foodData from "../../data/foodData"
import dietData from "../../data/dietData"
import CarbonTotal from "../../elements/carbonTotal"
import FormCheck from "react-bootstrap/FormCheck"
import HelpIcon from "../../../standardComponents/helpIcon"

const FoodForm = props =>{

  // const [type, setType] = useState('average');

  const [selectedDiet, setDietType] = useState({food:"Balanced Diet",
                                               ghg_ratio:'10.2',
                                               servingDescr:'One Average Day',
                                               serving:'1'})
  const [dietQuantity, setDietQuantity] = useState('');

  const [selectedFood, setFoodType] = useState({food: "Apples",
                                               ghg_ratio: "0.43",
                                               servingDescr:'One Apple',
                                               serving: "0.136078"})
  const [foodQuantity, setFoodQuantity] = useState('');

  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const [isAdvanced, setType]=useState(false)

  const [foodQuantityError,setFoodQuantityError]=useState(false)
  const [dietQuantityError,setDietQuantityError]=useState(false)

  function updateDietQuantity(e){
    setDietQuantity(e.target.value)
    let carbonFootprint =e.target.value*selectedDiet.ghg_ratio;
    setCarbonFootprint(carbonFootprint)
  }
  function updateDietType(e){
    let selectedDiet = dietData[dietData.findIndex(x=>x.food === e.target.value)];
    setDietType(selectedDiet)
    let carbonFootprint = selectedDiet.ghg_ratio*dietQuantity;
    setCarbonFootprint(carbonFootprint)
  }

  function updateFoodQuantity(e){
    setFoodQuantity(e.target.value)
    let carbonFootprint = e.target.value*selectedFood.ghg_ratio*selectedFood.serving;
    setCarbonFootprint(carbonFootprint)
  }
  function updateFoodType(e){
    let food = foodData[foodData.findIndex(x=>x.food === e.target.value)]
    setFoodType(food)
    let carbonFootprint = food.ghg_ratio*foodQuantity*food.serving;
    setCarbonFootprint(carbonFootprint)
  }

  function updateType(type){
    if (isAdvanced) {
      setType(false)
    }
    else {
      setType(true)
    }
    setFoodQuantity('')
    setDietQuantity('')
    setCarbonFootprint(0)
  }

  function addFood(){
    console.log('adding food')

    if (carbonFootprint>0) {
      if (isAdvanced) {
        let data ={ type:'food',
                    quantity:foodQuantity,
                    food: selectedDiet,
                    carbonFootprint: carbonFootprint
        }

        props.addCarbonCostItem(data)
      }
      else {
        let data ={ type:'food',
                    quantity:dietQuantity,
                    food:selectedFood,
                    carbonFootprint: carbonFootprint
        }

        props.addCarbonCostItem(data)
      }
      setFoodQuantity('')
      setDietQuantity('')
      setCarbonFootprint(0)
      setDietType({food:"Balanced Diet",
                   ghg_ratio:'8.25',
                   servingDescr:'One Average Day',
                   serving:'1'})
      setFoodType({food: "Apples",
                   ghg_ratio: "0.43",
                   servingDescr:'One Apple',
                   serving: "0.136078"});

      // setType(false)
      setFoodQuantityError(false)
      setDietQuantityError(false)
    }
    else {
      if (isAdvanced) {
        if (foodQuantity==='') {
          setFoodQuantityError(true)
        }
        else {
          setFoodQuantityError(false)
        }
      }
      else {
        if (dietQuantity==='') {
          setDietQuantityError(true)
        }
        else {
          setDietQuantityError(false)
        }
      }
    }
  }

  return(
    <>
    <Row className ='vertical-padding-sm'>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
      <Col>
        <Container className ='form-container white'>

          <Row className ='form-line'>
            <p className ='form-title'>Food</p>
          </Row>
          <Row className ='form-line'>
            <Col>
              &nbsp;
            </Col>
            <Col>
              &nbsp;
            </Col>
            <Col>
              <FormCheck
                onChange={(e)=>{updateType(e)}}
                type="switch"
                id="custom-switch-"
                label="Advanced"
                checked={isAdvanced}/>
            </Col>
          </Row>

          {isAdvanced?
          <>
            <Row className ='form-line'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                <Form.Select aria-label="Default select example"
                             value = {selectedFood.food}
                             onChange = {updateFoodType}
                             className="browser-default">
                             {foodData.map((food, i)=>{return <Dropdown value = {food.food}
                                                                        displayValue ={food.food+' ('+food.servingDescr+')'}
                                                                        key={food.food+i}/>})}
                </Form.Select>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ="Select your food. (More foods are on their way.)"/>
              </Col>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="number"
                         id="foodQuantity"
                         name="foodQuantity"
                         min="1"
                         max="100"
                         value = {foodQuantity}
                         placeholder = 'Number of Servings'
                         onChange = {(e)=>updateFoodQuantity(e)}
                         className ={foodQuantityError? "error-input":""}/>
                  <label htmlFor="foodQuantity"
                         className ={foodQuantityError? "error-label":""}>
                  {'Number of Servings'}
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ="Enter the number of servings. (Average serving size is shown above.)"/>
              </Col>
            </Row>
          </>
          :
          <>


            <Row className ='form-line'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <Row>
                <Form.Select aria-label="Default select example"
                             value = {selectedDiet.food}
                             onChange = {(e)=>updateDietType(e)}
                             className="browser-default">
                {dietData.map((diet, i)=>{return <Dropdown value = {diet.food}
                                                           displayValue ={diet.food+' ('+diet.servingDescr+')'}
                                                           key={diet.food+i}/>})}


                </Form.Select>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ="Select your diet type. If you're unsure what your diet type is, select Balance Diet for an approximation."/>
              </Col>
            </Row>


            <Row className ='form-line nice-input-wrapper'>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <input type="number"
                         id="dietQuantity"
                         name="dietQuantity"
                         min="1"
                         max="100"
                         value = {dietQuantity}
                         placeholder ='Number of Days'
                         onChange = {(e)=>updateDietQuantity(e)}
                         className ={dietQuantityError? "error-input":""}/>
                  <label htmlFor="dietQuantity"
                         className ={dietQuantityError? "error-label":""}>
                    {'Number of Days'}
                  </label>
                </Row>
              </Col>
              <Col>
                <HelpIcon message ="Enter the number of days you're planning on eating this diet."/>
              </Col>
            </Row>
          </>
          }

          <CarbonTotal footprint={carbonFootprint} label ={'Carbon Footprint (KG)'}/>

          <Row className ='form-submit-line'>
            <Button onClick = {addFood}  variant='custom'>Add</Button>
          </Row>

        </Container>
      </Col>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
    </Row>
    </>
  )
}
export default FoodForm;


//
//
// <Row className ='form-line'>
//   <Col xs={8} sm={8} md={8} lg={8} xl={8}>
//     <Row>
//       <select value = {selectedDiet.food}
//               onChange = {(e)=>updateDietType(e)}
//               className="browser-default">
//         {dietData.map((diet, i)=>{return <Dropdown value = {diet.food}
//                                                    displayValue ={diet.food+' ('+diet.servingDescr+')'}
//                                                    key={diet.food+i}/>})}
//       </select>
//     </Row>
//   </Col>
//   <Col>
//     <HelpIcon message =""/>
//   </Col>
// </Row>
