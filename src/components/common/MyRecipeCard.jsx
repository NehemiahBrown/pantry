import { Clock } from "lucide-react";
import { CookingPot } from "lucide-react";
import { User } from "lucide-react";

export default function MyRecipeCard({ recipe, openRecipeDetails }) {
  return (
    <div onClick={() => openRecipeDetails(recipe.id)} className="flex flex-col text-[var(--text-primary)] rounded-lg shadow-[var(--shadow-lg)] w-[270px] h-[358px] hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer">
      <div>
        <img
          className="rounded-t-lg h-40"
          src={recipe.image}
          alt={recipe.recipeName}
        />
      </div>
      <div className="flex flex-col gap-2 px-4 mt-2 h-55 overflow-hidden">
        <div className="h-26">
        <p className="heading-font text-[24px] line-clamp-2">{recipe.recipeName}</p>
        </div>
        <div className="h-18">   
          <p className="max-w-[90%] text-[var(--text-muted)] line-clamp-2 ">
          {recipe.recipeSummary}
        </p>
        </div>
     
      </div>
      <hr className="mt-2 border-0 h-px mx-auto w-[80%] bg-[var(--divider)]" />
      <div className="flex justify-around items-center h-24 px-3">
        <div className="flex items-center gap-1">
          <Clock size={14} className="text-[var(--accent)]" />
          <p>{recipe.prepTime} mins</p>
        </div>
        <div className="flex items-center gap-1">
          <CookingPot size={14} className="text-[var(--accent)]" />
          <p>{recipe.cookTime} mins</p>
        </div>
        <div className="flex items-center gap-1">
          <User size={14} className="text-[var(--accent)]" />
          <p>{recipe.servings}</p>
        </div>
      </div>
    </div>
  );
}
