import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Heart } from "lucide-react";


import RecipeOptions from "./RecipeOptions";

export default function DiscoverRecipeSection({
  title,
  mealTypeIcon,
  meals,
  recipesShown,
  setRecipesShown,
  nextRecipes,
  shownRecipes,
  prevRecipes,
  savedRecipes,
  saveRecipe,
  viewRecipe,
  showToast,
  toastText
}) {
  const MealTypeIcon = mealTypeIcon;
  return (
    <section>
      <div className="px-8 mt-16 flex items-center gap-4">
        <hr className="flex-1 border border-0 h-px bg-[var(--divider)] " />
        <p className="flex gap-2 items-center body-font text-center text-3xl text-[var(--primary-light)]">
          <MealTypeIcon className="text-[var(--accent)]" /> {title}
        </p>
        <hr className="flex-1 border border-0 h-px bg-[var(--divider)]" />
      </div>
      <div className="flex w-full mt-10 justify-center items-center gap-2 md:gap-4">
        <ArrowLeft
          className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:shadow-[var(--shadow-md)] transition-all duration-200 active:scale-95 cursor-pointer"
          onClick={() => prevRecipes(recipesShown, setRecipesShown)}
        />
        <div className="flex md:px-8 gap-10">
          {meals
            .slice(recipesShown, recipesShown + shownRecipes)
            .map((meal) => {
              const isSaved = savedRecipes.some(recipe => recipe.id === meal.id)
              return(
                  <RecipeOptions
                  key={meal.id}
                  id={meal.id}
                  recipeName={meal.recipeName}
                  recipeImage={meal.recipeImage}
                  mealTypeIcon={mealTypeIcon}
                  recipe={meal}
                  saveRecipe={saveRecipe}
                  savedRecipes={savedRecipes}
                  isSaved={isSaved}
                  viewRecipe={viewRecipe}
            />
            )}
            )}
        </div>
        <ArrowRight
          className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:shadow-[var(--shadow-md)] transition-all duration-200 active:scale-95 cursor-pointer"
          onClick={() => nextRecipes(meals, recipesShown, setRecipesShown)}
        />
      </div>
    </section>
  );
}
