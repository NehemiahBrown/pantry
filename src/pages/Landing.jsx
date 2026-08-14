import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import { Link } from "lucide-react";
import { PenLine } from "lucide-react";
import { Utensils } from "lucide-react";
import { Check } from "lucide-react";
import { Quote } from "lucide-react";


import personOne from "../assets/images/person1.jpg";
import personTwo from "../assets/images/person2.jpg";
import personThree from "../assets/images/person3.jpg";
import personFour from "../assets/images/person4.jpg";
import chefHat from "../assets/images/chefhat.png";

export default function Landing() {
  useEffect(() => {
    document.title = "Pantry";
  }, []);

  const navLinkStyle =
    "p-2 rounded-full cursor-pointer text-[var(--primary-text)] hover:bg-[var(--surface-muted)] transition-colors duration-150";
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex p-4 items-center justify-between bg-[var(--background-soft)] shadow-[var(--shadow-bottom)]">
        <div className="gap-2 cursor-pointer">
          <p className="heading-font text-[var(--text-primary)] text-2xl">
            <a href="#landing">Pantry</a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            to="/log-in"
            className="border border-[var(--surface-muted)] rounded-full py-1.5 px-2 hover:border-[var(--primary-light)] cursor-pointer transition-colors duration-150"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            className="hidden md:flex flex items-center gap-1 text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-2.5 py-2 text-sm hover:brightness-90 cursor-pointer"
          >
            Build Your Pantry <ChevronRight size={14} />
          </NavLink>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <section
          id="landing"
          className="flex flex-col justify-center h-dvh px-8 xl:px-25 2xl:px-40 bg-[var(--background-soft)]"
        >
          <div className="flex gap-10 items-center mx-auto max-w-4/5">
            <div className="max-w-150">
              <div>
                <h1 className="heading-font font-medium text-6xl">
                  Your personal recipe collection.
                </h1>
                <p className="mt-6 text-lg text-[var(--text-muted)]">
                Discover delicious recipes, save your favorites, and create recipes of your own—all organized into a personal cookbook that’s easy to explore and enjoy.                </p>
              </div>
              <div className="flex flex-col xs:flex-row gap-4 mt-10">
                <NavLink to="/sign-up" className="flex items-center w-[160px] gap-1 text-nowrap text-[var(--text-inverse)] bg-[var(--accent)] rounded-full px-5 py-2.5 text-sm md:text-md font-medium hover:brightness-90 hover:shadow-[var(--shadow-md)] cursor-pointer transition-all duration-200">
                  <Plus size={16} /> Start for free
                </NavLink>
              </div>
              <div className="flex gap-1 mt-12 items-center">
                <img
                  className="bg-[var(--surface)] w-9 h-9 rounded-full"
                  src={personOne}
                  alt="Smiling reviewer."
                />
                <img
                  className="bg-[var(--surface)] w-9 h-9 rounded-full"
                  src={personTwo}
                  alt="Smiling reviewer."
                />
                <img
                  className="bg-[var(--surface)] w-9 h-9 rounded-full"
                  src={personThree}
                  alt="Smiling reviewer."
                />
                <img
                  className="bg-[var(--surface)] w-9 h-9 rounded-full"
                  src={personFour}
                  alt="Smiling reviewer."
                />
                <p className="text-sm ml-2 text-[var(--text-muted)]">
                  Loved by
                  <span className="text-[var(--primary)] font-bold">
                    &nbsp;4,200+&nbsp;
                  </span>
                  home cooks and counting.
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                className="max-h-200 max-w-200"
                src={chefHat}
                alt="A design overview of Pantry."
              />
            </div>
          </div>
        </section>
        <section
          id="reviews"
          className="flex flex-col px-10 pb-8 bg-[var(--background-soft)]"
        >
          <div>
            <Quote size={100} className="-scale-x-100 opacity-35"/>
          </div>
          <div className="px-10 md:px-40 2xl:px-60">
          <div className="flex flex-col lg:flex-row gap-4 py-8">
            <div className=" flex-1 min-w-[280px] mt-4 px-6 py-8 bg-[var(--background)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <p className="text-[#FFD700] tracking-widest text-sm">★★★★★</p>
              <p className="mt-2 font-body hover:text-[var(--secondary-text)]">
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
            <div className=" flex-1 min-w-[280px] mt-4 px-6 py-8 bg-[var(--background)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
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
            <div className=" flex-1 min-w-[280px] mt-4 px-6 py-8 bg-[var(--background)] shadow[var(--shadow-md)] rounded-md shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
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
          </div>
          <div>
            <Quote size={100} className="ml-auto opacity-35"/>
          </div>
        </section>
      </main>
    </div>
  );
}
