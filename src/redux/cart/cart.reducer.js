import {cartActionTypes} from "./cart.types";

const INITIAL_STATE = {
    hidden: true
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CARTE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default :
            return state
    }
}
