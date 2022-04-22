import { ADDTOCART } from './actionType.js'
import { CURRENTITEM } from './actionType.js'
import { ADJUSTQTY} from './actionType.js'
import { REMOVECART} from './actionType.js'


const INITIAL_STATE = {
	products:[],
	cart:[],
	currentItem:null
}


export const cartReducer = (state=INITIAL_STATE, action) => {

	switch (action.type) {
    case ADDTOCART : 
	return {
		...state,
		cart:[...state.cart,action.payload],
	}
	case REMOVECART : 
	return {
     
	}
	case ADJUSTQTY : 
	return {

	}
	case CURRENTITEM : 
	return {

	}
	default: return state
	}
}