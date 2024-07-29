import { ADD_TO_BASKET, INCREASE_QUANTITY, REMOVE_FROM_BASKET } from '../actions/basketActions';

const initialState = {
  basketItems: [],
  totalPrice: 0
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const existingProduct = state.basketItems.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          basketItems: state.basketItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalPrice: state.totalPrice + action.payload.price
        };
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price
        };
      }

    case INCREASE_QUANTITY:
      const updatedBasketItems = state.basketItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        basketItems: updatedBasketItems,
        totalPrice: state.totalPrice + action.payload.price
      };

    case REMOVE_FROM_BASKET:
      const { index, removeAll } = action.payload;
      const product = state.basketItems[index];
      const newBasketItems = [...state.basketItems];

      if (removeAll || product.quantity === 1) {
        newBasketItems.splice(index, 1);
        return {
          ...state,
          basketItems: newBasketItems,
          totalPrice: Math.max(0, state.totalPrice - product.price * product.quantity)
        };
      } else {
        newBasketItems[index] = { ...product, quantity: product.quantity - 1 };
        return {
          ...state,
          basketItems: newBasketItems,
          totalPrice: Math.max(0, state.totalPrice - product.price)
        };
      }

    default:
      return state;
  }
};

export default basketReducer;
