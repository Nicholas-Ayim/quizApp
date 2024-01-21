import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/quiz"
  }),
  endpoints: (builder) => ({
    quizRegister: builder.mutations({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data
      })
    })
  })
});

export default quizApi;
