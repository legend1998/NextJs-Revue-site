import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByseu9xYgJzhDX3qLrjnWcOGw_keL0qgg",
  authDomain: "revueapp-4eeed.firebaseapp.com",
  databaseURL:
    "https://revueapp-4eeed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "revueapp-4eeed",
  storageBucket: "revueapp-4eeed.appspot.com",
  messagingSenderId: "383429322359",
  appId: "1:383429322359:web:43b27e345b05c9c50c0872",
  measurementId: "G-WTB2G2DCF4",
};
// Initialize Firebase
var fb = initializeApp(firebaseConfig);

const auth = getAuth();
let firebasefb = getFirestore();
let fcm = getMessaging();
let storage = getStorage();

export { auth, firebasefb, storage, fcm, fb };
