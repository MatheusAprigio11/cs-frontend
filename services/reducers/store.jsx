import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "./carrinhoReducer";

export const Store = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore ({
	reducer:{
		cart: carrinhoReducer
	}
})