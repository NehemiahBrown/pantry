import { auth } from "../services/firebase.jsx"
import {useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";

import {NavLink} from "react-router-dom"
import GoogleG from "../assets/images/google-g.png"
import SignUpImg from "../assets/images/signupimg.jpg"


export default function SignUp() {
  const navigate = useNavigate()
  
  function createNewUser(e){
      e.preventDefault()
  
      const email = e.target.userEmail.value
      const password = e.target.userPassword.value
      const confirmPassword = e.target.confirmPassword.value

      if(password !== confirmPassword) {
        console.log("Passwords do not match")
        return
      }
  
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/app")
        
      })
      .catch((error) => {
      console.log(error.message)
      })
    };

    return(
        <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 flex p-4 items-center justify-between bg-[var(--background)] shadow-[var(--shadow-bottom)]">
        <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
          <p className="heading-font text-[var(--text-primary)] text-2xl">
            <span>Pantry</span>
          </p>
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink to="/log-in" className="border border-[var(--surface-muted)] rounded-full py-1.5 px-2 hover:border-[var(--primary-light)] cursor-pointer transition-colors duration-150">
            Log In
          </NavLink>
        </div>
      </header>
      <main className="flex flex-1 py-16 bg-[var(--background-soft)]">
        <div className="flex w-full gap-8 max-w-[1500px] mx-auto items-stretch justify-center px-12">
        <div className="hidden lg:flex flex-1 max-w-lg">
              <img className="h-full w-full rounded-2xl" src={SignUpImg} alt="" />
            </div>
            <form onSubmit={createNewUser} className="flex gap-6 flex-col w-full max-w-lg bg-[var(--surface)] shadow-[var(--shadow-lg)] rounded-2xl py-8 px-12">
                <div>
                    <h1 className="mt-4 heading-font text-3xl text-center text-[var(--primary)]">Create your account</h1>
                    <p className="mt-2 body-font text-center text-sm text-[var(--primary-light)]">Start stocking your pantry.</p>
                </div>
                <div>
                    <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--text-primary)] shadow-[var(--shadow-sm)] transition-colors duration-200 hover:bg-[var(--background-soft)] focus:outline-none cursor-pointer">
                        <img className="w-6 h-6" aria-hidden="true" src={GoogleG}/>Continue with Google
                    </button>
                </div>
                <div className="my-4 flex items-center gap-2">
                    <hr className="flex-1 border border-0 h-px bg-[var(--divider)] "/>
                    <p className="body-font text-center text-xs text-[var(--primary-light)]">or</p>
                    <hr className="flex-1 border border-0 h-px bg-[var(--divider)]"/>
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-[var(--primary-light)]" htmlFor="fullName">Full Name</label>
                    <input className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200" type="text" id="fullName" name="fullName" placeholder="Chef Curry"/>

                    <label className="mt-4 mb-2 text-[var(--primary-light)]" htmlFor="userEmail">Email</label>
                    <input className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200" type="email" id="userEmail" name="userEmail" placeholder="chefcurry01@gmail.com"/>

                    <label className="mt-4 mb-2 text-[var(--primary-light)]" htmlFor="userPassword">Password</label>
                    <input className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200" type="password" id="userPassword" name="userPassword" placeholder="********"/>
                    
                    <label className="mt-4 mb-2 text-[var(--primary-light)]" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[var(--shadow-sm)] transition-all duration-200" type="password" id="confirmPassword" name="confirmPassword" placeholder="********"/>
                </div>
                <div className="mt-6">
                    <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white shadow-[var(--shadow-sm)] transition-colors duration-200 hover:bg-[var(--background-soft)] hover:text-[var(--text-primary)] focus:outline-none cursor-pointer">Create Account</button>
                </div>
                <p className="text-center">Already have an account? <NavLink to="/log-in" className="underline text-[var(--accent)]">Log In</NavLink></p>
            </form>
        </div>
      </main>
      </div>
    )
}
