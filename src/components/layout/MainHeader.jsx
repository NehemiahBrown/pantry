import { Plus } from "lucide-react";
import { Menu } from "lucide-react";
import { LogOut } from "lucide-react";
import { auth } from "../../services/firebase.jsx";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {useState, useContext} from "react"
import { AuthContext } from "../../App.jsx"

import HamburgerMenu from "../../components/common/HamburgerMenu.jsx"

export default function MainHeader({ openCreateRecipeModal }) {

  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { currentUser }  = useContext(AuthContext)

  function openMenu(){
    setMenuOpen(true)
  }

  function closeMenu(){
    setMenuOpen(false)
  }

      function signUserOut(){
      signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error.message)
    });
}
 const navLinkStyle =
    "p-2 rounded-full cursor-pointer text-[var(--primary)] hover:bg-[var(--surface)] transition-colors duration-150";
  const activeLink =
    "py-2 px-4 rounded-full cursor-pointer text-[var(--accent-soft)] bg-[var(--accent)]";

   



  return (
    <>
   
    <header className="sticky top-0 z-[50] flex p-4 bg-[var(--background-soft)] items-center justify-between">
      <div className="flex items-center gap-4">
      <Menu onClick={openMenu} className="hidden max-[790px]:flex cursor-pointer active:scale-90"/>
      
      <NavLink to="/app">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
          <p className="z-[2] heading-font text-[var(--text-primary)] text-2xl">
            Pantry
          </p>
        </div>
      </NavLink>
      </div>
      <nav className="hidden min-[790px]:flex">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? activeLink : navLinkStyle
              }
              to="/app"
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : navLinkStyle
              }
              to="/app/saved-recipes"
            >
              Saved Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : navLinkStyle
              }
              to="/app/my-recipes"
            >
              My Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={openCreateRecipeModal}
          className="z-[2] flex items-center gap-1 text-[var(--surface)] bg-[var(--accent)] rounded-full px-3 py-2 text-sm hover:brightness-90 cursor-pointer"
        >
          <Plus size={14} /> Create Recipe
        </button>
        <button onClick={signUserOut} className="hidden min-[480px]:flex bg-[var(--secondary)]/30 px-3 py-2 rounded-xl text-[var(--text-primary)] hover:brightness-80 cursor-pointer">
          Log Out
        </button>
      </div>
    </header>
    <HamburgerMenu 
    menuOpen={menuOpen}
    setMenuOpen={setMenuOpen}
    closeMenu={closeMenu}/>
    
    </>
  );
}
