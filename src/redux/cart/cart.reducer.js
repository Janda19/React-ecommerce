import {cartActionTypes} from "./cart.types";
import {addItemToCart, decreaseItemQuantity} from "./cart.utils";

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
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        case cartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems , action.payload)
            }
        case  cartActionTypes.CLEAR_CART:
            return {
                ...state ,
                cartItems: []
            }
        default :
            return state
    }
}
