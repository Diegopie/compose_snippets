export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

// accepts product as an object
export const actionAddToCart = (product) => ({
  type: ADD_CART,
  payload: product
});

// accepts id as a number
export const actionRemoveFromCart = (id) => ({
  type: REMOVE_CART,
  payload: id,
});

export const actionToggleCart = () => ({
  type: TOGGLE_CART,
});
