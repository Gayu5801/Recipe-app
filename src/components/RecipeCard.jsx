import React from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../slices/recipeSlice";

function RecipeCard({ recipe }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.label} />
      <h3>{recipe.label}</h3>
      <button onClick={() => dispatch(addToFavorites(recipe))}>
        Add to Favorites
      </button>
    </div>
  );
}

export default RecipeCard;
