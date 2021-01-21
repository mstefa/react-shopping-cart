import { bindActionCreators } from "redux"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../types"
const initialState = {cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] }

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TO_CART:
    return {cartItems: payload.cartItems};
  
  case REMOVE_FROM_CART:
    return {cartItems: payload.cartItems};
  
  default:
    return state
  }
};