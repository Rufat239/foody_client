import { combineReducers } from 'redux';
import basketReducer from '../reducers/basketReducer';
import orderReducer from '../reducers/orderReducer';

const rootReducer = combineReducers({
  basket: basketReducer,
  order:orderReducer
});

export default rootReducer;
