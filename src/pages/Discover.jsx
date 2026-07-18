import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { EggFried } from "lucide-react";
import { Fish } from "lucide-react";
import { LineSquiggle } from "lucide-react";
import { Drumstick } from "lucide-react";
import { CakeSlice } from "lucide-react";
import { X  } from "lucide-react";


import basil from "../assets/images/basil-leaf.jpg";
import spices from "../assets/images/spices.png";

import DiscoveryRecipeSection from "../components/common/DiscoveryRecipeSection.jsx";
import SearchResults from "../components/common/SearchResults.jsx";

export default function Discover() {
  const [vegetarianMeals, setVegetarianMeals] = useState([]);
  const [seafoodMeals, setSeafoodMeals] = useState([]);
  const [pastaMeals, setPastaMeals] = useState([]);
  const [chickenMeals, setChickenMeals] = useState([]);
  const [dessertMeals, setDessertMeals] = useState([]);
  const allRecipes = [
    ...vegetarianMeals,
    ...seafoodMeals,
    ...pastaMeals,
    ...chickenMeals,
    ...dessertMeals,
  ];

  const [input, setInput] = useState("");
  const [inputResults, setInputResults] = useState([]);

  const [vegetarianRecipesShown, setVegetarianRecipesShown] = useState(0);
  const [seafoodRecipesShown, setSeafoodRecipesShown] = useState(0);
  const [pastaRecipesShown, setPastaRecipesShown] = useState(0);
  const [chickenRecipesShown, setChickenRecipesShown] = useState(0);
  const [dessertRecipesShown, setDessertRecipesShown] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //ensuring on first render the correct number of recipes are shown
  const [shownRecipes, setShownRecipes] = useState(
    window.innerWidth <= 800
      ? 1
      : window.innerWidth <= 1200
        ? 2
        : window.innerWidth <= 1500
          ? 3
          : window.innerWidth <= 1900
            ? 4
            : 5,
  );

  const { savedRecipes, saveRecipe, viewRecipe } = useOutletContext();

  // Checking the window size to determine how many recipes should show
  useEffect(() => {
    if (windowWidth <= 800) {
      setShownRecipes(1);
    } else if (windowWidth <= 1200) {
      setShownRecipes(2);
    } else if (windowWidth <= 1600) {
      setShownRecipes(3);
    } else if (windowWidth <= 1900) {
      setShownRecipes(4);
    } else {
      setShownRecipes(5);
    }
  }, [windowWidth]);

  useEffect(() => {
    const checkWindowSize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  // getting different categories of meals from api to display
  async function getMeals(mealType, setMealType) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealType}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      const foodObject = result.meals.map((meal) => createFoodObject(meal));
      setMealType(foodObject);
    } catch (error) {
      console.error(error.message);
    }
  }

  //functions for arrows to allow users to view all recipes
  function nextRecipes(mealType, mealTypeShown, setMealTypeShown) {
    if (mealTypeShown < mealType.length - shownRecipes) {
      setMealTypeShown(mealTypeShown + shownRecipes);
    } else {
      return;
    }
  }

  function prevRecipes(mealTypeShown, setMealTypeShown) {
    if (mealTypeShown < shownRecipes) {
      return;
    } else {
      setMealTypeShown(mealTypeShown - shownRecipes);
    }
  }
  // calling my different meal categories functions
  useEffect(() => {
    getMeals("Vegetarian", setVegetarianMeals);
    getMeals("Seafood", setSeafoodMeals);
    getMeals("Pasta", setPastaMeals);
    getMeals("Chicken", setChickenMeals);
    getMeals("Dessert", setDessertMeals);
  }, []);

  //creating an easy food object to grab data from
  function createFoodObject(foodData) {
    return {
      id: foodData.idMeal,
      recipeName: foodData.strMeal,
      recipeImage: foodData.strMealThumb,
    };
  }

  function handleChange(value) {
    setInput(value);
    const matchingValues = allRecipes.filter((recipe) => {
      return (
        value &&
        recipe &&
        recipe.recipeName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setInputResults(matchingValues);
  }

  function clearInput(){
    setInput("")
    setInputResults([])
  }

  return (
    <main className="pb-12">
      <section className="relative flex flex-col gap-8 pb-8">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={basil}
            className="z-[1] absolute top-0 right-0 w-70 md:w-80 lg:w-96 xl:w-110 translate-x-30 -translate-y-33 opacity-80 -rotate-12"
          />
          <img
            src={spices}
            className="z-[1] absolute top-0 left-0 w-70 md:w-80 lg:w-96 xl:w-110 -translate-x-35 -translate-y-20 opacity-80 -rotate-12"
          />
        </div>
        <div className="relative flex flex-col gap-6 xl:gap-8 justify-center items-center mt-18">
          <p className="heading-font text-md sm:text-lg md:text-xl xl:text-2xl text-[var(--accent)]">
            DISCOVER · CREATE · COOK
          </p>
          <div>
            <h1 className="heading-font text-center text-4xl md:text-5xl xl:text-7xl">
              What are you cooking today?
            </h1>
            <p className="mt-2 text-center text-md md:text-lg xl:text-xl text-[var(--text-muted)]">
              Discover hundreds of delicious recipes.
            </p>
          </div>
        </div>
        <form
          className="px-8 flex flex-col items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mt-8 relative w-full max-w-[1000px] mx-auto">
            <Search
              size={24}
              className="left-4 absolute top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              className="w-full px-12 border border-[var(--border)] bg-white rounded-lg py-4 mx-auto placeholder:text-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] focus:shadow-[var(--shadow-sm)] transition-all duration-200"
              placeholder="Search recipes by name..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            {input && <button
            onClick={clearInput}
              type="button"
              className="hidden sm:block py-1 px-2 rounded-full cursor-pointer text-[var(--accent-soft)] bg-[var(--accent)] right-4 absolute top-1/2 -translate-y-1/2 hover:bg-[var(--secondary)] active:scale-90 active:[var(--secondary)] transition-all duration-200"
            >
              <X/>
            </button>}
          </div>
          {inputResults.length > 0 && (
            <SearchResults
              viewRecipe={viewRecipe}
              inputResults={inputResults}
            />
          )}
        </form>
      </section>
      {/* add a search results section here. Make a new search results component. 
           let the search button pull up the info */}
      <DiscoveryRecipeSection
        title="Pasta"
        meals={pastaMeals}
        mealTypeIcon={LineSquiggle}
        recipesShown={pastaRecipesShown}
        setRecipesShown={setPastaRecipesShown}
        shownRecipes={shownRecipes}
        nextRecipes={nextRecipes}
        prevRecipes={prevRecipes}
        savedRecipes={savedRecipes}
        saveRecipe={saveRecipe}
        viewRecipe={viewRecipe}
      />
      <DiscoveryRecipeSection
        title="Seafood"
        meals={seafoodMeals}
        mealTypeIcon={Fish}
        recipesShown={seafoodRecipesShown}
        setRecipesShown={setSeafoodRecipesShown}
        shownRecipes={shownRecipes}
        nextRecipes={nextRecipes}
        prevRecipes={prevRecipes}
        savedRecipes={savedRecipes}
        saveRecipe={saveRecipe}
        viewRecipe={viewRecipe}
      />
      <DiscoveryRecipeSection
        title="Chicken"
        meals={chickenMeals}
        mealTypeIcon={Drumstick}
        recipesShown={chickenRecipesShown}
        setRecipesShown={setChickenRecipesShown}
        shownRecipes={shownRecipes}
        nextRecipes={nextRecipes}
        prevRecipes={prevRecipes}
        savedRecipes={savedRecipes}
        saveRecipe={saveRecipe}
        viewRecipe={viewRecipe}
      />
      <DiscoveryRecipeSection
        title="Vegetarian"
        meals={vegetarianMeals}
        mealTypeIcon={EggFried}
        recipesShown={vegetarianRecipesShown}
        setRecipesShown={setVegetarianRecipesShown}
        shownRecipes={shownRecipes}
        nextRecipes={nextRecipes}
        prevRecipes={prevRecipes}
        savedRecipes={savedRecipes}
        saveRecipe={saveRecipe}
        viewRecipe={viewRecipe}
      />
      <DiscoveryRecipeSection
        title="Dessert"
        meals={dessertMeals}
        mealTypeIcon={CakeSlice}
        recipesShown={dessertRecipesShown}
        setRecipesShown={setDessertRecipesShown}
        shownRecipes={shownRecipes}
        nextRecipes={nextRecipes}
        prevRecipes={prevRecipes}
        savedRecipes={savedRecipes}
        saveRecipe={saveRecipe}
        viewRecipe={viewRecipe}
      />
    </main>
  );
}
