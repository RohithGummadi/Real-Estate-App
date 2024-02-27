// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1883c.firebaseapp.com",
  projectId: "mern-estate-1883c",
  storageBucket: "mern-estate-1883c.appspot.com",
  messagingSenderId: "474954063684",
  appId: "1:474954063684:web:838782a051071e225d4111",
  measurementId: "G-FBR1PZ1DMM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);