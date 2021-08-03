import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import RootReducer from "./root-reducer"

import {persistStore} from "redux-persist";

import createSagaMiddleware from "redux-saga"
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]


if (process.env.NODE_ENV === "development") {
    middleware.push(logger)
}

export const store = createStore(RootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga) //write this code after applyMiddleware()

export const persistor = persistStore(store)





