
import {dataReducer} from './storeData/dataReducer.js';
import {cartReducer} from './Cart/cartReducer'
import { combineReducers } from "redux";
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    data : dataReducer,
	cart : cartReducer
})

const store = createStore(
 rootReducer,
  composeWithDevTools(
    // other store enhancers if any
  )
);

export {store}


// import {userReducer} from '../Redux/User/reducer'
// import {createStore, combineReducers} from 'redux'


// export const store = createStore(rootReducer)