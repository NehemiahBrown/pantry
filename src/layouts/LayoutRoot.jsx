import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";
import Toast from "../components/common/Toast.jsx";
import CreateRecipeModal from "../components/common/CreateRecipeModal.jsx";
import { collection, doc, addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import { db } from "../services/firebase.jsx";
import {AuthContext} from "../App.jsx"


export default function RootLayout() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [toastText, setToastText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showCreateRecipeModal, setShowCreateRecipeModal] = useState(false);
  const [createdRecipeArray, setCreatedRecipeArray] = useState([]);
  const [recipeToEditObject, setRecipeToEditObject] = useState(null);
  const { currentUser } = useContext(AuthContext)


  function openCreateRecipeModal() {
    setShowCreateRecipeModal(true);
  }
  function closeCreateRecipeModal() {
    setShowCreateRecipeModal(false);
    setRecipeToEditObject(null);
  }

  async function addNewRecipe(recipe) {
    try {
      const docRef = await addDoc(collection(db, "userRecipes"), recipe);
     
     
      const newRecipe = {
        id: docRef.id,
        ...recipe,
      };
      setCreatedRecipeArray((current) => [...current, newRecipe]);
    } catch (e) {
      console.error("Error adding recipe: ", e.message);
    }
  }

  async function deleteRecipe(recipeId) {
    try{
      const docRef = (doc(db, "userRecipes", recipeId));

      await deleteDoc(docRef)
   
       setCreatedRecipeArray((current) =>
         current.filter((recipe) => recipe.id !== recipeId),
       );
    } catch(error){
        console.log("Error removing document: ", error)
    }
 
  }

   function editRecipe(recipeId) {
    const recipeToEdit = createdRecipeArray.find(
      (recipe) => recipe.id === recipeId,
    );
    setRecipeToEditObject(recipeToEdit);
    setShowCreateRecipeModal(true);
  }

  function saveRecipe(recipe) {
    setSavedRecipes((currentRecipes) => {
      const alreadySaved = currentRecipes.some(
        (savedRecipe) => savedRecipe.id === recipe.id,
      );

      if (alreadySaved) {
        return currentRecipes.filter(
          (savedRecipe) => savedRecipe.id !== recipe.id,
        );
      }
      return [...currentRecipes, recipe];
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
        <MainHeader openCreateRecipeModal={openCreateRecipeModal} />

        <main className="flex-1 bg-[var(--background)]">
          <Outlet
            context={{
              saveRecipe,
              savedRecipes,
              viewRecipe,
              openCreateRecipeModal,
              createdRecipeArray,
              setCreatedRecipeArray,
              editRecipe,
              deleteRecipe
            }}
          />
          {showToast && <Toast toastText={toastText} />}
        </main>
        {showCreateRecipeModal && (
          <CreateRecipeModal
            closeCreateRecipeModal={closeCreateRecipeModal}
            addNewRecipe={addNewRecipe}
            recipeToEditObject={recipeToEditObject}
            editRecipe={editRecipe}
            createdRecipeArray={createdRecipeArray}
            setCreatedRecipeArray={setCreatedRecipeArray}
          />
        )}
        <MainFooter />
      </div>
    </>
  );
}
