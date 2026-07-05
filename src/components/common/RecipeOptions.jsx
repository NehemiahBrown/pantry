import { Heart } from "lucide-react";
import { EggFried } from "lucide-react";
import { Earth } from "lucide-react";
import { Wheat } from "lucide-react";
import { ExternalLink } from "lucide-react";






export default function RecipeOptions(){
    return(
        <>
        <div className="w-[200px]">
            <div className="relative">
                <img src={recipeImage} alt={recipeName} />
                <Heart className="absolute right-2 top-2"/>
                
            </div>
            <div className="bg-[var(--background)]">
                <p className="heading-font">{recipeName}</p>
                <div className="flex gap-4">
                    <p className="text-xs text-[var(--accent)]"> <EggFried/> {wordClass}</p>
                    <p><Earth/> {cusine}</p>
                </div>
                <hr className="flex-1 border border-0 h-px bg-[var(--divider)]"/>
                <div>
                    <p className="text-xs"> <Wheat/> {ingredientCount}</p>
                    <p>View Recipe <ExternalLink/> </p>
                </div>
                <div>
                    {tags}
                </div>

            </div>
        </div>
        </>
    )
}