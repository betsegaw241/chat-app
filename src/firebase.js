// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAX6OyOaNAU0dQiA4V13Az7KewQ4md5FN4",
  authDomain: "chat-8b6f3.firebaseapp.com",
  projectId: "chat-8b6f3",
  storageBucket: "chat-8b6f3.appspot.com",
  messagingSenderId: "437736884614",
  appId: "1:437736884614:web:bdd1c9a9d9f47797590407",
  measurementId: "G-ZPQR3MHYQX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();