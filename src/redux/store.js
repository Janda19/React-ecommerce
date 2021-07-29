import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import RootReducer from "./root-reducer"

import {persistStore} from "redux-persist";

const middleware = []
if (process.env.NODE_ENV === "development") {
    middleware.push(logger)
}

export const store = createStore(RootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)





