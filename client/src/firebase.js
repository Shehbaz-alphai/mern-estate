// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dd971.firebaseapp.com",
  projectId: "mern-estate-dd971",
  storageBucket: "mern-estate-dd971.appspot.com",
  messagingSenderId: "989469812222",
  appId: "1:989469812222:web:107a9eeba3b4641f1d0caf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);