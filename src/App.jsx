import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import RootLayout from "./layouts/LayoutRoot";
import PublicLayout from "./layouts/PublicLayout";
import AuthRequired from "./layouts/AuthRequired";


import Landing from "./pages/Landing";
import Discover from "./pages/Discover";
import MyRecipes from "./pages/MyRecipes";
import SavedRecipes from "./pages/SavedRecipes";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase.jsx"

export const AuthContext = createContext(null)

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const userLoggedInStatus = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    });
    return userLoggedInStatus;
  }, [])
  
  return (
    <AuthContext.Provider value={{currentUser}}> 
    <BrowserRouter basename="/pantry">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path={"sign-up"} element={<SignUp />} />
          <Route path={"log-in"} element={<LogIn />} />
        </Route>
      <Route element={<AuthRequired/>}>
        <Route path="/app" element={<RootLayout />}>
          <Route index element={<Discover />} />
          <Route path="saved-recipes" element={<SavedRecipes />} />
          <Route path="my-recipes" element={<MyRecipes />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}
