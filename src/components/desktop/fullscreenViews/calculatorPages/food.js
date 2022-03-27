import NewFoodForm from './forms/newFoodForm'
import { Container, Row, Col, Button} from 'react-bootstrap';
import FoodList from "./lists/foodList"
import {useState} from "react";
import Dropdown from '../../../standardComponents/dropdown';
import foodData from "../../../data/foodData"
import dietData from "../../../data/dietData"
import CarbonTotal from "./elements/carbonTotal"
import FormCheck from "react-bootstrap/FormCheck"

const Food= props =>{

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

      setType(false)
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
              <select value = {selectedFood.food}
                      onChange = {updateFoodType}
                      className="browser-default"
                      style ={{width:'25vw'}}>
                {foodData.map((food, i)=>{return <Dropdown value = {food.food}
                                                           displayValue ={food.food+' ('+food.servingDescr+')'}
                                                           key={food.food+i}/>})}
              </select>
            </Row>
            <Row className ='form-line nice-input-wrapper'>
              <input type="number"
                     id="foodQuantity"
                     name="foodQuantity"
                     min="1"
                     max="100"
                     value = {foodQuantity}
                     placeholder = 'Number of Servings'
                     onChange = {(e)=>updateFoodQuantity(e)}
                     style ={{width:'25vw'}}
                     className ={foodQuantityError? "error-input":""}/>
              <label htmlFor="foodQuantity"
                     className ={foodQuantityError? "error-label":""}>
              {'Number of Servings'}
              </label>
            </Row>
          </>
          :
          <>
            <Row className ='form-line'>
              <select value = {selectedDiet.food}
                      onChange = {(e)=>updateDietType(e)}
                      className="browser-default"
                      style ={{width:'25vw'}}>
                {dietData.map((diet, i)=>{return <Dropdown value = {diet.food}
                                                           displayValue ={diet.food+' ('+diet.servingDescr+')'}
                                                           key={diet.food+i}/>})}
              </select>
            </Row>

            <Row className ='form-line nice-input-wrapper'>

              <input type="number"
                     id="dietQuantity"
                     name="dietQuantity"
                     min="1"
                     max="100"
                     value = {dietQuantity}
                     placeholder ='Number of Days'
                     onChange = {(e)=>updateDietQuantity(e)}
                     style ={{width:'25vw'}}
                     className ={dietQuantityError? "error-input":""}/>
              <label htmlFor="dietQuantity"
                     className ={dietQuantityError? "error-label":""}>
                {'Number of Days'}
              </label>
            </Row>
          </>
          }

          <CarbonTotal footprint={parseFloat(carbonFootprint).toFixed(1)} label ={'Carbon Footprint (KG)'}/>

          <Row className ='form-submit-line'>
            <Button onClick = {addFood}>Add</Button>
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
export default Food;



// <Col className ='centered-children'>
//   <label htmlFor="quantity">{'Number of Servings: ('+selectedFood.servingDescr+'/serving)'}</label>
//   <input type="number" id="quantity" name="quantity" min="1" max="100" value = {foodQuantity} onChange = {updateFoodQuantity}/>
// </Col>
//
//
//
// <Row>
//   <Col xs sm md lg xl={6}>
//     <Container className = "w3-card main-white w3-round" style ={{minHeight:'85vh',maxHeight:'85vh'}}>
//       <NewFoodForm />
//     </Container>
//   </Col>
//   <Col xs sm md lg xl={6}>
//     <Container className = 'w3-card main-white w3-round' style ={{minHeight:'85vh',maxHeight:'85vh'}}>
//
//     <Row>
//       <Col>
//         Food
//       </Col>
//       <Col>
//         Amount
//       </Col>
//       <Col>
//         Footprint
//       </Col>
//     </Row>
//     {food.map((food, i)=>{
//             return <FoodList food={food}
//                              index = {i}
//                              key={food._id}/>
//                               })}
//     </Container>
//   </Col>
// </Row>




//
// <Row className ='vertical-padding-md'>
//   <Col>
//     &nbsp;
//   </Col>
//   <Col onClick ={()=>selectType('average')} className ='centered-children'>
//     <p className = {'centered-text medium-link-text '+(type ==='average'? 'roaming-text roaming-yellow-text':'roaming-text')} >Average Diets</p>
//   </Col>
//   <Col className ='centered-children'>
//     <p>|</p>
//   </Col>
//   <Col onClick ={()=>selectType('individual')} className ='centered-children'>
//     <p className = {'centered-text medium-link-text '+(type ==='individual'? 'roaming-text roaming-yellow-text':'roaming-text')} >Individual Food</p>
//   </Col>
//   <Col>
//     &nbsp;
//   </Col>
// </Row>

// <Row>
//   <Col className ='centered-children'>
//     <select value = {selectedDiet.food} onChange = {updateDietType} className="browser-default">
//       {dietData.map((diet, i)=>{return <Dropdown value = {diet.food}
//                                                  key={diet.food+i}/>})}
//     </select>
//   </Col>
//   <Col className ='centered-children'>
//     <label htmlFor="foodQuantity">{'Number of Days'}</label>
//     <input type="number" id="foodQuantity" name="foodQuantity" min="1" max="100" value = {foodQuantity} onChange = {(e)=>updateFoodQuantity(e)}/>
//   </Col>
// </Row>
//
//
//
//   <Row>
//     <Col className ='centered-children'>
//       <select value = {selectedFood.food} onChange = {updateFoodType} className="browser-default">
//         {foodData.map((food, i)=>{return <Dropdown value = {food.food}
//                                                    key={food.food+i}/>})}
//       </select>
//     </Col>
//     <Col className ='centered-children'>
//       <label htmlFor="quantity">{'Number of Servings'}</label>
//       <input type="number" id="foodQuantity" name="foodQuantity" min="1" max="100" value = {foodQuantity} onChange = {(e)=>updateFoodQuantity(e)}/>
//     </Col>
//   </Row>

// <CarbonTotal footprint={parseFloat(carbonFootprint).toFixed(1)}/>
//
// <Row className = 'centered-children vertical-padding-sm'>
//   <Button onClick = {addFood}>Add</Button>
// </Row>
//
//
