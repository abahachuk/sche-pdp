import { connectRouter } from 'lit-redux-router';

import './components/Product';
import './components/App';
import './styles.css';

import { store } from './redux/store';

connectRouter(store);
