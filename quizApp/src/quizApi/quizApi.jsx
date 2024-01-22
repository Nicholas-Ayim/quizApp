import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://quiz-app-rouge-alpha.vercel.app"
  }),
  endpoints: (builder) => ({
    quizRegister: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data
      })
    })
  })
});

export const { useQuizRegisterMutation } = quizApi;
export default quizApi;
