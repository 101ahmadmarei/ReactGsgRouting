// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMIcyxsFVSd869UUXE-yZRzUPN8-EPdQ",
  authDomain: "reactquotess.firebaseapp.com",
  projectId: "reactquotess",
  storageBucket: "reactquotess.appspot.com",
  messagingSenderId: "947841223629",
  appId: "1:947841223629:web:bb3aa9f02bdfaa10391284",
  measurementId: "G-KQ0JRB0YE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };