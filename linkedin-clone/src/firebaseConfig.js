// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMXhlib8dPZx9kkaOn6m8OmNqwjrb_tI8",
  authDomain: "linkedin-clone-24fab.firebaseapp.com",
  projectId: "linkedin-clone-24fab",
  storageBucket: "linkedin-clone-24fab.firebasestorage.app",
  messagingSenderId: "227747878162",
  appId: "1:227747878162:web:4f141c710bfd09110c8fcb",
  measurementId: "G-PWSZENB2GT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);