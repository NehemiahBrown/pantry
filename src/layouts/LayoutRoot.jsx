import {useState} from "react"
import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";

export default function RootLayout() {

  const [savedRecipes, setSavedRecipes] = useState([])

  function saveRecipe(recipe) {
    setSavedRecipes((currentRecipes) => {
        const alreadySaved = currentRecipes.some(
          (savedRecipe) => savedRecipe.id === recipe.id
          );

        if(alreadySaved){
          return currentRecipes.filter(
            (savedRecipe) => savedRecipe.id !== recipe.id
            );
          }
        return [...currentRecipes, recipe]
        });
    }



  return (
    <>
      <div className="min-h-screen flex flex-col">
        <MainHeader />

        <main className="flex-1 bg-[var(--background)]">
          <Outlet context={{saveRecipe, savedRecipes}}/>
        </main>

        <MainFooter />
      </div>
    </>
  );
  } 
