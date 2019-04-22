import {
	createStore,
	compose as origCompose,
	combineReducers,
} from 'redux';
import { lazyReducerEnhancer } from 'pwa-helpers';
import reducer from './reducer.js';

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

export const store = createStore(
	reducer,
	compose(lazyReducerEnhancer(combineReducers))
);
