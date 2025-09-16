// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDikGwhGedRSmpDxgwG1B6LS2lNHsK4im4",
  authDomain: "nexo-c0f7c.firebaseapp.com",
  projectId: "nexo-c0f7c",
  storageBucket: "nexo-c0f7c.firebasestorage.app",
  messagingSenderId: "236757507646",
  appId: "1:236757507646:web:2293343dd6b1138a453b6f",
  measurementId: "G-JZDSMXK36N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);