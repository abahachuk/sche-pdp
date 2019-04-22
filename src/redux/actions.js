import { createActions } from 'redux-actions';

export const CHANGE_PRODUCT_TITLE = 'CHANGE_PRODUCT_TITLE';

export const { changeProductTitle } = createActions({
	CHANGE_PRODUCT_TITLE: (title = '') => ({ title }),
});
