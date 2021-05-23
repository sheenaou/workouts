import { createStore, applyMiddleware} from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./reducer";
import logger from 'redux-logger'

export const store = createStore(
    persistedReducer,
    applyMiddleware(logger)
)

export const persistor = persistStore(
  store,
  null,
  () => {console.log("restoredState", store.getState());}
);

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
