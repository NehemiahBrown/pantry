import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {} from "lucide-react";
import RootLayout from "./layouts/LayoutRoot";
import Landing from "./pages/Landing";
import Discover from "./pages/Discover";
import MyRecipes from "./pages/MyRecipes";
import SavedRecipes from "./pages/SavedRecipes";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path={"/"} element={<RootLayout />}>
          <Route path="discover" element={<Discover />}></Route>
          <Route path="my-recipes" element={<MyRecipes />}></Route>
          <Route path="saved-recipes" element={<SavedRecipes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
