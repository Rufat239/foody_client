export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product
});

export const increaseQuantity = (product) => ({
  type: INCREASE_QUANTITY,
  payload: product
});

export const removeFromBasket = (index, removeAll) => ({
  type: REMOVE_FROM_BASKET,
  payload: { index, removeAll }
});
