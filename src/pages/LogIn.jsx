import { auth, provider } from "../services/firebase.jsx";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NavLink } from "react-router-dom";
import LogInImg from "../assets/images/loginimage.jpg";
import GoogleG from "../assets/images/google-g.png";

export default function LogIn() {
  const navigate = useNavigate();

  function signInUser(e) {
    e.preventDefault();
    const email = e.target.userEmail.value;
    const password = e.target.userPassword.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/app");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
    function signInWithGoogle(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      navigate("/app");
    }).catch((error) => {
      console.log(error.code)
      console.log(error.message)
    });}

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-50 flex p-4 items-center justify-between bg-[var(--background)] shadow-[var(--shadow-bottom)]">
        <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
          <p className="heading-font text-[var(--text-primary)] text-2xl">
            <span>Pantry</span>
          </p>
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink
            to="/sign-up"
            className="border border-[var(--surface-muted)] rounded-full py-1.5 px-2 hover:border-[var(--primary-light)] cursor-pointer transition-colors duration-150"
          >
            Sign Up
          </NavLink>
        </div>
      </header>
      <main className="flex-1 xs:py-16 bg-[var(--background-soft)]">
        <div className="flex items-start w-full gap-8 max-w-[1500px] mx-auto  justify-center xs:px-4">
          <form
            onSubmit={signInUser}
            className="flex gap-6 flex-col w-full max-w-lg bg-[var(--surface)] shadow-[var(--shadow-lg)] xs:rounded-xl py-8 px-6"
          >
            <div>
              <h1 className="mt-4 heading-font text-3xl text-center text-[var(--primary)]">
                Welcome back
              </h1>
              <p className="mt-2 body-font text-center text-sm text-[var(--primary-light)]">
                Log in to your Pantry account.
              </p>
            </div>
            <div>
              <button onClick={signInWithGoogle} type="button" className="flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--text-primary)] shadow-[var(--shadow-sm)] transition-colors duration-200 hover:bg-[var(--background-soft)] focus:outline-none cursor-pointer">
                <img className="w-6 h-6" aria-hidden="true" src={GoogleG} />
                Continue with Google
              </button>
            </div>
            <div className="my-4 flex items-center gap-2">
              <hr className="flex-1 border border-0 h-px bg-[var(--divider)] " />
              <p className="body-font text-center text-xs text-[var(--primary-light)]">
                or
              </p>
              <hr className="flex-1 border border-0 h-px bg-[var(--divider)]" />
            </div>
            <div className="flex flex-col">
              <label
                className="mt-4 mb-2 text-[var(--primary-light)]"
                htmlFor="userEmail"
              >
                Email
              </label>
              <input
                className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="chefcurry01@gmail.com"
              />

              <label
                className="mt-4 mb-2 text-[var(--primary-light)]"
                htmlFor="userPassword"
              >
                Password
              </label>
              <input
                className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200"
                type="password"
                id="userPassword"
                name="userPassword"
                placeholder="********"
              />
              <p className="mt-2 underline text-[var(--accent)]">
                Forgot your password?
              </p>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white shadow-[var(--shadow-sm)] transition-colors duration-200 hover:bg-[var(--background-soft)] hover:text-[var(--text-primary)] focus:outline-none cursor-pointer"
              >
                Log In
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <NavLink
                to="/sign-up"
                className="block sm:inline underline text-[var(--accent)]"
              >
                Sign up
              </NavLink>
            </p>
          </form>
          <div className="hidden flex-1 lg:flex w-full max-w-lg">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={LogInImg}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
