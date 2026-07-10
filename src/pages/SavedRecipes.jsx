import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";


import RecipeOptions from "../components/common/RecipeOptions.jsx"

export default function SavedRecipes() {
  const {savedRecipes, saveRecipe} = useOutletContext()
  return (
    <>
      <main>
        <section className="flex flex-col">
          <div className="flex flex-col gap-6 xl:gap-8 justify-center items-center mt-18">
            <p className="heading-font text-md sm:text-lg md:text-xl xl:text-2xl text-[var(--accent)]">
              YOUR COLLECTION
            </p>
            <div>
              <h1 className="text-center heading-font text-4xl md:text-5xl xl:text-7xl">
                Saved Recipes
              </h1>
              <p className="mt-2 text-center text-md md:text-lg xl:text-xl text-[var(--text-muted)]">
                Your favorite recipes all in one cozy place.
              </p>
            </div>
          </div>
          <form className="px-8">
            <div className="mt-8 relative w-full max-w-[1000px] mx-auto">
              <Search
                size={24}
                className="left-4 absolute top-1/2 -translate-y-1/2"
              />
              <input
                type="search"
                className="w-full pl-12 pr-12 border border-[var(--border)] bg-white rounded-lg py-4 mx-auto placeholder:text-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                placeholder="Search saved recipes..."
              />
              <button
                type="submit"
                className="hidden md:block py-2 px-4 rounded-full cursor-pointer text-[var(--accent-soft)] bg-[var(--accent)] right-4 absolute top-1/2 -translate-y-1/2"
              >
                Search
              </button>
            </div>
          </form>
        </section>
        <section className="px-12 py-12">
          <div className="flex gap-4">
          {savedRecipes.map((recipe) => {
            const isSaved = savedRecipes.some(currentRecipe => currentRecipe.id === recipe.id)
            return (
              <RecipeOptions
                key={recipe.id}
                key={recipe.id}
                id={recipe.id}
                recipeName={recipe.recipeName}
                recipeImage={recipe.recipeImage}
                mealTypeIcon={Heart}
                recipe={recipe}
                saveRecipe={saveRecipe}
                savedRecipes={savedRecipes}
                isSaved={true}
              />
            )
          })}
          </div>
        </section>
      </main>
    </>
  );
}
