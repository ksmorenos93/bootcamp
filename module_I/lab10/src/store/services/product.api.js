import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery(
    {
      baseUrl: "http://localhost:3000/api/v1/",
    }
  ),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: '/products',
        method: "POST",
        body,
      })
    })
  })
});

export const { useGetProductsQuery, useCreateProductMutation } = productApi;
