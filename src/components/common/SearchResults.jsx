
export default function SearchResults( {inputResults, viewRecipe} ){
    return (
    <div className="flex flex-col w-full max-w-[1000px] bg-[var(--surface)] shadow-[var(--shadow-lg)] rounded-lg mt-2 p-4 font-body max-h-[350px] overflow-y-scroll">
        {inputResults.map((result) => {
            return <button key={result.id} onClick={() => viewRecipe(result.id)} className="p-2 text-left hover:bg-[var(--accent)] hover:text-[var(--surface)] active:bg-[var(--accent-soft)] active:text-[var(--primary-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer">{result.recipeName}</button>
        })
        }
    </div>
    )
}