export default function RecipeDetailModal({activeRecipe, closeRecipeDetails}){

    return (
        <div className="backdrop-blur-sm px-4 md:px-16 fixed flex flex-col pt-20 pb-8 items-center justify-center inset-0 bg-black/50">
            <div className="w-full max-w-[500px]"  style={{ maxWidth: "600px" }}>
                <div className="h-[300px]">
                    <img className="block h-full w-full object-cover" src={activeRecipe.image} alt={activeRecipe.image} />
                </div>
                <div className="bg-[var(--surface)]">
                    <p>{activeRecipe.recipeName}</p>
                </div>
            </div>
        </div>
    )
}