import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7277/api/",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "Categories/view-categories",
    }),
  }),
});

// console.log("Categories: ", categories);
export const { useGetAllCategoriesQuery } = categoriesApi;
