// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-T24rrnyQkSo6gvMNMfrT-wgi-HKUpo",
  authDomain: "energy-92df6.firebaseapp.com",
  projectId: "energy-92df6",
  storageBucket: "energy-92df6.firebasestorage.app",
  messagingSenderId: "378011183117",
  appId: "1:378011183117:web:4a277f41d0974f3db04d44",
  measurementId: "G-0HHWNTZ4EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

const db = getFirestore(app);

export { db,auth, addDoc, collection };
