import { useEffect } from "react";
import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import users from "./slices/userSlice";
import productsReducer, { productsFetch } from "./slices/productSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import { productsApi } from "./productApi";



//1) declara un objeto para insertar los reducers, si no funciona quita combine  y deja solo user dentro de configure store
const reducer = combineReducers({
    users,
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  })
  

  const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, reducer)
   

  const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    
    getDefaultMiddleware(
      {serializableCheck: false}
    ).concat(productsApi.middleware),
  });

//obtiene los datos de los productos
store.dispatch(productsFetch());
//store.dispatch(getTotals());
let persistor = persistStore(store)

export  {store, persistor};
