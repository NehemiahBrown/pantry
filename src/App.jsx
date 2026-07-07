import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {} from "lucide-react";
import RootLayout from "./layouts/LayoutRoot";
import PublicLayout from "./layouts/PublicLayout";

import Landing from "./pages/Landing";
import Discover from "./pages/Discover";
import MyRecipes from "./pages/MyRecipes";
import SavedRecipes from "./pages/SavedRecipes";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

export default function App() {
  return (
    <BrowserRouter basename="/pantry">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path={"sign-up"} element={<SignUp />} />
          <Route path={"log-in"} element={<LogIn />} />
        </Route>

        <Route path="/app" element={<RootLayout />}>
          <Route index element={<Discover />} />
          <Route path="my-recipes" element={<MyRecipes />} />
          <Route path="saved-recipes" element={<SavedRecipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
