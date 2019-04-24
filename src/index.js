import { connectRouter } from 'lit-redux-router';

import './components/App';
import './components/Pdp';
import './styles.css';

import { store } from './redux/store';

connectRouter(store);
