import {NavLink} from "react-router-dom"
import {X } from "lucide-react";


export default function HamburgerMenu({menuOpen, closeMenu, setMenuOpen}){
    return (
        <aside className={`flex fixed inset-y-0 left-0 z-[60] h-screen w-72 bg-[var(--background-soft)] transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <nav className="relative pt-12 w-full p-4">
            <p className="z-[2] heading-font text-[var(--text-primary)] text-2xl">
            Pantry
            </p>
            <hr className="my-2 border border-0 h-px bg-[var(--accent)] " />
        <X onClick={closeMenu} size={32} className="absolute top-3 right-6 cursor-pointer active:scale-90 rounded-full p-1 hover:bg-[var(--accent)] hover:text-[var(--surface)] trasition-all duration-200"/>
        <ul className="mt-6 flex flex-col gap-4">
          <li className="heading-font text-xl p-2 hover:bg-[var(--secondary)] hover:text-[var(--surface)] active:scale-95 trasition-all duration-200 cursor-pointer">
            <NavLink
              to="/app"
              onClick={closeMenu}
            >
              Discover
            </NavLink>
          </li>
          <li className="heading-font text-xl p-2 hover:bg-[var(--secondary)] hover:text-[var(--surface)] active:scale-95 trasition-all duration-200 cursor-pointer">
            <NavLink
              to="/app/saved-recipes"
              onClick={closeMenu}
            >
              Saved Recipes
            </NavLink>
          </li>
          <li className="heading-font text-xl p-2 hover:bg-[var(--secondary)] hover:text-[var(--surface)] active:scale-95 trasition-all duration-200 cursor-pointer">
            <NavLink
              to="/app/my-recipes"
              onClick={closeMenu}
            >
              My Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
        </aside>
    )
}