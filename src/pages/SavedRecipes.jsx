import { useOutletContext, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import { ChefHat } from "lucide-react";
import { Plus } from "lucide-react";

import Apple from "../assets/images/apple.svg";
import Wheat from "../assets/images/wheat.svg";

import RecipeOptions from "../components/common/RecipeOptions.jsx";
import SearchResults from "../components/common/SearchResults.jsx";

export default function SavedRecipes() {
  const { savedRecipes, saveRecipe, viewRecipe } = useOutletContext();
  const [inputValue, setInputValue] = useState("");
  const [inputResults, setInputResults] = useState([]);

  function handleChange(value) {
    setInputValue(value);
    const matchingValues = savedRecipes.filter((recipe) => {
      return (
        value &&
        recipe &&
        recipe.recipeName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setInputResults(matchingValues);
  }
  return (
    <>
      <main>
        <section className="relative flex flex-col">
          <div className="flex flex-col pl-10 gap-6 xl:gap-8 justify-center mt-18">
            <div>
              <p className="heading-font text-sm sm:text-md md:text-xl text-[var(--accent)]">
                — YOUR COLLECTION
              </p>
              <h1 className="mt-2 heading-font text-4xl md:text-5xl xl:text-7xl">
                Saved Recipes
              </h1>
              <p className="mt-2 text-md md:text-lg xl:text-xl text-[var(--text-muted)]">
                Your favorite recipes all in one cozy place.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-fit border rounded-full">
                <Bookmark size={28} className=" p-1.5 text-[var(--accent)]" />
              </div>
              <div className="flex gap-2 font-body">
                <p>
                  {savedRecipes.length}{" "}
                  {savedRecipes.length === 1 ? "Saved recipe" : "Saved recipes"}
                </p>
                <p>|</p>
                <p>
                  {savedRecipes.length === 1
                    ? "Keep saving, Keep cooking"
                    : "Start saving, Start cooking"}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 px-8 flex flex-col md:flex-row md:items-center md:justify-center gap-4">
            <form
              className="flex flex-1 flex-col items-center "
              onSubmit={(e) => e.preventDefaut()}
            >
              <div className="relative w-full mx-auto">
                <Search
                  size={24}
                  className="left-4 absolute top-1/2 -translate-y-1/2"
                />
                <input
                  type="search"
                  className="w-full pl-12 pr-12 border border-[var(--border)] bg-white rounded-lg py-4 mx-auto placeholder:text-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                  placeholder="Search saved recipes..."
                  value={inputValue}
                  onChange={(e) => handleChange(e.target.value)}
                />
                <button
                  type="submit"
                  className="hidden md:block py-2 px-4 rounded-full cursor-pointer text-[var(--accent-soft)] bg-[var(--accent)] right-4 absolute top-1/2 -translate-y-1/2"
                >
                  Search
                </button>
              </div>
              {inputResults.length > 0 && (
                <SearchResults
                  viewRecipe={viewRecipe}
                  inputResults={inputResults}
                />
              )}
            </form>
            <select
              name="mealType"
              id="mealType"
              className="filterMeals w-full md:w-48"
              defaultValue="all"
            >
              <option value="all">All Recipes</option>
              <option value="pasta">Pasta</option>
              <option value="seafood">Seafood</option>
              <option value="chicken">Chicken</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
        </section>
        <section className="w-full px-12 pt-12">
          {savedRecipes.length === 0 && (
            <div className="flex flex-col py-10 gap-6 justify-center items-center">
              <div className="bg-[var(--secondary)]/30 w-fit rounded-full p-4">
                <ChefHat className="text-[var(--secondary)]" size={100} />
              </div>
              <div>
                <p className="heading-font text-4xl text-center">
                  No saved recipes yet
                </p>
                <p className="mt-2 text-center max-w-[400px] text-[var(--text-muted)]">
                  Save the recipes you come back to again and again. Build your
                  own cookbook with meals that make your kitchen feel like home.
                </p>
              </div>
              <div>
                <NavLink
                  to="/app"
                  className="flex items-center gap-3 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-12 py-3 text-xl hover:brightness-90 cursor-pointer"
                >
                  <Plus size={20} /> Browse Recipes
                </NavLink>
              </div>
            </div>
          )}
        </section>
        <section className="w-full px-2 py-12">
          <div className="mt-6 sm:mx-auto grid grid grid-cols-[repeat(auto-fill,270px)] gap-8 justify-center">
            {savedRecipes.map((recipe) => {
              const isSaved = savedRecipes.some(
                (currentRecipe) => currentRecipe.id === recipe.id,
              );
              return (
                <RecipeOptions
                  key={recipe.id}
                  id={recipe.id}
                  recipeName={recipe.recipeName}
                  recipeImage={recipe.recipeImage}
                  mealTypeIcon={Heart}
                  recipe={recipe}
                  saveRecipe={saveRecipe}
                  savedRecipes={savedRecipes}
                  isSaved={true}
                  viewRecipe={viewRecipe}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
