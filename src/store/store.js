import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import {rootSaga} from './root-saga.js';
import createSagaMiddleWare from "redux-saga";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) return next(action);

//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);
//   console.log("nextState: ", store.getState());
// };
const sagaMiddleWare = createSagaMiddleWare();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleWare,
].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);
