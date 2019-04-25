import { createActions } from 'redux-actions';

export const ADD_TO_CART = 'ADD_TO_CART';

export const { addToCart } = createActions({
  ADD_TO_CART: product => product,
});
