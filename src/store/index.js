import { useEffect } from "react";
import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux'


import users from "./slices/users";
import productsReducer, { productsFetch } from "./slices/productsSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import { productsApi } from "./productApi";

//1) declara un objeto para insertar los reducers, si no funciona quita combine  y deja solo user dentro de configure store
const reducer = combineReducers({
    users,
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  })
  

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  });

  //obtiene los datos
store.dispatch(productsFetch());
store.dispatch(getTotals());

export default store;