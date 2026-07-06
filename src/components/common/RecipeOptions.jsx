import { useState } from "react";
import { Heart } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function RecipeOptions({
  recipeImage,
  recipeName,
  mealTypeIcon,
}) {
  const [savedHeart, setSavedHeart] = useState(false);
  const MealTypeIcon = mealTypeIcon;
  function toggleSavedHeart() {
    setSavedHeart((current) => !current);
  }
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-[var(--shadow-lg)] w-[270px] h-[350px] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
        <div className="relative ">
          <img
            className="w-full h-[200px] rounded-t-lg object-cover"
            src={recipeImage}
            alt={recipeName}
          />
          <button
            onClick={toggleSavedHeart}
            className="absolute right-2 top-2 bg-[var(--surface)] rounded-full cursor-pointer"
          >
            <Heart
              size={35}
              className={`text-[var(--accent)] p-1.5 hover:scale-110 active:scale-95 ${savedHeart ? "fill-[var(--accent)]" : "fill-none"} transition-all duration-200`}
            />
          </button>
        </div>
        <div className="flex flex-col flex-1 p-2 rounded-b-lg bg-[var(--background-soft)]">
          <p className="flex items-center gap-2 min-h-[60px] heading-font">
            <MealTypeIcon className="shrink-0" size={20} />{" "}
            <span className="text-xl">{recipeName}</span>
          </p>
          <button className="mt-auto flex rounded-lg text-[var(--surface)] items-center gap-2 px-4 py-2 w-full bg-[var(--accent)] cursor-pointer hover:brightness-90">
            View Recipe <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
