import { combineReducers } from 'redux'
import { productDetails } from '../../types/productDetails'
const INITIAL_STATE = {
  product: [],
  details: {} as productDetails,
}

const commonReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        product: state.product.concat(action.payload),
      }
    case 'SET_DETAILS':
      return {
        ...state,
        details: action.payload,
      }
    default:
      return state
  }
}

export default commonReducer
