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
	const data1 = state.cart.filter((el) => el.id !== action.payload.id)  
	console.log(data1)
	return {
		...state,
		cart:data1
     
	}
	case ADJUSTQTY : 
	

	return {
    ...state,
	cart:state.cart.map(item => item.id === action.payload.id ? {...item, qty:action.payload.qty} : item)
	}
	case CURRENTITEM : 
	
	return {
    ...state,
	currentItem:action.payload,
	}
	default: return state
	}
}