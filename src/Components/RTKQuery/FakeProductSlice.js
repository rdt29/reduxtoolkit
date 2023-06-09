import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeProductApi = createApi({
  reducerPath: "fakeProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});
console.log("fakeProductApi: ", fakeProductApi);

export const { useGetAllProductsQuery } = fakeProductApi;
