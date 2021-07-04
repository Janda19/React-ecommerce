import {cartActionTypes} from "./cart.types";
import {addItemToCart , removeItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CARTE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload)
            }
        default :
            return state
    }
}
