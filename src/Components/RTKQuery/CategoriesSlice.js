import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categories",
  tagTypes: ["Categories"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7277/api/",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "Categories/view-categories",
      providesTags: ["Categories"],
    }),
    addNewCategorie: builder.mutation({
      query: (data) => {
        return {
          url: `Categories/add-categories?Name=${data}`,
          method: "POST",
          headers: {
            authorization:
              "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUmFqZGVlcCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiIiwiZXhwIjoxNjg2NjMyOTk0fQ.6C_YTtB5L5NmVz-C5gvZoi_Ii0RXCU-AWsu51UmQD02DF9QdELXBQJwr-le7q_xQLo5QkzhBM7Mhisb_Mq9N-A",
          },
        };
      },
      invalidatesTags: ["Categories"],
      // invalidatesTags: (result, error, arg) => [{ type: 'Categories', id: arg.id },console.log("arg" , arg)],
   
    }),
  }),
});

// //console.log("Categories: ", categories);
export const { useGetAllCategoriesQuery, useAddNewCategorieMutation } =
  categoriesApi;
