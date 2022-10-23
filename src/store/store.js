import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import authReducer from './reducers/auth'
import navigationReducer from './reducers/navigation'
import submitReducer from './reducers/submits'
const initialState = {};

const rootReducer = combineReducers({
  navigation:navigationReducer,
  submits:submitReducer,
  auth:authReducer

})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
