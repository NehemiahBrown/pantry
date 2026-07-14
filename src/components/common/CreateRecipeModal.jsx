import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Trash } from "lucide-react";
import { Plus } from "lucide-react";
import { Asterisk } from "lucide-react";

import Egg from "../../assets/images/myRecipeEgg.png";
import Sandwich from "../../assets/images/myRecipeSandwich.png";
import Spaghetti from "../../assets/images/myRecipeSpaghetti.png";
import Cake from "../../assets/images/myRecipeCake.png";
import Chips from "../../assets/images/myRecipeChips.png";

export default function CreateRecipeModal({
  closeCreateRecipeModal,
  addNewRecipe,
}) {
  const [emptyFieldError, setEmptyFieldError] = useState(false);

  function createNewRecipeObject(e) {
    e.preventDefault();
    const recipeName = e.target.recipeName.value;
    const recipeCategory = e.target.recipeCategory.value;
    const recipeSummary = e.target.recipeSummary.value;
    const prepTime = e.target.prepTime.value;
    const cookTime = e.target.cookTime.value;
    const servings = e.target.servings.value;
    const categoryValue = e.target.recipeCategory.value;

    const RecipeImageLookup = {
      breakfast: Egg,
      lunch: Sandwich,
      dinner: Spaghetti,
      dessert: Cake,
      snacks: Chips,
    };
    const newRecipe = {
      id: crypto.randomUUID(),
      recipeName: recipeName,
      recipeCategory: recipeCategory,
      recipeSummary: recipeSummary,
      prepTime: prepTime,
      cookTime: cookTime,
      servings: servings,
      image: RecipeImageLookup[categoryValue],
      ingredients,
      instructions,
    };
    if (
      recipeName.trim() === "" ||
      ingredients.some(
        (ingredient) => ingredient.ingredientName.trim() === "",
      ) ||
      instructions.some(
        (instruction) => instruction.instructionName.trim() === "",
      )
    ) {
      setEmptyFieldError(true);
      return;
    }

    setEmptyFieldError(false);
    addNewRecipe(newRecipe);
  }

  const [ingredients, setIngredients] = useState([
    {
      id: crypto.randomUUID(),
      ingredientName: "",
    },
  ]);
  const [instructions, setInstructions] = useState([
    {
      id: crypto.randomUUID(),
      instructionName: "",
    },
  ]);

  /* when modal first opens it focuses on recipeName input, 
   when adding ingredients/instructions the newest input gets focus */
  let recipeNameInputRef = useRef(null);
  let inputIngredient = useRef(null);
  let inputInstruction = useRef(null);
  let addIngredientRef = useRef(false);
  let addInstructionRef = useRef(false);

  useEffect(() => {
    recipeNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    inputIngredient.current && addIngredientRef.current === true
      ? inputIngredient.current.focus()
      : null;
    addIngredientRef.current === true
      ? (addIngredientRef.current = false)
      : null;
  }, [ingredients]);

  useEffect(() => {
    inputInstruction.current && addInstructionRef.current === true
      ? inputInstruction.current.focus()
      : null;
    addInstructionRef.current === true
      ? (addInstructionRef.current = false)
      : null;
  }, [instructions]);

  // C.R.U.D functions for ingredients/instructions

  function addIngredient() {
    addIngredientRef.current = true;
    setIngredients((current) => [
      ...current,
      { id: crypto.randomUUID(), ingredientName: "" },
    ]);
  }

  function addInstruction() {
    addInstructionRef.current = true;
    setInstructions((current) => [
      ...current,
      { id: crypto.randomUUID(), instructionName: "" },
    ]);
  }

  function updateIngredient(id, input) {
    setIngredients((current) =>
      current.map((ingredient) =>
        ingredient.id === id
          ? { ...ingredient, ingredientName: input }
          : ingredient,
      ),
    );
  }
  function updateInstruction(id, input) {
    setInstructions((current) =>
      current.map((instruction) =>
        instruction.id === id
          ? { ...instruction, instructionName: input }
          : instruction,
      ),
    );
  }

  function deleteIngredient(id) {
    setIngredients((current) =>
      current.filter((ingredient) => ingredient.id !== id),
    );
  }

  function deleteInstruction(id) {
    setInstructions((current) =>
      current.filter((instruction) => instruction.id !== id),
    );
  }

  return (
    <div className="overlay backdrop-blur-sm px-4 md:px-16 fixed flex flex-col pt-20 pb-8 items-center justify-center inset-0 bg-black/50">
      <div className="z-[100] w-full max-h-[86vh] max-w-[800px] overflow-hidden bg-[var(--surface-warm)] shadow-[var(--shadow-lg)] rounded-xl">
        <div>
          <div className="flex px-4 mt-3 justify-between">
            <h2 className="mt-6 text-3xl heading-font">Create Recipe</h2>
            <X
              size={36}
              className="mt-4 cursor-pointer hover:bg-[var(--border)] hover:scale-95 active:scale-105 rounded-full p-2 transition-all duration-200"
              onClick={closeCreateRecipeModal}
            />
          </div>
        </div>
        <hr className="mt-6 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
        <form
          onSubmit={createNewRecipeObject}
          className="py-8 overflow-y-auto  max-h-[calc(90vh-100px)]"
        >
          {emptyFieldError && (
            <p className="text-[var(--error)] px-4 mb-4">
              Please fill out the required fields.
            </p>
          )}
          <div className="px-4 md:px-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="recipeName"
                className="flex items-center heading-font text-lg"
              >
                Recipe Name{" "}
                <Asterisk size={17} className="text-[var(--error)]/80" />
              </label>
              <input
                ref={recipeNameInputRef}
                type="text"
                name="recipeName"
                id="recipeName"
                className="block w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="flex heading-font text-lg"
                htmlFor="recipeCategory"
              >
                Category
              </label>
              <select
                className="block w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)]"
                name="recipeCategory"
                id="recipeCategory"
                defaultValue={"breakfast"}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snacks">Snacks</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 heading-font text-lg">
              <label htmlFor="recpieSummary">Summary</label>
              <textarea
                name="recipieSummary"
                id="recipeSummary"
                maxLength="200"
                className="block w-full h-[112px] rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200 resize-none"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  className="heading-font text-lg block"
                  htmlFor="prepTime"
                >
                  Prep Time
                </label>
                <input
                  type="number"
                  id="prepTime"
                  name="prepTime"
                  className="w-[200px] md:w-full rounded-lg border border-[var(--border)] px-4 bg-white py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                  min="1"
                  step="1"
                />
              </div>
              <div className="flex-1">
                <label
                  className="heading-font text-lg block"
                  htmlFor="cookTime"
                >
                  Cook Time
                </label>
                <input
                  type="number"
                  id="cookTime"
                  name="cookTime"
                  className="w-[200px] md:w-full rounded-lg border border-[var(--border)] px-4 bg-white py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                  min="1"
                  step="1"
                />
              </div>
              <div className="flex-1">
                <label
                  className="heading-font text-lg block"
                  htmlFor="servings"
                >
                  Servings
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  className="w-[200px] md:w-full rounded-lg border border-[var(--border)] px-4 bg-white py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                  min="1"
                  step="1"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="ingredients"
                className="flex items-center heading-font text-lg"
              >
                Ingredients{" "}
                <Asterisk size={17} className="text-[var(--error)]/80" />
              </label>
              {ingredients.map((ingredient, index) => {
                return (
                  <div
                    key={ingredient.id}
                    className="mt-2 flex items-center gap-2"
                  >
                    <div className="flex items-center justify-center text-[var(--surface)] bg-[var(--secondary)] w-7 h-7 rounded-full">
                      {index + 1}
                    </div>
                    <input
                      ref={
                        ingredients.length - 1 === index
                          ? inputIngredient
                          : null
                      }
                      type="text"
                      value={ingredient.ingredientName}
                      className="flex-1 px-4 rounded-lg border border-[var(--border)] bg-white py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                      onChange={(e) =>
                        updateIngredient(ingredient.id, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => deleteIngredient(ingredient.id)}
                      className="border border-[var(--border)] rounded p-1.5 hover:scale-95 active:scale-105 cursor-pointer transition-all duration-200"
                    >
                      <Trash size={20} />
                    </button>
                  </div>
                );
              })}
              <button
                type="button"
                className="flex items-center justify-center gap-2 mt-4 mx-4 p-3 border border-dashed border-[var(--secondary)] rounded-sm cursor-pointer hover:bg-[var(--secondary)] hover:text-[var(--surface)] transition-all duration-200"
                onClick={addIngredient}
              >
                <Plus size={20} /> Add Ingredient
              </button>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="instructions"
                className=" flex items-center Sheading-font"
              >
                Instructions{" "}
                <Asterisk size={17} className="text-[var(--error)]/80" />
              </label>
              {instructions.map((instruction, index) => {
                return (
                  <div
                    key={instruction.id}
                    className="mt-2 flex items-center gap-2"
                  >
                    <div className="flex items-center justify-center text-[var(--surface)] bg-[var(--secondary)] w-7 h-7 rounded-full">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      value={instruction.instructionName}
                      className="flex-1 px-4 rounded-lg border border-[var(--border)] bg-white py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                      ref={
                        instructions.length - 1 === index
                          ? inputInstruction
                          : null
                      }
                      onChange={(e) =>
                        updateInstruction(instruction.id, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => deleteInstruction(instruction.id)}
                      className="border border-[var(--border)] rounded p-1.5 hover:scale-95 active:scale-105 cursor-pointer transition-all duration-200"
                    >
                      <Trash size={20} />
                    </button>
                  </div>
                );
              })}
              <button
                type="button"
                className="flex items-center justify-center gap-2 mt-4 mx-4 p-3 border border-dashed border-[var(--secondary)] rounded-sm cursor-pointer hover:bg-[var(--secondary)] hover:text-[var(--surface)] transition-all duration-200"
                onClick={addInstruction}
              >
                <Plus size={20} /> Add Instructions
              </button>
            </div>
            <hr className="mt-6 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
          </div>
          <div className="flex justify-end gap-4 p-6">
            <button
              onClick={closeCreateRecipeModal}
              className="border border-[var(--border)] py-3 px-5 rounded-full hover:text-[var(--surface)] hover:bg-[var(--accent)] active:scale-95 cursor-pointer transition-all
              duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border text-[var(--surface)] bg-[var(--accent)] rounded-full px-2.5 py-2 text-sm hover:text-[var(--text-primary)] hover:bg-[var(--surface)] hover:border-[var(--border)] active:scale-95 cursor-pointer transition-all duration-200"
            >
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
