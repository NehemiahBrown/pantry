import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import { Link } from "lucide-react";
import { PenLine } from "lucide-react";
import { Utensils } from "lucide-react";
import { Check } from "lucide-react";

import personOne from "../assets/images/person1.jpg";
import personTwo from "../assets/images/person2.jpg";
import personThree from "../assets/images/person3.jpg";
import personFour from "../assets/images/person4.jpg";
import pantryWebpage from "../assets/images/pantrywebpage.png";
import chickenCard from "../assets/images/chickencard.png";
import recipeCard from "../assets/images/recipecard.png";
import empanada from "../assets/images/empanada.png";

export default function Landing() {
  useEffect(() => {
    document.title = "Pantry";
  }, []);

  const navLinkStyle =
    "p-2 rounded-full cursor-pointer text-[var(--primary)] hover:bg-[var(--surface-muted)] transition-colors duration-150";
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 flex p-4 items-center justify-between bg-[var(--background)] shadow-[var(--shadow-bottom)]">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
          <p className="heading-font text-[var(--text-primary)] text-2xl">
            <a href="#landing">Pantry</a>
          </p>
        </div>
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
          <NavLink
            to="/log-in"
            className="border border-[var(--surface-muted)] rounded-full py-1.5 px-2 hover:border-[var(--primary-light)] cursor-pointer transition-colors duration-150"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            className="flex items-center gap-1 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-2.5 py-2 text-sm hover:brightness-90 cursor-pointer"
          >
            Build Your Pantry <ChevronRight size={14} />
          </NavLink>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <section
          id="landing"
          className="flex flex-colpx-8 xl:px-25 2xl:px-60 py-30 bg-[var(--background-soft)]"
        >
          <div className="flex gap-8 items-center mx-auto max-w-4/5">
            <div className="max-w-150">
              <div>
                <h1 className="heading-font font-medium text-6xl">
                  The cookbook that lives with&nbsp;
                  <span className="text-[var(--accent)] font-extralight body-font italic">
                    you.
                  </span>
                </h1>
                <p className="mt-6 text-lg text-[var(--text-muted)]">
                Discover delicious recipes, save your favorites, and create recipes of your own—all organized into a personal cookbook that’s easy to explore and enjoy.                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <NavLink to="/sign-up" className="flex items-center gap-1 text-nowrap text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-5 py-2.5 text-sm md:text-md font-medium hover:brightness-90 hover:shadow-[var(--shadow-md)] cursor-pointer transition-all duration-200">
                  <Plus size={16} /> Start for free
                </NavLink>
                <a
                  href="#how-it-works"
                  className="border border-[var(--surface-muted)] bg-[var(--surface)] rounded-full px-5 py-3.5 text-nowrap text-sm md:text-md font-medium hover:border-[var(--primary-light)] hover:bg-[var(--background-soft)] cursor-pointer transition-colors duration-220"
                >
                  See how it works
                </a>
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
                  Loved by
                  <span className="text-[var(--primary)] font-bold">
                    4,200+
                  </span>
                  home cooks and counting.
                </p>
              </div>
            </div>
            <div className="hero-image hidden lg:block">
              <img
                className="max-h-150 max-w-100"
                src={pantryWebpage}
                alt="A design overview of Pantry."
              />
            </div>
          </div>
        </section>
        <section
          className="px-10 md:px-40 2xl:px-80 py-24 bg-[var(--background)]"
          id="features"
        >
          <div className="flex flex-col">
            <p className="text-[var(--accent)]">BUILT FOR EVERYDAY COOKING</p>
            <h2 className="mt-4 text-5xl heading-font max-w-lg">
              Everything you need,&nbsp;
              <span className="block font-extralight text-[var(--primary-light)] italic">
              from discovery to dinner.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-[var(--text-muted)]">
            Pantry keeps finding, saving, creating, and cooking your favorite recipes simple. All in one organized place.
            </p>
          </div>
          <div className=" mt-16 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="group px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">01</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--secondary-dark)]/30 flex items-center justify-center">
                <Search
                  size={24}
                  className="text-[var(--secondary-dark)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">Discover recipes</p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                Explore recipes organized by category, from pasta and seafood dishes to delicious desserts. Search to find something that fits your cravings.
                </p>
              </div>
            </div>
            <div className="group  px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">02</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--accent-dark)]/30 flex items-center justify-center">
                <Link
                  size={24}
                  className="text-[var(--accent-dark)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">Save your favorites</p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                Found something you want to make later? Save it to your personal collection so it’s easy to find whenever you’re ready to cook.
                </p>
              </div>
            </div>
            <div className="group  px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">03</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--accent)]/30 flex items-center justify-center">
                <PenLine
                  size={24}
                  className="text-[var(--accent)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">Create your own recipes</p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                Add recipes of your own with ingredients, preparation details, and step-by-step instructions. Keep your personal favorites organized and ready to use.
                </p>
              </div>
            </div>
            <div className="group  px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">04</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--secondary)]/30 flex items-center justify-center">
                <Utensils
                  size={24}
                  className="text-[var(--secondary)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">
                Cook step by step
                </p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                Open Cook Mode for a focused, step-by-step view of your recipe. Move through each instruction and track your progress as you cook.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="px-10 md:px-40 2xl:px-80 py-24 bg-[var(--background-soft)]"
          id="how-it-works"
        >
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <p className="text-[var(--accent)]">DISCOVER</p>
              <h2 className="mt-4 text-5xl heading-font max-w-lg">
                Hundreds of recipes,
                <span className="block">zero overwhelm</span>
              </h2>
              <p className="mt-4 max-w-lg text-[var(--text-muted)]">
              Browse recipes by meal category, search for a specific dish, and save anything that catches your eye to your personal collection. Whether you’re planning dinner or looking for something new, Pantry makes finding your next recipe simple.
              </p>
              <ul className="flex flex-col gap-3 mt-8">
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--secondary-dark)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--secondary-dark)]" />
                  </span>
                  Browse a collection of recipes for new meal ideas
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--secondary-dark)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--secondary-dark)]" />
                  </span>
                  Open any recipe to view its ingredients and instructions
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--secondary-dark)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--secondary-dark)]" />
                  </span>
                  Heart any recipe to save it to your personal Favourites
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <img
                className="w-80 xl:w-100 rounded-lg"
                src={chickenCard}
                alt="A preview of a recipe card."
              />
            </div>
          </div>
          <hr className="my-14 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
          <div className="flex  items-center justify-between gap-8">
            <div className="hidden lg:block">
              <img className="w-100 h-90 rounded-lg" src={recipeCard} alt="" />
            </div>
            <div>
              <p className="text-[var(--accent)]">COOK MODE</p>
              <h2 className="mt-4 text-5xl heading-font max-w-lg">
              One step at a time, from start to finish
              </h2>
              <p className="mt-4 max-w-lg text-[var(--text-muted)]">
              Cook Mode gives you a focused view of each instruction with large, easy-to-read text. Move through the recipe at your own pace and track your progress along the way.
              </p>
              <ul className="flex flex-col gap-3 mt-8">
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--accent-dark)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--accent-dark)]" />
                  </span>
                  Follow one instruction at a time without extra clutter
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--accent-dark)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--accent-dark)]" />
                  </span>
                  Move between steps using Previous and Next buttons
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--accent-dark)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--accent-dark)]" />
                  </span>
                  Track your place with a progress bar and step counter
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-14 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <p className="text-[var(--accent)]">SAVED RECIPES</p>
              <h2 className="mt-4 text-5xl heading-font max-w-lg">
              Keep your favorites close
              </h2>
              <p className="mt-4 max-w-lg text-[var(--text-muted)]">
              Heart any recipe you discover to add it to your personal Saved Recipes collection. Everything you want to cook later stays together, making it easy to return whenever inspiration strikes.
              </p>
              <ul className="flex flex-col gap-3 mt-8">
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--secondary)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--secondary)]" />
                  </span>
                  Save recipes instantly by selecting the heart icon
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--secondary)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--secondary)]" />
                  </span>
                  Browse and search your saved collection in one place
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--secondary)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--secondary)]" />
                  </span>
                  Open any saved recipe to view its ingredients and instructio
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 hidden lg:flex">
              <img
                className="w-80 xl:w-100 rounded-lg"
                src={empanada}
                alt=""
              />
            </div>
          </div>
        </section>

        <section
          id="reviews"
          className="px-10 md:px-40 2xl:px-80 py-24 bg-[var(--background)]"
        >
          <div>
            <p className="text-[var(--accent)]">FROM OUR COOKS</p>
            <h2 className="mt-4 text-5xl heading-font">
              What people are saying.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 py-8">
            <div className=" flex-1 min-w-[300px] mt-4 px-6 py-8  bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <p className="text-[#FFD700] tracking-widest text-sm">★★★★★</p>
              <p className="mt-2 font-body">
                "I've tried every recipe app out there. Pantry is the first one
                that actually feels designed for someone who loves cooking, not
                just collecting recipes."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={personOne}
                  alt="Smiling reviewer."
                />
                <div className="font-body">
                  <p>Marcus P.</p>
                  <p>Weekend chef · London</p>
                </div>
              </div>
            </div>
            <div className=" flex-1 min-w-[300px] mt-4 px-6 py-8  bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <p className="text-[#FFD700] tracking-widest text-sm">★★★★★</p>
              <p className="mt-2 font-body">
              “Cook Mode alone is worth it. The large text and step-by-step navigation make recipes much easier to follow while I’m cooking. It’s the little things that make it brilliant.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={personTwo}
                  alt="Smiling reviewer."
                />
                <div className="font-body">
                  <p>Amara K.</p>
                  <p>Home cook · Chicago</p>
                </div>
              </div>
            </div>
            <div className=" flex-1 min-w-[300px] mt-4 px-6 py-8  bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <p className="text-[#FFD700] tracking-widest text-sm">★★★★★</p>
              <p className="mt-2 font-body">
                I finally digitised my grandmother's recipes. The Create Recipe
                form is a joy to fill out — it doesn't feel like a form at all.
                Incredibly thoughtful design.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={personThree}
                  alt="Smiling reviewer."
                />
                <div className="font-body">
                  <p>Darren L.</p>
                  <p>Food blogger · Austin</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
