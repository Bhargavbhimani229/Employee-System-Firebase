// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsd4XBxyXL6z0gXDJgq1San8CSU5QPXyc",
  authDomain: "employee-system-firestore.firebaseapp.com",
  projectId: "employee-system-firestore",
  storageBucket: "employee-system-firestore.firebasestorage.app",
  messagingSenderId: "129180367816",
  appId: "1:129180367816:web:969d68b863b8d502825efd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);