// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVwwMgVvL7rVl4siEShSndNSjli9QV0CY",
  authDomain: "react-moha-milon-b604f.firebaseapp.com",
  projectId: "react-moha-milon-b604f",
  storageBucket: "react-moha-milon-b604f.firebasestorage.app",
  messagingSenderId: "75820115767",
  appId: "1:75820115767:web:7292c713b534419f395cb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

 export const auth = getAuth(app);
 
