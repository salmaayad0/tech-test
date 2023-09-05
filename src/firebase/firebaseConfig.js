// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC3GtFcXY1jnpqI9pII2I2QP9f89NFPiA",
  authDomain: "react-first-test-38724.firebaseapp.com",
  projectId: "react-first-test-38724",
  storageBucket: "react-first-test-38724.appspot.com",
  messagingSenderId: "484911372488",
  appId: "1:484911372488:web:e112a8bb938735791f2dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);