import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie, setCookie } from "cookies-next";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://webik.pythonanywhere.com/api/",
  prepareHeaders: (headers, { getState }: any) => {
    const token = getCookie("token");
    if (token) {
      setCookie("token", token);
      headers.set("Authorization", `Token ${token}`);
    }
    return headers;
  },
});
export const apiSlice: any = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products/",
    }),
    getCategories: builder.query({
      query: () => "categories/",
    }),
    getSubCategories: builder.query({
      query: () => "sub-categories/",
    }),
    getBaseCategories: builder.query({
      query: () => "base-categories/",
    }),
    initToken: builder.mutation({
      query: (credentials) => ({
        url: "auth/token/login",
        method: "POST",
        body: {
          username: credentials.username,
          password: credentials.password,
        },
      }),
    }),
    createToken: builder.mutation({
      query: (credentials) => ({
        url: "auth/users/",
        method: "POST",
        body: {
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetBaseCategoriesQuery,
  useInitTokenMutation,
  useCreateTokenMutation,
} = apiSlice;
