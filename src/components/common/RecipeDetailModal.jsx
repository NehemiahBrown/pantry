import { Clock } from "lucide-react";
import { CookingPot } from "lucide-react";
import { User } from "lucide-react";
import { PenLine } from "lucide-react";
import { Trash } from "lucide-react";
import { X } from "lucide-react";
import { ChefHat } from "lucide-react";

export default function RecipeDetailModal({
  activeRecipe,
  closeRecipeDetails,
  openCookMode,
}) {
  return (
    <div className="backdrop-blur-sm px-4 md:px-16 fixed flex flex-col pt-20 pb-8 items-center justify-center inset-0 bg-black/50">
      <div className="flex flex-col w-full bg-[var(--surface)] h-[85vh] rounded-md max-w-[800px]">
        <div className="relative h-[300px] shrink-0">
          <img
            className="block h-full w-full object-cover rounded-t-md"
            src={activeRecipe.image}
            alt={activeRecipe.image}
          />
          <X
            size={40}
            onClick={closeRecipeDetails}
            className="absolute top-2 right-4 cursor-pointer hover:bg-[var(--surface)] p-2 rounded-full transition-all duration-200"
          />
        </div>
        <div className="py-8 flex-1 min-h-0 overflow-y-auto">
          <div className="flex flex-col px-8 gap-4">
            <div className="flex flex-col">
              <p className="bg-[var(--secondary)]/30 text-[var(--secondary)] font-bold px-3 py-1 rounded-xl w-fit">
                {activeRecipe.recipeCategory.toUpperCase()}
              </p>
              <p className="mt-4 text-3xl heading-font text-[var(--text-primary)] ">
                {activeRecipe.recipeName}
              </p>
              <p className="mt-2 text-[var(--text-muted)] text-lg font-bold">
                {activeRecipe.recipeSummary}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex gap-1 items-center text-[var(--text-muted)] cursor-pointer hover:text[var(--text-primary)]">
                {" "}
                <PenLine size={15} /> Edit
              </button>
              <button className="flex gap-1 items-center text-[var(--text-muted)] cursor-pointer hover:text[var(--text-primary)]">
                {" "}
                <Trash size={18} /> Delete
              </button>
            </div>
          </div>
          <hr className="mb-6 mt-4 border-0 h-px mx-auto w-[90%] bg-[var(--divider)]" />
          <div className="flex justify-around py-6 md:p-6">
            <div className="flex flex-col items-center gap-1">
              <Clock className="text-[var(--accent)]" size={20} />
              <p className="font-bold"> {activeRecipe.prepTime} min</p>
              <p className="text-sm text-[var(--text-muted)]">PREP</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CookingPot className="text-[var(--accent)]" size={20} />
              <p className="font-bold">{activeRecipe.cookTime} min</p>
              <p className="text-sm text-[var(--text-muted)]">COOK</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <User className="text-[var(--accent)]" size={20} />
              <p className="font-bold">{activeRecipe.servings}</p>
              <p className="text-sm text-[var(--text-muted)]">SERVINGS</p>
            </div>
          </div>
          <hr className="mb-4 border-0 h-px mx-auto w-[90%] bg-[var(--divider)]" />
          <div className="px-8 grid grid-cols-[4fr_6fr]">
            <div className="">
              <p className="heading-font text-xl font-bold mb-2">INGREDIENTS</p>
              {activeRecipe.ingredients.map((ingredient, index) => {
                return (
                  <div key={ingredient.id} className="flex items-start gap-3">
                    <div className="flex items-center justify-center mt-0.5 bg-[var(--secondary)] text-[var(--surface)] w-5 h-5 shrink-0 rounded-full">
                      {index + 1}
                    </div>
                    <p>{ingredient.ingredientName}</p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <p className="heading-font text-xl mb-2 font-bold">
                INSTRUCTIONS
              </p>
              {activeRecipe.instructions.map((instruction, index) => {
                return (
                  <div key={instruction.id} className="flex gap-3 items-start">
                    <div className="flex items-center justify-center mt-0.5 bg-[var(--accent)] text-[var(--surface)] w-5 h-5 shrink-0 rounded-full">
                      {index + 1}
                    </div>
                    <p className="">{instruction.instructionName}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="my-8 border-0 h-px  bg-[var(--divider)]" />
          <div className="w-full px-8 ">
            <button
              onClick={openCookMode}
              className="flex w-full items-center justify-center gap-2 mt-4 mx-4 p-3 border bg-[var(--secondary)]  text-[var(--surface)] rounded-sm cursor-pointer hover:border-[var(--secondary)] hover:bg-[var(--surface)] hover:text-black transition-all duration-200"
            >
              {" "}
              <ChefHat size={20} /> Start Cook Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
