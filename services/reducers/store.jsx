import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "./carrinhoReducer";

const rootReducer = combineReducers({
	cart: carrinhoReducer,
	// Outros reducers podem ser adicionados aqui, se necessário
});

// Se você deseja continuar usando o Redux puro com middlewares como o redux-thunk
export const legacyStore = createStore(rootReducer, applyMiddleware(thunk));

// Se você preferir usar o configureStore do Redux Toolkit para uma configuração simplificada
const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	// Outras opções de configuração podem ser adicionadas aqui, se necessário
});

export default store;
