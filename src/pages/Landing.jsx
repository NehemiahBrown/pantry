import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import personOne from "../assets/images/person1.jpg";
import personTwo from "../assets/images/person2.jpg";
import personThree from "../assets/images/person3.jpg";
import personFour from "../assets/images/person4.jpg";
import pantryWebpage from "../assets/images/pantrywebpage.png";

export default function Landing() {
  const navLinkStyle =
    "p-2 rounded-full cursor-pointer text-[var(--primary)] hover:bg-[var(--surface-muted)] transition-colors duration-150";
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex p-4 items-center justify-between bg-[var(--background)]">
        <NavLink to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
            <p className="heading-font text-[var(--text-primary)] text-2xl">
              Pantry
            </p>
          </div>
        </NavLink>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#features" className={`${navLinkStyle}`}>
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className={`${navLinkStyle}`}>
                How it works
              </a>
            </li>
            <li>
              <a href="#reviews" className={`${navLinkStyle}`}>
                Reviews
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="border border-[var(--surface-muted)] rounded-full py-1.5 px-2 hover:border-[var(--primary-light)] cursor-pointer transition-colors duration-150">
            Sign In
          </div>
          <button className="flex items-center gap-1 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-2.5 py-2 text-sm hover:brightness-90 cursor-pointer">
            Build Your Pantry <ChevronRight size={14} />
          </button>
        </div>
      </header>
      <main className="flex-1 flex-col">
        <section className="flex flex-col px-8 py-48 bg-[var(--background-soft)]">
          <div className="flex gap-8 items-center mx-auto max-w-4/5">
            <div>
              <div>
                <h1 className="heading-font font-medium text-5xl">
                  The cookbook that lives with{" "}
                  <span className="text-[var(--accent)] font-extralight body-font italic">
                    you.
                  </span>
                </h1>
                <p className="mt-6 text-lg text-[var(--text-muted)]">
                  Discover thousands of recipes, save links from anywhere on the
                  web, and build a personal cookbook that's entirely yours —
                  beautifully organised and always at hand.
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex items-center gap-1 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-5 py-2.5 text-md font-medium hover:brightness-90 hover:shadow-[var(--shadow-md)] cursor-pointer transition-all duration-200">
                  <Plus size={16} /> Start for free
                </button>
                <button
                  href="#features"
                  className="border border-[var(--surface-muted)] bg-[var(--surface)] rounded-full px-5 py-3.5 text-md font-medium hover:border-[var(--primary-light)] hover:bg-[var(--background-soft)] cursor-pointer transition-colors duration-220"
                >
                  See how it works
                </button>
              </div>
              <div className="flex mt-12 items-center">
                <img
                  className="p-1 bg-[var(--surface)] w-10 h-10 rounded-full"
                  src={personOne}
                  alt="Smiling reviewer."
                />
                <img
                  className="p-1 bg-[var(--surface)] w-10 h-10 rounded-full"
                  src={personTwo}
                  alt="Smiling reviewer."
                />
                <img
                  className="p-1 bg-[var(--surface)] w-10 h-10 rounded-full"
                  src={personThree}
                  alt="Smiling reviewer."
                />
                <img
                  className="p-1 bg-[var(--surface)] w-10 h-10 rounded-full"
                  src={personFour}
                  alt="Smiling reviewer."
                />
                <p className="text-sm ml-2 text-[var(--text-muted)]">
                  Loved by{" "}
                  <span className="text-[var(--primary)] font-bold">
                    4,200+
                  </span>{" "}
                  home cooks and counting.
                </p>
              </div>
            </div>
            <div className="hero-image hidden lg:block">
              <img src={pantryWebpage} alt="" />
            </div>
          </div>
        </section>
        <section className="bg-[var(--background)]" id="features">
          <div className="px-8 py-24">
            <div className="flex flex-col gap-2">
              <p className="text-[var(--accent)]">SIMPLE BY DESIGN</p>
              <h2 className="text-4xl heading-font max-w-md">
                Everything you need,{" "}
                <span className="font-extralight text-[var(--primary-light)] italic">
                  nothing you don't.
                </span>
              </h2>
              <p className="max-w-lg">
                Pantry strips away the clutter. Four things — done exceptionally
                well.{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="how-it-works">
          <p>yesss</p>
        </section>
        <section id="reviews">
          <p>yesss</p>
        </section>
      </main>
      <footer className="">
        <p>I am foot</p>
      </footer>
    </div>
  );
}
