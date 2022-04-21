
import {reducer} from './reducer.js';






import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  reducer,
  composeWithDevTools(
    // other store enhancers if any
  )
);

export {store}