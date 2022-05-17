import { createApi,  fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001'}),
    tagTypes: ['Coffee'],
    endpoints: builder => ({
        getCoffee: builder.query({
            query: (start = 0) => `/product?_start=${start}&_end=${start + 6}`
        })
    })
})

export const { useGetCoffeeQuery } = apiSlice;