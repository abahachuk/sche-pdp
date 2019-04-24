import { connectRouter } from 'lit-redux-router';

export * from './components/Product';
export * from './components/App';
export * from './components/test';

import { store } from './redux/store';

connectRouter(store);
