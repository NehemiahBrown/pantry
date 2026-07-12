import { X } from "lucide-react";


export default function CreateRecipeModal({closeCreateRecipeModal}){
    return (
        <div className="overlay backdrop-blur-sm px-4 md:px-16 fixed flex flex-col justify-center items-center inset-0 bg-black/50">
            <div className="w-full bg-[var(--surface-warm)] shadow-[var(--shadow-lg)] rounded-xl">
            <div>
                <div className="flex px-4 mt-4 justify-between items-center">
                    <h2 className="text-3xl heading-font">Create Recipe</h2>
                    <X className="cursor-pointer" onClick={closeCreateRecipeModal}/>
                </div> 
            </div>
            <hr className="mt-10 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
            <form className="py-8">
                <div className="px-2 md:px-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="recipeName" className="block">Recipe Name</label>
                        <input type="text" name="recipeName" id="recipeName" className="w-full rounded-lg border border-[var(--border)] bg-white px-8 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="block" htmlFor="recipeCategory">Category</label>
                        <select className="w-full rounded-lg border border-[var(--border)] bg-white px-8 py-3 text-[var(--text-primary)]" name="recipeCategory" id="recipeCategory">
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="dessert">Dessert</option>
                            <option value="snacks">Snacks</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="recpieSummary">Summary</label>
                        <textarea name="recipieSummary" id="recipeSummary"  maxlength="200" className="w-full h-[112px] rounded-lg border border-[var(--border)] bg-white px-8 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200 resize-none"></textarea>
                    </div>
                    <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block" htmlFor="prepTime">Prep Time</label>
                            <input type="number" id="prepTime" name="prepTime" className="w-[200px] md:w-full rounded-lg border border-[var(--border)] px-8 bg-white py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200" />
                        </div>
                        <div className="flex-1">
                            <label className="block" htmlFor="cookTime">Cook Time</label>
                            <input type="number" id="cookTime" name="cookTime" className="w-[200px] md:w-full rounded-lg border border-[var(--border)] px-8 bg-white py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200" />
                        </div>
                        <div className="flex-1">
                        <label className="block" htmlFor="servings">Servings</label>
                            <input type="number" id="servings" name="servings" className="w-[200px] md:w-full rounded-lg border border-[var(--border)] px-8 bg-white py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200" />
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}