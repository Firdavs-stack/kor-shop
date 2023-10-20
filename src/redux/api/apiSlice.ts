import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://webik.pythonanywhere.com/api/',
})
export const apiSlice = createApi({
    baseQuery:baseQuery,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products/'
        })
    })
})

export const { useGetProductsQuery } = apiSlice;