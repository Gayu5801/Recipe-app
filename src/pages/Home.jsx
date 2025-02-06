import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../slices/recipeSlice";
import "../styles/style.css";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.recipes);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // Filtering recipes based on search query
  const filteredRecipes = data.filter((recipe) =>
    recipe.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2>All Recipes</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="grid-container">
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "failed" ? (
          <p>Error loading recipes.</p>
        ) : filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.label} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
