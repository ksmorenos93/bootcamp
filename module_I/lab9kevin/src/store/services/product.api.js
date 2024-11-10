import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi ({
    reducerPath: "productApi", 
    baseQuery:fetchBaseQuery ({
        baseURL: "http://localhost3000/api/v1",
    }), 

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products"
        })
    })

});

export const {useGetProductsQuery} =productApi