import { combineReducers } from 'redux';
import basketReducer from '../reducers/basketReducer';

const rootReducer = combineReducers({
  basket: basketReducer,
});

export default rootReducer;
