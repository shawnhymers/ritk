import {SUBMIT_FLIGHT} from '../actions/types/submits';
import {SUBMIT_FOOD} from '../actions/types/submits';
import {SUBMIT_DIET} from '../actions/types/submits';
import {SUBMIT_CAR} from '../actions/types/submits';
import {SUBMIT_BUS} from '../actions/types/submits';
import {SUBMIT_TRAIN} from '../actions/types/submits';
import {SUBMIT_HOTEL} from '../actions/types/submits';
import {RESET_SUBMIT, HIDE_MESSAGE} from '../actions/types/submits';

const initialState = {
  flightList:[],
  foodList:[],
  dietList:[],
  carList:[],
  busList:[],
  trainList:[],
  hotelList:[],
  showOutcomeMessage:false

}

const submitReducer =( state= initialState, action)=>{
  console.log('submit reducer reached')
  console.log('starting state:')
  console.log(state)
  switch (action.type){
    case SUBMIT_FLIGHT:
      return{
        ...state,
        flightList:[...state.flightList,action.payload],
        showOutcomeMessage:true
      }
      break

    case SUBMIT_FOOD:
      return{
        ...state,
        foodList:[...state.foodList,action.payload],
        showOutcomeMessage:true
      };
      break

    case SUBMIT_DIET:
    console.log('adding diet form data to store')
      return{
        ...state,
        dietList:[...state.dietList,action.payload],
        showOutcomeMessage:true
      };
      break

    case SUBMIT_CAR:
      return{
        ...state,
        carList:[...state.carList,action.payload],
        showOutcomeMessage:true
      };
      break

    case SUBMIT_BUS:
      return{
        ...state,
        busList:[...state.busList,action.payload],
        showOutcomeMessage:true
      };
      break

    case SUBMIT_TRAIN:
      return{
        ...state,
        trainList:[...state.trainList,action.payload],
        showOutcomeMessage:true
      };
      break

    case SUBMIT_HOTEL:
      return{
        ...state,
        hotelList:[...state.hotelList,action.payload],
        showOutcomeMessage:true
      };
      break

    case RESET_SUBMIT:
      return{
        ...state,
        flightList:[],
        foodList:[],
        dietList:[],
        carList:[],
        busList:[],
        trainList:[],
        hotelList:[],
        showOutcomeMessage:false
      };
      break

    case HIDE_MESSAGE:
      return{
        ...state,
        showOutcomeMessage:false
      };
      break

    default:
      return state;
  }
}

export default submitReducer;
