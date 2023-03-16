// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjycTkGBzoQfd3XId2vnKEysC0lqTFq7g",
  authDomain: "authentication-ef67d.firebaseapp.com",
  projectId: "authentication-ef67d",
  storageBucket: "authentication-ef67d.appspot.com",
  messagingSenderId: "298837930377",
  appId: "1:298837930377:web:f54e36de07d6abfae93158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;