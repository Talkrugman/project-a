// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq2mLM1awQ3isiJnYtIkKIuxu2-uLnVSg",
  authDomain: "project-a-62a5f.firebaseapp.com",
  projectId: "project-a-62a5f",
  storageBucket: "project-a-62a5f.appspot.com",
  messagingSenderId: "877308824333",
  appId: "1:877308824333:web:ffa546f657735aaf26be44",
  measurementId: "G-SCEV7NWL8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);