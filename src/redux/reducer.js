import { handleActions } from 'redux-actions';
const defaultState = { products: [] };

const reducer = handleActions(
  {
    ADD_TO_CART: (
      state,
      { payload: product }
    ) => ({
      ...state,
      products: [
        ...state.products,
        product,
      ],
    }),
  },
  defaultState,
);

export const getCartProducts = state => state.cart.products;

export default reducer;
