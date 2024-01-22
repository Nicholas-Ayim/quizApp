import { createSlice } from "@reduxjs/toolkit";
import quizApi from "../quizApi/quizApi";
const QuizSlice = createSlice({
  name: "quiz",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      quizApi.endpoints.quizRegister.matchFulfilled,
      (state, { payload }) => {
        return { ...state, registeredUser: payload };
      }
    );
  }
});
export const selectRegistered = (state) => state.quiz.registeredUser;
export default QuizSlice.reducer;
