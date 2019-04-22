import { handleActions } from 'redux-actions';
import { CHANGE_PRODUCT_TITLE } from './actions';

const defaultState = { title: 'title' };

const reducer = handleActions(
  {
    CHANGE_PRODUCT_TITLE: (
      state,
      { payload: { title } }
    ) => ({ ...state, title }),
  },
  defaultState,
);

export const getProductTitle = state => state.title;

export default reducer;
