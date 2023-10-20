import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './features/products/productsSlice';
import { apiSlice } from './api/apiSlice';

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        products: productsSlice,
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})
export default store;