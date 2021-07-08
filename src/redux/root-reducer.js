import {combineReducers} from "redux";

import userReducer from "./user/user.reducer";
import {CartReducer} from "./cart/cart.reducer";
import {directoryReducer} from "./directory/directory.reducer";
import {shopReducer} from "./shop/shop.reducer";

import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";

const persistCofig = {
    key: "root",
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistCofig, rootReducer)

