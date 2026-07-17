import { X } from "lucide-react";

export default function CookModeModal({
  activeRecipe,
  currentStep,
  setCurrentStep,
  closeCookMode,
}) {
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
      </div>
    </div>
  );
}
