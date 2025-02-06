import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./slices/recipeSlice";

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables the middleware for non-serializable data
    }),
});

export default store;
