import { useState } from "react"
import { Search } from "lucide-react";
import { EggFried } from "lucide-react";




export default function Discover() {

  async function getBreakfast(){
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
    }
getBreakfast()

  return(
    <main className="px-8">
      <section className="flex flex-col gap-8 py-8">
      <div className="flex flex-col gap-6 xl:gap-8 justify-center items-center mt-24">
        <p className="heading-font text-md sm:text-lg md:text-xl xl:text-2xl text-[var(--accent)]">DISCOVER · CREATE · COOK </p>
        <div>
          <h1 className="heading-font text-center text-3xl md:text-5xl xl:text-7xl">What are you cooking today?</h1>
          <p className="mt-2 text-center text-md md:text-lg xl:text-xl text-[var(--text-muted)]">Discover hundreds of delicious recipes.</p>
        </div>
      </div>
      <form>
        <div className="mt-8 relative w-full max-w-[1000px] mx-auto">
          <Search size={24} className="left-4 absolute top-1/2 -translate-y-1/2"/>
          <input type="search" className="w-full pl-12 pr-12 border border-[var(--border)] rounded-lg py-4 mx-auto placeholder:text-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] focus:shadow-[var(--shadow-sm)] transition-all duration-200" placeholder="Search recipes, ingredients, cuisines..."/>
          <button type="submit" className="hidden md:block py-2 px-4 rounded-full cursor-pointer text-[var(--accent-soft)] bg-[var(--accent)] right-4 absolute top-1/2 -translate-y-1/2">Search</button>
        </div>
      </form>
    </section>

    <div>
    <section>
      <div className="px-8 mt-16 flex items-center gap-4">
          <hr className="flex-1 border border-0 h-px bg-[var(--divider)] "/>
          <p className="flex gap-2 items-center body-font text-center text-xl text-[var(--primary-light)]"> <EggFried /> Breakfast</p>
          <hr className="flex-1 border border-0 h-px bg-[var(--divider)]"/>
      </div>
      <div>

      </div>
    </section>
    </div>

    </main>
  ) 
}
