// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNtgEryZ9WNCJacIlqjiWglY9gAtFIzco",
  authDomain: "fir-auth-flim.firebaseapp.com",
  projectId: "fir-auth-flim",
  storageBucket: "fir-auth-flim.appspot.com",
  messagingSenderId: "1095464157497",
  appId: "1:1095464157497:web:aa4cad4228e78d4f3928e8",
  measurementId: "G-QX907V8FBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
