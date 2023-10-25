import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './features/products/productsSlice';
import { apiSlice } from './api/apiSlice';
import categoriesSlice from './features/categories/categoriesSlice';
import authSlice from './features/auth/authSlice';

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        products: productsSlice,
        categories: categoriesSlice,
        auth: authSlice,
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})
export default store;