import {useEffect} from "react"

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
import webRecipeCard1 from "../assets/images/weblinkrecipe1.png";
import webRecipeCard2 from "../assets/images/weblinkrecipe2.png";

export default function Landing() {
    useEffect(() => {
      document.title = "Pantry"
    }, [])

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
          <NavLink to="/log-in" className="border border-[var(--surface-muted)] rounded-full py-1.5 px-2 hover:border-[var(--primary-light)] cursor-pointer transition-colors duration-150">
            Sign In
          </NavLink>
          <NavLink to="/sign-up" className="flex items-center gap-1 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-2.5 py-2 text-sm hover:brightness-90 cursor-pointer">
            Build Your Pantry <ChevronRight size={14} />
          </NavLink>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <section
          id="landing"
          className="flex flex-col px-8 xl:px-25 2xl:px-60 py-30 bg-[var(--background-soft)]"
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
                  Discover thousands of recipes, save links from anywhere on the
                  web, and build a personal cookbook that's entirely yours —
                  beautifully organised and always at hand.
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex items-center gap-1 text-nowrap text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-5 py-2.5 text-md font-medium hover:brightness-90 hover:shadow-[var(--shadow-md)] cursor-pointer transition-all duration-200">
                  <Plus size={16} /> Start for free
                </button>
                <a
                  href="#how-it-works"
                  className="border border-[var(--surface-muted)] bg-[var(--surface)] rounded-full px-5 py-3.5 text-nowrap text-md font-medium hover:border-[var(--primary-light)] hover:bg-[var(--background-soft)] cursor-pointer transition-colors duration-220"
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
            <p className="text-[var(--accent)]">SIMPLE BY DESIGN</p>
            <h2 className="mt-4 text-5xl heading-font max-w-lg">
              Everything you need,&nbsp;
              <span className="block font-extralight text-[var(--primary-light)] italic">
                nothing you don't.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-[var(--text-muted)]">
              Pantry strips away the clutter. Four things — done exceptionally
              well.
            </p>
          </div>
          <div className=" mt-16 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
            <div className="group px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">01</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--breakfast)]/30 flex items-center justify-center">
                <Search
                  size={24}
                  className="text-[var(--breakfast)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">Discover recipes</p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                  Browse thousands of curated recipes organised by Breakfast,
                  Lunch, Dinner, Dessert and Snacks. Search by ingredient or
                  cuisine.
                </p>
              </div>
            </div>
            <div className="group  px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">02</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--dessert)]/30 flex items-center justify-center">
                <Link
                  size={24}
                  className="text-[var(--dessert)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">Save links from the web</p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                  Found a recipe on Serious Eats or Half Baked Harvest? Save the
                  link with your own notes and category — all in one place.
                </p>
              </div>
            </div>
            <div className="group  px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">03</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--dinner)]/30 flex items-center justify-center">
                <PenLine
                  size={24}
                  className="text-[var(--dinner)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">Create your own recipes</p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                  Write recipes from scratch with ingredients, step-by-step
                  instructions, prep times, and personal notes. Your family
                  recipes, finally preserved.
                </p>
              </div>
            </div>
            <div className="group  px-6 py-8 bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <div className="gap-2 flex items-center">
                <p className="heading-font text-[var(--accent)]">04</p>
                <hr className="flex-1 text-[var(--accent-soft)]" />
              </div>
              <div className="mt-2 w-12 h-12 rounded-md bg-[var(--lunch)]/30 flex items-center justify-center">
                <Utensils
                  size={24}
                  className="text-[var(--lunch)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-4">
                <p className="heading-font text-xl">
                  Cook without distractions
                </p>
                <p className="mt-1 text-[var(--text-muted)] text-sm group-hover:text-[var(--primary)] transition-colors duration-200">
                  Hit Start Cooking and enter a focused, step-by-step mode. One
                  instruction at a time, large text, and no UI to get in the
                  way.
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
                Thousands of recipes,
                <span className="block">zero overwhelm</span>
              </h2>
              <p className="mt-4 max-w-lg text-[var(--text-muted)]">
                Browse by meal category, filter by what you're in the mood for,
                or search by ingredient. Every card shows you exactly what you
                need to decide: time, difficulty, and ingredients.
              </p>
              <ul className="flex flex-col gap-3 mt-8">
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--dinner)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--dinner)]" />
                  </span>
                  Organised by Breakfast, Lunch, Dinner, Dessert and Snacks
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--dinner)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--dinner)]" />
                  </span>
                  Filter by category or search across all recipes at once
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--dinner)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--dinner)]" />
                  </span>
                  Heart any recipe to save it to your personal Favourites
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <img
                className="w-80 xl:w-100 rounded-lg"
                src={chickenCard}
                alt=""
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
                Your phone stays clean. Your hands do too.
              </h2>
              <p className="mt-4 max-w-lg text-[var(--text-muted)]">
                Start Cooking enters a full-screen focused mode. One step at a
                time, in large, comfortable text. No nav, no distractions, no
                accidental taps. Just the recipe.
              </p>
              <ul className="flex flex-col gap-3 mt-8">
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--breakfast)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--breakfast)]" />
                  </span>
                  Step-by-step with clear Previous and Next navigation
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--breakfast)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--breakfast)]" />
                  </span>
                  Warm dark background — easy on the eyes in a bright kitchen
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--breakfast)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--breakfast)]" />
                  </span>
                  Progress dots let you see exactly where you are in the recipe
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-14 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <p className="text-[var(--accent)]">SAVED LINKS</p>
              <h2 className="mt-4 text-5xl heading-font max-w-lg">
                Stop losing recipes
                <span className="block">in browser tabs.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[var(--text-muted)]">
                Save any recipe link from the web with your own notes, category,
                and rating. Serious Eats. Smitten Kitchen. Your friend's blog.
                Everything lives in Pantry, organised and searchable.
              </p>
              <ul className="flex flex-col gap-3 mt-8">
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--lunch)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--lunch)]" />
                  </span>
                  Save the link URL, recipe name, category and your own notes
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--lunch)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--lunch)]" />
                  </span>
                  Visit the original recipe with one tap, from anywhere
                </li>
                <li>
                  <span className="inline-flex mr-4 justify-center items-center bg-[var(--lunch)]/30 w-6 h-6 rounded-full">
                    <Check size={14} className="text-[var(--lunch)]" />
                  </span>
                  Favourite, categorise and filter just like your own recipes
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 hidden lg:flex">
              <img
                className="w-80 xl:w-100 rounded-lg"
                src={webRecipeCard1}
                alt=""
              />
              <img
                className="w-80 xl:w-100 rounded-lg"
                src={webRecipeCard2}
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
              </p>
            </div>
            <div className=" flex-1 min-w-[300px] mt-4 px-6 py-8  bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <p className="text-[#FFD700] tracking-widest text-sm">★★★★★</p>
              <p className="mt-2 font-body">
                "The cook mode alone is worth it. My phone actually stays usable
                when I'm mid-recipe with floury hands. It's the little things
                that make it brilliant."
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
              </p>
            </div>
            <div className=" flex-1 min-w-[300px] mt-4 px-6 py-8  bg-[var(--surface)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <p className="text-[#FFD700] tracking-widest text-sm">★★★★★</p>
              <p className="mt-2 font-body">
                I finally digitised my grandmother's recipes. The Create Recipe
                form is a joy to fill out — it doesn't feel like a form at all.
                Incredibly thoughtful design.
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
              </p>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
