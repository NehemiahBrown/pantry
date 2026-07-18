import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Bookmark } from "lucide-react";
import { ChefHat } from "lucide-react";
import { Plus } from "lucide-react";
import { X } from "lucide-react";


import MyRecipeCard from "../components/common/MyRecipeCard.jsx";
import RecipeDetailModal from "../components/common/RecipeDetailModal.jsx";
import CookModeModal from "../components/common/CookModeModal.jsx";
import SearchResults from "../components/common/SearchResults.jsx";


export default function MyRecipes() {
  const { createdRecipeArray, openCreateRecipeModal} = useOutletContext();
  const [inputValue, setInputValue] = useState("");
  const [inputResults, setInputResults] = useState([]);
  const [activeRecipe, setActiveRecipe] = useState({});
  const [showActiveRecipe, setShowActiveRecipe] = useState(false);
  const [showCookMode, setShowCookMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  function openCookMode() {
    setShowCookMode(true);
  }

  function closeCookMode() {
    setShowCookMode(false);
  }

  function openRecipeDetails(recipeId) {
    const selectedRecipe = createdRecipeArray.find(
      (recipe) => recipe.id === recipeId,
    );
    setActiveRecipe(selectedRecipe);
    setShowActiveRecipe(true);
  }

  function closeRecipeDetails() {
    setShowActiveRecipe(false);
  }

  function handleChange(value) {
    setInputValue(value);
    const matchingValues = createdRecipeArray.filter((recipe) => {
      return (
        value &&
        recipe &&
        recipe.recipeName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setInputResults(matchingValues);
  }

  function clearInput(){
    setInputValue("")
    setInputResults([])
  }

  return (
    <>
      <main>
        <section className="relative flex flex-col">
          <div className="flex flex-col pl-10 gap-6 xl:gap-8 justify-center mt-18">
            <div>
              <p className="heading-font text-sm sm:text-md md:text-xl text-[var(--accent)]">
                — YOUR KITCHEN
              </p>
              <h1 className="mt-2 heading-font text-4xl md:text-5xl xl:text-7xl">
                My Recipes
              </h1>
              <p className="mt-2 text-md md:text-lg xl:text-xl text-[var(--text-muted)]">
                Your recipes, kept together in your own collection.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-fit border rounded-full">
                <Bookmark size={28} className=" p-1.5 text-[var(--accent)]" />
              </div>
              <div className="flex gap-2 font-body">
                <p>
                  {createdRecipeArray.length}{" "}
                  {createdRecipeArray.length === 1
                    ? "Saved recipe"
                    : "Saved recipes"}
                </p>
                <p>|</p>
                <p>Collect and cook</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-center mt-8 gap-4 px-8">
            <form
              className="flex flex-1 flex-col items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative w-full mx-auto">
                <Search
                  size={24}
                  className="left-4 absolute top-1/2 -translate-y-1/2"
                />
                <input
                  type="text"
                  className="w-full pl-12 pr-12 border border-[var(--border)] bg-white rounded-lg py-4 mx-auto placeholder:text-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                  placeholder="Search saved recipes..."
                  value={inputValue}
                  onChange={(e) => handleChange(e.target.value)}
                />
               { inputValue && <button
            onClick={clearInput}
              type="button"
              className="hidden sm:block py-1 px-2 rounded-full cursor-pointer text-[var(--accent-soft)] bg-[var(--accent)] right-4 absolute top-1/2 -translate-y-1/2 hover:bg-[var(--secondary)] active:scale-90 active:[var(--secondary)] transition-all duration-200"
            >
              <X/>
            </button>}
              </div>
              {inputResults.length > 0 && (
                <SearchResults
                  inputResults={inputResults}
                />
              )}
            </form>
            <select
              defaultValue="all"
              name="mealType"
              id="mealType"
              className="filterMeals w-full md:w-48"
            >
              <option value="all">All Recipes</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snacks">Snacks</option>
            </select>
          </div>
        </section>
        <section className="w-full px-12 pt-12">
          {createdRecipeArray.length === 0 && (
            <div className="flex flex-col py-10 gap-6 justify-center items-center">
              <div className="bg-[var(--secondary)]/30 w-fit rounded-full p-4">
                <ChefHat className="text-[var(--secondary)]" size={100} />
              </div>
              <div>
                <p className="heading-font text-4xl text-center">
                  Your cookbook is waiting
                </p>
                <p className="mt-2 text-center max-w-[400px] text-[var(--text-muted)]">
                  Your signature dishes belong here. Save the recipes you've
                  perfected and keep them ready for every meal you make
                </p>
              </div>
              <div>
                <button
                  onClick={openCreateRecipeModal}
                  className="flex items-center text-xl gap-3 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-12 py-3 text-sm hover:brightness-90 cursor-pointer"
                >
                  <Plus size={20} /> Create Recipe
                </button>
              </div>
            </div>
          )}
        </section>
        <section className="py-8 px-2 grid grid-cols-[repeat(auto-fill,270px)] gap-8 justify-center">
          {createdRecipeArray.map((recipe) => {
            return (
              <MyRecipeCard
                key={recipe.id}
                recipe={recipe}
                openRecipeDetails={openRecipeDetails}
              />
            );
          })}
        </section>
      </main>
      {showActiveRecipe && (
        <RecipeDetailModal
          activeRecipe={activeRecipe}
          closeRecipeDetails={closeRecipeDetails}
          openCookMode={openCookMode}
        />
      )}
      {showCookMode && (
        <CookModeModal
          activeRecipe={activeRecipe}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          closeCookMode={closeCookMode}
        />
      )}
    </>
  );
}
