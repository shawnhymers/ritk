import {CHANGE_VIEW, RESET_VIEW} from '../actions/types/navigation';

const initialState = {
  view: 'flights',
  stepCount:1,

}

const navigationReducer =( state= initialState, action)=>{
  console.log('navigation reducer reached')
  console.log('starting state:')
  console.log(state)
  switch (action.type){
    case CHANGE_VIEW:
      return{
        ...state,
        view:action.payload.view,
        stepCount:action.payload.stepCount
      };
      break

    case RESET_VIEW:
      return{
        ...state,
        view:'flights',
        stepCount:1
      };
      break

    default:
      return state;
  }
}

export default navigationReducer;
