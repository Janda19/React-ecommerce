import {shopTypes} from "./shop.types";

const INIT_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

export const shopReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case shopTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case shopTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case shopTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default :
            return state
    }
}
