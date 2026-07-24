import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth,  GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDexu1RHKPzvqLJVQLmWUvuMKeSVJzL4tI",
  authDomain: "pantry-b3e69.firebaseapp.com",
  projectId: "pantry-b3e69",
  storageBucket: "pantry-b3e69.firebasestorage.app",
  messagingSenderId: "488374749210",
  appId: "1:488374749210:web:058213587c0a84a7e8e9a3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export const provider = new GoogleAuthProvider();