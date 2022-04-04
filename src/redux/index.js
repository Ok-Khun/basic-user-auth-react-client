import { combineReducers, createStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-reducer";

const rootReducer = combineReducers({
    auth : authReducer
})
const store = createStore(rootReducer);

export {store};