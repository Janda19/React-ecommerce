import {shopTypes} from "./shop.types";

const INIT_STATE = {collections: null}

export const shopReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case shopTypes.UPDATE_SHOP_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default :
            return state
    }
}
