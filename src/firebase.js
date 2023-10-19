// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAlQ4C-KiYroCSfyIhXzApq0ZS74nGLIY",
  authDomain: "user-list-abhi.firebaseapp.com",
  projectId: "user-list-abhi",
  storageBucket: "user-list-abhi.appspot.com",
  messagingSenderId: "83252256350",
  appId: "1:83252256350:web:7b7b97ec91561976b35ecf",
  measurementId: "G-EVYSFFQX5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
