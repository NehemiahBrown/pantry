import OliveBranch from "../../assets/images/olivebranch.png"
import OnionBasket from "../../assets/images/onionsinbasket.png"
import Seaonings from "../../assets/images/seasoningsinspoons.png"
import CuttingBoard from "../../assets/images/cuttingboard.png"
import ChefHat from "../../assets/images/chefhat.png"



export default function LoadingScreen(){
    return (
        <div>
            <main className="relative flex justify-center items-center bg-[var(--background-soft)] h-screen w-screen overflow-hidden">
                <div className="absolute -top-30 sm:-top-20 -left-30 sm:-left-20 w-fit overflow-hidden">
                    <img className="rotate-180 w-80" src={OliveBranch} alt="An olive branch." />
                </div>
                <div className="absolute -bottom-10 left-0 w-fit overflow-hidden">
                    <img className="rotate-180 w-60" src={OnionBasket} alt="A basket of onions." />
                </div>
                <div className="absolute right-0 top-0 w-fit overflow-hidden">
                    <img className="w-90" src={Seaonings} alt="Three spoonfuls of seasonings." />
                </div>
                <div className="absolute -bottom-46 -right-45 rotate-130 w-fit overflow-hidden">
                    <img className="w-80 md:w-90" src={CuttingBoard} alt="A cutting board with wheat on top." />
                </div>
                <div className="flex flex-col gap-2 -mt-30 sm:mt-0 justify-center items-center">
                    <img className="w-80 md:w-120" src={ChefHat} alt="A chef's hat." />
                    <h1 className="heading-font text-6xl md:text-8xl">Pantry</h1>
                    <p className="font-bold text-[var(--text-primary)] md:text-2xl">Loading your kitchen...</p>
                    <div className="h-3 md:h-4 w-64 md:w-104 overflow-hidden rounded-full bg-[var(--accent)]/50">
                        <div className="loading-bar h-full w-1/3 rounded-full bg-[var(--accent)]"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}