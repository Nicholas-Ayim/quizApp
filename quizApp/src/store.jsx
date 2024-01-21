import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./services/quizSlice";
import quizApi from "./quizApi/quizApi";
//combining all our apis and persisting the store
import { combineReducers } from "@reduxjs/toolkit";

//persist our store to not refresh on reload
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducer = combineReducers({
  quiz: quizReducer,
  //add our endpoints here
  [quizApi.reducerPath]: quizApi.reducer
});

//configure our store and blacklist the intial api's endpoints
//adding features to our store
const persistConfig = {
  key: "root",
  storage,
  blackList: [quizApi.reducerPath]
};
//persist the store

const persistedReducer = persistReducer(persistConfig, reducer);

//creating our store to enable persistors

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }),
    quizApi.middleware
  ]
});

export default store;
