import { X } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";


export default function CookModeModal({
  activeRecipe,
  currentStep,
  setCurrentStep,
  closeCookMode,
}) {
  function nextStep(){
    if(currentStep === activeRecipe.instructions.length - 1){
      return
    }
    setCurrentStep((current) => current + 1)
  }

  function previousStep(){
    if(currentStep === 0){
      return
    }
    setCurrentStep((current) => current - 1)
  }
  return (
    <div className="overlay backdrop-blur-sm px-4 md:px-16 fixed flex flex-col pt-20 pb-8 items-center justify-center inset-0 bg-black/50">
      <div className="flex flex-col w-full bg-[var(--background-soft)] h-[85vh] rounded-md max-w-[800px]">
        <div className="flex justify-between px-8 py-4">
          <button
            onClick={closeCookMode}
            className="flex items-center gap-2 text-lg cursor-pointer"
          >
            <X size={18} />
            <p>Exit Cook Mode</p>
          </button>
          <p className="heading-font font-bold text-xl">
            {activeRecipe.recipeName}
          </p>
          <p className="text-[var(--accent)] text-lg font-bold">
            Step {currentStep + 1} of {activeRecipe.instructions.length}
          </p>
        </div>
        <div className="mx-auto h-2 w-[90%] bg-[#D8CEC2] rounded-full overflow-hidden">
          <div
            className="h-[100%] bg-[var(--accent)]"
            style={{
              width: `${((currentStep + 1) / activeRecipe.instructions.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-8">
          <p className="text-4xl heading-font text-[var(--accent)] font-bold">Step {currentStep + 1}</p>
          <p className="text-2xl px-8 text-center">{activeRecipe.instructions[currentStep].instructionName}</p>
        </div>
        <hr className="border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
          <div className="flex justify-between px-8 py-8">
            <button disabled={currentStep === 0} onClick={previousStep} className="flex items-center gap-1 border border-[var(--border)] rounded-2xl w-[120px] px-4 py-2 bg-[var(--surface)] disabled:bg-[var(--disabled)] disabled:text-[var(--disabled-text)] disabled:cursor-not-allowed disabled:opacity-60"> <ChevronLeft size={18}/> Previous</button>
            <button disabled={currentStep === activeRecipe.instructions.length - 1} onClick={nextStep} className="flex items-center justify-center gap-1 bg-[var(--accent)] rounded-2xl py-2 px-4 w-[120px] text-[var(--surface)] disabled:bg-[var(--disabled)] disabled:text-[var(--disabled-text)] disabled:cursor-not-allowed disabled:opacity-60">Next <ChevronRight size={18}/></button>
          </div>
      </div>
    </div>
  );
}
