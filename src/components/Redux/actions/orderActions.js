export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER'

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});
export const deleteOrder = (id) => ({
  type: DELETE_ORDER,
  payload: id,
})