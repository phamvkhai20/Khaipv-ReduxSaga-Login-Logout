import {combineReducers} from 'redux';
import LoginReducer from './AuthReducer';

const rootReducer = combineReducers({
  login:LoginReducer
})
export default rootReducer;