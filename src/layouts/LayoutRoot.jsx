import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";

export default function RootLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="">
          <MainHeader />
        </header>

        <main className="flex-1 bg-[var(--background)]">
          <Outlet />
        </main>

        <footer className="">
          <MainFooter />
        </footer>
      </div>
    </>
  );
}
