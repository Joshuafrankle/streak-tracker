import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import streakReducer from "./slices/streakSlice";
import userReducer from "./slices/userSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  streak: streakReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
