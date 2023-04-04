// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  getAuth
} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjvGpRmlLL75mp45vvX8jnrero2uKS-Ao",
  authDomain: "e-commerce-v1-fb3fb.firebaseapp.com",
  projectId: "e-commerce-v1-fb3fb",
  storageBucket: "e-commerce-v1-fb3fb.appspot.com",
  messagingSenderId: "849598999005",
  appId: "1:849598999005:web:b6887cd4f2d42252e02e34"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;