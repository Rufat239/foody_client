import { ADD_ORDER } from '../actions/orderActions';
import { DELETE_ORDER } from '../actions/orderActions';
const initialState = {
  orders: [],
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
      
      case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter (order => order.id !== action.payload)
      }
      default:
      return state;
  } 
};
export default orderReducer;

