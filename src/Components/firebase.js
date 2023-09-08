// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2v3I7x4iZL2OcSn1-xibPqklE3Ci3A5o",
  authDomain: "netflix-clone-3b4e9.firebaseapp.com",
  projectId: "netflix-clone-3b4e9",
  storageBucket: "netflix-clone-3b4e9.appspot.com",
  messagingSenderId: "212480495521",
  appId: "1:212480495521:web:1ac892b5500828b67405e0",
  measurementId: "G-GJJHRFPFME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);