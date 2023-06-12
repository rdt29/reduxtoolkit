import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const fakeProductAddApi = createApi({
  reducerPath: "fakeProductAddApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    addFakeProduct: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: {
          userId: data.userId,
          //   id : 0,
          title: data.title,
          body: data.body,
        },
      }),
    }),
  }),
});

export const { useAddFakeProductMutation } = fakeProductAddApi;
