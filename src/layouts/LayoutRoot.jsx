import {useState} from "react"
import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";
import Toast from "../components/common/Toast.jsx"


export default function RootLayout() {

  const [savedRecipes, setSavedRecipes] = useState([])
  const [toastText, setToastText] = useState("");
  const [showToast, setShowToast] = useState(false);

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
      <div className="min-h-screen flex flex-col">
        <MainHeader />

        <main className="flex-1 bg-[var(--background)]">
          <Outlet context={{saveRecipe, savedRecipes, viewRecipe}}/>
          {showToast && <Toast toastText={toastText} />}
        </main>

        <MainFooter />
      </div>
    </>
  );
  } 
