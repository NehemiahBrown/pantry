import { useState } from "react";
import { Heart } from "lucide-react";
import { ExternalLink } from "lucide-react";
import Toast from "./Toast";

export default function RecipeOptions({
  recipeImage,
  recipeName,
  mealTypeIcon,
  id,
  saveRecipe,
  savedRecipes,
  recipe,
  isSaved
}) {
  const [toastText, setToastText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [savedHeart, setSavedHeart] = useState(false);
  const MealTypeIcon = mealTypeIcon;


  async function viewRecipe(recipeId) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const sourceUrl = data.meals[0].strSource;
      const videoLink = data.meals[0].strYoutube;

      sourceUrl
        ? window.open(sourceUrl, "_blank")
        : videoLink
          ? window.open(videoLink, "_blank")
          : (setToastText("No recipe source available."), setShowToast(true));
      setTimeout(() => {
        setShowToast(false);
      }, 2900);
    } catch (error) {
      console.error("Fetch operation failed:", error);
    }
  }
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-[var(--shadow-lg)] w-[270px] h-[350px] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
        <div className="relative">
          <img
            className="w-full h-[200px] rounded-t-lg object-cover"
            src={recipeImage}
            alt={recipeName}
          />
          <button
            onClick={()=> saveRecipe(recipe)}
            className="absolute right-2 top-2 bg-[var(--surface)] rounded-full cursor-pointer"
          >
            <Heart
              size={35}
              className={`text-[var(--accent)] p-1.5 hover:scale-110 active:scale-95 ${isSaved ? "fill-[var(--accent)]" : "fill-none"} transition-all duration-200`}
            />
          </button>
        </div>
        <div className="flex flex-col flex-1 p-2 rounded-b-lg bg-[var(--background-soft)]">
          <p className="flex items-center gap-2 min-h-[60px] heading-font">
            <MealTypeIcon className="shrink-0 text-[var(--accent)]" size={20} />
            <span className="text-xl">{recipeName}</span>
          </p>
          <button
            onClick={() => viewRecipe(id)}
            className="mt-auto flex rounded-lg text-[var(--surface)] items-center gap-2 px-4 py-2 w-full bg-[var(--accent)] cursor-pointer hover:brightness-90"
          >
            View Recipe <ExternalLink size={20} />
          </button>
        </div>
      </div>
      {showToast && <Toast toastText={toastText} />}
    </>
  );
}
