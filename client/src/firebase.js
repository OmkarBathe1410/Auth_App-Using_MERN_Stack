// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-12806.firebaseapp.com",
  projectId: "auth-mern-12806",
  storageBucket: "auth-mern-12806.appspot.com",
  messagingSenderId: "322311084371",
  appId: "1:322311084371:web:3ff38d9d5335f7f8a769a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);