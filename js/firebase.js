// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9F2EqhtDlCvySU20tWaFPEGhko9o08o",
  authDomain: "estrela-8ec68.firebaseapp.com",
  projectId: "estrela-8ec68",
  storageBucket: "estrela-8ec68.firebasestorage.app",
  messagingSenderId: "30096859270",
  appId: "1:30096859270:web:f022f49d751cf9d5a6b107",
  measurementId: "G-0L1TVW2HH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
