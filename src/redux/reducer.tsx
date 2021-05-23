import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {countdownReducer} from "./countdownReducer";


const reducer = combineReducers({
    form: countdownReducer
});

const config = {
    key: "form",
    debug: true,
    storage,
    whitelist: ['form'],
};

export const persistedReducer = persistReducer(config, reducer);
