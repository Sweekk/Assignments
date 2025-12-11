// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "todo-manager-68c90.firebaseapp.com",
  projectId: "todo-manager-68c90",
  storageBucket: "todo-manager-68c90.firebasestorage.app",
  messagingSenderId: "105447084920",
  appId: "1:105447084920:web:f0e440dd19f8041762ee8d",
  measurementId: "G-5M8G78TW2J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize `auth` only in the browser to avoid server-side errors
let auth;
if (typeof window !== "undefined") {
  try {
    auth = getAuth(app);
  } catch (e) {
    // If initialization fails on the client, leave `auth` undefined and
    // let callers handle the error. We'll still attempt analytics below.
    auth = undefined;
  }
}

// Analytics is optional and only available in the browser — guard it.
let analytics;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // Analytics initialization can fail in some environments — ignore.
  }
}

export { analytics, auth };