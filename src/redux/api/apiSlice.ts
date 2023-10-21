import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://webik.pythonanywhere.com/api/',
})
export const apiSlice = createApi({
    baseQuery:baseQuery,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products/'
        }),
        getCategories: builder.query({
            query: () => 'categories/'
        }),
        getSubCategories: builder.query({
            query: () => 'sub-categories/'
        }),
        getBaseCategories: builder.query({
            query: () => 'base-categories/'
        }),
    })
})

export const { useGetProductsQuery,useGetCategoriesQuery,useGetSubCategoriesQuery,useGetBaseCategoriesQuery } = apiSlice;