import { connectRouter } from 'lit-redux-router';

export * from './components/Pdp';
export * from './components/App';
export * from './components/Test';
export * from './components/Cart';

import { store } from './redux/store';

connectRouter(store);
