import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";

export default function RootLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <MainHeader />

        <main className="flex-1 bg-[var(--background)]">
          <Outlet />
        </main>

        <MainFooter />
      </div>
    </>
  );
}
