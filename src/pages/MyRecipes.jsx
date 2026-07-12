import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react"
import { ChefHat } from "lucide-react"
import { Plus } from "lucide-react"



export default function MyRecipes() {
  const { savedRecipes, saveRecipe, viewRecipe } = useOutletContext();
  const [inputValue, setInputValue] = useState("")
  const [inputResults, setInputResults] = useState([])
  const [userRecipes, setUserRecipes] = useState([])

  return (
    <main>
    <section className="relative flex flex-col">
      <div className="absolute inset-0 pointer-events-none overflow-x-clip overflow-y-visible">
        <img
          src=""
          className="z-[5] absolute top-40 right-22 w-70 md:w-80 lg:w-96 xl:w-110 translate-x-30 -translate-y-33 opacity-80 -rotate-12"
        />
        <img
          src=""
          className="z-[5] rotate-20 absolute top-20 left-27 xl:left-70 w-70 md:w-80 lg:w-96 xl:w-110 -translate-x-35 -translate-y-20 opacity-80 -rotate-12"
        />
      </div>
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
        <Bookmark size={28} className=" p-1.5 text-[var(--accent)]"/>
        </div>
        <div className="flex gap-2 font-body font-bold text-[var(--text-muted)]">
          <p>{savedRecipes.length} {savedRecipes.length === 1 ? "Saved recipe" : "Saved recipes"}</p>
        </div>
      </div>
      </div>
      { userRecipes.length > 0 && <div className="flex flex-col md:flex-row md:items-center md:justify-center mt-8 gap-4 px-8">
      <form className="flex flex-1 flex-col items-center" onSubmit={(e) => e.preventDefaut()}>
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
        { inputResults.length > 0 && 
        <SearchResults 
        viewRecipe={viewRecipe}
        inputResults={inputResults}/>
       }
      </form>
        <select defaultValue="all" name="mealType" id="mealType" className="filterMeals">
          <option value="all" >All Recipes</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
          <option value="snacks">Snacks</option>
        </select>
      </div> }
    </section>
    <section className="w-full px-12 py-12">

       <div>

       </div>
      { userRecipes.length > 0 && <div className="mt-6 sm:mx-auto grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 justify-items-center lg:justify-items-stretch">
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
      </div>}
      {
        userRecipes.length === 0 && 
        <div className="flex flex-col py-10 gap-6 justify-center items-center">
          <div className="bg-[var(--lunch)]/30 w-fit rounded-full p-4">
          <ChefHat className="text-[var(--lunch)]" size={100}/>
          </div>
          <div>
            <p className="heading-font text-4xl text-center">Your cookbook is waiting</p>
            <p className="mt-2 text-center max-w-[400px] text-[var(--text-muted)]">Every great cookbook starts with one recipe. Add the dishes only you make — the ones your family already knows by heart.</p>
          </div>
          <div>
            <button className="flex items-center text-xl gap-3 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-12 py-3 text-sm hover:brightness-90 cursor-pointer">
          <Plus size={20} /> Create Recipe
        </button>
          </div>

        </div>
      }
    </section>
  </main>
  );
}
