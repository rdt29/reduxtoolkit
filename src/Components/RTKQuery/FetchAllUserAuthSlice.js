import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchAllUserApi = createApi({
  reducerPath: "fetchAllUser",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7277/api/Users/" }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "get-all-users",
          method: "GET",
          headers: {
            authorization:
              "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUmFqZGVlcCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiIiwiZXhwIjoxNjg2MzkxNTI2fQ.0vnkJ7eR4boGU-S3A8Sv-t3hCfwYP0Hy35mDnNIgJi_WFT6JExPQfYct2xm8-CQqo1veyC-R1rnAntrRX1ycHw",
          },
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery } = fetchAllUserApi;
