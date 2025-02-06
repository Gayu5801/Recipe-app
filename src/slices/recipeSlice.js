import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define API URL for fetching recipes
const API_URL = "https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50";

// Async thunk for fetching recipes
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await axios.get(API_URL);
  return response.data.hits.map((hit) => hit.recipe);
});

// Recipe slice definition
const recipeSlice = createSlice({
  name: "recipes",
  initialState: { data: [], favorites: [], status: "idle", error: null },
  reducers: {
    addToFavorites: (state, action) => {
      // Check if the recipe is already in favorites
      if (!state.favorites.find((fav) => fav.label === action.payload.label)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      // Remove the recipe from favorites based on the label
      state.favorites = state.favorites.filter((fav) => fav.label !== action.payload.label);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = recipeSlice.actions;

export default recipeSlice.reducer;
