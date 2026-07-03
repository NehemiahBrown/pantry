import {NavLink} from "react-router-dom"

export default function SignUp() {
    return (
        <>
        <header className="sticky top-0 z-50 flex p-4 items-center justify-between bg-[var(--background)] shadow-[var(--shadow-bottom)]">
        <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
          <p className="heading-font text-[var(--text-primary)] text-2xl">
            <p>Pantry</p>
          </p>
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink to="/sign-up" className="border border-[var(--surface-muted)] rounded-full py-1.5 px-2 hover:border-[var(--primary-light)] cursor-pointer transition-colors duration-150">
            Sign Up
          </NavLink>
        </div>
      </header>
      <main className="bg-[var(--background-soft)]">
      </main>
      </>
    )
}
