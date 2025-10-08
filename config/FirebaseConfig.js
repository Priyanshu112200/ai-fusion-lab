// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-fusion-33914.firebaseapp.com",
  projectId: "ai-fusion-33914",
  storageBucket: "ai-fusion-33914.firebasestorage.app",
  messagingSenderId: "38496744581",
  appId: "1:38496744581:web:7bac47ef3cd632237c25ec",
  measurementId: "G-8XHY1FM82M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);