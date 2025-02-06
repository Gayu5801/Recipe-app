import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../slices/recipeSlice";
import "../styles/style.css";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);

  return (
    <div className="container">
      <h2>Favorite Recipes</h2>
      <div className="grid-container">
        {favorites.length === 0 ? (
          <p>No favorite recipes yet.</p>
        ) : (
          favorites.map((recipe) => (
            <div key={recipe.label} className="card">
              <img src={recipe.image} alt={recipe.label} />
              <h3>{recipe.label}</h3>
              <button onClick={() => dispatch(removeFromFavorites(recipe))}>
                Remove from Favorites
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
