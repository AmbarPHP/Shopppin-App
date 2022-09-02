// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACDKAfXgsZFrrNoXfXrMC-k_soRaZ5Njk",
  authDomain: "react-fb-auth-67ca4.firebaseapp.com",
  projectId: "react-fb-auth-67ca4",
  storageBucket: "react-fb-auth-67ca4.appspot.com",
  messagingSenderId: "610853060060",
  appId: "1:610853060060:web:06320cf413d1f40127a319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);