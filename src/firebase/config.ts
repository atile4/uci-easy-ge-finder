import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCP5D52ePQXqiQyCdbfZdnwSNJOhnQIttQ",
  authDomain: "uci-ge-finder.firebaseapp.com",
  projectId: "uci-ge-finder",
  storageBucket: "uci-ge-finder.firebasestorage.app",
  messagingSenderId: "161920298106",
  appId: "1:161920298106:web:4bc667669993c7a2721fc3",
  measurementId: "G-GGDC3QZNF1"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init firesetore
const db = getFirestore();

// init auth providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()


export { db, googleProvider, githubProvider, auth };